import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  server: { port: 5000 },
  site: "https://Alexandre-Breault.github.io",
});
