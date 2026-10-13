import { mkdir, readFile, writeFile } from "node:fs/promises";
const html = await readFile("dist/index.html", "utf8");
// Serve the app for direct links/reloads on GitHub Pages.
const routes = [
  "company",
  "company/profile",
  "company/message",
  "service",
  "news",
  "recruit",
  "contact",
];
for (const route of routes) {
  await mkdir(`dist/${route}`, { recursive: true });
  await writeFile(`dist/${route}/index.html`, html);
}
await writeFile("dist/404.html", html);
await writeFile("dist/.nojekyll", "");
