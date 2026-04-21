import type { NextConfig } from "next";
import path from "path";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  workboxOptions: {
    disableDevLogs: true,
    runtimeCaching: [
      {
        // Google OAuth – nikdy necachovat
        urlPattern: /^https:\/\/accounts\.google\.com\/.*/i,
        handler: "NetworkOnly",
      },
      {
        // API routes – Network First s fallback na cache
        urlPattern: /^\/api\/.*/i,
        handler: "NetworkFirst",
        options: {
          cacheName: "aero-expo-api-cache",
          expiration: {
            maxEntries: 64,
            maxAgeSeconds: 24 * 60 * 60, // 24 hodin
          },
          networkTimeoutSeconds: 5,
        },
      },
      {
        // Next.js statické assety – Cache First
        urlPattern: /\/_next\/static\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "next-static-assets",
          expiration: {
            maxEntries: 128,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 dní
          },
        },
      },
      {
        // Obrázky a další statické soubory
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|ico|webp|woff2?)$/i,
        handler: "CacheFirst",
        options: {
          cacheName: "static-media",
          expiration: {
            maxEntries: 64,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 dní
          },
        },
      },
      {
        // HTML stránky – Network First (vždy čerstvá verze, pokud je síť)
        urlPattern: /^\/(?!api\/).*/i,
        handler: "NetworkFirst",
        options: {
          cacheName: "aero-expo-pages",
          expiration: {
            maxEntries: 32,
            maxAgeSeconds: 24 * 60 * 60, // 24 hodin
          },
          networkTimeoutSeconds: 5,
        },
      },
    ],
  },
});

/** Stejná cesta jako turbopack.root – jinak Vercel hlásí konflikt s outputFileTracingRoot. */
const projectRoot = path.resolve(__dirname);

const nextConfig: NextConfig = {
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
  },
};

export default withPWA(nextConfig);
