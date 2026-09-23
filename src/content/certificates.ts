/* ------------------------------------------------------------------
   CERTIFICATES

   Two sections: what was earned underwater, and what was earned at a
   desk. Each entry names its issuer and the month it was awarded.

   SOURCES — every entry below was read off the announcement post on
   Instagram (linked from `href`), except the Junior Rescue Diver
   certification, which the site already recorded. Instagram serves
   those pages behind a login wall, so the detail was recovered from
   partial page content rather than read off the certificate itself.
   Correct anything that is off; nothing here should outlive a
   contradiction.

   The share tokens (`?stkn=…`) on the original links are personal and
   are deliberately not reproduced here.
   ------------------------------------------------------------------ */

import { photos, type Photo } from "@/content/photos";

export type Certificate = {
  n: string;
  title: string;
  issuer: string;
  /** Month awarded, already formatted for display. */
  date: string;
  detail: string;
  photo?: Photo;
  /** The post that announced it. */
  href?: string;
};

export const divingCertificates: Certificate[] = [
  {
    n: "01",
    title: "Open Water Diver",
    issuer: "SSI — Scuba Schools International",
    date: "January 2025",
    detail:
      "Certified in Koh Samui, Thailand. The qualification that makes every dive after it possible — and the first time a checklist stopped feeling like paperwork.",
    href: "https://www.instagram.com/p/DFFKSBXscH2/",
  },
  {
    n: "02",
    title: "Junior Rescue Diver",
    issuer: "SSI — Scuba Schools International",
    date: "2025",
    detail:
      "The course that changed how I think about risk. It is almost entirely about noticing a small problem early, because underwater a small problem does not stay small.",
  },
];

export const educationCertificates: Certificate[] = [
  {
    n: "01",
    title: "Behavioural Finance",
    issuer: "Duke University",
    date: "August 2026",
    detail:
      "Finance is not only about numbers. It is about people, emotions, biases and the way decisions actually get made — which is the part the equations leave out.",
    href: "https://www.instagram.com/p/DcVqQU6NHUI/",
  },
  {
    n: "02",
    title: "Financial Markets",
    issuer: "Yale University, via Coursera",
    date: "August 2026",
    detail:
      "The certificate matters less than the discipline of finishing it. Most of the value was in the sessions I did not feel like starting.",
    href: "https://www.instagram.com/p/DcArsAaNNE9/",
  },
  {
    n: "03",
    title: "High Commendation — G20 Committee",
    issuer: "IIMUN 2025, at Edubridge International School",
    date: "November 2025",
    detail:
      "Representing a position on the G20 in front of a room of delegates who were ready to argue with it. The preparation was finance; the hard part was the speaking.",
    photo: photos.certIimun2025,
    href: "https://www.instagram.com/p/DRL6FzMjDwz/",
  },
  {
    n: "04",
    title: "Model United Nations",
    issuer: "MUN 2025",
    date: "September 2025",
    detail:
      "An earlier conference, and the win that made the later ones feel possible.",
    href: "https://www.instagram.com/p/DO8dusYkvRJ/",
  },
  {
    n: "05",
    title: "IIMUN Geneva",
    issuer: "India's International Movement to Unite Nations",
    date: "November 2025",
    detail:
      "Geneva, on the Canada delegation, in committee at the WHO. The first time the room was international rather than national.",
    href: "https://www.instagram.com/p/DQjhM53Er1N/",
  },
];

export const certificatesRule =
  "Each of these is a course finished or a committee argued in, not a badge collected. Where there is a certificate, it is because something was completed end to end.";
