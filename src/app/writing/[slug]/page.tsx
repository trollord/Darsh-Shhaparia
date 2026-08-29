import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Prose } from "@/components/ui/Prose";
import { ArrowLink, Diamond } from "@/components/ui/primitives";
import { articles, getArticle, publishedArticles } from "@/content/writing";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return { title: a.title, description: a.dek };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  // Unwritten pieces get an honest holding page rather than a 404.
  if (!article.body) {
    return (
      <section className="graph-paper">
        <div className="wrap flex min-h-[70vh] flex-col justify-center py-32">
          <span className="label mb-8 text-accent">{article.category}</span>
          <h1 className="display max-w-[18ch] text-[clamp(2.25rem,7vw,4.5rem)]">
            {article.title}
          </h1>
          <p className="serif-body mt-8 max-w-[42ch] text-[1.125rem] text-ink-70">
            This one isn&rsquo;t written yet. It is{" "}
            <em className="text-ink">{article.status}</em> — listed openly on the
            writing page so the plan is visible, rather than published before it
            is any good.
          </p>
          <div className="mt-10">
            <ArrowLink href="/writing">Back to writing</ArrowLink>
          </div>
        </div>
      </section>
    );
  }

  const idx = publishedArticles.findIndex((a) => a.slug === article.slug);
  const next = publishedArticles[(idx + 1) % publishedArticles.length];

  return (
    <>
      {/* Masthead */}
      <header className="graph-paper fade-bottom border-b border-[var(--rule)]">
        <div className="wrap pt-32 pb-16 sm:pt-40 sm:pb-20">
          <Link
            href="/writing"
            className="label group mb-12 inline-flex items-center gap-2.5 text-ink-45 transition-colors hover:text-ink"
          >
            <svg width="13" height="9" viewBox="0 0 13 9" fill="none" aria-hidden>
              <path
                d="M13 4.5H2M5 1L1.5 4.5L5 8"
                stroke="currentColor"
                strokeWidth="1.1"
              />
            </svg>
            <span className="link-rule">Writing</span>
          </Link>

          <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="label flex items-center gap-2.5 text-accent">
              <Diamond size={5} />
              {article.category}
            </span>
            <span className="h-px w-6 bg-[var(--rule-strong)]" />
            <span className="label-sm num text-ink-45">{article.date}</span>
            <span className="label-sm text-ink-25">{article.readingTime}</span>
          </div>

          <h1 className="display max-w-[17ch] text-[clamp(2.25rem,6.6vw,4.75rem)]">
            {article.title}
          </h1>

          {article.dek && (
            <p className="serif-body mt-9 max-w-[44ch] text-[1.1875rem] text-ink-70">
              {article.dek}
            </p>
          )}
        </div>
      </header>

      {/* Body */}
      <article className="wrap pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 hidden lg:col-span-2 lg:block">
            <div className="sticky top-28">
              <p className="label-sm border-l border-accent pl-3 leading-[1.9] text-ink-45">
                {article.category}
                <br />
                {article.date}
                <br />
                {article.readingTime} read
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:col-start-4">
            <Prose body={article.body} />
          </div>
        </div>
      </article>

      {/* Next */}
      {next && next.slug !== article.slug && (
        <section className="inverted bg-navy">
          <div className="wrap py-16 sm:py-20">
            <Link href={`/writing/${next.slug}`} className="group block">
              <span className="label text-accent">Read next</span>
              <h2 className="display mt-6 max-w-[20ch] text-[clamp(1.6rem,4.4vw,2.75rem)]">
                <span className="link-rule">{next.title}</span>
              </h2>
              {next.dek && (
                <p className="serif-body mt-4 max-w-[48ch] text-[1rem] text-ink-45">
                  {next.dek}
                </p>
              )}
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
