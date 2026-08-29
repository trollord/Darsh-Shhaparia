# Darsh Shhaparia — personal site

Next.js 16 · React 19 · Tailwind v4 · Framer Motion.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

---

## The design

**"The Notebook & The Terminal."** Two surfaces alternate through the site:

- **Paper** — warm off-white (`#f5f2ec`), faintly graph-ruled, set in a serif.
  The research notebook.
- **Navy** — deep ink (`#0b1a2a`), monospaced labels, data. The terminal.

Rules over boxes. Hairlines instead of shadows. Section numbers in the margin,
like a paper. One restrained blue-green accent (`#0d6d5b`), used for marks and
emphasis only — never as a fill for large areas.

**Type**

| Role | Face | Used for |
| --- | --- | --- |
| Display | Newsreader | Headlines, body copy, pull quotes, equations |
| Sans | Inter Tight | Navigation and interface chrome |
| Mono | JetBrains Mono | Labels, section numbers, data, code |

Everything is defined in `src/app/globals.css` — colours, type scale, the
`.label` / `.display` / `.serif-body` classes, the `.ledger` collapsed-border
grid, and the `.inverted` block that automatically re-maps every ink colour to
its paper equivalent inside a navy section.

Light only, by design. The brief's palette (off-white, charcoal, deep navy) is
already a two-surface system; a third dark variant would flatten it.

---

## Editing content

**No content lives in the page files.** Everything is typed data in
`src/content/`:

| File | Holds |
| --- | --- |
| `site.ts` | Name, bio, nav, socials, ticker strip, the four pillars, opening questions |
| `writing.ts` | All articles — published bodies and the planned pipeline |
| `projects.ts` | Projects and the eight-part write-up for each |
| `research.ts` | Research notebook entries and the nine-step protocol |
| `misc.ts` | Book, podcast, learning, journey, achievements, errata |

### Adding an article

Add an entry to `articles` in `src/content/writing.ts`. Set
`status: "published"` and give it a `body` array. The page and the route are
generated from that — nothing else to touch.

The body format is deliberately small:

```
"Plain text becomes a paragraph. *Asterisks* make italics."
"## A subhead"
"> A pull quote"
"$$ A = P(1 + r/n)^{nt}"      // ^{...} and _{...} set super/subscripts
"— A list item"
```

Articles with `status: "drafting"` or `"planned"` appear on the writing index
as a visible pipeline and get an honest holding page instead of a 404. This is
intentional: the site shows the plan rather than faking finished work.

### Adding a project or research entry

Same pattern. A project without a `sections` block renders an
"in progress" state; a research entry without a `log` renders "not started".
Both are designed states, not gaps.

### Images

`src/components/ui/Figure.tsx` renders a ruled plate with its caption when no
`src` is given — so photographs, scanned notebook pages and project screenshots
can be dropped in later without any layout work. Put files in `public/` and
pass `src="/whatever.jpg"`.

---

## Before launch

- [ ] Real domain in `site.url` (`src/content/site.ts`) — drives metadata and the sitemap
- [ ] Real email in `site.email`
- [ ] Real social URLs in `site.socials`
- [ ] Podcast episodes: replace the placeholder guest names in `misc.ts`
- [ ] Add photographs / book cover / project screenshots via `Figure`
- [ ] `public/og.png` and an `openGraph.images` entry in `src/app/layout.tsx`

---

## Structure

```
src/
  app/                  one folder per route, thin — layout only
  components/
    site/               Header, Footer, Ticker
    home/               Hero
    data/               CompoundChart (interactive), RandomWalk
    ui/                 primitives, Reveal, Prose, Glyph, Figure, CodeBlock
    writing/            WritingIndex (category filter)
  content/              all copy and data
```

`src/components/ui/primitives.tsx` holds the repeated furniture: `SectionHead`,
`PageHead`, `ArrowLink`, `Button`, `Diamond`. Reuse them rather than restyling
— they are what makes every page look like the same site.

Motion is one gesture: a 14px rise and fade, once, on scroll (`Reveal`), plus a
masked line reveal reserved for `h1`s. It respects `prefers-reduced-motion`.
