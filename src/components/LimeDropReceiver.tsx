import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  limeDropDestination,
  openLimeDropDestination,
} from "@/lib/limeIntegration";

type Drop = {
  id: string;
  sender_id: string;
  recipient_id: string;
  post_id: string | null;
  post_url: string;
  post_text: string | null;
  post_author_display_name: string | null;
  post_author_username: string | null;
  sender?: {
    display_name: string | null;
    username: string | null;
    avatar_url: string | null;
  };
};

export function LimeDropReceiver({ userId }: { userId: string }) {
  const [drops, setDrops] = useState<Drop[]>([]);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const busyRef = useRef(false);
  const reloadRef = useRef<() => Promise<void>>(async () => {});
  const mounted = useRef(false);

  useEffect(() => {
    if (!supabase) return;
    const client = supabase;
    mounted.current = true;
    let alive = true,
      generation = 0;
    const load = async () => {
      const version = ++generation;
      try {
        const { data, error: readError } = await client
          .from("lime_drops")
          .select(
            "id,sender_id,recipient_id,post_id,post_url,post_text,post_author_display_name,post_author_username",
          )
          .eq("recipient_id", userId)
          .eq("status", "pending")
          .order("created_at", { ascending: false })
          .limit(5);
        if (readError) throw readError;
        const rows = data ?? [];
        const ids = [...new Set(rows.map((row) => row.sender_id))];
        const profiles = ids.length
          ? await client
              .from("profiles")
              .select("id,display_name,username,avatar_url")
              .in("id", ids)
          : { data: [], error: null };
        // Receiving a drop must not depend on sender profile availability.
        if (!alive || version !== generation) return;
        setDrops(
          rows.map((row) => ({
            ...row,
            sender: profiles.data?.find(
              (profile) => profile.id === row.sender_id,
            ),
          })),
        );
        setError("");
      } catch {
        if (alive && version === generation)
          setError("LimeDropを読み込めませんでした。");
      }
    };
    reloadRef.current = load;
    const channel = client
      .channel(`company-lime-drop-${userId}-${crypto.randomUUID()}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "lime_drops",
          filter: `recipient_id=eq.${userId}`,
        },
        () => {
          void load();
        },
      )
      .subscribe((status) => {
        if (status === "SUBSCRIBED") void load();
      });
    void load();
    const visible = () => {
      if (document.visibilityState === "visible") void load();
    };
    document.addEventListener("visibilitychange", visible);
    window.addEventListener("online", load);
    return () => {
      alive = false;
      mounted.current = false;
      generation++;
      reloadRef.current = async () => {};
      void client.removeChannel(channel);
      document.removeEventListener("visibilitychange", visible);
      window.removeEventListener("online", load);
    };
  }, [userId]);

  const active = drops[0];
  const respond = async (status: "accepted" | "declined") => {
    if (!supabase || !active || busyRef.current) return;
    const destination =
      status === "accepted" ? limeDropDestination(active) : null;
    if (status === "accepted" && !destination) {
      setError("この投稿のリンクは開けません。");
      return;
    }
    busyRef.current = true;
    setBusy(true);
    setError("");
    try {
      // Compare-and-set prevents a second open after the SNS tab has already
      // accepted or declined this drop. RLS still enforces recipient ownership.
      const { data, error: updateError } = await supabase
        .from("lime_drops")
        .update({ status })
        .eq("id", active.id)
        .eq("recipient_id", userId)
        .eq("status", "pending")
        .select("id")
        .maybeSingle();
      if (!mounted.current) return;
      if (updateError) throw updateError;
      if (!data) {
        await reloadRef.current();
        if (mounted.current) setError("このLimeDropは別の画面で処理済みです。");
        return;
      }
      setDrops((current) => current.filter((drop) => drop.id !== active.id));
      if (destination) openLimeDropDestination(destination);
      else void reloadRef.current();
    } catch {
      if (mounted.current)
        setError("LimeDropの処理に失敗しました。もう一度お試しください。");
    } finally {
      busyRef.current = false;
      if (mounted.current) setBusy(false);
    }
  };

  if (!active && !error) return null;
  const name =
    active?.sender?.display_name || active?.sender?.username || "ユーザー";
  return (
    <aside
      className="fixed inset-x-4 top-4 z-[100] mx-auto max-w-sm rounded-3xl border border-border bg-card/95 p-5 shadow-xl backdrop-blur md:left-auto md:right-5"
      aria-label="LimeDrop"
      aria-live="polite"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-black">LimeDrop</h2>
        {drops.length > 1 && (
          <span className="text-xs text-muted-foreground">
            あと{drops.length - 1}件
          </span>
        )}
      </div>
      {active && (
        <>
          <p className="mt-2 font-bold">{name}さんから投稿が届きました</p>
          <p className="mt-2 line-clamp-3 break-words text-sm text-muted-foreground">
            {active.post_text ||
              `${active.post_author_display_name || active.post_author_username || "ユーザー"}さんの投稿`}
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <button
              disabled={busy}
              onClick={() => void respond("declined")}
              className="rounded-xl border border-border px-3 py-2 font-bold disabled:opacity-50"
            >
              辞退
            </button>
            <button
              disabled={busy}
              onClick={() => void respond("accepted")}
              className="rounded-xl bg-primary px-3 py-2 font-bold text-primary-foreground disabled:opacity-50"
            >
              受け入れる
            </button>
          </div>
        </>
      )}
      {error && (
        <div className="mt-3 text-sm">
          <p role="alert">{error}</p>
          <button
            disabled={busy}
            className="mt-2 underline"
            onClick={() => void reloadRef.current()}
          >
            再読み込み
          </button>
        </div>
      )}
    </aside>
  );
}
