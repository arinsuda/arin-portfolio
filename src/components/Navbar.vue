<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="navbar-container">
      <router-link to="/" class="logo-link">
        <span class="logo-text">A<span class="text-gradient">rin</span></span>
      </router-link>

      <!-- Desktop Navigation Menu -->
      <ul class="nav-menu" :class="{ active: isMobileMenuOpen }">
        <li v-for="item in navItems" :key="item.href" class="nav-item">
          <a
            v-if="isHomePage"
            :href="item.href"
            class="nav-link"
            @click="handleNavClick($event, item.href)"
          >
            {{ item.label }}
          </a>
          <router-link
            v-else
            :to="'/' + item.href"
            class="nav-link"
            @click="isMobileMenuOpen = false"
          >
            {{ item.label }}
          </router-link>
        </li>
      </ul>

      <div class="nav-actions">
        <!-- Language Switcher -->
        <button
          class="lang-toggle"
          @click="toggleLanguage"
          :aria-label="locale === 'th' ? 'Switch to English' : 'สลับเป็นภาษาไทย'"
          id="lang-toggler"
        >
          <BaseIcon name="language" size="18" class="lang-icon" />
          <span class="lang-label-text">{{ locale === 'th' ? 'EN' : 'TH' }}</span>
        </button>

        <!-- Light/Dark Mode Switcher -->
        <button
          class="theme-toggle"
          @click="toggleTheme"
          :aria-label="locale === 'th' ? 'สลับโหมดธีม' : 'Toggle Theme Mode'"
          id="theme-toggler"
        >
          <BaseIcon v-if="isDarkTheme" name="sun" size="18" :aria-label="locale === 'th' ? 'โหมดสว่าง' : 'Light mode'" />
          <BaseIcon v-else name="moon" size="18" :aria-label="locale === 'th' ? 'โหมดมืด' : 'Dark mode'" />
        </button>

        <!-- Mobile Hamburger Trigger -->
        <button
          class="mobile-toggle"
          :class="{ active: isMobileMenuOpen }"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          :aria-label="locale === 'th' ? 'เปิด/ปิดเมนูนำทาง' : 'Toggle Navigation Menu'"
          id="hamburger-menu"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRoute } from "vue-router";
import BaseIcon from "./BaseIcon.vue";
import { useI18n } from "../i18n";

const route = useRoute();
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const isDarkTheme = ref(true);

const { t, locale, toggleLanguage } = useI18n();

const navItems = computed(() => [
  { label: t.value.nav.home, href: "#home" },
  { label: t.value.nav.about, href: "#about" },
  { label: t.value.nav.experience, href: "#experience" },
  { label: t.value.nav.projects, href: "#projects" },
  { label: t.value.nav.skills, href: "#skills" },
  { label: t.value.nav.professionalSkills, href: "#professional-skills" },
  { label: t.value.nav.education, href: "#education" },
  { label: t.value.nav.contact, href: "#contact" },
]);

const isHomePage = computed(() => {
  return route.path === "/";
});

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const handleNavClick = (event: Event, href: string) => {
  isMobileMenuOpen.value = false;
  const targetId = href.replace("#", "");
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    event.preventDefault();
    targetElement.scrollIntoView({ behavior: "smooth" });
    history.pushState(null, "", href);
  }
};

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  if (isDarkTheme.value) {
    document.body.classList.remove("light-theme");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.add("light-theme");
    localStorage.setItem("theme", "light");
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  
  // Theme check
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  if (savedTheme === "light" || (!savedTheme && !prefersDark)) {
    isDarkTheme.value = false;
    document.body.classList.add("light-theme");
  } else {
    isDarkTheme.value = true;
    document.body.classList.remove("light-theme");
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 1000;
  display: flex;
  align-items: center;
  border-bottom: 1px solid transparent;
  transition: height var(--transition-normal), background-color var(--transition-normal), border-color var(--transition-normal);
}

.navbar-scrolled {
  height: 70px;
  background-color: var(--glass-bg);
  backdrop-filter: blur(16px) saturate(120%);
  -webkit-backdrop-filter: blur(16px) saturate(120%);
  border-bottom: 1px solid var(--glass-border);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.logo-link {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.logo-text {
  color: var(--text-primary);
}

.nav-menu {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  position: relative;
  padding: 0.5rem 0;
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-gradient);
  transition: width var(--transition-fast);
}

.nav-link:hover::after {
  width: 100%;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.lang-toggle {
  height: 40px;
  padding: 0 0.85rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  gap: 0.35rem;
  cursor: pointer;
  color: var(--text-secondary);
  font-family: var(--font-sans);
  font-size: 0.85rem;
  font-weight: 600;
  transition: transform var(--transition-fast), background var(--transition-fast), border-color var(--transition-fast), color var(--transition-fast);
}

.light-theme .lang-toggle {
  background: rgba(0, 0, 0, 0.02);
}

.lang-toggle:hover {
  background: rgba(255, 255, 255, 0.06);
  transform: scale(1.05);
  border-color: var(--accent-cyan);
  color: var(--text-primary);
}

.light-theme .lang-toggle:hover {
  background: rgba(0, 0, 0, 0.04);
}

.lang-icon {
  color: var(--text-muted);
  transition: color var(--transition-fast);
}

.lang-toggle:hover .lang-icon {
  color: var(--accent-cyan);
}

.lang-label-text {
  font-family: var(--font-sans);
}

.theme-toggle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--text-secondary);
  transition: transform var(--transition-fast), background var(--transition-fast), border-color var(--transition-fast);
}

.light-theme .theme-toggle {
  background: rgba(0, 0, 0, 0.02);
}

.theme-toggle:hover {
  background: rgba(255, 255, 255, 0.06);
  transform: scale(1.05);
  border-color: var(--accent-cyan);
  color: var(--text-primary);
}

.light-theme .theme-toggle:hover {
  background: rgba(0, 0, 0, 0.04);
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
  z-index: 1001;
  background: transparent;
  border: none;
  padding: 0;
}

.mobile-toggle .bar {
  height: 3px;
  width: 100%;
  background-color: var(--text-primary);
  border-radius: 10px;
  transition: all var(--transition-normal);
}

/* Mobile Toggle Hamburger Animation */
.mobile-toggle.active .bar:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.mobile-toggle.active .bar:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.active .bar:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

@media (max-width: 992px) {
  .nav-menu {
    gap: 1rem;
  }
  .nav-link {
    font-size: 0.85rem;
  }
}

@media (max-width: 820px) {
  .mobile-toggle {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 320px;
    height: 100vh;
    background-color: var(--bg-secondary);
    border-left: 1px solid var(--border-color);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    transition: right var(--transition-normal);
    z-index: 1000;
  }

  .nav-menu.active {
    right: 0;
  }

  .nav-link {
    font-size: 1.2rem;
  }
}
</style>
