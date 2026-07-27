import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  compressHTML: true,
  integrations: [mdx(), sitemap()],
  markdown: {
    syntaxHighlight: false,
  },
  output: "static",
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "base-uri 'self'",
        "connect-src 'self'",
        "font-src 'self'",
        "form-action 'self'",
        "frame-src https://www.youtube-nocookie.com",
        "img-src 'self' data:",
        "object-src 'none'",
      ],
    },
  },
  site: "https://nerd-ramblings.com",
  trailingSlash: "never",
});
