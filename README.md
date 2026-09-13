# Red Planet Registry

A premium, mobile-first storefront for personalized symbolic Mars designations. The product is a commemorative keepsake recorded in a private registry; it does not convey legal ownership of Mars.

## Current milestone

Phase 1 is implemented: project foundation, design system, responsive navigation, conversion-focused homepage, package presentation, certificate concept, trust/disclosure content, FAQ, verification preview, informational pages, legal placeholders, sitemap and robots metadata.

## Stack and architecture

- Next.js 16 App Router, React 19 and TypeScript
- Tailwind CSS 4 with a custom token-led global design system
- Server Components for content-heavy UI
- One small Client Component boundary for mobile navigation
- Centralized marketing/package data in `data/site.ts`
- Next.js image and font optimization

Planned phases add PostgreSQL and Prisma behind a repository/service boundary, Zod validation, authenticated account/admin route groups, and a server-only payment adapter. Registry allocation must use database transactions plus unique constraints on registry IDs and designation coordinates; browser payment state must never create a registration.

## Local development

```bash
npm install
copy .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. Run `npm run lint` and `npm run build` for production checks.

## Environment, database and payments

See `.env.example`. Phase 1 only uses `NEXT_PUBLIC_SITE_URL`; database, authentication, Razorpay and analytics variables are documented in advance but not consumed. Never commit `.env.local` or credentials.

The Phase 3 Prisma schema will cover users, profiles, regions, sectors, blocks, designations, registry records, packages, orders, payments, certificates, coupons, gift messages and addresses. Phase 4 will use a server-only Razorpay adapter with mock mode, signature and webhook verification, idempotency keys, and database transactions.

## Visual assets

`public/images/mars-hero.png` is an original AI-generated project asset created for this brand on 13 September 2026. It contains no third-party source imagery. Future region imagery should use documented NASA/JPL/USGS public-domain sources or commissioned originals.

## Legal and security

All policy pages are visibly marked as drafts requiring professional Indian legal review. The public registry will expose only privacy-approved fields. Future search endpoints require validation, rate limiting and anti-enumeration controls. Admin authorization must be enforced server-side.

## Roadmap

1. Explore, region and designation selection
2. Prisma schema, safe allocation and verification
3. Personalization, certificate generation and cart
4. Razorpay checkout, fulfillment and order success
5. Account, admin, analytics and internationalization

## Deployment

Run `npm run build`, configure production environment variables, and deploy to a Node.js-compatible Next.js host. Database migrations and payment webhooks must be completed before enabling checkout.
