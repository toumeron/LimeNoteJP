# LimeNote株式会社 公式サイト構築プラン

JR東日本コーポレートサイト（https://www.jreast.co.jp/company/）の構成・情報密度・落ち着いた企業サイトらしいレイアウトを参考にしつつ、LimeNoteのブランドカラー（ライム×アクセント、丸ゴシック）で再構築します。

## サイト構成（マルチページ / TanStack Router）

```
/                  トップ（ヒーロー + 会社ハイライト + ニュース + サービス導線）
/company           会社概要トップ（下層への導線ハブ）
/company/profile   会社情報（所在地・設立・代表者など表形式）
/company/message   代表メッセージ（CEO ねこ氏）
/company/history   沿革
/service           サービス紹介（LimeNote SNS の紹介＋利用規約・本体への外部リンク）
/news              ニュース / お知らせ一覧
/recruit           採用情報（簡易ページ）
/contact           お問い合わせ（Googleフォームへ誘導 + 埋め込み）
```

共通ヘッダー（ロゴ＋グローバルナビ＋お問い合わせCTA）と共通フッター（サイトマップ・SNSリンク・コピーライト）を `src/components/layout/` に配置し、`__root.tsx` で全ページに適用。

## デザイン方針（JR東日本の構成感 × LimeNoteブランド）

- 構成感：ワイドなヒーロー、カード型のナビゲーション、白基調・余白広め、整然としたグリッド、表形式の会社情報、シンプルな見出しタイポ。
- ブランド適用：
  - フォント：`Zen Maru Gothic`（display）/ `M PLUS Rounded 1c`（body）を Google Fonts 経由で `__root.tsx` の `links` に追加。
  - カラー：ロゴで使われる `bg-gradient-primary`（ライム系）と `accent` を CSS 変数化し `src/styles.css` の `:root` に oklch で定義。`--primary`（ライム）、`--accent`（やや濃いグリーン/ティール）、`--primary-soft`、`--accent-soft`、`--gradient-primary`、`--gradient-accent`、`--gradient-cream`、`--shadow-soft` 等を追加。
  - 角丸はやや大きめ（`--radius: 1rem`）、影は柔らかめでLimeNoteらしい親しみやすさを残す。
- ロゴ：ユーザー提供コードを TanStack Router 用に書き直し（`react-router-dom` の `Link` → `@tanstack/react-router` の `Link`）。`Lime` をグラデーション、`Note` を accent カラーで表示。

## 主要ページ内容

- **トップ**：ヒーロー（キャッチコピー＋CTA「LimeNoteを開く」「お問い合わせ」）、会社ハイライト（設立2023年1月／本社 横浜市戸塚区／代表 ねこ氏）、サービス紹介カード、最新ニュース3件、会社概要・採用・お問い合わせへの導線カード。
- **会社概要 /company**：JR東日本トップのような「会社情報・代表メッセージ・沿革」へのカードナビ。
- **/company/profile**：定義リスト/テーブルで以下を掲載
  - 商号：LimeNote株式会社
  - 設立：2023年1月
  - 代表者：ねこ氏（CEO）
  - 本社所在地：神奈川県横浜市戸塚区
  - 事業内容：SNS「LimeNote」の運営
- **/company/message**：CEO ねこ氏からのメッセージ（汎用的な創業ストーリー文を生成）。
- **/company/history**：2023年1月 設立 → LimeNote 公開、等のシンプルな年表。
- **/service**：LimeNote SNS の紹介、外部リンクボタン
  - 本体：https://toumeron.github.io/RaimuNoteSNS.github.io/
  - 利用規約：https://toumeron.github.io/RaimuNoteSNS.github.io/terms
- **/news**：プレースホルダ記事数件（設立告知等）。
- **/recruit**：「現在 Google フォームよりお問い合わせください」の簡易ページ。
- **/contact**：Googleフォーム（https://forms.gle/1FUHzrWL38iVbUju5）への大きなCTAボタン＋`<iframe>` 埋め込み（`https://docs.google.com/forms/d/e/.../viewform?embedded=true` 形式は短縮URLでは取得できないため、ボタン誘導をメインに、iframeはshort URL直リンクで試行。表示できない場合に備えてボタン併設）。

## SEO

各ルートの `head()` に固有の `title` / `description` / `og:title` / `og:description` / `og:url` / `canonical` を設定。`__root.tsx` には会社名のサイト名・`og:type: website`・Organization の JSON-LD（name: LimeNote株式会社、founder: ねこ、foundingDate: 2023-01、address: 神奈川県横浜市戸塚区）を設定。`lang="ja"`。

## 技術詳細

- TanStack Start v1 / TanStack Router 既存構成を踏襲。`src/routes/` 配下にフラットなドット区切りでルート作成。
- 既存 `src/styles.css` の oklch 設計を維持しつつ、LimeNote ブランド用に `--primary` 等を上書きし、`--gradient-primary` などのトークンを追加。Tailwind v4 の `@theme inline` に `--color-primary-soft` / `--color-accent-soft` / `--background-image-gradient-primary` 等を登録。
- フォントは `__root.tsx` の `head().links` で Google Fonts を読み込み、`body` の font-family を `M PLUS Rounded 1c`、見出しに `font-display` ユーティリティで `Zen Maru Gothic` を適用するためのクラスを `styles.css` に追加。
- 既存 `src/routes/index.tsx` のプレースホルダは削除して新トップに置換。
- 画像は `imagegen` で必要最小限（ヒーロー背景の抽象的グラフィック1枚程度）を生成、または純CSSグラデーションのみで構成（軽量重視ならこちら）。デフォルトは **CSSのみ・画像生成なし** で進めます。
- Supabase / バックエンドは使用しません。

## 不明点（このまま進めて良ければ承認してください）

1. ヒーロー画像は CSS グラデーション＋装飾のみで進めます（画像生成不要）。画像が欲しい場合はお知らせください。
2. ニュース・沿革の中身はプレースホルダ（設立告知など最低限）で作成します。実データがあれば後から差し替えます。
