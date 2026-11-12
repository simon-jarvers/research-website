# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: policy and AI-safety readers.** People at regulators, think tanks, AI-safety and AI-impact organisations, and funders who land on the page after a paper, talk, or introduction and want to know quickly what Simon works on and whether it is relevant to them.
- **Secondary: academics.** Collaborators, reviewers, and future hiring committees checking the research record: papers, venues, co-authors, abstracts.

Both arrive with a name in hand and a few minutes at most. They are judging credibility and fit, not browsing.

## Product Purpose

The personal research website of Simon Jarvers (simon-jarvers.de). In one page it should:

1. Show a coherent research agenda: AI governance (the Scalable Governance initiative and the papers behind it) plus an exploratory strand on AI in research.
2. Give a sense of Simon as a person, not just a publication list.

Success: a visitor can say in one sentence what Simon works on and why, find any paper's abstract and link, and reach him by email, LinkedIn, or Google Scholar.

## Positioning

Simon studies AI governance from the inside: as a PhD researcher at the Professorship for Societal Computing, TU Munich, who also works embedded as an AI governance specialist at an AI startup, using action research. He is building **Scalable Governance**, a research initiative with the goal of scaling AI governance to the pace of rapidly increasing capability and volume of AI systems. He is also exploring how AI changes knowledge work and its impact on epistemology in academia.

Stance: evidence-first and open about his own position. He is not a neutral observer (he builds governance workflows he also studies) and not an advocate. AI is framed as a transformative, general-purpose technology that we need to make safe and beneficial for everyone. The site does not use catastrophic-risk framing.

## Operating Context

- Visitors come from paper links, conference talks, LinkedIn, email signatures, and search for his name.
- Read on desktop and phone; often a quick scan before or after a meeting.
- Maintained by Simon alone, occasionally with Claude Code. Updates are rare: a new paper, a changed role.

## Capabilities and Constraints

- **One page**, in this order: hero → about text → two personal photos → research → footer. No subpages besides the legally required Imprint and Privacy pages and a 404.
- **Hero:** the hand-drawn sign, the line "PhD researcher in AI governance at TU Munich.", and contact icons (email, LinkedIn, Google Scholar).
- **Research:** "Scalable Governance" (initiative blurb, then papers newest first, each collapsed by default and expandable to authors, venue, abstract, and link) and "AI in research" (marked exploratory; one framing sentence plus an unnamed study under review).
- **Nav:** About · Research · Contact, as in-page anchors.
- **Stack:** plain static HTML/CSS (minimal JS only where needed), GitHub Pages, custom domain via `CNAME`. No build step.
- **Low maintenance:** nothing time-sensitive (no news feed, no "upcoming" items, no CV PDF). Adding a paper should mean adding one entry.
- **Language:** English. Imprint and Privacy follow German law (Impressumspflicht).
- **Employer:** described as "an AI startup", never named.
- **Scalable Governance** is not public yet: one blurb only, no team or funding details, no link until it launches.

## Brand Commitments

- **The hand-drawn sign** (`assets/img/sign-simon-jarvers.png`): "SIMON JARVERS" in crayon/oil pastel, each letter in its own square of a 7×2 grid with heavy black outlines and bright, mixed colours. It is the hero and the site's identity. It must be used as drawn, not redrawn, recoloured, or cropped into a logo mark.
- **Voice:** first person, plain, sober, evidence-first, inspired by Epoch AI and STABL. No hype, no catastrophe tone, no marketing language.
- **Personal photos:** `assets/img/about-mountains.png` and `assets/img/about-berlin.jpg` are part of the "sense of the person".
- **Disclaimer:** "Views expressed here are my own and do not represent those of any affiliated organisation."

## Evidence on Hand

- **About text (approved wording):**
  > AI is a transformative, general-purpose technology that we need to make safe and beneficial for everyone. I am currently interested in two areas: how to govern AI well, and understanding its impact on society. I am a PhD researcher at the Professorship for Societal Computing at TU Munich. I also work embedded as an AI governance specialist at an AI startup, which lets me study governance from the inside through action research.
  >
  > Outside of research, I love spending time in nature, building my own furniture, and trying to beat my personal records as a hobby powerlifter.
- **Scalable Governance blurb (approved wording):**
  > I am building Scalable Governance, a research initiative with the goal of scaling AI governance to the pace of rapidly increasing capability and volume of AI systems. My research so far studies this at the level of the organisations that build AI: how teams turn regulation into practice, who shapes what compliance means, and how AI agents can do governance work under human oversight. More information will follow once the initiative is founded and public.
- **AI in research (approved wording):**
  > How AI changes knowledge work and its impact on epistemology in academia. A first study, on how researchers disclose their use of generative AI in published papers, is currently under review.
- **Six papers** with full titles, authors, venues, abstracts, DOIs and links (source: the "Simon Jarvers" draft artifact): HICSS 2027 (forthcoming, no link yet), AIES 2026 *Governing by Proxy*, ECAF 2026 *Governance-Driven Development*, FAccT 2026 *Engaged AI Governance*, AIES 2025 *Participatory AI and the EU AI Act*, EWAF 2025 *Uncertainty as a Primary Barrier for Trustworthy AI Under the EU AI Act*.
- **Contact:** simon.jarvers@tum.de · https://www.linkedin.com/in/simon-jarvers/ · https://scholar.google.com/citations?user=-wdQVnkAAAAJ
- **Absent, do not fabricate:** testimonials, citation counts or metrics, talks, press, team members, funding, Scalable Governance details beyond the blurb, and the title, venues, or co-authors of the study under review.

## Product Principles

1. **Agenda over archive.** Every section should make the research program easier to grasp; a paper list alone is not the point.
2. **A person, not a profile.** The sign, the about text, and the photos carry personality; keep them prominent.
3. **True for a year.** Prefer content that stays accurate without edits; nothing that dates the page.
4. **Evidence, stated plainly.** Claims match the papers; no hype, no alarm.
5. **One entry per change.** Structure content so routine updates touch one place.

## Accessibility & Inclusion

WCAG 2.2 AA: text contrast against every background (including next to the sign's colours), full keyboard operation of the expandable paper entries and nav, visible focus, meaningful alt text (the sign reads "Simon Jarvers"), and `prefers-reduced-motion` respected.
