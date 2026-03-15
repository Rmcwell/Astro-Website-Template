import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.yourdomain.com",
  output: "server",
  adapter: cloudflare({
    imageService: "cloudflare-binding",
  }),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
  experimental: {
    rustCompiler: true,
  },
});
