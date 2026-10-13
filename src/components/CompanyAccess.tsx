import { useEffect, type ReactNode } from "react";
import { useCompanyAuth } from "@/hooks/useCompanyAuth";
import { supabase } from "@/lib/supabase";
import {
  companyLoginUrl,
  openLimeDropDestination,
} from "@/lib/limeIntegration";
import { LimeDropReceiver } from "./LimeDropReceiver";
import { CompanyUserContext } from "@/hooks/companyUserContext";
export function CompanyAccess({ children }: { children: ReactNode }) {
  const auth = useCompanyAuth();
  const loginUrl = companyLoginUrl(window.location);
  useEffect(() => {
    if (supabase && auth.status === "signed-out")
      openLimeDropDestination(loginUrl);
  }, [auth.status, loginUrl]);
  if (supabase && auth.status === "authenticated" && auth.user) {
    return (
      <CompanyUserContext.Provider value={auth.user}>
        {children}
        <LimeDropReceiver key={auth.user.id} userId={auth.user.id} />
      </CompanyUserContext.Provider>
    );
  }
  // Initial verification stays private without flashing a login-check page.
  if (supabase && auth.status === "checking")
    return <div className="min-h-screen bg-background" aria-busy="true" />;
  return (
    <main className="grid min-h-screen place-items-center bg-background p-6">
      <section
        className="w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-xl"
        aria-labelledby="company-access-title"
      >
        <p className="font-black text-accent">LimeService</p>
        <h1 id="company-access-title" className="mt-4 text-xl font-bold">
          LimeService
        </h1>
        {!supabase ? (
          <p role="alert" className="mt-4">
            ログイン設定が未完了です。管理者にお問い合わせください。
          </p>
        ) : auth.status === "suspended" ? (
          <p role="alert" className="mt-4">
            このアカウントは利用停止中のため閲覧できません。
          </p>
        ) : auth.status === "error" ? (
          <div className="mt-4">
            <p role="alert">
              ログイン状態を確認できませんでした。通信状態を確認してください。
            </p>
            <button
              className="mt-4 rounded-full bg-primary px-5 py-2 font-bold text-primary-foreground"
              onClick={auth.retry}
            >
              再試行
            </button>
          </div>
        ) : (
          <p role="status" className="mt-4">
            LimeNoteのログインページへ移動しています…
          </p>
        )}
        <a href={loginUrl} className="mt-5 block text-sm font-bold underline">
          LimeNoteのログインページを開く
        </a>
      </section>
    </main>
  );
}
