import { UserRound } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useCompanyUser } from "@/hooks/companyUserContext";
import { LIME_SNS_URL } from "@/lib/limeIntegration";
export function AccountIcon() {
  const user = useCompanyUser();
  if (!user) return null;
  const name = user.displayName || user.username || "アカウント";
  const url = user.username
    ? new URL(`u/${encodeURIComponent(user.username)}`, LIME_SNS_URL).href
    : LIME_SNS_URL;
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      title={name}
      aria-label={`ログイン中のアカウント: ${name}`}
      className="shrink-0 rounded-full ring-offset-background transition hover:ring-2 hover:ring-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <Avatar className="h-10 w-10 border border-border">
        <AvatarImage src={user.avatarUrl} alt={name} className="object-cover" />
        <AvatarFallback className="bg-accent/10 text-accent">
          <UserRound className="h-5 w-5" aria-hidden="true" />
        </AvatarFallback>
      </Avatar>
    </a>
  );
}
