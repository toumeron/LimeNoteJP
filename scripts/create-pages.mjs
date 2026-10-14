import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
const html = await readFile("dist/index.html", "utf8");
// Every concrete file route gets its own entry for direct links/reloads.
const routes = new Set();
for (const filename of await readdir("src/routes")) {
  if (!filename.endsWith(".tsx")) continue;
  const source = await readFile(`src/routes/${filename}`, "utf8");
  const route = source.match(/createFileRoute\(["']([^"']+)["']\)/)?.[1];
  if (route && !route.includes("$") && route !== "/")
    routes.add(route.replace(/^\/|\/$/g, ""));
}
// Published articles also need concrete entries; their IDs live with the editable copy.
const content = await readFile("src/content/site.ts", "utf8");
const news = content
  .split("export const newsItems:")[1]
  .split("export const contactTopics")[0];
for (const match of news.matchAll(/\bid:\s*["']([a-z0-9-]+)["']/g))
  routes.add(`news/${match[1]}`);
for (const route of routes) {
  await mkdir(`dist/${route}`, { recursive: true });
  await writeFile(`dist/${route}/index.html`, html);
}
await writeFile("dist/404.html", html);
await writeFile("dist/.nojekyll", "");
console.log(`Created ${routes.size} direct page entries.`);
