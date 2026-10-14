import { LIME_SNS_URL } from "@/lib/limeIntegration";

export const snsUrl = (path = "") => new URL(path, LIME_SNS_URL).href;
export const navigation = [
  { label: "ホーム", en: "HOME", to: "/", children: [] },
  {
    label: "企業情報",
    en: "COMPANY",
    to: "/company",
    children: [
      { label: "企業情報トップ", to: "/company" },
      { label: "トップメッセージ", to: "/company/message" },
      { label: "ビジョン・企業理念", to: "/company/vision" },
      { label: "会社概要", to: "/company/profile" },
      { label: "アクセス", to: "/company/access" },
      { label: "取締役・執行役員・主席", to: "/company/leadership" },
    ],
  },
  {
    label: "サービス紹介",
    en: "SERVICE",
    to: "/service",
    children: [
      { label: "サービス一覧", to: "/service" },
      { label: "LimeNote", to: "/service/limenote" },
      { label: "LimeAI", to: "/service/limeai" },
      { label: "LimeMaps", to: "/service/limemaps" },
      { label: "数字で見るLimeNote", to: "/service/numbers" },
    ],
  },
  {
    label: "採用情報",
    en: "RECRUIT",
    to: "/recruit",
    children: [
      { label: "採用情報トップ", to: "/recruit" },
      { label: "新卒採用", to: "/recruit/graduates" },
      { label: "中途採用", to: "/recruit/career" },
      { label: "インターン・アルバイト", to: "/recruit/internship" },
      { label: "特別エントリー", to: "/recruit/special" },
    ],
  },
  {
    label: "ニュース",
    en: "NEWS",
    to: "/news",
    children: [
      { label: "すべて", to: "/news", category: "all" },
      { label: "プレスリリース", to: "/news", category: "press" },
      { label: "お知らせ", to: "/news", category: "notice" },
    ],
  },
  { label: "お問い合わせ", en: "CONTACT", to: "/contact", children: [] },
];

export const products = [
  {
    id: "limenote",
    name: "LimeNote",
    description: "文章・画像・動画で交流するSNSです。",
    path: "",
    features: [
      {
        title: "投稿",
        body: "最大500文字の文章に、画像・動画・投票を添えて投稿できます。日時を指定する予約投稿にも対応しています。文章だけで短く伝えることも、写真と説明を組み合わせて記録することもでき、目的に合う形式を選べます。投稿後はプロフィールから自分の発信を振り返れます。",
      },
      {
        title: "タイムライン",
        body: "フォロー、ハッシュタグ、リストを使って投稿を閲覧できます。返信やリアクションにも対応しています。趣味、制作活動、日常の情報などを読み分けたいときは、関心ごとにリストを使うことで、読みたい投稿をまとめて確認できます。",
      },
      {
        title: "メッセージ・LimeDrop",
        body: "ダイレクトメッセージで会話できます。LimeDropでは、投稿を指定した相手に送れます。共有先では受け取り内容を確認してから開くかどうかを選べるため、気になる投稿を会話のきっかけとして届けられます。企業サイトを開いている間の受信にも対応しています。",
      },
      {
        title: "公開範囲・アカウント管理",
        body: "プロフィールや公開範囲を設定できます。ミュート・ブロック・通報機能を備えています。交流する相手や表示される情報との距離を調整しながら、自分にとって使いやすい環境を整えられます。操作に困った場合は、共通のサポート窓口へ相談できます。",
      },
    ],
  },
  {
    id: "limeai",
    name: "LimeAI",
    description: "文章作成や調べものに使えるAIチャットです。",
    path: "chat",
    features: [
      {
        title: "チャット",
        body: "文章の作成やアイデアの整理について相談できます。履歴を保存し、会話を続けられます。目的、読み手、文体などの条件を伝え、回答をもとに追加で相談することで、考えを段階的に具体化できます。最初から整った文章を用意する必要はありません。",
      },
      {
        title: "ファイル添付",
        body: "画像や対応形式の文書を添付し、内容について質問できます。資料の要点、用語、比較したい箇所など、知りたい点を具体的に伝えて活用できます。対応形式や扱える内容は、利用する機能・モデルと実際の画面の案内に従って確認してください。",
      },
      {
        title: "音声・キャラクター",
        body: "音声会話とキャラクター表示に対応しています。アシスタントの選択や設定も行えます。文字で条件を整理したいときと、声に出しながら考えたいときで、対話の方法を使い分けられます。マイクの利用には、端末・ブラウザー側の許可が必要です。",
      },
      {
        title: "文章・コード作成",
        body: "文章やコードの生成に対応しています。回答の内容を確認し、必要に応じて編集して利用できます。案内文の表現を変える、構成を見直す、コードの意図を確かめるなど、作成と検討を同じ会話で進められます。公開や実行の前には、ご自身で内容と動作を確認してください。",
      },
    ],
  },
  {
    id: "limemaps",
    name: "LimeMaps",
    description: "場所の検索と経路確認ができる地図サービスです。",
    path: "maps",
    features: [
      {
        title: "地図・施設検索",
        body: "地名・施設名で検索し、周辺の道路や位置関係を確認できます。検索結果の場所を起点に地図を動かしたり拡大・縮小したりして、駅や近隣施設との距離感を把握できます。初めて訪れる場所を調べる際にも活用できます。",
      },
      {
        title: "経路検索",
        body: "出発地と目的地を指定して経路を確認できます。地図上の位置関係とあわせて、どの方向へ進むのかを出発前に把握できます。道路状況や通行規制などは変わる場合があるため、移動時には現地の標識と公式の案内を確認してください。",
      },
      {
        title: "アカウント連携",
        body: "LimeNoteと同じアカウントで利用できます。新しく地図専用のアカウントを作らずに使い始められます。タイムラインやメッセージで知った地名・施設を調べたいときも、いつもの利用環境から地図へ移動できます。",
      },
    ],
  },
];

