import { useEffect, useState } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
export type CompanyUser = User & {
  displayName?: string;
  username?: string;
  avatarUrl?: string;
};
type State = {
  status: "checking" | "signed-out" | "authenticated" | "suspended" | "error";
  user: CompanyUser | null;
};
export function useCompanyAuth() {
  const [state, setState] = useState<State>({ status: "checking", user: null });
  const [revision, setRevision] = useState(0);
  useEffect(() => {
    if (!supabase) return;
    const client = supabase;
    let alive = true,
      generation = 0;
    const timers = new Set<ReturnType<typeof setTimeout>>();
    const validate = async (session: Session | null, version: number) => {
      const publish = (next: State) => {
        if (alive && version === generation) setState(next);
      };
      if (!session) {
        publish({ status: "signed-out", user: null });
        return;
      }
      try {
        const { data, error } = await client.auth.getUser(session.access_token);
        if (error || !data.user || data.user.id !== session.user.id) {
          publish({
            status:
              error && ![401, 403].includes(error.status ?? 0)
                ? "error"
                : "signed-out",
            user: null,
          });
          return;
        }
        const { data: profile, error: profileError } = await client
          .from("profiles")
          .select("Account_suspension,display_name,username,avatar_url")
          .eq("id", data.user.id)
          .single();
        if (profileError || !profile) throw profileError;
        publish(
          profile.Account_suspension === true
            ? { status: "suspended", user: null }
            : {
                status: "authenticated",
                user: {
                  ...data.user,
                  displayName: profile.display_name || profile.username || "",
                  username: profile.username || "",
                  avatarUrl: profile.avatar_url || "",
                },
              },
        );
      } catch {
        publish({ status: "error", user: null });
      }
    };
    const schedule = (session: Session | null) => {
      const version = ++generation;
      if (!session) {
        setState({ status: "signed-out", user: null });
        return;
      }
      // Keep a validated account visible during background revalidation.
      // An account switch must immediately hide the previous user's content.
      setState((current) =>
        current.status === "authenticated" &&
        current.user?.id === session.user.id
          ? current
          : { status: "checking", user: null },
      );
      // Run outside the SDK's auth callback lock.
      const timer = setTimeout(() => {
        timers.delete(timer);
        void validate(session, version);
      }, 0);
      timers.add(timer);
    };
    const {
      data: { subscription },
    } = client.auth.onAuthStateChange((_event, session) => schedule(session));
    const refresh = async () => {
      const version = ++generation;
      try {
        const { data, error } = await client.auth.getSession();
        if (!alive || version !== generation) return;
        if (error) throw error;
        setState((current) =>
          current.status === "authenticated" &&
          current.user?.id === data.session?.user.id
            ? current
            : { status: "checking", user: null },
        );
        await validate(data.session, version);
      } catch {
        if (alive && version === generation)
          setState({ status: "error", user: null });
      }
    };
    const visible = () => {
      if (document.visibilityState === "visible") void refresh();
    };
    document.addEventListener("visibilitychange", visible);
    window.addEventListener("online", refresh);
    return () => {
      alive = false;
      generation++;
      timers.forEach(clearTimeout);
      subscription.unsubscribe();
      document.removeEventListener("visibilitychange", visible);
      window.removeEventListener("online", refresh);
    };
  }, [revision]);
  return { ...state, retry: () => setRevision((value) => value + 1) };
}
