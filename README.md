# Grai Rudolf Portfolio

I built this portfolio as my personal website so recruiters, founders, collaborators, and admissions teams can quickly understand who I am, what I build, and how to contact me.

This project is designed to be:

- Personal and editable from one data source
- Fast and fully static for simple deployment
- Visually distinctive (Neo Brutalism style)
- Ready for continuous updates as I ship new work

## What This Website Includes

- Hero section with profile, role, and key stats
- Experience timeline with company highlights
- Featured and expandable projects section
- Skills section (languages, tools, soft skills)
- Communities and volunteering section
- Blog preview on home + full blog page at `/blog`
- Contact section with links and CV access

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Phosphor Icons + Simple Icons (`react-icons/si`)
- **Blog:** MDX with `next-mdx-remote`
- **Package Manager:** pnpm
- **Deployment mode:** Static export (`output: "export"`)

## How Content Is Managed

I set this up so content updates are easy:

- Main portfolio content lives in `data/portfolio.ts`
- Blog posts are `.mdx` files in `content/blog/`
- Images and documents are in `public/`

To update my profile, projects, experience, links, or stats, I only need to edit `data/portfolio.ts`.

To publish a new blog post, I add a new `.mdx` file with frontmatter in `content/blog/`.

## Project Structure

```text
app/
  layout.tsx
  page.tsx
  blog/page.tsx
components/
  sections/
  ui/
content/
  blog/*.mdx
data/
  portfolio.ts
lib/
  blog.ts
  utils.ts
public/
  logo.png
  avatar.jpg
  qrcode.png
  companies/*
  projects/*
  cv.pdf
```

## Local Setup

```bash
pnpm install
```

## Run the Website

```bash
pnpm dev
```

Then open:

- `http://localhost:3000`
- If 3000 is busy, Next.js automatically uses the next free port (for example `3001`).

## Build for Production

```bash
pnpm typecheck
pnpm build
```

This generates a static production build suitable for Vercel or any static host.

## Deploy

This project is static-export ready. You can deploy directly after running:

```bash
pnpm build
```

No backend or database setup is required.
