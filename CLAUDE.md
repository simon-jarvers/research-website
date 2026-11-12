# research-website

Static personal research website (plain HTML/CSS, served via GitHub Pages with a custom domain in `CNAME`).

## Branches

- `master` is the published branch. Never commit to it directly; work on a branch and merge via pull request.
- Branch names are `<type>/<short-kebab-description>`, describing the change, not the tool or session:
  - `feat/` new pages or features — `feat/publications-page`
  - `fix/` bugs and broken links — `fix/mobile-nav-overflow`
  - `design/` visual or layout rework — `design/homepage-typography`
  - `content/` text, papers, CV updates — `content/add-2026-paper`
  - `chore/` tooling, config, SEO files — `chore/update-sitemap`
- Keep the description to 2–5 words, lowercase, hyphen-separated. No dates, ticket numbers or generic names like `update` or `test`.
- Delete a branch once it is merged.

## Commits

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<optional scope>): <imperative summary, lowercase, no period>
```

- Types: `feat`, `fix`, `design`, `content`, `chore`, `docs`, `refactor`.
- Scope is the page or area touched, e.g. `feat(research): add project cards`, `fix(nav): close menu on link click`.
- Summary line at most 72 characters, imperative mood ("add", not "added").
- One logical change per commit; add a body explaining *why* when it is not obvious.

## Tooling

- The Impeccable design skill is installed by the cloud environment's setup script, not committed. Its files (`.claude/skills/impeccable/`, `.claude/agents/impeccable-*`, `.claude/settings.local.json`) are excluded locally via `.git/info/exclude`; do not commit them.
