# Tender Manager — PWA and packaging guide

This repository contains a single-file PWA `index.html` (plus supporting manifest, service-worker, and icons) for managing projects, expenses, materials, and P&L offline.

Quick highlights
- Offline-first PWA (service worker + manifest)
- Local persistence in `localStorage` with IndexedDB backups and export/import
- Responsive mobile-first UI; installable on Android (via Chrome) and iOS (via Safari "Add to Home Screen")

Local testing (recommended)
1. Prepare the `www/` folder (copies required files):
```bash
npm install    # optionally to install http-server and capacitor later
npm run prepare-www
```
2. Serve locally and open in browser (HTTP):
```bash
npm run serve
```
Open http://localhost:8080 in your desktop browser or phone (on same network).

Quick deploy options (all provide HTTPS)
- GitHub Pages: push this repo to GitHub and enable Pages (branch `main` or `/docs`).
- Netlify / Vercel: drag-and-drop `www/` or connect repo — both auto-provide HTTPS.

Install on Android
1. Open the HTTPS URL in Chrome.
2. Use the browser prompt or menu → "Install" / "Add to Home screen".

Install on iPhone
1. Open the HTTPS URL in Safari.
2. Tap Share → "Add to Home Screen".
Notes: iOS PWAs have stricter storage limits and fewer background features.

Wrap as native apps (optional)
This repo includes minimal files to start with Capacitor. Steps:

1. Install Capacitor (global or project):
```bash
npm install
npx cap init
```
2. Prepare web assets and copy to `www/`:
```bash
npm run prepare-www
```
3. Add desired platforms and open native projects:
```bash
npx cap add android
npx cap add ios
npx cap open android   # opens Android Studio
npx cap open ios       # opens Xcode
```
4. Build, sign, and publish via Android Studio / Xcode (requires developer accounts).

Notes & caveats
- Service Worker and installability require HTTPS (localhost is OK for local testing).
- iOS: Safari PWA lacks install prompt and has lower storage quota. Use export/import backups frequently.
- For Play Store, use TWA (Trusted Web Activity) via Bubblewrap or Capacitor to provide a managed Android wrapper.

Need help publishing?
- I can prepare a `gh-pages` deployment script or a Netlify config and CI steps, or generate a Capacitor starter branch with native project files (you still need to run the platform commands and sign builds locally).

Repository files to review:
- `index.html` — main single-file app
- `manifest.json`, `service-worker.js`, `icons/` — PWA assets
- `package.json`, `scripts/prepare.js`, `capacitor.config.json` — packaging helpers
