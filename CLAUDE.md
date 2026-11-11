# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page React app (Create React App, `react-scripts` 5) that lets a prospective Softcom internet customer check service availability at their address, pick a pricing tier, submit contact info, and receive an order confirmation. It's deployed to Heroku (`static.json` + CRA static buildpack) at softcom-service-availability.herokuapp.com and is embedded/linked from softcom.net.

## Commands

- `npm start` — run the dev server (CRA default, localhost:3000)
- `npm run build` — production build to `/build`
- `npm test` — run tests via `react-scripts test` (Jest + React Testing Library, watch mode by default)
  - Run a single test file: `npm test -- AddressCard` (CRA's Jest watcher filters by filename/pattern)
  - Run once without watch (e.g. in CI): `CI=true npm test`
- There is no lint script defined; ESLint runs implicitly through `react-scripts` (config: `eslintConfig` in `package.json`, extends `react-app`).

No test files currently exist in `src/`, despite `@testing-library/*` being installed.

## Architecture

### Flow is a linear wizard, not a general router

`App.js` defines routes for `/address`, `/price`, `/contact`, `/confirmation`, `/error`, `/noService`, with `/` redirecting to `/address`. These aren't independently navigable pages — each page component drives the user to the next step itself (via `history.push(...)` inside a `Zoom` transition's `onExited` callback) after collecting its data. `formData` (the customer's info) and `chosenTier` (their selected plan) are both owned by `App.js` as state and threaded down as props — there is no context provider or external state library. Reusable page chrome (`MainStepper`, `MainFooter`) lives in `BaseTemplate.jsx`, which every step page wraps its content in.

### Pricing tiers are hardcoded, not fetched

`src/prices.js` defines the available service tiers/prices/descriptions/`broadband_facts` IDs as a static object (`tiers.main.mid`, `tiers.main.high`). There is no admin panel or CMS — changing prices, descriptions, or FCC "Broadband Facts" label IDs means editing this file directly and redeploying.

### Address-checking against TowerCoverage.com is currently bypassed

`src/components/Price/findMaxPrice.js` contains two implementations:
- `findMaxPriceOld` — the real logic: calls TowerCoverage's `EUSPrequalAPI` (via `towerCoverageAPI` in `src/api.js`) once per tier's `multicoverageid` to check whether the entered address falls inside that tier's coverage map, returning only the tiers the address qualifies for.
- `findMaxPrice` (the one actually exported and used) — ignores the address entirely and just returns *all* tiers (`mid` + `high`) unconditionally.

If address-based eligibility checking needs to come back, swap the export back to `findMaxPriceOld`-based logic. Don't assume `PricePage` reflects real coverage today — any address currently sees every plan.

### External integrations, each used for a different step

- **TowerCoverage.com** (`src/api.js`, `towerCoverageAPI`) — XML-over-HTTP API (POST, `application/x-www-form-urlencoded`, response parsed via `DOMParser` in `parseResponse`). Used for: (bypassed) coverage prequalification, and — live, in `ConfirmationPage` — `EUSsubmisssion`, which actually registers the lead/order and returns an order number that sales sees on TowerCoverage's own map tooling. `initialFormData` in `api.js` carries the account/key credentials TowerCoverage needs on every call (these are client-exposed by design — this is a public-facing form posting to a third-party lead API, not a protected backend).
- **EmailJS** (`ConfirmationPage.jsx`) — fires two confirmation emails (`template_zz9t4op`, `template_nms012o`) via `service_vm3rbsi` once the TowerCoverage order submission succeeds.
- **Facebook Pixel** (`react-facebook-pixel`, initialized in `App.js`) — tracks page views on every route change and a `Lead` conversion event on successful order placement.
- **Google Ads conversion tracking** (`gtag`, called directly in `ConfirmationPage.jsx`) — assumes `gtag` is a global, loaded via a script tag in `public/index.html`, not imported.
- **CrowdFiber Broadband Labels widget** (`PriceCard.jsx`) — loads `https://cdn.crowdfiber.io/broadband-consumer-labels/widget.js` dynamically at runtime (not bundled) to render the FCC-mandated "Broadband Facts" label per plan, keyed by the `broadband_facts` ID from `prices.js`. The widget needs a delay after script load before `window.BroadbandLabelWidget.renderNewOnly()` is safe to call — see the `setTimeout` guards; this is fragile and a known source of console errors if the CDN is slow.

### Query-param prefill

`AddressPage` can be deep-linked with `?address=&address2=&city=&zipcode=` (URL-encoded) to prefill the address form, used by links from softcom.net's own availability-check entry points.
