---
name: Simon Jarvers
description: Shop drawing, cut-list variant. Graphite linework on drafting film; the hand-drawn sign is the only painted plate, and real crayon cropped from it is the only other drawn material.
colors:
  film: "#f3f5f3"
  film-base: "#fcfefc"
  film-deep: "#e7eae7"
  film-deep-base: "#f0f3f0"
  ink: "#1c1d1f"
  ink-soft: "#4a4d52"
  hair: "rgb(28 29 31 / 0.28)"
  selection-ochre: "#f2b220"
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
    lineHeight: 1.3
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
  body-small:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.65
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
  page: "1080px"
  col-gap: "clamp(24px, 4vw, 56px)"
  measure: "34em"
  row: "16px"
  column: "20px"
  icon-gap: "10px"
  crayon-line: "18px"
  crayon-underline: "16px"
  abstract-measure: "38em"
  mark: "clamp(118px, 12vw, 190px)"
components:
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    size: "44px"
  icon-button-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.film}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  sheet-label:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
  part-row:
    typography: "{typography.part-title}"
    padding: "16px 0"
  part-swatch:
    rounded: "{rounded.none}"
    size: "22px"
  part-meta:
    typography: "{typography.body-small}"
  footer-band:
    backgroundColor: "{colors.film-deep}"
    textColor: "{colors.ink-soft}"
    typography: "{typography.body-small}"
---

# Design System: Simon Jarvers

## Overview

**Creative North Star: "The Shop Drawing"**

The page is the shop drawing for something being built, reduced to its cut list. Everything is graphite linework on a cool sheet of drafting film; the hand-drawn crayon sign is the only painted plate, and the only colour that leaves it is real crayon cropped from it: a small framed swatch per paper and the sign's own bottom border line opening each sheet across the full width of the screen, in its own black or refilled with the sign's blue and pink. The system rejects the academic template (serif name, cream ground, bulleted publication list) and the corporate claim-and-proof page.

Density is calm and two-columned: each section is a sheet, opened by a crayon line, with its label in a narrow left column and its text in a wide right column of reading measure. Papers are listed as parts divided by hairlines, each led by its crayon swatch; an opened part reuses the same two columns, details left and abstract right. There is no grid paper, no dimension lines and no title block; the drawing metaphor lives in the pens, the crayon, and the narrow drafting caps, not in decoration.

Motion is mechanical and quiet: parts slide out of the list, the sign's panels lift off along the drawing's own grid lines and reassemble in the header, content rises a little as it enters view. Every motion has a reduced-motion and no-script fallback where the content is simply there.

**Key Characteristics:**
- Cool drafting film with a faint paper grain; graphite ink; square corners everywhere.
- Two pens (2px ink, 1px ink or hair) plus real crayon lines lifted from the sign, running edge to edge.
- Sheets: label left, text right, on one shared two-column grid.
- Narrow drafting caps for labels, a plain grotesk for reading.
- Colour exists only as crayon from the sign: the sign itself, one swatch per paper, and the blue and pink openers of the two research groups.
- The sign is used as drawn, never redrawn or recoloured.

## Colors

A near-monochrome graphite-on-film palette; colour enters only as raster crayon taken from the sign, never as a flat token.

