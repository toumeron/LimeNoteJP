import { mkdir, readFile, writeFile } from "node:fs/promises";

// GitHub Pages has no SPA rewrite support. Serve the app at each known route
// so opening a shared link or refreshing a page also returns HTTP 200.
const html = await readFile("dist/index.html", "utf8");
const routes = [
  "company", "company/profile", "company/message", "company/history",
  "service", "news", "recruit", "contact",
];
for (const route of routes) {
  await mkdir(`dist/${route}`, { recursive: true });
  await writeFile(`dist/${route}/index.html`, html);
}
await writeFile("dist/404.html", html);
await writeFile("dist/.nojekyll", "");
