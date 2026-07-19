import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [],
  site: "https://1π.com",
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Custom",
      cssVariable: "--font-noto-mono",
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/NotoSansMono-VariableFont_wdth,wght.ttf"],
          },
        ],
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