### Primary
- **Graphite Ink** (`ink`): all text, every 2px and 1px ink line (icon buttons, toggle bars, focus outlines, photo frames, the footer's top line). Also the fill of a hovered icon button.

### Neutral
- **Drafting Film** (`film`): the net ground the eye reads. It is produced, not painted: `film-base` sits under two SVG fractal-noise layers (a fine 240px grain at 7% and a broad 900px mottle at 5%), fixed to the viewport. `film` itself is used flat for text on ink (hover inversion, skip link) and as the 97% viewer backdrop.
- **Film Base** (`film-base`): the near-white under the grain. Use only together with the grain layers; on its own it is too bright.
- **Deep Film** (`film-deep`): the footer band as seen. Produced the same way: `film-deep-base` under the same grain layers.
- **Deep Film Base** (`film-deep-base`): the base under the grain for the footer band only.
- **Soft Graphite** (`ink-soft`): secondary text, meaning venues, counts, full venue lines, notes, footer body, DOI and pending-link text.
- **Hair** (`hair`): ink at 28%. Row dividers in the parts list, link underlines at rest, the docked header's bottom line.

### Accent
- **Selection Ochre** (`selection-ochre`): text selection background only, ink text on it. The one flat colour in the build, kept as a literal.

### Named Rules
**The Only Painted Plate Rule.** The sign is the only painted object. Its colour leaves it only as real crayon taken from the scan: one swatch per paper (blue, pink, teal, ochre, violet, green), framed in pieces of the sign's black border line, and the crayon opener line. The opener is the border line in its own black (About, document titles) or, for the two research groups, the same line's alpha filled with a crop of the sign's real blue (Scalable Governance) or pink (AI in research, mirrored) crayon. Coloured openers mark research groups only, one fill per group, taken from the sign. There are no flat panel-colour tokens; never introduce a colour as a section tint, badge, button fill or decoration. Text selection in ochre is the single flat exception.

**The Grain-Under Rule.** Any surface that must read as paper (body, sticky header, footer band) is a base colour under the two grain layers with fixed attachment, so every surface shares one continuous sheet. The base is chosen so the net tone reads as the intended film (`film-base` reads as `film`, `film-deep-base` reads as `film-deep`).

## Typography

**Body Font:** Hanken Grotesk (variable 100–900, roman and italic, self-hosted woff2; fallback system-ui)
**Label Font:** Archivo Narrow (400–700, self-hosted woff2; fallback Arial Narrow)

**Character:** A plain, slightly warm grotesk does all the reading and every heading; the narrow caps play the drafter's lettering on venues, nav, counts and meta lines. Neither one tries to be expressive; the sign carries the personality.

### Hierarchy
- **Display** (`display`): Research section title and legal or 404 page titles.
- **Headline** (`headline`): the single role line under the sign.
- **Title** (`title`): sheet labels in the left column (About, Scalable Governance, AI in research).
- **Part Title** (`part-title`): paper titles in list rows; hover underlines in 1px at 0.22em offset. The opened part's subtitle uses 600 at 1rem.
- **Body** (`body`): all reading, tabular numerals on. Measure capped at 34em; the one deliberate exception is the opened paper's abstract at 38em (`abstract-measure`), the owner's choice to use more of the right column. The about text grows to 1.1875rem on wide screens.
- **Body Small** (`body-small`): opened-part meta column and the footer.
- **Label** (`label`, uppercase): nav, venues, counts, paper links, footer title. `label-small` for the legal line and page meta.

### Named Rules
**The Drafting Caps Rule.** Archivo Narrow is always 600, uppercase and tracked 0.1em; it never sets a heading or a sentence of reading text.

**The One Reading Face Rule.** Every heading and paragraph is Hanken Grotesk; hierarchy comes from size and weight (400/500/600), not from a second display face.

## Layout

A single centred page `min(1080px, 100% - 2 × gutter)` with a fluid gutter. Inside it, sheets use one shared two-column grid: a narrow label column and a wide text column (`minmax(0, 1fr) minmax(0, 2.4fr)`, gap `col-gap`). Reading blocks cap at the 34em measure in the right column. Each sheet opens with an 18px crayon line that runs the full viewport width (`100vw`, centred on the sheet by `justify-self: center`; the body clips horizontal overflow so it never scrolls sideways), followed by 28–44px of space. Full-width content inside a sheet (the photo pair, the parts list) spans both columns.

The hero centres the sign at `min(720px, 100%)` with the role line and icon row beneath. Sections are separated by generous fluid vertical space (about 32–152px clamps).

Paper rows are a four-column grid: swatch (22px), title (1fr), venue (15rem), toggle (28px), 20px column gap, 16px vertical padding, vertically centred. An opened part's body repeats the sheet grid: meta (subtitle, authors, venue, links) in the left column, indented 42px to align with the title, and the abstract in the right column at 38em, a deliberate exception to the 34em measure.

Breakpoints: at 860px and below sheets, opened part bodies and the footer collapse to one column (labels gain 14px beneath; the abstract keeps the 42px indent). At 720px and below the row becomes swatch, title-with-venue-beneath and toggle (22px / 1fr / 20px, 12px gap, top-aligned), the photo pair stacks, opened details indent 34px, and nav gaps tighten to 14px. At 420px and below opened details lose their indent.

The header is sticky with an 80px minimum height, the name slot left and anchor links right; in-page anchors land with 104px scroll padding. The docked mark is `mark` wide.

## Elevation & Depth

Flat. There are no drop shadows; depth is conveyed only by the paper grain, tone (the deeper footer band), and line weight. The one `box-shadow` in the build is an inset 1px hair line under the docked header, which is a drawn rule, not elevation. The photo viewer separates itself by covering the page with near-opaque film (97%) and framing the image in the heavy pen, not by lifting.

### Named Rules
**The Two Pens Rule.** Every drawn line is either the heavy pen (2px ink: icon-button borders, toggle bars, focus outlines, hovered and enlarged photo frames) or the fine pen (1px: photo and footer-band lines in ink; row dividers and underlines in `hair`). The only other line is real crayon: the sign's own bottom border, cropped from the scan, opening each sheet edge to edge at 18px (black, or its alpha refilled with the sign's blue or pink for the two research groups), underlining document titles at 16px, and cut into pieces to frame each swatch inside the swatch image. Swatches carry no CSS border. No third pen weight, no dashed or double lines, no CSS-drawn imitation of crayon.

## Shapes

