import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Muhammed Ali Aslan — Software Developer & Media",
    short_name: "M. Ali Aslan",
    description:
      "Software Developer with 3.5 years of experience in React, Next.js, TypeScript, and TailwindCSS.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    orientation: "portrait",
    icons: [
      {
        src: "/medias/favicon.png",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/medias/favicon.png",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
