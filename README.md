# Red Planet Registry

A premium, mobile-first storefront for personalized symbolic Mars designations. The product is a commemorative keepsake recorded in a private registry; it does not convey legal ownership of Mars.

## Current milestone

Phase 2 is implemented on top of the Phase 1 foundation: a complete customer-facing path from Mars exploration through region, designation, package, personalization and review. The flow intentionally stops before payment.

## Phase 2 routes

- `/explore` — interactive lightweight Mars map and five region collections
- `/explore/[region]` — educational region detail pages
- `/explore/[region]/select` — deterministic mock designation picker
- `/register/package` — centralized package selection and comparison
- `/register/personalize` — validated gifting form and live certificate
- `/register/review` — editable summary and explicit Phase 4 checkout state

## Stack and architecture

- Next.js 16 App Router, React 19 and TypeScript
- Tailwind CSS 4 with a custom token-led global design system
- Server Components for content-heavy UI
- One small Client Component boundary for mobile navigation
- Centralized region and product configuration in `data/mars-regions.ts` and `data/packages.ts`
- Next.js image and font optimization
- Zod-validated, localStorage-backed journey state without a global-state dependency

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

`data/mock-designations.ts` generates the same 18 coordinate records for each region on every render, including clearly marked reserved demo states. This is preview inventory only. Phase 3 will replace the adapter with database queries and atomic reservations; every designation, coordinate and price will be revalidated server-side.

Journey selections and personalization are stored under the versioned `rpr-journey-v2` browser key and validated before restoration. This improves refresh/back navigation but is never an authority for availability, price, payment, or registration.

The Phase 3 Prisma schema will cover users, profiles, regions, sectors, blocks, designations, registry records, packages, orders, payments, certificates, coupons, gift messages and addresses. The certificate component is currently responsive HTML and accepts the shared journey interface; Phase 3 can reuse it as the visual basis for server-generated PDF and QR verification output. Phase 4 will use a server-only Razorpay adapter with signature/webhook verification, idempotency keys and database transactions.

## Visual assets

`public/images/mars-hero.png` and `public/images/mars-map.png` are original AI-generated project assets created for this brand on 13 September 2026. They contain no third-party source imagery. Region cards use intentional responsive crops from the original map to minimize payload cost. Future scientific imagery should use documented NASA/JPL/USGS public-domain sources or commissioned originals.

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
