# HealthPlus Clinic (Next.js 15, TypeScript, Tailwind)

Minimal, monochrome (black/white) hospital/clinic website with colored SVG icons. Built with Next.js App Router, TypeScript, and Tailwind.

## Quick start

```bash
# install deps
npm install
# dev
npm run dev
# build
npm run build
```

## Structure
- `app/` routes (server parents) with client children where needed
- `css/globals.css` single Tailwind stylesheet
- `lib/data.ts` centralized dummy data (departments, doctors, services)
- `public/icons/*` colored SVG icons

## Notes
- Dark/Light via `data-theme` attribute + toggle
- Monochrome UI: only black/white for text/background; icons may be colored
- Reservation form validates VN phone, email, date/timeThis is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
