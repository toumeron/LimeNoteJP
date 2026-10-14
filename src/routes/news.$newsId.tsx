import { createFileRoute, notFound } from "@tanstack/react-router";
import { NewsArticle } from "@/components/site/Pages";
import { newsItems } from "@/content/site";
export const Route = createFileRoute("/news/$newsId")({
  beforeLoad: ({ params }) => {
    if (!newsItems.some((n) => n.id === params.newsId)) throw notFound();
  },
  head: ({ params }) => ({
    meta: [
      {
        title: `${newsItems.find((n) => n.id === params.newsId)?.title || "ニュース"} | LimeService株式会社`,
      },
    ],
  }),
  component: Article,
});
function Article() {
  const { newsId } = Route.useParams();
  return <NewsArticle id={newsId} />;
}
