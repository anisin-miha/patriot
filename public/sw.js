if (!self.define) {
  let e,
    i = {};
  const a = (a, r) => (
    (a = new URL(a + ".js", r).href),
    i[a] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = i), document.head.appendChild(e);
        } else (e = a), importScripts(a), i();
      }).then(() => {
        let e = i[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (r, t) => {
    const o =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[o]) return;
    let p = {};
    const s = (e) => a(e, o),
      n = { module: { uri: o }, exports: p, require: s };
    i[o] = Promise.all(r.map((e) => n[e] || s(e))).then((e) => (t(...e), p));
  };
}
define(["./workbox-1bb06f5e"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "/CNAME", revision: "eae1bba499bd20249dbf7aff33a4ec29" },
        {
          url: "/_next/app-build-manifest.json",
          revision: "322e3239c3d45f2cc9d0265ade99ee74",
        },
        {
          url: "/_next/static/chunks/116-af5c122d56244920.js",
          revision: "uSLT6Wn6WGQsaUwekd1tt",
        },
        {
          url: "/_next/static/chunks/22-b164138ddd71edb0.js",
          revision: "uSLT6Wn6WGQsaUwekd1tt",
        },
        {
          url: "/_next/static/chunks/4bd1b696-9b171a6f8473deb9.js",
          revision: "uSLT6Wn6WGQsaUwekd1tt",
        },
        {
          url: "/_next/static/chunks/671-8a44a354025f129f.js",
          revision: "uSLT6Wn6WGQsaUwekd1tt",
        },
        {
          url: "/_next/static/chunks/684-591b0f4b23b941c6.js",
          revision: "uSLT6Wn6WGQsaUwekd1tt",
        },
        {
          url: "/_next/static/chunks/687-0a1fb153579fee13.js",
          revision: "uSLT6Wn6WGQsaUwekd1tt",
        },
        {
          url: "/_next/static/chunks/868-734f03a0631feca2.js",
          revision: "uSLT6Wn6WGQsaUwekd1tt",
        },
        {
          url: "/_next/static/chunks/app/(pages)/blog/page-6821e9870d51b4ac.js",
          revision: "uSLT6Wn6WGQsaUwekd1tt",
        },
        {
          url: "/_next/static/chunks/app/(pages)/contacts/page-b95386533ee145fe.js",
          revision: "uSLT6Wn6WGQsaUwekd1tt",
        },
        {
          url: "/_next/static/chunks/app/(pages)/page-19a1152138daf6ac.js",
          revision: "uSLT6Wn6WGQsaUwekd1tt",
        },
        {
          url: "/_next/static/chunks/app/(pages)/patriot/page-fbcd87c1ab4fe6b0.js",
          revision: "uSLT6Wn6WGQsaUwekd1tt",
        },
        {
          url: "/_next/static/chunks/app/(pages)/privacy-policy/page-e6bfdcc00c2d911b.js",
          revision: "uSLT6Wn6WGQsaUwekd1tt",
        },
        {
          url: "/_next/static/chunks/app/(pages)/sergiev-posad/page-e92c5c11ea992580.js",
          revision: "uSLT6Wn6WGQsaUwekd1tt",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-b72775331b0d468e.js",
          revision: "uSLT6Wn6WGQsaUwekd1tt",
        },
        {
          url: "/_next/static/chunks/app/layout-cf27f1f365014943.js",
          revision: "uSLT6Wn6WGQsaUwekd1tt",
        },
        {
          url: "/_next/static/chunks/app/not-found-e5216c8ddc383f1a.js",
          revision: "uSLT6Wn6WGQsaUwekd1tt",
        },
        {
          url: "/_next/static/chunks/framework-f593a28cde54158e.js",
          revision: "uSLT6Wn6WGQsaUwekd1tt",
        },
        {
          url: "/_next/static/chunks/main-9c1757a8ccf23a4a.js",
          revision: "uSLT6Wn6WGQsaUwekd1tt",
        },
        {
          url: "/_next/static/chunks/main-app-38cd0a6c24e61892.js",
          revision: "uSLT6Wn6WGQsaUwekd1tt",
        },
        {
          url: "/_next/static/chunks/pages/_app-da15c11dea942c36.js",
          revision: "uSLT6Wn6WGQsaUwekd1tt",
        },
        {
          url: "/_next/static/chunks/pages/_error-cc3f077a18ea1793.js",
          revision: "uSLT6Wn6WGQsaUwekd1tt",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-8e5d9b78057b9dc2.js",
          revision: "uSLT6Wn6WGQsaUwekd1tt",
        },
        {
          url: "/_next/static/css/60c268824a92b4ce.css",
          revision: "60c268824a92b4ce",
        },
        {
          url: "/_next/static/css/74fc351921f6806e.css",
          revision: "74fc351921f6806e",
        },
        {
          url: "/_next/static/uSLT6Wn6WGQsaUwekd1tt/_buildManifest.js",
          revision: "982fe33120749ab41ff53fdd93779440",
        },
        {
          url: "/_next/static/uSLT6Wn6WGQsaUwekd1tt/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/favicon/apple-touch-icon.png",
          revision: "8fcc6c8485c111568233e3c5a385dae0",
        },
        {
          url: "/favicon/favicon-96x96.png",
          revision: "3fd37fcd3d40e68258fb668c67d9f1e0",
        },
        {
          url: "/favicon/favicon.ico",
          revision: "4d3d08a1a439938a4dac45111b1117d6",
        },
        {
          url: "/favicon/favicon.svg",
          revision: "6c7a763f12363431e6fa8a168e018189",
        },
        {
          url: "/favicon/nextImageExportOptimizer/apple-touch-icon-opt-10.WEBP",
          revision: "456458886151b48a3d40460dfae93c55",
        },
        {
          url: "/favicon/nextImageExportOptimizer/apple-touch-icon-opt-1080.WEBP",
          revision: "107f8b89623ff56faf1591811fb749a5",
        },
        {
          url: "/favicon/nextImageExportOptimizer/apple-touch-icon-opt-1200.WEBP",
          revision: "107f8b89623ff56faf1591811fb749a5",
        },
        {
          url: "/favicon/nextImageExportOptimizer/apple-touch-icon-opt-128.WEBP",
          revision: "edbfd840cad9f44992976d597b96b76c",
        },
        {
          url: "/favicon/nextImageExportOptimizer/apple-touch-icon-opt-16.WEBP",
          revision: "7c22df5fb0a7fa20a5501c595f3b4d25",
        },
        {
          url: "/favicon/nextImageExportOptimizer/apple-touch-icon-opt-1920.WEBP",
          revision: "107f8b89623ff56faf1591811fb749a5",
        },
        {
          url: "/favicon/nextImageExportOptimizer/apple-touch-icon-opt-2048.WEBP",
          revision: "107f8b89623ff56faf1591811fb749a5",
        },
        {
          url: "/favicon/nextImageExportOptimizer/apple-touch-icon-opt-256.WEBP",
          revision: "107f8b89623ff56faf1591811fb749a5",
        },
        {
          url: "/favicon/nextImageExportOptimizer/apple-touch-icon-opt-32.WEBP",
          revision: "866bfc52fcf8efd2aa187af863d8aba7",
        },
        {
          url: "/favicon/nextImageExportOptimizer/apple-touch-icon-opt-384.WEBP",
          revision: "107f8b89623ff56faf1591811fb749a5",
        },
        {
          url: "/favicon/nextImageExportOptimizer/apple-touch-icon-opt-3840.WEBP",
          revision: "107f8b89623ff56faf1591811fb749a5",
        },
        {
          url: "/favicon/nextImageExportOptimizer/apple-touch-icon-opt-48.WEBP",
          revision: "2d855a6f65994841b842ee1cad0014bf",
        },
        {
          url: "/favicon/nextImageExportOptimizer/apple-touch-icon-opt-64.WEBP",
          revision: "83d147d27ec6a1c7334b80aa6cb9c1a6",
        },
        {
          url: "/favicon/nextImageExportOptimizer/apple-touch-icon-opt-640.WEBP",
          revision: "107f8b89623ff56faf1591811fb749a5",
        },
        {
          url: "/favicon/nextImageExportOptimizer/apple-touch-icon-opt-750.WEBP",
          revision: "107f8b89623ff56faf1591811fb749a5",
        },
        {
          url: "/favicon/nextImageExportOptimizer/apple-touch-icon-opt-828.WEBP",
          revision: "107f8b89623ff56faf1591811fb749a5",
        },
        {
          url: "/favicon/nextImageExportOptimizer/apple-touch-icon-opt-96.WEBP",
          revision: "38eed96dff66b0b259731b94a4dc6050",
        },
        {
          url: "/favicon/nextImageExportOptimizer/favicon-96x96-opt-10.WEBP",
          revision: "8b34338684784e484af92d9f756e15d6",
        },
        {
          url: "/favicon/nextImageExportOptimizer/favicon-96x96-opt-1080.WEBP",
          revision: "779bcc90577725c7f44d5489fb6922d2",
        },
        {
          url: "/favicon/nextImageExportOptimizer/favicon-96x96-opt-1200.WEBP",
          revision: "779bcc90577725c7f44d5489fb6922d2",
        },
        {
          url: "/favicon/nextImageExportOptimizer/favicon-96x96-opt-128.WEBP",
          revision: "779bcc90577725c7f44d5489fb6922d2",
        },
        {
          url: "/favicon/nextImageExportOptimizer/favicon-96x96-opt-16.WEBP",
          revision: "9d26a0ca714352b60fd814068e01f680",
        },
        {
          url: "/favicon/nextImageExportOptimizer/favicon-96x96-opt-1920.WEBP",
          revision: "779bcc90577725c7f44d5489fb6922d2",
        },
        {
          url: "/favicon/nextImageExportOptimizer/favicon-96x96-opt-2048.WEBP",
          revision: "779bcc90577725c7f44d5489fb6922d2",
        },
        {
          url: "/favicon/nextImageExportOptimizer/favicon-96x96-opt-256.WEBP",
          revision: "779bcc90577725c7f44d5489fb6922d2",
        },
        {
          url: "/favicon/nextImageExportOptimizer/favicon-96x96-opt-32.WEBP",
          revision: "cddceed6db20074a9d819bcc6bf55eae",
        },
        {
          url: "/favicon/nextImageExportOptimizer/favicon-96x96-opt-384.WEBP",
          revision: "779bcc90577725c7f44d5489fb6922d2",
        },
        {
          url: "/favicon/nextImageExportOptimizer/favicon-96x96-opt-3840.WEBP",
          revision: "779bcc90577725c7f44d5489fb6922d2",
        },
        {
          url: "/favicon/nextImageExportOptimizer/favicon-96x96-opt-48.WEBP",
          revision: "19d0ca0685ba1b9c442b0e678fb57454",
        },
        {
          url: "/favicon/nextImageExportOptimizer/favicon-96x96-opt-64.WEBP",
          revision: "9eeb1cfc4178c83e2f22df70c4099d92",
        },
        {
          url: "/favicon/nextImageExportOptimizer/favicon-96x96-opt-640.WEBP",
          revision: "779bcc90577725c7f44d5489fb6922d2",
        },
        {
          url: "/favicon/nextImageExportOptimizer/favicon-96x96-opt-750.WEBP",
          revision: "779bcc90577725c7f44d5489fb6922d2",
        },
        {
          url: "/favicon/nextImageExportOptimizer/favicon-96x96-opt-828.WEBP",
          revision: "779bcc90577725c7f44d5489fb6922d2",
        },
        {
          url: "/favicon/nextImageExportOptimizer/favicon-96x96-opt-96.WEBP",
          revision: "779bcc90577725c7f44d5489fb6922d2",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-192x192-opt-10.WEBP",
          revision: "7234fbbf931b445d62b82a0b16cb6a52",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-192x192-opt-1080.WEBP",
          revision: "341db0648f9a69b70c2f7eb6d381a6ae",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-192x192-opt-1200.WEBP",
          revision: "341db0648f9a69b70c2f7eb6d381a6ae",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-192x192-opt-128.WEBP",
          revision: "826b061d20cf761c469d218eb46ea723",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-192x192-opt-16.WEBP",
          revision: "61873320c0842c4ba538c9cb1a6a4d29",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-192x192-opt-1920.WEBP",
          revision: "341db0648f9a69b70c2f7eb6d381a6ae",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-192x192-opt-2048.WEBP",
          revision: "341db0648f9a69b70c2f7eb6d381a6ae",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-192x192-opt-256.WEBP",
          revision: "341db0648f9a69b70c2f7eb6d381a6ae",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-192x192-opt-32.WEBP",
          revision: "cbb677b52f131efa645c83c082a4e0e8",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-192x192-opt-384.WEBP",
          revision: "341db0648f9a69b70c2f7eb6d381a6ae",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-192x192-opt-3840.WEBP",
          revision: "341db0648f9a69b70c2f7eb6d381a6ae",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-192x192-opt-48.WEBP",
          revision: "322ea745fe9aeeb0d0113c8c25fc4e7c",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-192x192-opt-64.WEBP",
          revision: "1544a59247bfb091d0011bb3a2d9549f",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-192x192-opt-640.WEBP",
          revision: "341db0648f9a69b70c2f7eb6d381a6ae",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-192x192-opt-750.WEBP",
          revision: "341db0648f9a69b70c2f7eb6d381a6ae",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-192x192-opt-828.WEBP",
          revision: "341db0648f9a69b70c2f7eb6d381a6ae",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-192x192-opt-96.WEBP",
          revision: "ea2bdceb434bad0317e430e51f68df73",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-512x512-opt-10.WEBP",
          revision: "36a4768da2a65317550d2379f2170110",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-512x512-opt-1080.WEBP",
          revision: "4a55e0cd049593c2d8574c11ee5a59e3",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-512x512-opt-1200.WEBP",
          revision: "4a55e0cd049593c2d8574c11ee5a59e3",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-512x512-opt-128.WEBP",
          revision: "be93c116a7b025ae22b7ca89975f485b",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-512x512-opt-16.WEBP",
          revision: "50ec30afe904304ee2988087939c0bd3",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-512x512-opt-1920.WEBP",
          revision: "4a55e0cd049593c2d8574c11ee5a59e3",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-512x512-opt-2048.WEBP",
          revision: "4a55e0cd049593c2d8574c11ee5a59e3",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-512x512-opt-256.WEBP",
          revision: "0f66700faf7dcb901aa74b45a77cdf63",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-512x512-opt-32.WEBP",
          revision: "01279a985ced4a14d944a30738beef6d",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-512x512-opt-384.WEBP",
          revision: "49d7bf4811fc1e53e7c5a868c138fa40",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-512x512-opt-3840.WEBP",
          revision: "4a55e0cd049593c2d8574c11ee5a59e3",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-512x512-opt-48.WEBP",
          revision: "184f2649aadb9c08d3e477e5284172c6",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-512x512-opt-64.WEBP",
          revision: "8fa4dc266ed12aa408dd909c6bcdf47e",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-512x512-opt-640.WEBP",
          revision: "4a55e0cd049593c2d8574c11ee5a59e3",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-512x512-opt-750.WEBP",
          revision: "4a55e0cd049593c2d8574c11ee5a59e3",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-512x512-opt-828.WEBP",
          revision: "4a55e0cd049593c2d8574c11ee5a59e3",
        },
        {
          url: "/favicon/nextImageExportOptimizer/web-app-manifest-512x512-opt-96.WEBP",
          revision: "b33175459821856767a33733e7d1ae0a",
        },
        {
          url: "/favicon/site.webmanifest",
          revision: "9a31df5025642013617d729853824106",
        },
        {
          url: "/favicon/web-app-manifest-192x192.png",
          revision: "7f1c66f43845c449dafb8a2ce8be2796",
        },
        {
          url: "/favicon/web-app-manifest-512x512.png",
          revision: "a1718a9f95652c89a683284949ce1970",
        },
        {
          url: "/images/4trip-logo-black.svg",
          revision: "d8836de0cb88777c040fb7437686c650",
        },
        {
          url: "/images/4trip-logo-white.svg",
          revision: "97b5d4a48621b213d93e16ae7fdac473",
        },
        {
          url: "/images/next-image-export-optimizer-hashes.json",
          revision: "662f08059d204a120e63acacaec309b1",
        },
        {
          url: "/images/patriot/armed-forces-cathedral.png",
          revision: "c6a460b1f92091ab7ab79b1ab70ac5db",
        },
        {
          url: "/images/patriot/cathedral-hero.png",
          revision: "ed47377bbda1f14f0cf7443195bb22f3",
        },
        {
          url: "/images/patriot/gallery1.png",
          revision: "4ffeea510a19d586c51c850176afbc51",
        },
        {
          url: "/images/patriot/gallery2.png",
          revision: "d622e59971f974ed74f99b68a9767d02",
        },
        {
          url: "/images/patriot/gallery3.png",
          revision: "8b1eab8d7c2683bf7e20245420c653a9",
        },
        {
          url: "/images/patriot/gallery4.png",
          revision: "c5cb61282ddccaf03ed26c5dbb38d8ba",
        },
        {
          url: "/images/patriot/next-image-export-optimizer-hashes.json",
          revision: "618cda7443e479ab61ae85d891519a99",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/armed-forces-cathedral-opt-10.WEBP",
          revision: "c29ac55961adf143c74ed8ad24c98c9b",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/armed-forces-cathedral-opt-1080.WEBP",
          revision: "8e86e655f95fceef32c59965cf99af8a",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/armed-forces-cathedral-opt-1200.WEBP",
          revision: "27c6fe661c15ca5a27422d87910f89bd",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/armed-forces-cathedral-opt-128.WEBP",
          revision: "03b614f0389dcfe0d3ce931cbf7d2853",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/armed-forces-cathedral-opt-1920.WEBP",
          revision: "0807130fa47af3b616fb35d327cba51b",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/armed-forces-cathedral-opt-2048.WEBP",
          revision: "0807130fa47af3b616fb35d327cba51b",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/armed-forces-cathedral-opt-256.WEBP",
          revision: "c2f801b57543c75cfa5e6db52bde9125",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/armed-forces-cathedral-opt-384.WEBP",
          revision: "e6945f68ae9631d8926ca9557435107b",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/armed-forces-cathedral-opt-3840.WEBP",
          revision: "0807130fa47af3b616fb35d327cba51b",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/armed-forces-cathedral-opt-640.WEBP",
          revision: "527bc5833a8a2dd4e33c8555bc6c4180",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/armed-forces-cathedral-opt-750.WEBP",
          revision: "3cc13769d0e1f3e08936f851c116557d",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/armed-forces-cathedral-opt-828.WEBP",
          revision: "7a84bb77c6f81ccddbda93e24a77f997",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/cathedral-hero-opt-10.WEBP",
          revision: "4ad51d9bd5ef1f8af3e166686766a632",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/cathedral-hero-opt-1080.WEBP",
          revision: "533d7f04c9adda8a858083d76540eda1",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/cathedral-hero-opt-1200.WEBP",
          revision: "674a10040d99c806330fbe539e12fbef",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/cathedral-hero-opt-128.WEBP",
          revision: "ecfe1dd55c031a340d9f404b2bff5ff2",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/cathedral-hero-opt-1920.WEBP",
          revision: "1b1446e73d00ada4bdb4c50844c6af31",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/cathedral-hero-opt-2048.WEBP",
          revision: "1b1446e73d00ada4bdb4c50844c6af31",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/cathedral-hero-opt-256.WEBP",
          revision: "35577447a16b6b0eca75c6fde0e94315",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/cathedral-hero-opt-384.WEBP",
          revision: "f324e2ff69b924f3b1f365f729987313",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/cathedral-hero-opt-3840.WEBP",
          revision: "1b1446e73d00ada4bdb4c50844c6af31",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/cathedral-hero-opt-640.WEBP",
          revision: "ede09c9b2d0524b5d0c5516730362ec0",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/cathedral-hero-opt-750.WEBP",
          revision: "27e788ed44780c92bbfc07bc7c0a2679",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/cathedral-hero-opt-828.WEBP",
          revision: "93682a8666256c77fb9b6a21f9e5871b",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery1-opt-10.WEBP",
          revision: "324bc9b5f120277bf76bdddd99ad31ce",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery1-opt-1080.WEBP",
          revision: "67a27ae6c782d487e7847e5c35b4b00b",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery1-opt-1200.WEBP",
          revision: "e5ac4f8591095e27b91193e17da6f256",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery1-opt-128.WEBP",
          revision: "391bf5801773fcf56ba5eb0d5ac2706d",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery1-opt-1920.WEBP",
          revision: "d7ec20cc261231c34996f8184f4dc8dc",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery1-opt-2048.WEBP",
          revision: "d7ec20cc261231c34996f8184f4dc8dc",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery1-opt-256.WEBP",
          revision: "af7b7652a8b72debb80e640c6f11331c",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery1-opt-384.WEBP",
          revision: "5b992759ab089ebcb7d114ff5cfd8d1a",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery1-opt-3840.WEBP",
          revision: "d7ec20cc261231c34996f8184f4dc8dc",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery1-opt-640.WEBP",
          revision: "3b49b3916cfc15c122b23e0e624bd0f1",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery1-opt-750.WEBP",
          revision: "4bfd077daf6b816e1d7cc6fad4f5b9b7",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery1-opt-828.WEBP",
          revision: "2829246e2d3bff7b288ad2704fb1bb97",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery2-opt-10.WEBP",
          revision: "10eb22d8e8dc6a78e523f8dca33f6b41",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery2-opt-1080.WEBP",
          revision: "192998e7fa9f569936bba64602da4346",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery2-opt-1200.WEBP",
          revision: "1be614042db5cfc9540bcc461cebaddf",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery2-opt-128.WEBP",
          revision: "8753219bbef60ddc4b448503df28e5ac",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery2-opt-1920.WEBP",
          revision: "34dc38f9dbecb01d7600c637a16dbb9c",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery2-opt-2048.WEBP",
          revision: "34dc38f9dbecb01d7600c637a16dbb9c",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery2-opt-256.WEBP",
          revision: "f008374a34a1698eacddf538e6e04f06",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery2-opt-384.WEBP",
          revision: "798f0aeacd95628089a87d368377b0bd",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery2-opt-3840.WEBP",
          revision: "34dc38f9dbecb01d7600c637a16dbb9c",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery2-opt-640.WEBP",
          revision: "150297d51ed7580ca03b25bf9dae9176",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery2-opt-750.WEBP",
          revision: "899c0ad54660e0d75d96a50db3d297b8",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery2-opt-828.WEBP",
          revision: "2ca0977f2bd6303a5bb5a4bdbab22754",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery3-opt-10.WEBP",
          revision: "b509498ba1eff69de47aaffb5f1fbf08",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery3-opt-1080.WEBP",
          revision: "1651bc8336a8a6221e3fe2621e50163b",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery3-opt-1200.WEBP",
          revision: "357a5520db1d5648167ebef2c7781ca9",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery3-opt-128.WEBP",
          revision: "c37e7728588d4470d2d782d752f83cf9",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery3-opt-1920.WEBP",
          revision: "12156aee63253321790d6a8e06eb6e66",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery3-opt-2048.WEBP",
          revision: "12156aee63253321790d6a8e06eb6e66",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery3-opt-256.WEBP",
          revision: "9b918f85affbea27eb96614e87bb1738",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery3-opt-384.WEBP",
          revision: "09ec10fed2223ae1b7c5762c75534f22",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery3-opt-3840.WEBP",
          revision: "12156aee63253321790d6a8e06eb6e66",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery3-opt-640.WEBP",
          revision: "1e550c4dee6845c36d8c28ef4c8a10be",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery3-opt-750.WEBP",
          revision: "ed4af56aa93f3ceced76fa40400cf395",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery3-opt-828.WEBP",
          revision: "0dd6a43d3346022143b2b343e6ce5989",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery4-opt-10.WEBP",
          revision: "bde572dccc982bf5532de71489c203a8",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery4-opt-1080.WEBP",
          revision: "632856ca7a88f25209f23c19fbc822e2",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery4-opt-1200.WEBP",
          revision: "c530a7be2b794f99ae8a225a83c21edf",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery4-opt-128.WEBP",
          revision: "2191743480478fe252a5b9c3f7f55b50",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery4-opt-1920.WEBP",
          revision: "9be22225d3ff525a0e2768f0c7f84e5c",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery4-opt-2048.WEBP",
          revision: "9be22225d3ff525a0e2768f0c7f84e5c",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery4-opt-256.WEBP",
          revision: "06168b6018c8a030b996ae8720e6f52a",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery4-opt-384.WEBP",
          revision: "36a15e83f16a1cbed888de62b8c6eb3a",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery4-opt-3840.WEBP",
          revision: "9be22225d3ff525a0e2768f0c7f84e5c",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery4-opt-640.WEBP",
          revision: "c8216b365594a10f322c8d3776d40a65",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery4-opt-750.WEBP",
          revision: "d2df6f0add69288ba97f9467113dfe19",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/gallery4-opt-828.WEBP",
          revision: "0d6d92ebff336da71b4902347d745b7b",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/pencil-opt-10.WEBP",
          revision: "9c697282512aeba5a9195d16453c5a4f",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/pencil-opt-1080.WEBP",
          revision: "dec898223ddf3b6cd1454366e7e766e2",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/pencil-opt-1200.WEBP",
          revision: "dec898223ddf3b6cd1454366e7e766e2",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/pencil-opt-128.WEBP",
          revision: "2398b2a6b8ee1be6c67fd5c0d357525b",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/pencil-opt-1920.WEBP",
          revision: "dec898223ddf3b6cd1454366e7e766e2",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/pencil-opt-2048.WEBP",
          revision: "dec898223ddf3b6cd1454366e7e766e2",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/pencil-opt-256.WEBP",
          revision: "96109709ad555fbddc137af360c9046c",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/pencil-opt-384.WEBP",
          revision: "18e6f3f0357cbd86e3efa66c5e55f16c",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/pencil-opt-3840.WEBP",
          revision: "dec898223ddf3b6cd1454366e7e766e2",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/pencil-opt-640.WEBP",
          revision: "d63b6768e10186228e29324435967d96",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/pencil-opt-750.WEBP",
          revision: "f6286be1611fd39497907fb0c71ae75d",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/pencil-opt-828.WEBP",
          revision: "7cb8388fb066660a268dabd545fdc181",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/road-of-memory-opt-10.WEBP",
          revision: "0e578daf86f979966aa228fd1be3a214",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/road-of-memory-opt-1080.WEBP",
          revision: "1c7dc7cf106360e7b9c6a225b2ea6b01",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/road-of-memory-opt-1200.WEBP",
          revision: "5edc9360d202d8894abe5259bbbde567",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/road-of-memory-opt-128.WEBP",
          revision: "732052494db7b92855bdc79ce179e4e6",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/road-of-memory-opt-1920.WEBP",
          revision: "a91dee723f0ec87b866a7fe91052aced",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/road-of-memory-opt-2048.WEBP",
          revision: "a91dee723f0ec87b866a7fe91052aced",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/road-of-memory-opt-256.WEBP",
          revision: "8182e615bb4e91575b756c15600d6203",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/road-of-memory-opt-384.WEBP",
          revision: "fea1a558799deca06dedf210dacca7bb",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/road-of-memory-opt-3840.WEBP",
          revision: "a91dee723f0ec87b866a7fe91052aced",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/road-of-memory-opt-640.WEBP",
          revision: "1dd3d1fc30280df61fce9a571f507552",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/road-of-memory-opt-750.WEBP",
          revision: "43c5897bb645e9f51753a2b46d0d0de4",
        },
        {
          url: "/images/patriot/nextImageExportOptimizer/road-of-memory-opt-828.WEBP",
          revision: "10196a358c01e2b68000cfac8746ffc3",
        },
        {
          url: "/images/patriot/pencil.png",
          revision: "95d4963ca5814e808b044abc7ccd099e",
        },
        {
          url: "/images/patriot/road-of-memory.png",
          revision: "addcdb94f87155e5826528a100f0f1a2",
        },
        {
          url: "/images/sergiev_posad/Porcelain-Factory-and-Museum.png",
          revision: "3920ae9816ec0ef88ba40232fe0fb0c2",
        },
        {
          url: "/images/sergiev_posad/Trinity-Lavra-of-St.-Sergius.png",
          revision: "fa67b1abcdfc97617d0e97d3f4962e81",
        },
        {
          url: "/images/sergiev_posad/gallery1.png",
          revision: "e3bb80f3448e478a23071585a7908012",
        },
        {
          url: "/images/sergiev_posad/gallery2.png",
          revision: "9ef86187fc70e4da9e329a3cb9dc09c4",
        },
        {
          url: "/images/sergiev_posad/gallery3.png",
          revision: "3033b53ebcc51960affd934101219d0e",
        },
        {
          url: "/images/sergiev_posad/gallery4.png",
          revision: "c60052b0be7fec8f43009aebf5ed3f2b",
        },
        {
          url: "/images/sergiev_posad/hero.png",
          revision: "460af888bddfeb18b0bf66fcd0a1ec20",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/Porcelain-Factory-and-Museum-opt-10.WEBP",
          revision: "77e80579b67b448c5ac3d4b710236d8d",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/Porcelain-Factory-and-Museum-opt-1080.WEBP",
          revision: "5614a36101d1889a9733aef864fd2078",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/Porcelain-Factory-and-Museum-opt-1200.WEBP",
          revision: "5614a36101d1889a9733aef864fd2078",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/Porcelain-Factory-and-Museum-opt-128.WEBP",
          revision: "30f5c4f2383da4c82191c87545a4f3c9",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/Porcelain-Factory-and-Museum-opt-1920.WEBP",
          revision: "5614a36101d1889a9733aef864fd2078",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/Porcelain-Factory-and-Museum-opt-2048.WEBP",
          revision: "5614a36101d1889a9733aef864fd2078",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/Porcelain-Factory-and-Museum-opt-256.WEBP",
          revision: "2d36007635010fe56bbbf3f10082a797",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/Porcelain-Factory-and-Museum-opt-384.WEBP",
          revision: "6a90c4bbc671cb440460dd6677fdc5ac",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/Porcelain-Factory-and-Museum-opt-3840.WEBP",
          revision: "5614a36101d1889a9733aef864fd2078",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/Porcelain-Factory-and-Museum-opt-640.WEBP",
          revision: "4cc687f78321feee1bf59341e3d1289b",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/Porcelain-Factory-and-Museum-opt-750.WEBP",
          revision: "10c8a33879583edda8a58119c7b0aa50",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/Porcelain-Factory-and-Museum-opt-828.WEBP",
          revision: "04927bbbac198dfc6377b6e36599a7f3",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/Trinity-Lavra-of-St.-Sergius-opt-10.WEBP",
          revision: "4043d19527712c10238da381750c4ccd",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/Trinity-Lavra-of-St.-Sergius-opt-1080.WEBP",
          revision: "967f800114cd05603c0fde7b55219951",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/Trinity-Lavra-of-St.-Sergius-opt-1200.WEBP",
          revision: "61f8769639c8bd636bd07301e1cf7ef2",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/Trinity-Lavra-of-St.-Sergius-opt-128.WEBP",
          revision: "08af57e8181efdf30656d2f68a248735",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/Trinity-Lavra-of-St.-Sergius-opt-1920.WEBP",
          revision: "e02357d6cb7a55c81b59b2a9a28fd3a2",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/Trinity-Lavra-of-St.-Sergius-opt-2048.WEBP",
          revision: "e02357d6cb7a55c81b59b2a9a28fd3a2",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/Trinity-Lavra-of-St.-Sergius-opt-256.WEBP",
          revision: "e1e1a3ee906e0ac578838d521bdf72b4",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/Trinity-Lavra-of-St.-Sergius-opt-384.WEBP",
          revision: "78a9152d664b74de795d6a6c3c29147b",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/Trinity-Lavra-of-St.-Sergius-opt-3840.WEBP",
          revision: "e02357d6cb7a55c81b59b2a9a28fd3a2",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/Trinity-Lavra-of-St.-Sergius-opt-640.WEBP",
          revision: "7241ac70949311d083329dcaab7a343e",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/Trinity-Lavra-of-St.-Sergius-opt-750.WEBP",
          revision: "89c49f9514d619779c36e4995e8ff2f2",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/Trinity-Lavra-of-St.-Sergius-opt-828.WEBP",
          revision: "86bcbb1420674ab4d973904c0d971ad9",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery1-opt-10.WEBP",
          revision: "cc05099a5d8f36318b7f26188b5bf7f4",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery1-opt-1080.WEBP",
          revision: "b8423f5649b52820eb2dcb98b94c0b1f",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery1-opt-1200.WEBP",
          revision: "e15942810aee0e3125538dada84f6956",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery1-opt-128.WEBP",
          revision: "a08f56f6ce0ddbc0d52c9943365af3e1",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery1-opt-1920.WEBP",
          revision: "a86e28fa5c62ee71773145dee8b1a006",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery1-opt-2048.WEBP",
          revision: "a86e28fa5c62ee71773145dee8b1a006",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery1-opt-256.WEBP",
          revision: "aace541be5b4af5785cb716a7eef3e76",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery1-opt-384.WEBP",
          revision: "c91aba015b361efb75f6afc620207a61",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery1-opt-3840.WEBP",
          revision: "a86e28fa5c62ee71773145dee8b1a006",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery1-opt-640.WEBP",
          revision: "95714503200d5cbb2485471ced8d9bf3",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery1-opt-750.WEBP",
          revision: "9a2b776316f0fecbc5d2df2d2b684260",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery1-opt-828.WEBP",
          revision: "be9590261f1bd4af4cf97a8b035d7258",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery2-opt-10.WEBP",
          revision: "0f61ba113971a96618afc1ccf5d4b7a3",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery2-opt-1080.WEBP",
          revision: "ced4e041f38cb03a957620d5d2ecc627",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery2-opt-1200.WEBP",
          revision: "7f891e80209b45a6ae1471dad80a2361",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery2-opt-128.WEBP",
          revision: "59a537d2ac89178a4598957008ad5c21",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery2-opt-1920.WEBP",
          revision: "0b33e6b8b34cb06970b63dd972084466",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery2-opt-2048.WEBP",
          revision: "0b33e6b8b34cb06970b63dd972084466",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery2-opt-256.WEBP",
          revision: "509506e10a49723e71db2ea2eae80ed8",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery2-opt-384.WEBP",
          revision: "3f7870bc7c5eab6d9bd1b21c99339201",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery2-opt-3840.WEBP",
          revision: "0b33e6b8b34cb06970b63dd972084466",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery2-opt-640.WEBP",
          revision: "63dfa64a4d6735d78501909627c2d9be",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery2-opt-750.WEBP",
          revision: "9b60a6c611ac6597e4877db0bdb32f44",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery2-opt-828.WEBP",
          revision: "c0168b70377b6a8cbbb2d5a65c64c9a2",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery3-opt-10.WEBP",
          revision: "ec823eecfa575523be3ca2a1bb12cdfe",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery3-opt-1080.WEBP",
          revision: "c1bbd99a17833ffab1bd814c54423267",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery3-opt-1200.WEBP",
          revision: "e0edc13108337ec0174cf3bf31ad0667",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery3-opt-128.WEBP",
          revision: "bba15f91cb387227a3149975ef236be3",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery3-opt-1920.WEBP",
          revision: "5f1624b25eb6a6382b3c3979a0281001",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery3-opt-2048.WEBP",
          revision: "5f1624b25eb6a6382b3c3979a0281001",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery3-opt-256.WEBP",
          revision: "8b1b03892039f3acdda971564ae659ce",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery3-opt-384.WEBP",
          revision: "2f86beabb7835b97322b0d1f9e769226",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery3-opt-3840.WEBP",
          revision: "5f1624b25eb6a6382b3c3979a0281001",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery3-opt-640.WEBP",
          revision: "2ffa5cd3608c2e4fc1b9c0b4daf7a0f5",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery3-opt-750.WEBP",
          revision: "2b0c999e24e72ad5d7b8fb1bde8bcd09",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery3-opt-828.WEBP",
          revision: "2825a9b6337d23e6774f8fbeb4e0dd5b",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery4-opt-10.WEBP",
          revision: "c8d24b34acb78a9921a37b6709d6711b",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery4-opt-1080.WEBP",
          revision: "e3f3816996ab19ed10f2ddaa7430f71b",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery4-opt-1200.WEBP",
          revision: "da8eca00c5553b320a299cd5a1931dbf",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery4-opt-128.WEBP",
          revision: "b85cfd302a4c4d2fc29cb2fee4ec2ac2",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery4-opt-1920.WEBP",
          revision: "e9f7ccafe1c1c02b055a6e46f0511ea1",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery4-opt-2048.WEBP",
          revision: "e9f7ccafe1c1c02b055a6e46f0511ea1",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery4-opt-256.WEBP",
          revision: "548b41830dbd1c63725835ad407ae9dd",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery4-opt-384.WEBP",
          revision: "e63bad2436fb50429688312f3cc6a5d8",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery4-opt-3840.WEBP",
          revision: "e9f7ccafe1c1c02b055a6e46f0511ea1",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery4-opt-640.WEBP",
          revision: "bb75b09adf8be7491ea9b7220adb5df2",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery4-opt-750.WEBP",
          revision: "e35fa5f05ae70a781648c181cd930d4e",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/gallery4-opt-828.WEBP",
          revision: "387d33e4afed85680941cec7fb95efa8",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/hero-opt-10.WEBP",
          revision: "f491de51c3dc7f2e80efe1d1cc10a665",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/hero-opt-1080.WEBP",
          revision: "486561239aec68c0f6a886fd90cc2af6",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/hero-opt-1200.WEBP",
          revision: "b0749856aeecf3563128078e18104e91",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/hero-opt-128.WEBP",
          revision: "d6907dddd4dc205d1a2bb24b2a0c67df",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/hero-opt-1920.WEBP",
          revision: "a428eda3dfeaccc29b062c592a25b661",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/hero-opt-2048.WEBP",
          revision: "a428eda3dfeaccc29b062c592a25b661",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/hero-opt-256.WEBP",
          revision: "5f9ecdc5ac3dcca31ea8b4b6f4196e54",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/hero-opt-384.WEBP",
          revision: "588e7770d7dec1d8cca04960f91788c1",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/hero-opt-3840.WEBP",
          revision: "a428eda3dfeaccc29b062c592a25b661",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/hero-opt-640.WEBP",
          revision: "9512e4fe7f908b3e6ee83609f9380ece",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/hero-opt-750.WEBP",
          revision: "fbe846e092509348c313547435268ca6",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/hero-opt-828.WEBP",
          revision: "ef85685027ba825ad65436202ae7c2e6",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/pencil-opt-10.WEBP",
          revision: "8904e76ba4542454f4fa2eb9e85f642d",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/pencil-opt-1080.WEBP",
          revision: "9b60a2be8115b1e1cd26b40193f8f007",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/pencil-opt-1200.WEBP",
          revision: "9b60a2be8115b1e1cd26b40193f8f007",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/pencil-opt-128.WEBP",
          revision: "085d775ea6fc002dd586020f7e120045",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/pencil-opt-1920.WEBP",
          revision: "9b60a2be8115b1e1cd26b40193f8f007",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/pencil-opt-2048.WEBP",
          revision: "9b60a2be8115b1e1cd26b40193f8f007",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/pencil-opt-256.WEBP",
          revision: "fbb9db38e7e102b20c19286ae93604d1",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/pencil-opt-384.WEBP",
          revision: "c5137e06353f6be2279d8ea940f49677",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/pencil-opt-3840.WEBP",
          revision: "9b60a2be8115b1e1cd26b40193f8f007",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/pencil-opt-640.WEBP",
          revision: "d993ce5d75980a1f1828f62c5fc7bcf4",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/pencil-opt-750.WEBP",
          revision: "9f5d7667082973d761ab4acb2c356af3",
        },
        {
          url: "/images/sergiev_posad/nextImageExportOptimizer/pencil-opt-828.WEBP",
          revision: "84d63c22b699ae9f3f1ea067871cefde",
        },
        {
          url: "/images/sergiev_posad/pencil.png",
          revision: "f16862db0e43a97112d89828e1daf87c",
        },
        {
          url: "/images/telegram-svgrepo-com.svg",
          revision: "62004dd9b1538adbf49394b0b07bf57a",
        },
        { url: "/manifest.json", revision: "6f7ea69e42bf04e6765b8fc3a447cac6" },
        { url: "/robots.txt", revision: "f5da5baaa1d2dd6e3da1ee01f2a43f84" },
        {
          url: "/screenshots/landscape.png",
          revision: "aae9b5aa5e871ec467835228f677d4ab",
        },
        {
          url: "/screenshots/portrait.png",
          revision: "622c75bb3e120d1fae1a1ae9a74bac61",
        },
        { url: "/sitemap-0.xml", revision: "d3e63f5c61173b726073b7995b5da697" },
        { url: "/sitemap.xml", revision: "624bb81d2166969ff32e2443c28da952" },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: i,
              event: a,
              state: r,
            }) =>
              i && "opaqueredirect" === i.type
                ? new Response(i.body, {
                    status: 200,
                    statusText: "OK",
                    headers: i.headers,
                  })
                : i,
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const i = e.pathname;
        return !i.startsWith("/api/auth/") && !!i.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET",
    );
});
