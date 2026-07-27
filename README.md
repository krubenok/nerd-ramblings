# Nerd Ramblings

Kyle Rubenok's personal technology blog, built as a fully static Astro site and deployed to
Cloudflare Workers.

## Architecture

- **Astro 7** owns routing, MDX content collections, image optimization, RSS, sitemap generation,
  canonical metadata, and Content Security Policy generation.
- **Vite 8 with Rolldown** is Astro's build pipeline. Vite is kept as an explicit development
  dependency so Dependabot can surface updates directly.
- **Cloudflare Workers static assets** serves the generated `dist/` directory. There is no Worker
  runtime script, framework adapter, or server-side rendering path.
- **Wrangler configuration** in `wrangler.jsonc` is the source of truth for the Worker, custom
  domain, preview URLs, HTML routing, and 404 behavior.
- **GitHub Actions** validates every change, while Cloudflare Workers Builds owns preview and
  production deployments through its native GitHub integration.
- **Oxlint + tsgolint** applies correctness, suspicious, pedantic, performance, and style rules as
  errors. Type-aware linting and TypeScript diagnostics are always enabled.
- **Oxfmt** formats every supported text format. Oxfmt does not currently support `.astro` files,
  so `oxfmt.config.ts` excludes them and Astro's compiler validates them during `astro sync` and
  `astro build`.

The result is prerendered HTML, CSS, and optimized images with no client-side application
JavaScript.

## Development

Use Node 24 (the current project runtime; Astro 7 requires Node 22.12 or newer):

```sh
npm ci
npm run dev
```

Useful commands:

```sh
npm run format       # Write Oxfmt-supported files
npm run lint         # Type-aware Oxlint + TypeScript diagnostics
npm run check        # Format check, lint, content validation, and production build
npm run preview      # Preview the generated production output
```

The committed lockfile makes local and CI installs reproducible.

## Writing

Posts live in `src/content/posts/<slug>/index.mdx`. Images stored beside a post can be referenced
with relative Markdown paths and Astro will optimize them during the build.

Required frontmatter:

```yaml
---
title: A useful title
date: 2026-07-26
tags:
  - Homelab
excerpt: A concise description used in listings, social metadata, and RSS.
---
```

Optional fields are `slug`, `description`, `banner`, and `draft`. A frontmatter `slug` preserves a
historical URL when it differs from the directory name.

Site-wide metadata, navigation, and social profiles live in `src/config/site.ts`. Content schemas
live in `src/content.config.ts`.

## GitOps and Cloudflare

Production and preview deployments use Cloudflare Workers Builds connected directly to this GitHub
repository. Cloudflare manages the build token internally, so GitHub does not store Cloudflare
credentials.

The Worker build settings are:

- Production branch: `main`
- Build command: `npm run build:cloudflare`
- Deploy command: `npx wrangler deploy`
- Non-production branch deploy command: `npx wrangler versions upload`
- Root directory: `/`

`wrangler.jsonc` declares `nerd-ramblings.com` as a Worker Custom Domain. The first production
deployment can therefore replace the existing DNS origin; verify a branch preview URL before
merging the cutover.

The Cloudflare build fetches the current `resume.pdf` from the public `krubenok/resume` repository
before building. This preserves the prior build-time résumé integration without committing
generated documents here.

Cloudflare uploads non-production branches as immutable preview versions and reports their status
and preview URLs to GitHub. GitHub Actions remains responsible for the independent formatting,
linting, type, build, and workflow-security checks.

## Why not Vite+ yet?

Vite+ is promising and supports Vite-based frameworks, but it is still marked **beta** in its
official documentation. Astro 7 already includes stable Vite 8 and Rolldown, while standalone
Oxlint and Oxfmt provide the useful parts of that toolchain without adding a global runtime/package
manager dependency. Once Vite+ is stable, `vp migrate` can adopt it without changing the Astro or
Cloudflare architecture.

## Migration notes

- Existing MDX posts, publication dates, tags, images, `/about`, `/working-with-kyle`, and root post
  URLs are preserved.
- The historical `twiltercom` frontmatter slug remains the canonical URL.
- Broken relative links between the 2019 and 2021 "Building This Blog" posts are corrected, with
  Cloudflare redirects for the old accidental nested paths.
- `/resume` permanently redirects to `/resume/resume.pdf`.
- Gatsby, React, Theme UI, Vercel configuration, and their build-time dependency graph are removed.

## Authoritative references

- [Astro 7 release and Vite 8 integration](https://astro.build/blog/astro-7/)
- [Astro content collections](https://docs.astro.build/en/guides/content-collections/)
- [Astro configuration and CSP](https://docs.astro.build/en/reference/configuration-reference/)
- [Cloudflare's Astro on Workers guide](https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/)
- [Cloudflare Workers static asset headers](https://developers.cloudflare.com/workers/static-assets/headers/)
- [Cloudflare Workers HTML handling](https://developers.cloudflare.com/workers/static-assets/routing/advanced/html-handling/)
- [Wrangler configuration](https://developers.cloudflare.com/workers/wrangler/configuration/)
- [Cloudflare Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/)
- [Cloudflare GitHub integration](https://developers.cloudflare.com/workers/ci-cd/builds/git-integration/github-integration/)
- [Vite 8 release](https://vite.dev/blog/announcing-vite8)
- [Vite+ getting started](https://viteplus.dev/guide/)
- [Oxlint type-aware linting](https://oxc.rs/docs/guide/usage/linter/type-aware)
- [Oxfmt language support](https://oxc.rs/docs/guide/usage/formatter/language-support)
