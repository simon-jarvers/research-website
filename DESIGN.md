---
name: Simon Jarvers
description: Shop drawing, cut-list variant. Graphite linework on drafting film; the hand-drawn sign is the only painted plate.
colors:
  film: "#f3f5f3"
  film-base: "#fcfefc"
  ink: "#1c1d1f"
  ink-soft: "#4a4d52"
  hair: "rgb(28 29 31 / 0.28)"
  panel-blue: "#2e8fd6"
  panel-pink: "#e2569a"
  panel-teal: "#1f9e8f"
  panel-ochre: "#f2b220"
  panel-violet: "#8a4fa0"
  panel-green: "#2fa84a"
  paper-white: "#ffffff"
typography:
  display:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 2.2vw, 2.75rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1rem + 0.9vw, 1.5rem)"
    fontWeight: 500
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.5vw, 1.4375rem)"
    fontWeight: 600
    letterSpacing: "-0.01em"
  part-title:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 500
    lineHeight: 1.4
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    fontFeature: "tnum"
  label:
    fontFamily: "Archivo Narrow, Arial Narrow, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    letterSpacing: "0.1em"
  label-small:
    fontFamily: "Archivo Narrow, Arial Narrow, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.1em"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(16px, 4vw, 56px)"
  page: "1040px"
  measure: "34em"
  row: "16px"
  column: "20px"
  icon-gap: "10px"
components:
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    size: "44px"
  icon-button-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.film}"
  part-number:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "3px 7px"
  part-number-open:
    backgroundColor: "{colors.panel-blue}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "3px 7px"
  part-number-open-violet:
    backgroundColor: "{colors.panel-violet}"
    textColor: "{colors.paper-white}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  part-row:
    typography: "{typography.part-title}"
    padding: "16px 0"
---

# Design System: Simon Jarvers

## Overview

**Creative North Star: "The Shop Drawing"**

The page is the shop drawing for something being built, reduced to its cut list. Everything is graphite linework on a cool sheet of drafting film; the hand-drawn crayon sign is the only painted plate, and its colours leave it only to mark state. The system rejects the academic template (serif name, cream ground, bulleted publication list) and the corporate claim-and-proof page.

Density is calm and linear: one centred column of reading measure, sections separated by heavy ruled lines, papers listed as numbered parts divided by hairlines. There is no grid paper, no dimension lines and no title block; the drawing metaphor lives in the pens, the narrow drafting caps and the part numbers, not in decoration.

Motion is mechanical and quiet: parts slide out of the list, the sign's panels lift off and reassemble in the header, content rises a little as it enters view. Every motion has a reduced-motion and no-script fallback where the content is simply there.

**Key Characteristics:**
- Cool drafting film with a faint paper grain; graphite ink; square corners everywhere.
- Two pens only: heavy 2px and 1px hair.
- Narrow drafting caps for labels, a plain grotesk for reading.
- Sign colours appear only as state, one panel colour per opened part.
- The sign is used as drawn, never redrawn or recoloured.

## Colors

A near-monochrome graphite-on-film palette with six crayon panel colours held in reserve for state.

### Primary
- **Graphite Ink** (`ink`): all text, every heavy rule, icon-button strokes, focus outlines, photo frames, toggle bars. Also the fill of a hovered icon button.

### Secondary
- **Sign Panel Colours** (`panel-blue`, `panel-pink`, `panel-teal`, `panel-ochre`, `panel-violet`, `panel-green`): sampled from the hand-drawn sign. Each paper is assigned one; it fills that paper's part-number cell only while the paper is open. Ink text on all of them except violet, which takes white (`paper-white`). The sign's seventh colour, red, is not in the system: neither ink nor white reaches AA on it at label size.

