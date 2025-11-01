import { defineConfig } from "vite";
import { resolve } from "path";
import { copyFileSync } from "fs";
import handlebars from "vite-plugin-handlebars";

const pageData = {
  "/index.html": {
    lang: "uk",
    title: "Doloni Space - Головна",
    description:
      "Doloni Space - незабаром запуск. Ознайомтеся з нашими правилами та політиками.",
    canonical: "https://doloni.space/",
    currentPage: "home",
  },
  "/privacy.html": {
    lang: "uk",
    title: "Політика конфіденційності - Doloni Space",
    description:
      "Політика конфіденційності Doloni Space. Інформація про обробку персональних даних.",
    canonical: "https://doloni.space/privacy",
    currentPage: "privacy",
  },
  "/terms.html": {
    lang: "uk",
    title: "Умови використання - Doloni Space",
    description: "Умови використання сервісів Doloni Space.",
    canonical: "https://doloni.space/terms",
    currentPage: "terms",
  },
  "/contacts.html": {
    lang: "uk",
    title: "Контакти - Doloni Space",
    description: "Контакти Doloni Space.",
    canonical: "https://doloni.space/contacts",
    currentPage: "contacts",
  },
  "/consumer-info.html": {
    lang: "uk",
    title: "Інформація для споживачів - Doloni Space",
    description:
      "Інформація для споживачів Doloni Space. Посилання на юридичні документи та політики.",
    canonical: "https://doloni.space/consumer-info",
    currentPage: "consumer-info",
  },
  "/404.html": {
    lang: "uk",
    title: "Сторінка не знайдена - Doloni Space",
    description: "Сторінка не знайдена",
    canonical: "https://doloni.space/404.html",
    currentPage: "404",
  },
  "/en/index.html": {
    lang: "en",
    title: "Doloni Space - Home",
    description:
      "Doloni Space - launching soon. Check out our policies and terms.",
    canonical: "https://doloni.space/en/",
    currentPage: "home",
  },
  "/en/privacy.html": {
    lang: "en",
    title: "Privacy Policy - Doloni Space",
    description:
      "Privacy Policy of Doloni Space. Information about personal data processing.",
    canonical: "https://doloni.space/en/privacy",
    currentPage: "privacy",
  },
  "/en/terms.html": {
    lang: "en",
    title: "Terms of Service - Doloni Space",
    description: "Terms of Service for Doloni Space services.",
    canonical: "https://doloni.space/en/terms",
    currentPage: "terms",
  },
  "/en/contacts.html": {
    lang: "en",
    title: "Contacts - Doloni Space",
    description: "Contacts of Doloni Space.",
    canonical: "https://doloni.space/en/contacts",
    currentPage: "contacts",
  },
  "/en/consumer-info.html": {
    lang: "en",
    title: "Consumer Information - Doloni Space",
    description:
      "Consumer Information of Doloni Space. Links to legal documents and policies.",
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
        privacy: resolve(__dirname, "src/privacy.html"),
        terms: resolve(__dirname, "src/terms.html"),
        contacts: resolve(__dirname, "src/contacts.html"),
        "consumer-info": resolve(__dirname, "src/consumer-info.html"),
        404: resolve(__dirname, "src/404.html"),
        "en/index": resolve(__dirname, "src/en/index.html"),
        "en/privacy": resolve(__dirname, "src/en/privacy.html"),
        "en/terms": resolve(__dirname, "src/en/terms.html"),
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
