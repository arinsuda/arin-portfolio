import { ref, computed, readonly } from "vue";
import { en } from "./en";
import { th } from "./th";
import type { UITranslations } from "./types";

export type Language = "en" | "th";

const currentLang = ref<Language>("en");

// Metadata translations
const metaData = {
  en: {
    title: "Arin Sudakijjathorn | Backend-Focused Full Stack Developer",
    description: "Portfolio of Arin Sudakijjathorn, a Backend-focused Full Stack Developer specializing in Go Fiber, Java Spring Boot, MySQL, and PostgreSQL."
  },
  th: {
    title: "อรินทร์ สุดากิจจาธร | นักพัฒนาซอฟต์แวร์สาย Backend & Full-Stack",
    description: "พอร์ตโฟลิโอของ อรินทร์ สุดากิจจาธร นักพัฒนาซอฟต์แวร์ที่เน้น Backend และ Full-Stack เชี่ยวชาญ Go Fiber, Java Spring Boot, MySQL และ PostgreSQL"
  }
};

function updateDocumentMetadata(lang: Language) {
  // Update HTML lang attribute
  document.documentElement.setAttribute("lang", lang);

  // Update Title
  document.title = metaData[lang].title;

  // Update Meta Description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", metaData[lang].description);
  } else {
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content = metaData[lang].description;
    document.head.appendChild(meta);
  }
}

export function initLanguage() {
  let lang: Language = "en";

  try {
    const saved = localStorage.getItem("lang") as Language | null;
    if (saved === "en" || saved === "th") {
      lang = saved;
    } else {
      const browserLang = navigator.language || (navigator as any).userLanguage || "";
      if (browserLang.toLowerCase().startsWith("th")) {
        lang = "th";
      }
    }
  } catch (e) {
    console.warn("localStorage or navigator not available, defaulting to en", e);
  }

  currentLang.value = lang;
  updateDocumentMetadata(lang);
  localStorage.setItem("lang", lang);
}

export function useI18n() {
  const t = computed<UITranslations>(() => {
    return currentLang.value === "th" ? th : en;
  });

  const locale = readonly(currentLang);

  function setLanguage(lang: Language) {
    if (lang === "en" || lang === "th") {
      currentLang.value = lang;
      localStorage.setItem("lang", lang);
      updateDocumentMetadata(lang);
    }
  }

  function toggleLanguage() {
    const nextLang: Language = currentLang.value === "en" ? "th" : "en";
    setLanguage(nextLang);
  }

  return {
    t,
    locale,
    setLanguage,
    toggleLanguage
  };
}