### Neutral
- **Drafting Film** (`film`): the net ground the eye reads. It is produced, not painted: `film-base` sits under two SVG fractal-noise layers (a fine 240px grain at 7% and a broad 900px mottle at 5%), fixed to the viewport. `film` itself is used flat for text on ink (hover inversion, skip link) and as the 97% viewer backdrop.
- **Film Base** (`film-base`): the near-white under the grain. Use only together with the grain layers; on its own it is too bright.
- **Soft Graphite** (`ink-soft`): secondary text, meaning venues, counts, full venue lines, notes, footer body, DOI and pending-link text.
- **Hair** (`hair`): ink at 28%. Row dividers in the parts list, link underlines at rest, the docked header's bottom line.

### Named Rules
**The Only Painted Plate Rule.** The sign is the only coloured object at rest. A panel colour appears only when something is opened (a part cell) or selected (text selection uses ochre); never as a section tint, badge, button fill or decoration.

**The Grain-Under Rule.** Any surface that must read as the page ground (body, sticky header) is `film-base` under the two grain layers with fixed attachment, so the header and page share one continuous sheet.

## Typography

**Body Font:** Hanken Grotesk (variable 100–900, roman and italic, self-hosted woff2; fallback system-ui)
**Label Font:** Archivo Narrow (400–700, self-hosted woff2; fallback Arial Narrow)

**Character:** A plain, slightly warm grotesk does all the reading and every heading; the narrow caps play the drafter's lettering on part numbers, venues, nav and meta lines. Neither one tries to be expressive; the sign carries the personality.

### Hierarchy
- **Display** (`display`): Research section title and legal or 404 page titles.
- **Headline** (`headline`): the single role line under the sign.
- **Title** (`title`): cut-list group headings (Scalable Governance, AI in research), sitting on a heavy rule.
- **Part Title** (`part-title`): paper titles in list rows; hover underlines in 1px at 0.22em offset.
- **Body** (`body`): all reading, tabular numerals on. Measure capped at 34em. The about text grows to 1.1875rem on wide screens.
- **Label** (`label`, uppercase): nav, part numbers, venues, counts, paper links, footer title. `label-small` for the legal line and page meta.

### Named Rules
**The Drafting Caps Rule.** Archivo Narrow is always 600, uppercase and tracked 0.1em; it never sets a heading or a sentence of reading text.

**The One Reading Face Rule.** Every heading and paragraph is Hanken Grotesk; hierarchy comes from size and weight (400/500/600), not from a second display face.

## Layout

A single centred column `min(1040px, 100% - 2 × gutter)` with a fluid gutter. Reading blocks cap at the 34em measure inside it. The hero centres the sign at `min(720px, 100%)` with the role line and icon row beneath. Sections are separated by generous fluid vertical space (about 40–152px clamps) and, at the about and footer boundaries, by a full-width heavy rule.

Paper rows are a four-column grid: part number (4.5rem), title (1fr), venue (15rem), toggle (28px), 20px column gap, 16px vertical padding. Opened details indent to the title column. At 720px and below the row collapses to number, title-with-venue-beneath and toggle (3.5rem / 1fr / 20px, 12px gap), the photo pair stacks, and nav gaps tighten to 14px. At 420px and below opened details lose their indent.

The header is sticky, 72px tall, with the name slot left and anchor links right; in-page anchors land with 96px scroll padding.

## Elevation & Depth

Flat. There are no drop shadows; depth is conveyed only by the paper grain and by line weight. The one `box-shadow` in the build is an inset 1px hair line under the docked header, which is a drawn rule, not elevation. The photo viewer separates itself by covering the page with near-opaque film (97%) and framing the image in the heavy pen, not by lifting.

### Named Rules
**The Two Pens Rule.** Every line is either the heavy pen (2px ink: section rules, cut-list openers, icon-button borders, toggle bars, focus outlines, hovered and enlarged photo frames) or the hair pen (1px: row dividers and underlines in `hair`, photo frames at rest in ink). No third weight, no dashed or double lines.

## Shapes

