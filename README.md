# LimeNote株式会社

公開URL: https://toumeron.github.io/LimeNoteJP/

`bun install --frozen-lockfile` と `bun run build` でビルドします。
`main` へのpushでGitHub Actionsが `dist` をGitHub Pagesに公開します。

Viteの `base` とTanStack Routerの `basepath` を一致させています。
ビルド後に `scripts/create-pages.mjs` が各ページの `index.html` を生成するため、
下層ページの直接アクセス・再読み込みにも対応します。
新しいページを追加する場合は同スクリプトの `routes` も更新してください。
