# Vasavi

Limited-edition lehenga ecommerce site — a 60-day "edit" of 40 hand-embroidered lehenga sets across five ongoing collection lines (Zardozi Vault, Mirror Tale, Gota Bloom, Chikan Noor, Banarasi Drape), each design capped at 10 sets.

Sister site to [Aaranya](https://github.com/digitalsmartdesk-cmyk/aaranya) (sarees) — same drop-model architecture (numbered limited editions, 60-day rotating edit, collection lines), rebuilt as its own standalone app with brand differences (name, palette, copy, vocabulary, product schema) isolated in `src/brand.js` rather than forked page logic. Front-end-only mockup: cart/checkout state lives client-side (React context + localStorage), no real payment processing or backend.

## What's different from Aaranya

- Product unit is a "set" (skirt + blouse + dupatta), not a single yardage piece — see the `specs` array on each product in `src/data/products.js`, which replaces the saree build's hardcoded "Length" row with "Set includes" / "Sizing".
- Checkout has an extra "Blouse size / measurements" field for made-to-measure stitching.
- Vocabulary: weaver → artisan, loom → atelier, "Our Weavers" → "Our Artisans".
- Order numbers use a `VAS-` prefix; base pricing and the wine/pink-cream palette come from `src/brand.js`.

## Stack

- React 19 + Vite
- React Router (HashRouter, for static GitHub Pages hosting) for the 7 screens
- Plain CSS custom properties for design tokens (oklch palette, Cormorant Garamond + Manrope via Google Fonts)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Notes

- Product imagery under `public/images/` is placeholder colorway/atelier artwork carried over from the design handoff bundle, not real photography — swap in real shots before shipping to production.
- The countdown on Home/Collection/Product is live, computed against the edit's real end date (`EDIT_END` in `src/data/products.js`).
- GitHub Pages: `.github/workflows/deploy-pages.yml` builds and deploys on push to `main`. The repo's Settings → Pages → Source must be set to "GitHub Actions" for this to take effect (see the Aaranya repo's history for why — a "Deploy from a branch" source silently serves the raw unbuilt source instead).