export const jobs = [
  {
    id: "graduates",
    title: "新卒採用",
    intro:
      "卒業予定の方、既卒の方を対象に、開発・デザイン・運営分野の採用相談を受け付けています。",
    audience:
      "大学・大学院・短大・専門学校などを卒業予定の方、既卒で就業経験の浅い方。専攻は問いません。",
    work: "フロントエンド開発、UI・UXデザイン、コミュニティ運営など。学習歴や希望を聞き、得意な領域から担当を相談します。",
    skills:
      "個人制作・研究・課外活動などで、工夫したことを自分の言葉で説明できる方。公開できる制作物があれば、面談でお聞かせください。",
    time: "学業・卒業時期に合わせて、参加時期と働き方を相談します。",
  },
  {
    id: "career",
    title: "中途採用",
    intro:
      "開発・デザイン・運営の実務経験をお持ちの方を対象に、採用相談を受け付けています。",
    audience:
      "開発・デザイン・プロダクト運営などの実務経験をお持ちの方。業界やこれまでの雇用形態は問いません。",
    work: "React・TypeScriptでのサービス開発、利用体験の改善、運営フローの整備。課題の発見からリリース後の確認まで関わります。",
    skills:
      "実務やプロジェクトでの担当範囲、判断したこと、改善の結果を説明できる方。技術とユーザー体験の両方に関心がある方を歓迎します。",
    time: "入社可能時期・稼働時間・勤務形態は、現在のご事情も踏まえて相談します。",
  },
  {
    id: "internship",
    title: "インターン・アルバイト",
    intro:
      "学生の方や短時間での勤務を希望する方を対象に、開発補助・運営などの参加相談を受け付けています。",
    audience:
      "学生の方、学びながら実務に挑戦したい方、限られた時間で得意なことを活かしたい方。",
    work: "画面の使いやすさの検証、コンテンツ整備、開発補助、コミュニティの声の整理など。関心とスキルに合わせて担当を決めます。",
    skills:
      "基本的なPC操作ができ、相談・報告を大切にできる方。開発やデザインの経験がある方は、取り組んだ内容をお聞かせください。",
    time: "授業・試験・生活の予定を踏まえ、週の稼働日と時間を相談します。参加期間も個別に調整します。",
  },
  {
    id: "special",
    title: "特別エントリー",
    intro:
      "既存の募集区分に当てはまらない方や、副業・業務委託・共同プロジェクトを希望する方の窓口です。",
    audience:
      "募集区分に当てはまらない専門性やアイデアをお持ちの方。副業・業務委託・共同プロジェクトなどの相談も受け付けます。",
    work: "アクセシビリティ、モデレーション、AI活用、コンテンツ制作、外部連携など。取り組みたい課題と提案をもとに役割を組み立てます。",
    skills:
      "実現したいこと、提供できる価値、活動実績などを具体的に伝えられる方。分野や経験年数は問いません。",
    time: "プロジェクトの内容・期間・責任範囲・稼働条件を相談し、合意してから進めます。",
  },
];

