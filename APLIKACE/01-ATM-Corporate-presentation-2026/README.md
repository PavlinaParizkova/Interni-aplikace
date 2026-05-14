# AIR TEAM Corporate Presentation 2026

Responsive single-page web presentation for external AIR TEAM customers.

## Run locally

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```powershell
npm run build
```

The project uses `output: "export"` in `next.config.ts`, so a static export is produced in `out/`. That works for Vercel now and can later be copied to an internal static server.

## Content

Slide content lives in `app/slides.ts`.

Images are optional for now. When final photos are ready, place them in `public/photos/` and add the filename to the relevant slide as `image: "filename.jpg"`.

## PDF

Use the download button in the top right. It opens the browser print dialog with all slides rendered as separate pages. Choose `Save as PDF`.