Square corners throughout (`rounded.none`): buttons, photo frames, part cells, the viewer image. Outlines are the form language; filled shapes appear only on hover inversion and opened part cells. Icons are drawn line icons (24px viewBox, 20px rendered, 1.6 stroke, round caps and joins). The forthcoming state is a small outlined drafting revision triangle (11px, 1.5 stroke) before the word "Forthcoming", inside the venue label.

## Components

### Icon Buttons
Outlined squares, used for contact links (email, LinkedIn, Google Scholar) in hero and footer, and for the viewer's close button.
- **Shape:** 44×44px square, 2px ink border, transparent fill, 10px apart.
- **Hover:** inverts to ink fill with film-coloured icon over 0.2s.
- **Focus:** 2px ink outline at 3px offset (global).
- Always carry an `aria-label`; the icon is `aria-hidden`.

### Cut List (paper rows)
The signature component. A group heading on a heavy rule, an intro paragraph, then an ordered list of parts between hairlines. Each part is a native `details` element.
- **Closed:** part number (`P-06`…) in drafting caps, title, venue in soft caps, a 14px plus toggle drawn with two 2px ink bars.
- **Open:** the part cell fills with that paper's panel colour (0.35s), the plus rotates to a minus, and the details slide open via `::details-content` block-size (0.5s). Body: subtitle, authors with the owner's name in 600, full venue, abstract, links in caps.
- **Forthcoming:** the revision triangle and "Forthcoming" sit in the venue cell; the link line reads "Link follows on publication" in soft graphite.
- A group with no listed papers (`cutlist--open`) shows its status ("Exploratory") as a soft label opposite the heading.

### Navigation
Sticky header on the grained film, links in drafting caps (0.8125rem), no underline at rest, underline on hover. The name slot holds the small sign on scripted pages; without script the text name stands in. When the flying sign docks, a hair line appears under the header.

### Sign Flight (index only)
As the hero scrolls away, the sign's 14 panels (7×2) leave column by column, top row first, with a staggered ease-out and a hand-placed tilt of up to ±7°, and reassemble at small size in the header name slot. Panels still resting in the hero clip under the header. Reduced motion: the small sign fades in when docked (0.4s). No script: the hero image stays put.

### Photos and Viewer
Personal photos at 4:3, framed in a 1px ink line. Hover or focus scales the photo to 1.025 and steps the frame to the heavy pen (0.45s), cursor zoom-in. Click opens a native modal dialog: film backdrop at 97%, square close button top right, the image contained and framed in 2px ink, fading in and scaling from 0.96. No captions. Backdrop click and Escape close it; focus returns to the photo. Without script the link opens the full image.

### Scroll Emergence
Headings, intros, closed part rows and photos rise 28px and unblur from 3px as they enter view, scroll-driven over the first 96px of entry (`animation-timeline: view()`). Never applied to the first viewport or to opened content. Unsupported browsers and reduced motion show content at rest.

## Do's and Don'ts

### Do:
- **Do** draw every line with one of the two pens: 2px ink or 1px hair.
- **Do** keep the panel colours for state: one colour per paper, shown only in its opened part cell, with ink text (white on violet).
- **Do** mark forthcoming work with the outlined revision triangle and the word, inside the venue label.
- **Do** use outlined 44px square icon buttons that invert to ink on hover.
- **Do** set labels in Archivo Narrow 600 uppercase at 0.1em, and everything else in Hanken Grotesk.
- **Do** give every motion a reduced-motion and no-script state where the content is simply present.
- **Do** use the sign exactly as drawn; tile it for the flight, never redraw or recolour it.

### Don't:
- **Don't** add drop shadows, rounded corners or a third line weight.
- **Don't** use a panel colour as a background tint, badge, button fill or decoration at rest.
- **Don't** use the sign's red for a part cell; it fails contrast at label size with ink or white.
- **Don't** add grid paper, dimension lines or a title block; the drawing lives in pens and lettering.
- **Don't** caption the personal photos.
- **Don't** set headings or reading text in the narrow caps, or introduce a separate display face.
