import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sonrat",
    short_name: "Sonrat",
    description: "AI voice workspace preview for orders, support tickets, and sales follow-up.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/brand/sonrat-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
