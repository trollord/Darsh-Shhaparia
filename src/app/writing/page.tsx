import type { Metadata } from "next";
import { PageHead } from "@/components/ui/primitives";
import { WritingIndex } from "@/components/writing/WritingIndex";
import { editorialRule } from "@/content/writing";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays on finance, mathematics, technology, the psychology of money, and business — written to understand them, not to summarise them.",
};

export default function WritingPage() {
  return (
    <>
      <PageHead
        index="04"
        kicker="Writing"
        title={
          <>
            Explaining an idea forces me to{" "}
            <span className="display-italic text-accent">understand it.</span>
          </>
        }
        lede={
          <>
            Finance, mathematics, technology, the psychology of money and
            business. One rule governs this section:{" "}
            <em className="text-ink">{editorialRule}</em>
          </>
        }
      />
      <WritingIndex />
    </>
  );
}