Square corners throughout (`rounded.none`): buttons, photo frames, swatches, the viewer image. Outlines are the form language; filled shapes appear only on hover inversion, and colour appears only as crayon: inside the swatches and in the two research groups' opener lines. Icons are drawn line icons (24px viewBox, 20px rendered, 1.6 stroke, round caps and joins). The forthcoming state is a small outlined drafting revision triangle (11px, 1.5 stroke) before the word "Forthcoming", inside the venue label.

## Components

### Icon Buttons
Outlined squares, used for contact links (email, LinkedIn, Google Scholar) in hero and footer, and for the viewer's close button.
- **Shape:** 44×44px square, 2px ink border, transparent fill, 10px apart.
- **Hover:** inverts to ink fill with film-coloured icon over 0.2s.
- **Focus:** 2px ink outline at 3px offset (global).
- Always carry an `aria-label`; the icon is `aria-hidden`.

### Sheet
The section unit. An 18px crayon line across the full viewport width, then the label (`title`) in the left column and the content in the right. The line is `var(--crayon)`, defaulting to the black `crayon-ink.webp`; `sheet--blue` and `sheet--pink` swap in the recoloured lines for the two research groups. Used by About (black) and by each cut-list group (blue, pink); legal pages use the black line at 16px under their display title.

### Cut List (paper rows)
The signature component. A sheet whose label column holds the group heading (with an optional soft status label beneath, e.g. "Exploratory"), whose text column holds the intro, and whose full width holds an ordered list of parts between hairlines. Each part is a native `details` element.
- **Closed:** a 22px crayon swatch whose frame of real black crayon is part of the image (no CSS border), title, venue in soft caps, a 14px plus toggle drawn with two 2px ink bars. Papers carry no part numbers.
- **Open:** the swatch scales to 1.3 (0.35s), with no border change, the plus rotates to a minus, and the details slide open via `::details-content` block-size (0.5s). Body: meta column (subtitle, authors with the owner's name in 600, full venue, links in caps) and abstract column.
- **Forthcoming:** the revision triangle and "Forthcoming" sit in the venue cell; the link line reads "Link follows on publication" in soft graphite.

### Navigation
Sticky header on the grained film, links in drafting caps (0.8125rem), no underline at rest, underline on hover. The name slot holds the small sign on scripted pages; without script the text name stands in. When the flying sign docks, a hair line appears under the header.

### Sign Flight (index only)
As the hero scrolls away, the sign is cut into its 14 panels (7×2) along the drawing's measured grid lines, never an even split. Each panel lifts off shortly before its top edge would reach the header (left columns a little earlier), travels 300px of scroll on a cubic ease-out with a hand-placed tilt of up to ±7°, and reassembles at small size in the header name slot. Panels fly above the header; nothing is clipped. Reduced motion: the small sign fades in when docked (0.4s). No script: the hero image stays put.

### Photos and Viewer
Personal photos at 4:3, framed in a 1px ink line. Hover or focus scales the photo to 1.025 and steps the frame to the heavy pen (0.45s), cursor zoom-in. Click opens a native modal dialog: film backdrop at 97%, square close button top right, the image contained and framed in 2px ink, fading in and scaling from 0.96. No captions. Backdrop click and Escape close it; focus returns to the photo. Without script the link opens the full image.

### Footer Band
A full-width band in deep film under the grain, opened by a single 1px ink line. Its inner grid repeats the sheet columns: contact (title in caps, icon buttons, ink) left; affiliation, note and legal line (soft graphite) right.

### Scroll Emergence
Headings, intros, closed part rows and photos rise 28px and unblur from 3px as they enter view, scroll-driven over the first 96px of entry (`animation-timeline: view()`). Never applied to the first viewport or to opened content. Unsupported browsers and reduced motion show content at rest.

## Do's and Don'ts

### Do:
- **Do** draw every line with the 2px or 1px pen, or with real crayon cropped from the sign.
- **Do** lay sections out as sheets: crayon line, label in the left column, text in the right, on the shared 1 : 2.4 grid.
- **Do** bring colour in only as crayon from the sign scan: one swatch per paper, and a recoloured opener line per research group.
- **Do** mark forthcoming work with the outlined revision triangle and the word, inside the venue label.
- **Do** use outlined 44px square icon buttons that invert to ink on hover.
- **Do** set labels in Archivo Narrow 600 uppercase at 0.1em, and everything else in Hanken Grotesk.
- **Do** give every motion a reduced-motion and no-script state where the content is simply present.
- **Do** use the sign exactly as drawn; cut it along its own grid lines for the flight, never redraw or recolour it.

### Don't:
- **Don't** add drop shadows, rounded corners or a third pen weight.
- **Don't** define flat colour tokens from the sign or use colour as a background tint, badge, button fill or decoration.
- **Don't** imitate crayon with CSS or SVG; use crops of the real scan.
- **Don't** invent numbering for papers.
- **Don't** add grid paper, dimension lines or a title block; the drawing lives in pens, crayon and lettering.
- **Don't** caption the personal photos.
- **Don't** set headings or reading text in the narrow caps, or introduce a separate display face.
