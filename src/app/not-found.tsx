import { ArrowLink } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <section className="graph-paper">
      <div className="wrap flex min-h-[80vh] flex-col justify-center py-32">
        <span className="label mb-8 text-accent">Error 404</span>
        <h1 className="display max-w-[16ch] text-[clamp(2.5rem,8vw,5rem)]">
          This page doesn&rsquo;t exist{" "}
          <span className="display-italic text-ink-45">yet.</span>
        </h1>
        <p className="serif-body mt-8 max-w-[40ch] text-[1.125rem] text-ink-70">
          Which is either a broken link or a page that hasn&rsquo;t been
          written. Both are worth knowing about.
        </p>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
          <ArrowLink href="/">Back to the homepage</ArrowLink>
          <ArrowLink href="/book">Read something instead</ArrowLink>
        </div>
      </div>
    </section>
  );
}
