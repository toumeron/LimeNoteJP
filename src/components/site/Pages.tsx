import {
  Link,
  useLocation,
  useNavigate,
  useSearch,
} from "@tanstack/react-router";
import {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
  type ReactNode,
} from "react";
import {
  Building2,
  MessageSquare,
  BrainCircuit,
  MapPinned,
  Mail,
  ShieldCheck,
  ExternalLink,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { Atmosphere } from "./Atmosphere";
import { PageHero } from "@/components/layout/PageHero";
import {
  companyFacts,
  messageParagraphs,
  values,
  priorities,
  leaders,
  productDetails,
  employment,
  culture,
  additionalNews,
} from "@/content/editorial";
import {
  contactFormUrl,
  contactTopics,
  jobs,
  navigation,
  newsCategories,
  newsItems,
  products,
  snsUrl,
  sectionLink,
  type ContactTopic,
} from "@/content/site";
import { useCompanyUser } from "@/hooks/companyUserContext";
import campaignImage from "@/assets/limeai6-campaign.png";
import businessImage from "@/assets/home-business.png";
import { ExperienceTabs, useReveal, useSectionSelection } from "./Experience";

export function TextLink({
  to,
  children,
  className = "",
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link className={`text-link ${className}`} {...sectionLink(to)}>
      {children}
    </Link>
  );
}
const EmbeddedContext = createContext(false);
const sectionIds: Record<string, string> = {
  トップメッセージ: "message",
  "ビジョン・企業理念": "vision",
  会社概要: "profile",
  "取締役・執行役員・主席": "leadership",
  アクセス: "access",
  LimeNote: "limenote",
  LimeAI: "limeai",
  LimeMaps: "limemaps",
  数字で見るLimeNote: "numbers",
  新卒採用: "graduates",
  中途採用: "career",
  "インターン・アルバイト": "internship",
  特別エントリー: "special",
};
function ContentHeading({ children, ...props }: React.ComponentProps<"h2">) {
  const embedded = useContext(EmbeddedContext);
  return embedded ? (
    <h3 {...props} className={`content-heading ${props.className || ""}`}>
      {children}
    </h3>
  ) : (
    <h2 {...props} className={`content-heading ${props.className || ""}`}>
      {children}
    </h2>
  );
}
function SubHeading({ children, ...props }: React.ComponentProps<"h3">) {
  const embedded = useContext(EmbeddedContext);
  return embedded ? (
    <h4 {...props} className={`sub-heading ${props.className || ""}`}>
      {children}
    </h4>
  ) : (
    <h3 {...props} className={`sub-heading ${props.className || ""}`}>
      {children}
    </h3>
  );
}
function Page({
  title,
  description,
  group,
  expandable = false,
  children,
}: {
  title: string;
  description?: string;
  group?: string;
  expandable?: boolean;
  children: ReactNode;
}) {
  const embedded = useContext(EmbeddedContext);
  const hash = useLocation({ select: (location) => location.hash });
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const id = sectionIds[title] || title;
  useEffect(() => {
    if (expandable && hash === id && detailsRef.current)
      detailsRef.current.open = true;
  }, [expandable, hash, id]);
  if (embedded) {
    return (
      <section
        className={`integrated-section${expandable ? " recruitment-opening" : ""}`}
        id={id}
        aria-labelledby={`section-${id}`}
      >
        <h2 className="integrated-title" id={`section-${id}`}>
          {title}
        </h2>
        {description && <p className="page-summary">{description}</p>}
        {expandable ? (
          <details ref={detailsRef} className="opening-details">
            <summary>
              仕事内容・募集要項<span aria-hidden="true">＋</span>
            </summary>
            <div className="opening-details-content">{children}</div>
          </details>
        ) : (
          children
        )}
      </section>
    );
  }
  const nav = navigation.find((n) => n.to === group);
  return (
    <>
      <PageHero
        title={title}
        crumbs={
          nav
            ? [{ to: nav.to, label: nav.label }, { label: title }]
            : [{ label: title }]
        }
      />
      <div className="page-layout wrap full-width">
        <div className="page-content">
          {description && <p className="page-summary">{description}</p>}
          {children}
        </div>
      </div>
    </>
  );
}

const productIcons = {
  limenote: MessageSquare,
  limeai: BrainCircuit,
  limemaps: MapPinned,
};
function Faq({
  items,
}: {
  items: string[][] | readonly (readonly string[])[];
}) {
  return (
    <div className="faq-list">
      {items.map(([q, a]) => (
        <details key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
function RelatedContact({
  topic = "business",
  label = "お問い合わせ",
}: {
  topic?: ContactTopic;
  label?: string;
}) {
  const user = useCompanyUser();
  return (
    <a
      className="action-link"
      href={contactFormUrl(topic, undefined, user?.username)}
      target="_blank"
      rel="noreferrer"
    >
      {label}
      <ExternalLink size={15} aria-hidden="true" />
    </a>
  );
}

export function HomePage() {
  const reveal = useReveal();
  return (
    <div ref={reveal} className="home-world">
      <section className="home-campaign">
        <h1 className="sr-only">LimeService株式会社</h1>
        <Link
          to="/service"
          hash="limeai"
          aria-label="LimeAIのサービス紹介を見る"
        >
          <img
            src={campaignImage}
            alt="LimeAI 6。月面に座る猫と地球の宣伝画像"
            width={1536}
            height={1024}
            loading="eager"
            fetchPriority="high"
          />
        </Link>
      </section>
      <section
        className="home-business wrap"
        aria-labelledby="home-business-title"
        data-reveal
      >
        <div className="home-business-banner">
          <Atmosphere />
          <img
            className="home-business-image"
            src={businessImage}
            alt=""
            width={1672}
            height={941}
            loading="lazy"
          />
          <div className="home-business-copy">
            <h2 id="home-business-title">事業内容</h2>
            <p>
              LimeServiceは、SNSのLimeNote、AIアシスタントのLimeAI、地図サービスのLimeMapsを開発・運営しています。
            </p>
            <Link className="action-link" to="/service">
              サービス紹介<span aria-hidden="true">›</span>
            </Link>
          </div>
        </div>
        <div className="home-business-services">
          {products.map((p) => {
            const Icon = productIcons[p.id as keyof typeof productIcons];
            return (
              <article key={p.id}>
                <h3>
                  <Link to="/service" hash={p.id}>
                    <Icon aria-hidden="true" />
                    {p.name}
                    <span aria-hidden="true">›</span>
                  </Link>
                </h3>
                <p>{p.description}</p>
              </article>
            );
          })}
        </div>
      </section>
      <nav
        className="home-entry-links wrap"
        aria-label="企業・採用情報"
        data-reveal
      >
        <Link to="/company">
          企業情報<span aria-hidden="true">↗</span>
        </Link>
        <Link to="/recruit">
          採用情報<span aria-hidden="true">↗</span>
        </Link>
      </nav>
      <section className="home-section wrap" data-reveal>
        <div className="section-top">
          <h2>ニュース</h2>
          <TextLink to="/news">一覧を見る</TextLink>
        </div>
        <NewsList items={newsItems.slice(0, 3)} />
      </section>
    </div>
  );
}

export function CompanyPage() {
  const items = [
    { id: "profile", label: "会社概要" },
    { id: "message", label: "トップメッセージ" },
    { id: "vision", label: "ビジョン・企業理念" },
    { id: "leadership", label: "取締役・執行役員・主席" },
    { id: "access", label: "アクセス" },
  ];
  const [selected, select] = useSectionSelection(
    items.map((i) => i.id),
    "profile",
    "/company",
  );
  const reveal = useReveal();
  return (
    <div className="company-world" ref={reveal}>
      <Page
        title="企業情報">
        <div className="company-overview">
          <div>
            <ContentHeading>LimeServiceについて</ContentHeading>
            <p>
              2023年、短い投稿で人とつながるLimeNoteの開発からスタートしました。現在は、文章づくりや情報整理を支えるLimeAI、場所の検索と移動を支えるLimeMapsを展開しています。
            </p>
            <p>
              プロダクトごとの機能を磨くとともに、共通のログインやサービス間の連携を整備。利用者が情報の発信、対話、検索を自然につなげられる体験を目指しています。
            </p>
          </div>
        </div>
        <div className="company-browser" data-reveal>
          <ExperienceTabs
            items={items}
            selected={selected}
            onSelect={select}
            label="企業情報の項目"
            vertical
          />
          <div
            className="company-panel"
            key={selected}
            role="tabpanel"
            id={`experience-panel-${selected}`}
            aria-labelledby={`experience-tab-${selected}`}
            tabIndex={0}
          >
            <EmbeddedContext.Provider value={true}>
              {selected === "profile" ? (
                <ProfilePage />
              ) : selected === "message" ? (
                <MessagePage />
              ) : selected === "vision" ? (
                <VisionPage />
              ) : selected === "leadership" ? (
                <LeadershipPage />
              ) : (
                <AccessPage />
              )}
            </EmbeddedContext.Provider>
          </div>
        </div>
      </Page>
    </div>
  );
}
export function MessagePage() {
  return (
    <Page title="トップメッセージ" group="/company">
      <article className="message-body">
        <ContentHeading className="message-lead">
          経営方針とサービス運営
        </ContentHeading>
        <div className="prose">
          {messageParagraphs.map((p) => (
            <p key={p.slice(0, 12)}>{p}</p>
          ))}
        </div>
        <p className="signature">
          LimeService株式会社
          <br />
          代表取締役CEO <strong>ねこ</strong>
        </p>
      </article>
    </Page>
  );
}
export function VisionPage() {
  return (
    <Page title="ビジョン・企業理念" group="/company">
      <section className="vision-statement">
        <ContentHeading>ビジョン</ContentHeading>
        <p>
          誰かと話すこと、考えること、知らない場所を訪れること。そうした小さな行動を支えることで、日常の中の選択肢を増やしていきます。特別な知識や経験がなくても、自分の関心をきっかけに参加できるサービスを目指します。
        </p>
      </section>
      <section className="text-section">
        <ContentHeading>企業理念</ContentHeading>
        <div className="values-list">
          {values.map((v) => (
            <article key={v.title}>
              <SubHeading>{v.title}</SubHeading>
              <p>{v.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="text-section">
        <ContentHeading>ビジョンを実現するために</ContentHeading>
        <div className="values-list">
          {priorities.map((v) => (
            <article key={v.title}>
              <SubHeading>{v.title}</SubHeading>
              <p>{v.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="principle-note">
        <ShieldCheck aria-hidden="true" />
        <div>
          <ContentHeading>安心して利用できる環境への取り組み</ContentHeading>
          <p>
            公開範囲の設定、ミュート・ブロック、問い合わせ窓口などを通して、利用者が自分の環境を調整できるようにします。技術の導入と同時に、情報の扱い方や利用者への説明も見直していきます。
          </p>
        </div>
      </section>
    </Page>
  );
}
export function ProfilePage() {
  return (
    <Page
      title="会社概要"
      group="/company"
      description="LimeService株式会社の事業内容、組織体制、拠点についてご案内します。"
    >
      <dl className="definition-list">
        {companyFacts.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
      <section className="text-section">
        <ContentHeading>事業領域</ContentHeading>
        <div className="values-list">
          {products.map((p) => (
            <article key={p.id}>
              <SubHeading>{p.name}</SubHeading>
              <p>
                {p.description}{" "}
                企画、画面設計、開発、公開後の改善まで、プロダクトチームで継続して取り組んでいます。
              </p>
              <TextLink to={`/service/${p.id}`}>サービス詳細</TextLink>
            </article>
          ))}
        </div>
      </section>
    </Page>
  );
}
function AccessContent() {
  return (
    <section className="text-section access-content" id="access-location">
      <ContentHeading>所在地・ご来訪</ContentHeading>
      <p className="address-line">神奈川県横浜市戸塚区</p>
      <p>
        開発・運営はリモートワークを基本としているため、ご来訪は事前予約制です。お打ち合わせの目的と希望時期をお問い合わせ窓口へお知らせください。日程を調整のうえ、詳しい場所とアクセス方法をご案内します。
      </p>
      <div className="access-options">
        <div>
          <MapPinned aria-hidden="true" />
          <SubHeading>対面でのお打ち合わせ</SubHeading>
          <p>
            横浜エリアを中心に調整します。会場・最寄り駅・入館方法は、ご予約の確定時に個別にお知らせします。
          </p>
          <a
            className="text-link"
            href="https://www.google.com/maps/search/?api=1&query=%E6%A8%AA%E6%B5%9C%E5%B8%82%E6%88%B8%E5%A1%9A%E5%8C%BA"
            target="_blank"
            rel="noreferrer"
          >
            Googleマップで周辺を見る
          </a>
        </div>
        <div>
          <MessageSquare aria-hidden="true" />
          <SubHeading>オンラインでのお打ち合わせ</SubHeading>
          <p>
            遠方からのご相談や初回の面談は、オンラインでも承ります。ご希望の参加人数と議題を事前にお知らせください。
          </p>
          <TextLink to="/contact">お打ち合わせを相談する</TextLink>
        </div>
      </div>
    </section>
  );
}
export function AccessPage() {
  return (
    <Page
      title="アクセス"
      group="/company"
      description="ご来訪・お打ち合わせは、事前のご予約をお願いしています。"
    >
      <AccessContent />
      <section className="text-section">
        <ContentHeading>ご予約について</ContentHeading>
        <dl className="definition-list">
          <div>
            <dt>受付時間</dt>
            <dd>平日10:00〜18:00（土・日・祝日・年末年始を除く）</dd>
          </div>
          <div>
            <dt>ご連絡いただく内容</dt>
            <dd>
              お打ち合わせの目的、希望日時、参加人数、オンライン・対面のご希望。
            </dd>
          </div>
          <div>
            <dt>当日のご案内</dt>
            <dd>
              日程確定後に、会場またはオンライン会議の参加方法をご案内します。変更がある場合は、同じ窓口へご連絡ください。
            </dd>
          </div>
        </dl>
        <p className="small-note">
          サービスの利用やアカウントに関するお問い合わせは、来訪せずサポート窓口をご利用いただけます。
        </p>
      </section>
      <RelatedContact label="ご来訪・お打ち合わせの相談" />
    </Page>
  );
}
export function LeadershipPage() {
  return (
    <Page
      title="取締役・執行役員・主席"
      group="/company"
      description="経営、技術、デザインの各領域を担当するメンバーをご紹介します。"
    >
      <div className="leaders-list">
        {leaders.map((l) => (
          <article key={l.name}>
            <div className="leader-profile">
              <p className="role-label">
                {l.category} / {l.role}
              </p>
              <ContentHeading>{l.name}</ContentHeading>
              <p>{l.bio}</p>
              <SubHeading>主な担当領域</SubHeading>
              <p>{l.work}</p>
            </div>
          </article>
        ))}
      </div>
      <section className="text-section">
        <ContentHeading>運営体制</ContentHeading>
        <p>
          各プロダクトの担当者が週次で進捗と利用者の声を共有し、開発・デザイン・運営の課題を横断して確認します。日々の改善は担当者が提案し、サービス全体に関わる方針は経営・技術・デザインの観点から検討します。
        </p>
        <p>
          小規模なチームの機動力を活かしながら、判断の記録やレビューの手順を整え、属人的になりすぎない運営を目指しています。
        </p>
      </section>
    </Page>
  );
}

export function ServicesPage() {
  const items = products.map((p) => ({ id: p.id, label: p.name }));
  const [selected, select] = useSectionSelection(
    [...items.map((i) => i.id), "numbers"],
    "limenote",
    "/service",
  );
  const product = selected === "numbers" ? "limenote" : selected;
  const reveal = useReveal();
  const step = (direction: number) =>
    select(
      products[
        (products.findIndex((p) => p.id === product) +
          direction +
          products.length) %
          products.length
      ].id,
    );
  return (
    <div className={`service-world theme-${product}`} ref={reveal}>
      <header className="service-intro">
        <Atmosphere />
        <div className="wrap service-intro-inner">
          <nav className="breadcrumbs" aria-label="パンくず">
            <Link to="/">ホーム</Link>
            <span aria-current="page">サービス紹介</span>
          </nav>
          <div className="service-intro-heading">
            <h1>サービス紹介</h1>
          </div>
        </div>
      </header>
      <div className="service-body wrap">
        <div
          key={product}
          className="service-product-panel"
          role="region"
          aria-labelledby={`section-${product}`}
          tabIndex={0}
        >
          <EmbeddedContext.Provider value={true}>
            <ProductPage
              id={product}
              onPrevious={() => step(-1)}
              onNext={() => step(1)}
            />
          </EmbeddedContext.Provider>
        </div>
        <div className="service-shared" data-reveal>
          <EmbeddedContext.Provider value={true}>
            <NumbersPage />
          </EmbeddedContext.Provider>
        </div>
        <section className="text-section service-connections" data-reveal>
          <ContentHeading>サービスをつなぐ仕組み</ContentHeading>
          <div className="editorial-grid">
            {[
              [
                "共通アカウント",
                "LimeNoteのアカウントで各サービスを利用できます。同じブラウザーではログイン状態を共有し、サービスを移動するたびに操作し直す手間を減らします。",
              ],
              [
                "LimeDrop",
                "LimeNoteで送られた投稿を、企業サイトの閲覧中にも受け取れます。受信した内容を確認し、開くかどうかを自分で選べます。",
              ],
              [
                "共通のサポート",
                "サービスに関する相談は、既存のLimeNoteお問い合わせフォームで受け付けます。サービス名と状況を添えてご連絡ください。",
              ],
            ].map(([title, text]) => (
              <article key={title}>
                <SubHeading>{title}</SubHeading>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
export function ProductPage({
  id,
  onPrevious,
  onNext,
}: {
  id: string;
  onPrevious?: () => void;
  onNext?: () => void;
}) {
  const p = products.find((p) => p.id === id)!;
  const d = productDetails[id as keyof typeof productDetails];
  const Icon = productIcons[id as keyof typeof productIcons];
  return (
    <Page title={p.name} group="/service">
      <section className={`product-intro product-${id}`}>
        <div className="product-copy">
          <div className="product-meta">
            <Icon aria-hidden="true" />
            <span className="product-tag">{d.tag}</span>
          </div>
          <ContentHeading>{d.lead}</ContentHeading>
          <p>{d.overview}</p>
          <a className="action-link" href={snsUrl(p.path)}>
            {p.name}を開く
            <ExternalLink size={15} aria-hidden="true" />
          </a>
        </div>
        <div className="product-visual" aria-hidden="true">
          <span className="product-photo-label">{p.name}</span>
          {id === "limeai" ? (
            <img src={campaignImage} alt="" width={1536} height={1024} />
          ) : id === "limenote" ? (
            <img
              className="product-person"
              src={businessImage}
              alt=""
              width={1672}
              height={941}
            />
          ) : (
            <Icon />
          )}
          <div className="product-photo-tags">
            {p.features.slice(0, 3).map((f) => (
              <span key={f.title}># {f.title}</span>
            ))}
          </div>
        </div>
      </section>
      {onPrevious && onNext && (
        <div className="service-step-controls">
          <button type="button" onClick={onPrevious} aria-label="前のサービス">
            <ArrowLeft aria-hidden="true" />
          </button>
          <button type="button" onClick={onNext} aria-label="次のサービス">
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
      )}
      <p className="audience-note">{d.audience}</p>
      <section className="text-section" data-reveal>
        <ContentHeading className="service-section-title">
          <span>主な機能</span>
        </ContentHeading>
        <div className="feature-list">
          {p.features.map((f) => (
            <article key={f.title}>
              <SubHeading>{f.title}</SubHeading>
              <p>{f.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="text-section" data-reveal>
        <ContentHeading className="service-section-title">
          <span>こんな場面で使えます</span>
        </ContentHeading>
        <div className="values-list">
          {d.scenes.map(([title, text]) => (
            <article key={title}>
              <SubHeading>{title}</SubHeading>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="text-section" data-reveal>
        <ContentHeading className="service-section-title">
          <span>利用を始めるには</span>
        </ContentHeading>
        <p>
          LimeNoteのアカウントでログインし、サービスを開いてください。既に同じブラウザーでログインしている場合は、その状態で利用できます。表示や設定を確認しながら、ご自身に合う使い方をお選びください。
        </p>
        <a className="text-link" href={snsUrl(p.path)}>
          {p.name}を利用する
        </a>
      </section>
      <section className="text-section" data-reveal>
        <ContentHeading className="service-section-title">
          <span>よくあるご質問</span>
        </ContentHeading>
        <Faq items={d.faqs} />
      </section>
    </Page>
  );
}
export function NumbersPage() {
  return (
    <Page
      title="数字で見るLimeNote"
      group="/service"
      description="投稿・投票機能の基本仕様です。"
    >
      <dl className="definition-list">
        <div>
          <dt>通常の投稿</dt>
          <dd>最大500文字。画像・動画・投票を添えて投稿できます。</dd>
        </div>
        <div>
          <dt>投票の選択肢</dt>
          <dd>2〜4個。投票の目的に合わせて回答を設定できます。</dd>
        </div>
        <div>
          <dt>投票期間</dt>
          <dd>
            1分〜7日。短時間の相談と、時間をかける意見募集で使い分けられます。
          </dd>
        </div>
      </dl>
      <p className="small-note">2026年10月時点の通常機能の仕様です。</p>
    </Page>
  );
}
export function RecruitPage() {
  const reveal = useReveal();
  return (
    <div ref={reveal} className="recruit-world">
      <Page title="採用情報">
        <section className="recruit-intro">
          <div className="recruit-scene" aria-hidden="true">
            <Atmosphere />
            <img src={businessImage} alt="" width={1672} height={941} />
          </div>
          <ContentHeading>
            <span>いいサービスを、</span>
            <span>いい働き方から。</span>
          </ContentHeading>
        </section>
        <div className="recruit-message" data-reveal>
          <p className="recruit-message-lead">
            SNS、AI、地図。あなたの専門性とアイデアを、日々使われるサービスへ。
          </p>
          <p>
            一人ひとりが力を発揮できる環境を、プロダクトづくりと同じくらい大切に。LimeServiceは、開発・デザイン・運営が対話しながら、企画から公開後の改善まで取り組むチームです。
          </p>
          <p>
            SNSの交流体験、AIとの対話、地図から広がる発見。あなたの提案で、利用者の毎日を少し便利に。企画から改善まで、ものづくりの手応えを一緒に育てませんか。
          </p>
        </div>
        <section className="text-section recruit-culture" data-reveal>
          <ContentHeading>働く環境</ContentHeading>
          <div className="editorial-grid">
            {culture.map(([title, text]) => (
              <article key={title}>
                <SubHeading>{title}</SubHeading>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="text-section recruit-opportunities" data-reveal>
          <ContentHeading>募集区分</ContentHeading>
          <EmbeddedContext.Provider value={true}>
            {jobs.map((j) => (
              <JobPage key={j.id} id={j.id} />
            ))}
          </EmbeddedContext.Provider>
        </section>
      </Page>
    </div>
  );
}
export function JobPage({ id }: { id: string }) {
  const j = jobs.find((j) => j.id === id)!;
  const e = employment[id as keyof typeof employment];
  const user = useCompanyUser();
  return (
    <Page title={j.title} group="/recruit" description={j.intro} expandable>
      <section>
        <ContentHeading>募集職種・参加領域</ContentHeading>
        <ul className="position-list">
          {e.positions.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p>{j.work}</p>
      </section>
      <section className="text-section">
        <ContentHeading>担当する仕事</ContentHeading>
        <p>{e.support}</p>
        <ul className="body-list">
          {e.projects.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </section>
      <section className="text-section">
        <ContentHeading>対象となる方</ContentHeading>
        <p>{j.audience}</p>
        <p>{e.requirements}</p>
      </section>
      <section className="text-section">
        <ContentHeading>募集要項</ContentHeading>
        <dl className="definition-list">
          {e.terms.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <p className="small-note">
          具体的な配属、勤務条件、参加時期は面談で確認し、契約前にご案内します。
        </p>
      </section>
      <section className="text-section">
        <ContentHeading>選考・相談の流れ</ContentHeading>
        <div className="selection-flow">
          {[
            [
              "エントリーの相談",
              "希望する職種、経験・活動内容、参加可能な時期をフォームからお知らせください。",
            ],
            [
              "面談・相互理解",
              "募集状況を確認したうえで、担当者と取り組みたいことや期待する役割についてお話しします。",
            ],
            [
              "条件の確認・参加決定",
              "担当業務、報酬、勤務時間、契約期間を双方で確認し、参加時期と最初の課題を決めます。",
            ],
          ].map(([t, b]) => (
            <div key={t}>
              <SubHeading>{t}</SubHeading>
              <p>{b}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="entry-section">
        <ContentHeading>エントリーについて</ContentHeading>
        <p>
          応募前の相談や、募集職種についての質問も受け付けています。希望区分を引き継いだ状態で、共通のお問い合わせフォームが開きます。
        </p>
        <a
          className="action-link"
          href={contactFormUrl("recruit", j.title, user?.username)}
          target="_blank"
          rel="noreferrer"
        >
          {j.title}について相談する
          <ExternalLink size={15} aria-hidden="true" />
        </a>
        <p className="small-note">
          LimeNote
          IDでご連絡ください。フォームには履歴書・住所・電話番号などの個人情報を送らず、まずは相談内容をお知らせください。
        </p>
      </section>
      <section className="text-section">
        <ContentHeading>よくあるご質問</ContentHeading>
        <Faq
          items={[
            [
              id === "graduates"
                ? "専攻や学部による制限はありますか？"
                : "応募前に相談だけでもできますか？",
              id === "graduates"
                ? "専攻は問いません。学習・研究・制作などで取り組んだことと、関心のある職種をお聞かせください。"
                : "はい。関心のある職種や参加形態について、選考に進む前のご相談も受け付けます。",
            ],
            [
              "遠方から参加できますか？",
              "リモートでの勤務・参加を基本に相談できます。対面での活動が必要な場合は、頻度や場所を事前に確認します。",
            ],
            [
              "制作物や実績はどのように伝えればよいですか？",
              "個人情報や機密情報を含まない、公開可能なURLでお知らせください。初回の相談で資料の提出が難しい場合は、活動内容の説明だけでも構いません。",
            ],
          ]}
        />
      </section>
    </Page>
  );
}

export function NewsList({ items }: { items: typeof newsItems }) {
  return (
    <ul className="news-list">
      {items.map((n) => (
        <li key={n.id}>
          <Link to="/news/$newsId" params={{ newsId: n.id }}>
            <div className="news-meta">
              <time dateTime={n.date.replaceAll(".", "-")}>{n.date}</time>
              <span>{newsCategories[n.category]}</span>
            </div>
            <SubHeading>{n.title}</SubHeading>
          </Link>
        </li>
      ))}
    </ul>
  );
}
export function NewsPage() {
  const search = useSearch({ strict: false }) as { category?: string };
  const category =
    search.category === "press" || search.category === "notice"
      ? search.category
      : "all";
  const navigate = useNavigate();
  const items = newsItems.filter(
    (n) => category === "all" || n.category === category,
  );
  return (
    <Page
      title="ニュース"
      description=" ︎ ︎ ︎ ︎ ︎ ︎ ︎ ︎ ︎"
    >
      <div
        className="news-filters"
        role="group"
        aria-label="ニュースのカテゴリー"
      >
        {Object.entries(newsCategories).map(([key, label]) => (
          <button
            key={key}
            aria-pressed={category === key}
            onClick={() =>
              navigate({
                to: "/news",
                search: { category: key as "all" | "press" | "notice" },
              })
            }
          >
            {label}
          </button>
        ))}
      </div>
      <p className="result-count" aria-live="polite">
        {items.length}件の記事
      </p>
      <NewsList items={items} />
      <section className="text-section">
        <ContentHeading>報道・掲載に関するお問い合わせ</ContentHeading>
        <p>
          取材、サービスの紹介、画像や掲載情報の確認については、企画内容とご希望の時期を添えてお問い合わせください。
        </p>
        <TextLink to="/contact">取材・広報のお問い合わせ</TextLink>
      </section>
    </Page>
  );
}
export function NewsArticle({ id }: { id: string }) {
  const n = newsItems.find((n) => n.id === id)!;
  return (
    <Page title={n.title} group="/news">
      <article className="article-body">
        <div className="news-meta">
          <time dateTime={n.date.replaceAll(".", "-")}>{n.date}</time>
          <span>{newsCategories[n.category]}</span>
        </div>
        <p className="article-lead">{n.intro}</p>
        {[...n.sections, ...(additionalNews[n.id] || [])].map((s) => (
          <section className="text-section" key={s.title}>
            <ContentHeading>{s.title}</ContentHeading>
            <p>{s.text}</p>
          </section>
        ))}
        <section className="article-contact">
          <ContentHeading>本件に関するお問い合わせ</ContentHeading>
          <p>
            LimeServiceお問い合わせ窓口へ、記事名と確認したい内容をお知らせください。
          </p>
          <TextLink to="/contact">お問い合わせ</TextLink>
        </section>
        <TextLink to={n.related}>関連するサービス・企業情報</TextLink>
      </article>
      <p className="related-link">
        <TextLink to="/news">ニュース一覧へ戻る</TextLink>
      </p>
    </Page>
  );
}
export function ContactPage() {
  const [topic, setTopic] = useState<ContactTopic>("business");
  const user = useCompanyUser();
  return (
    <Page
      title="お問い合わせ"
      description="事業・協業、取材、採用、サービスのサポートに関するご相談を受け付けています。"
    >
      <div
        className="contact-topics"
        role="group"
        aria-label="お問い合わせの種類"
      >
        {Object.entries(contactTopics).map(([key, v]) => (
          <button
            key={key}
            onClick={() => setTopic(key as ContactTopic)}
            aria-pressed={topic === key}
          >
            {v.label}
          </button>
        ))}
      </div>
      <section className="contact-detail">
        <Mail aria-hidden="true" />
        <ContentHeading>{contactTopics[topic].label}</ContentHeading>
        <p>
          {topic === "business"
            ? "サービスの連携、共同企画、技術面での協力などのご相談を承ります。ご提案の背景、関係するサービス、希望する連携の内容をお知らせください。"
            : topic === "press"
              ? "取材・記事掲載・サービス情報の確認について承ります。媒体・企画の概要、確認したい内容、掲載予定時期をお知らせください。"
              : topic === "recruit"
                ? "希望する職種や採用区分、これまでの経験・活動、参加可能な時期をお知らせください。応募前の相談や、副業・業務委託などの参加方法についての質問も受け付けます。"
                : "ご利用中のサービスでお困りの際は、サービス名、発生した状況、操作の手順、端末・ブラウザーをお知らせください。再現に必要な情報があると、確認を進めやすくなります。"}
        </p>
        <a
          className="action-link"
          href={contactFormUrl(topic, undefined, user?.username)}
          target="_blank"
          rel="noreferrer"
        >
          お問い合わせフォームを開く
          <ExternalLink size={15} aria-hidden="true" />
        </a>
        <p className="small-note">
          共通の「LimeNote
          お問い合わせフォーム」を別タブで開きます。種類と相談内容の書き出しが入力された状態で、編集・確認してから送信できます。
        </p>
      </section>
      <section className="text-section">
        <ContentHeading>お問い合わせの前に</ContentHeading>
        <ul className="body-list">
          <li>
            LimeNote
            IDでご連絡ください。パスワード・認証コード・住所・電話番号などの個人情報や機密情報は記載しないでください。
          </li>
          <li>
            内容を確認後、担当する領域で回答します。調査が必要な場合や、情報が不足している場合は、お時間をいただくことがあります。
          </li>
          <li>
            採用相談は、まず希望区分や担当したい仕事についてお知らせください。履歴書などの資料を、このフォームに添付する必要はありません。
          </li>
        </ul>
      </section>
      <section className="text-section">
        <ContentHeading>よくあるご質問</ContentHeading>
        <Faq
          items={[
            [
              "企業への問い合わせも同じフォームですか？",
              "はい。既存のLimeNoteお問い合わせフォームを共通の窓口として利用しています。このページで選んだ相談の種類を、説明欄へ引き継ぎます。",
            ],
            [
              "ログインできない場合はどうすればよいですか？",
              "LimeNote共通のログイン画面をご利用ください。アカウントにアクセスできない場合は、フォームで該当するトピックを選び、パスワードや認証コードを含めずに状況をお知らせください。",
            ],
            [
              "取材時にサービス画面を掲載できますか？",
              "企画内容、掲載予定の画面、掲載時期を事前にお知らせください。個人の投稿やプロフィールを含む場合は、その取り扱いについても確認をお願いします。",
            ],
            [
              "対面やオンラインの打ち合わせは可能ですか？",
              "事業・協業の窓口から、議題と希望日時、参加人数をお知らせください。アクセスページにも予約方法をご案内しています。",
            ],
          ]}
        />
      </section>
    </Page>
  );
}
