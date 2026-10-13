export const LIME_SNS_URL = new URL(
  "/RaimuNoteSNS.github.io/",
  typeof window === "undefined"
    ? "https://toumeron.github.io"
    : window.location.origin,
).href;
export function companyLoginUrl(
  location: Pick<Location, "pathname" | "search" | "hash">,
) {
  const url = new URL("auth", LIME_SNS_URL);
  url.searchParams.set(
    "returnTo",
    location.pathname + location.search + location.hash,
  );
  return url.href;
}
export function openLimeDropDestination(url: string) {
  window.location.assign(url);
}
export function limeDropDestination(drop: {
  post_id: string | null;
  post_url: string;
}): string | null {
  if (drop.post_id)
    return new URL(`post/${encodeURIComponent(drop.post_id)}`, LIME_SNS_URL)
      .href;
  try {
    const url = new URL(drop.post_url);
    return url.protocol === "https:" ? url.href : null;
  } catch {
    return null;
  }
}