export type NewsCategory = "press" | "notice";
export const newsCategories = {
  all: "すべて",
  press: "プレスリリース",
  notice: "お知らせ",
} as const;
export const newsItems: {
  id: string;
  date: string;
  category: NewsCategory;
  title: string;
  intro: string;
  sections: { title: string; text: string }[];
  related: string;
}[] = [
  {
    id: "limeservice",
    date: "2026.10.14",
    category: "press",
    title: "企業サイトの名称をLimeServiceに統一しました",
    intro:
      "LimeNoteを運営する企業サイトの名称をLimeServiceに統一し、企業とプロダクトの情報を整理しました。",
    sections: [
      {
        title: "名称変更について",
        text: "SNSのLimeNote、AIとの対話を提供するLimeAI、場所の発見を支えるLimeMaps。それぞれの役割をわかりやすく伝えるため、企業情報をLimeServiceとしてご案内します。LimeNote本体のサービス名は変わりません。",
      },
      {
        title: "掲載内容",
        text: "トップメッセージや企業理念、サービス紹介、採用情報、ニュースを整理しています。サービスに関するご相談から連携のご提案まで、お問い合わせページから受け付けます。",
      },
    ],
    related: "/company",
  },
  {
    id: "shared-account",
    date: "2026.10.14",
    category: "notice",
    title: "企業サイトもLimeNoteと共通のアカウントでご利用いただけます",
    intro:
      "LimeService企業サイトは、LimeNoteと同じログイン画面・アカウントでご利用いただけます。",
    sections: [
      {
        title: "ログイン方法",
        text: "同じブラウザーでLimeNoteにログインしている場合、企業サイトでもそのログイン状態を利用します。未ログインの場合はLimeNote共通のログイン画面をご案内し、ログイン後は閲覧していたページへ戻ります。",
      },
      {
        title: "アカウントの確認について",
        text: "ヘッダー右端のアイコンから現在のアカウントを確認できます。ログアウトやアカウントの切り替えは、LimeNote側の操作が企業サイトにも反映されます。",
      },
    ],
    related: "/contact",
  },
  {
    id: "limedrop",
    date: "2026.10.14",
    category: "notice",
    title: "LimeService企業サイトでLimeDropを受け取れます",
    intro:
      "LimeNoteで送られたLimeDropを、企業サイトの閲覧中にも受け取れるようにしました。",
    sections: [
      {
        title: "受信方法",
        text: "LimeNoteから自分宛てに届いたLimeDropは、企業サイトでも確認できます。受け取った内容を開くと、該当するLimeNoteの投稿へ移動します。",
      },
      {
        title: "受信後の操作",
        text: "受け取り画面では内容を確認してから開くかどうかを選べます。LimeServiceの閲覧中も、大切な会話とのつながりを保ちます。",
      },
    ],
    related: "/service/limenote",
  },
  {
    id: "limeai-guide",
    date: "2026.10.14",
    category: "press",
    title: "LimeAIのサービス紹介を公開しました",
    intro:
      "LimeNoteの中で使えるAIアシスタント、LimeAIの特徴と活用シーンをご紹介します。",
    sections: [
      {
        title: "主な機能",
        text: "文章の下書き、アイデアの整理、資料についての相談など、チャットを通して考えを進められます。対応する画像・文書の添付や音声会話も活用できます。",
      },
      {
        title: "LimeNoteの中から使えます",
        text: "LimeAIはLimeNote内から利用できます。回答は内容を確認し、ご自身の判断で活用してください。対応モデルや利用できる機能は、実際のサービス画面でご確認いただけます。",
      },
    ],
    related: "/service/limeai",
  },
];

export const contactTopics = {
  business: {
    label: "事業・協業について",
    text: "【LimeService／事業・協業のご相談】\nご相談の概要：\n関連するサービス：\nご希望の連携内容：\n※個人情報や機密情報は記載しないでください。",
  },
  press: {
    label: "取材・広報について",
    text: "【LimeService／取材・広報のご相談】\n媒体・企画の概要：\n確認したい内容：\n掲載予定時期：\n※個人情報や未公開の機密情報は記載しないでください。",
  },
  recruit: {
    label: "採用・エントリーの相談",
    text: "【LimeService／採用のご相談】\n希望区分：\n関心のある分野：\nご相談内容：\n※氏名・履歴書・住所・電話番号は送らず、LimeNote IDでご相談ください。",
  },
  support: {
    label: "サービスのサポート",
    text: "【サービスのサポート】\n対象サービス：\nお困りの状況：\n発生時期・利用環境：\n※パスワードや個人情報は記載しないでください。",
  },
};
export type ContactTopic = keyof typeof contactTopics;
export function contactFormUrl(
  topic: ContactTopic,
  job?: string,
  username?: string | null,
) {
  // Existing Google Form and its public field IDs. Submissions happen on Google Forms.
  const form = new URL(
    "https://docs.google.com/forms/d/e/1FAIpQLSciNRQhXXEoQLGGPFtam_IAtp8wm9lFJ2RM175Fb2kvtSXmTA/viewform",
  );
  form.searchParams.set("usp", "pp_url");
  form.searchParams.set("entry.953868606", "その他");
  form.searchParams.set(
    "entry.1622594263",
    contactTopics[topic].text.replace("希望区分：", `希望区分：${job || ""}`),
  );
  if (username)
    form.searchParams.set("entry.330679253", `@${username.replace(/^@/, "")}`);
  return form.href;
}

/** Direct links into the consolidated pages; old paths are kept only as redirects. */
export function sectionLink(path: string) {
  const sections: Record<string, string> = {
    "/company/message": "message",
    "/company/vision": "vision",
    "/company/profile": "profile",
    "/company/leadership": "leadership",
    "/company/access": "access",
    "/service/limenote": "limenote",
    "/service/limeai": "limeai",
    "/service/limemaps": "limemaps",
    "/service/numbers": "numbers",
    "/recruit/graduates": "graduates",
    "/recruit/career": "career",
    "/recruit/internship": "internship",
    "/recruit/special": "special",
  };
  return sections[path]
    ? { to: "/" + path.split("/")[1], hash: sections[path] }
    : { to: path };
}
