# LimeService

`new-LimeNote` が企業サイト「LimeService」、`limeSNS` が本体です。

## ページ構成

ホーム・企業情報・サービス紹介・採用情報・ニュース・お問い合わせの6項目です。
企業情報、全プロダクト、4つの採用区分は、それぞれのページ内にまとめています。
ヘッダーにドロップダウンや選択肢だけの入口はありません。旧URLは統合先の該当セクションへ移動します。
仮の原稿と差し替え箇所は `CONTENT_GUIDE.md` にまとめています。

## ログイン連携

`.env.example` を `.env.local` にコピーし、本体と同じ
`VITE_SUPABASE_URL` と `VITE_SUPABASE_ANON_KEY` を設定してください。
サーバー専用キーは使いません。GitHub Pagesで公開する場合は、同名の
Repository variablesも設定してください。

本体と企業サイトを同じorigin（プロトコル・ホスト・ポート）で開くと、
Supabaseの標準保存キーを通してログインが共有されます。GitHub Pagesの
`/RaimuNoteSNS.github.io/` と `/LimeNoteJP/` は同じoriginです。
別originではログイン状態を共有しません。
未ログイン時は本体の共通ログイン画面へ自動で移動し、ログイン後は
元の企業サイトのページへ戻ります。企業サイト独自のログインフォームはありません。
本体側の `companyLoginReturn` は同じoriginの `/LimeNoteJP/` だけを
戻り先として許可します。トークンやパスワードをURLで渡しません。
サーバーでユーザーと利用停止状態を確認してからサイトを表示します。
本体でのログアウト・アカウント切り替えも同期します。

GitHub Pagesは静的配信のため、このログイン制御はアプリの表示制御です。
配信済みのHTML・画像・JavaScript自体を非公開にする機能ではありません。
企業サイトの内容そのものを秘密にする場合は認証付きサーバー配信が必要です。

## LimeDrop

本体と同じ `lime_drops` の未処理分を受信し、Realtimeで同期します。
受け入れると本体の投稿ページ（外部投稿はHTTPSリンク）を開きます。
受け入れ・辞退は受信者本人のpendingレコードのみ更新します。
本体側で処理されたLimeDropも企業サイトから消えます。
既存テーブル・RLS・Realtime設定を使用し、新規テーブルは不要です。
ポーリングは行いません。

## 開発と公開

`bun install --frozen-lockfile`、`bun run dev` で開発できます。
ローカルでも共通ログインを使う場合は、`limeSNS` 側で
`npm run dev -- --host 127.0.0.1 --port 8080 --strictPort` を起動してください。
企業サイトの開発サーバーが `/RaimuNoteSNS.github.io/` を8080へプロキシします。
ログインは企業サイトと同じホスト・ポートのURLで行うため、セッションを共有できます。
`bun run test` と `bun run build` で検証します。
ViteとRouterの公開パスをそろえ、ビルド後に各ページのHTMLを生成します。
新しいページを追加すると `scripts/create-pages.mjs` がファイルルートから直接アクセス用HTMLを生成します。ニュース記事は `src/content/site.ts` のIDから生成します。
原稿の編集方法と未確定項目は `CONTENT_GUIDE.md` を参照してください。
mainへのpushはGitHub Pagesの公開を開始します。

公開はユーザーの明示的な指示がある場合だけ行います。タブ復帰時は検証済みのアカウントを表示したまま裏でログイン状態を確認します。ヘッダー右端に同じ認証状態から取得したプロフィールアイコンを表示します。
