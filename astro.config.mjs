import react from "@astrojs/react";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: 'https://juanprendon2603.github.io/https://github.com/juanprendon2603/evoldep', 
  base: process.env.NODE_ENV === 'production' ? '/https://github.com/juanprendon2603/evoldep/' : '/',
});
