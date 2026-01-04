# TBC Landing Page

Standalone landing page for The Billing Connection (TBC).

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## Configuration

Edit `src/config.js` to update the app URLs:

```js
const APP_BASE_URL = 'https://app.thebillingconnection.com';
```

## Brand Recognition

When users click "Sign In" or "Join Free Beta", they're redirected to the main app with `?brand=tbc` parameter. The app reads this and:
1. Stores it in localStorage
2. Uses it for brand-specific styling
3. Sets `organizations.brand_owner = 'tbc'` for new signups

## Deployment

Deploy to any static hosting (Netlify, Vercel, Cloudflare Pages):

```bash
npm run build
# Upload the `dist/` folder
```

### Domain Setup

- Landing: `thebillingconnection.com` → This repo
- App: `app.thebillingconnection.com` → Main monorepo

## Assets Needed

- `/public/tbc-logo.png` - TBC logo
- `/public/grid-pattern.svg` - Hero background pattern
- `/public/favicon.png` - Favicon (optional)
