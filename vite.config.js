import { defineConfig } from "vite";
import { resolve } from "path";
import { copyFileSync } from "fs";
import handlebars from "vite-plugin-handlebars";

const pageData = {
  "/index.html": {
    lang: "uk",
    title: "Doloni • Масаж Ірпінь - Головна",
    description: "Doloni • Масаж Ірпінь - масажний простір.",
    canonical: "https://doloni.space/",
    currentPage: "home",
  },
  // Legal pages temporarily removed - uncomment when ready:
  // "/privacy.html": {
  //     lang: "uk",
  //     title: "Політика конфіденційності - Doloni",
  //     description: "Політика конфіденційності Doloni. Інформація про обробку персональних даних.",
  //     canonical: "https://doloni.space/privacy",
  //     currentPage: "privacy",
  // },
  // "/terms.html": {
  //     lang: "uk",
  //     title: "Умови використання - Doloni",
  //     description: "Умови використання сервісів масажного салону Doloni • Масаж Ірпінь в Ірпені.",
  //     canonical: "https://doloni.space/terms",
  //     currentPage: "terms",
  // },
  "/contacts.html": {
    lang: "uk",
    title: "Контакти - Doloni",
    description:
      "Контакти масажного простору Doloni • Масаж Ірпінь в Ірпені. Записуйтесь на масаж.",
    canonical: "https://doloni.space/contacts",
    currentPage: "contacts",
  },
  "/consumer-info.html": {
    lang: "uk",
    title: "Інформація для споживачів - Doloni",
    description:
      "Інформація для споживачів масажного салону Doloni. Посилання на юридичні документи та політики.",
    canonical: "https://doloni.space/consumer-info",
    currentPage: "consumer-info",
  },
  "/404.html": {
    lang: "uk",
    title: "Сторінка не знайдена - Doloni",
    description: "Сторінка не знайдена",
    canonical: "https://doloni.space/404.html",
    currentPage: "404",
  },
  "/en/index.html": {
    lang: "en",
    title: "Doloni - Home",
    description:
      "Doloni - massage space in Irpin. Book a massage appointment, check out our policies and terms.",
    canonical: "https://doloni.space/en/",
    currentPage: "home",
  },
  // Legal pages temporarily removed - uncomment when ready:
  // "/en/privacy.html": {
  //     lang: "en",
  //     title: "Privacy Policy - Doloni",
  //     description: "Privacy Policy of Doloni. Information about personal data processing.",
  //     canonical: "https://doloni.space/en/privacy",
  //     currentPage: "privacy",
  // },
  // "/en/terms.html": {
  //     lang: "en",
  //     title: "Terms of Service - Doloni • Масаж Ірпінь",
  //     description: "Terms of Service for Doloni",
  //     canonical: "https://doloni.space/en/terms",
  //     currentPage: "terms",
  // },
  "/en/contacts.html": {
    lang: "en",
    title: "Contacts - Doloni",
    description: "Contacts of Doloni • massage space in Irpin. Book a massage appointment.",
    canonical: "https://doloni.space/en/contacts",
    currentPage: "contacts",
  },
  "/en/consumer-info.html": {
    lang: "en",
    title: "Consumer Information - Doloni",
    description: "Consumer Information of Doloni. Links to legal documents and policies.",
    canonical: "https://doloni.space/en/consumer-info",
    currentPage: "consumer-info",
  },
};

export default defineConfig({
  root: "src",
  base: "/",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        // Legal pages temporarily removed - uncomment when ready:
        // privacy: resolve(__dirname, "src/privacy.html"),
        // terms: resolve(__dirname, "src/terms.html"),
        contacts: resolve(__dirname, "src/contacts.html"),
        "consumer-info": resolve(__dirname, "src/consumer-info.html"),
        404: resolve(__dirname, "src/404.html"),
        "en/index": resolve(__dirname, "src/en/index.html"),
        // Legal pages temporarily removed - uncomment when ready:
        // "en/privacy": resolve(__dirname, "src/en/privacy.html"),
        // "en/terms": resolve(__dirname, "src/en/terms.html"),
        "en/contacts": resolve(__dirname, "src/en/contacts.html"),
        "en/consumer-info": resolve(__dirname, "src/en/consumer-info.html"),
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
      context(pagePath) {
        return pageData[pagePath] || {};
      },
      helpers: {
        eq: (a, b) => a === b,
        unless: (conditional, options) => {
          if (!conditional) {
            return options.fn(this);
          }
          return "";
        },
      },
    }),
  ],
});
