<template>
  <header class="navbar-wrapper" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="container navbar-container">
      <!-- Logo Monogram -->
      <router-link to="/" class="logo-link">
        <span class="logo-box">AS</span>
        <span class="logo-full">Arin<span class="logo-dot">.</span></span>
      </router-link>

      <!-- Desktop Navigation Menu (Minimalist & High Signal) -->
      <nav class="desktop-nav">
        <ul class="nav-links">
          <li v-for="item in navItems" :key="item.to">
            <router-link
              :to="item.to"
              class="nav-link"
              :class="{ 'nav-link-active': isCurrentRoute(item.to) }"
            >
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- Actions Bar (Lang + Theme + Mobile Trigger) -->
      <div class="nav-actions">
        <!-- Language Switcher Button -->
        <Button
          severity="secondary"
          variant="text"
          rounded
          class="action-btn lang-btn"
          @click="toggleLanguage"
          :aria-label="t.common.langSwitch"
          :title="t.common.langSwitch"
        >
          <i class="pi pi-globe lang-icon"></i>
          <span class="lang-text">{{ locale === 'th' ? 'EN' : 'TH' }}</span>
        </Button>

        <!-- Dark/Light Theme Switcher Button -->
        <Button
          severity="secondary"
          variant="text"
          rounded
          class="action-btn theme-btn"
          @click="toggleTheme"
          :aria-label="isDarkTheme ? t.common.switchToLight : t.common.switchToDark"
          :title="isDarkTheme ? t.common.switchToLight : t.common.switchToDark"
        >
          <i :class="isDarkTheme ? 'pi pi-sun' : 'pi pi-moon'"></i>
        </Button>

        <!-- Mobile Menu Trigger Button -->
        <Button
          severity="secondary"
          variant="text"
          rounded
          class="mobile-menu-trigger"
          @click="isDrawerOpen = true"
          aria-label="Open Navigation Menu"
        >
          <i class="pi pi-bars text-xl"></i>
        </Button>
      </div>
    </div>

    <!-- PrimeVue Mobile Drawer Menu -->
    <Drawer
      v-model:visible="isDrawerOpen"
      position="right"
      class="mobile-drawer"
      :header="t.nav.menu"
    >
      <div class="drawer-content">
        <ul class="drawer-nav-list">
          <li>
            <router-link
              to="/"
              class="drawer-nav-link"
              :class="{ 'nav-link-active': route.path === '/' }"
              @click="isDrawerOpen = false"
            >
              <i class="pi pi-home drawer-nav-icon"></i>
              <span>{{ t.nav.home }}</span>
            </router-link>
          </li>
          <li v-for="item in navItems" :key="item.to">
            <router-link
              :to="item.to"
              class="drawer-nav-link"
              :class="{ 'nav-link-active': isCurrentRoute(item.to) }"
              @click="isDrawerOpen = false"
            >
              <i :class="item.icon" class="drawer-nav-icon"></i>
              <span>{{ item.label }}</span>
            </router-link>
          </li>
        </ul>

        <div class="drawer-footer">
          <div class="drawer-settings">
            <Button
              severity="secondary"
              outlined
              class="w-full flex items-center justify-center gap-2"
              @click="toggleLanguage"
            >
              <i class="pi pi-globe"></i>
              <span>{{ locale === 'th' ? t.common.switchLangToEn : t.common.switchLangToTh }}</span>
            </Button>
            <Button
              severity="secondary"
              outlined
              class="w-full flex items-center justify-center gap-2"
              @click="toggleTheme"
            >
              <i :class="isDarkTheme ? 'pi pi-sun' : 'pi pi-moon'"></i>
              <span>{{ isDarkTheme ? t.common.lightMode : t.common.darkMode }}</span>
            </Button>
          </div>
        </div>
      </div>
    </Drawer>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRoute } from "vue-router";
import Button from "primevue/button";
import Drawer from "primevue/drawer";
import { useI18n } from "../i18n";

const route = useRoute();
const isScrolled = ref(false);
const isDrawerOpen = ref(false);
const isDarkTheme = ref(true);

const { t, locale, toggleLanguage } = useI18n();

const navItems = computed(() => [
  { label: t.value.nav.about, to: "/about", icon: "pi pi-user" },
  { label: t.value.nav.projects, to: "/projects", icon: "pi pi-folder" },
]);

const isCurrentRoute = (path: string) => {
  if (path === "/") {
    return route.path === "/";
  }
  return route.path.startsWith(path);
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  if (isDarkTheme.value) {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light-theme");
    document.body.classList.remove("light-theme");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light-theme");
    document.body.classList.add("light-theme");
    localStorage.setItem("theme", "light");
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "light" || (!savedTheme && !prefersDark)) {
    isDarkTheme.value = false;
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light-theme");
    document.body.classList.add("light-theme");
  } else {
    isDarkTheme.value = true;
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light-theme");
    document.body.classList.remove("light-theme");
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.navbar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 76px;
  z-index: 1000;
  display: flex;
  align-items: center;
  border-bottom: 1px solid transparent;
  transition: all var(--transition-normal);
}

.navbar-scrolled {
  height: 68px;
  background-color: var(--glass-bg);
  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);
  border-bottom: 1px solid var(--border-color);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Monogram & Brand Logo */
.logo-link {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-heading);
  text-decoration: none;
}

.logo-box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  font-weight: 800;
  font-size: 0.95rem;
  letter-spacing: -0.02em;
  transition: border-color var(--transition-fast), transform var(--transition-fast);
}

.logo-link:hover .logo-box {
  border-color: var(--accent-emerald);
  transform: scale(1.04);
}

.logo-full {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

.logo-dot {
  color: var(--accent-emerald);
}

/* Desktop Navigation */
.desktop-nav {
  display: block;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2.25rem;
}

.nav-link {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color var(--transition-fast);
  position: relative;
  padding: 0.4rem 0;
  text-decoration: none;
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-link-active {
  color: var(--accent-emerald) !important;
  font-weight: 700 !important;
}

.nav-link-active::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--accent-emerald);
  border-radius: 2px;
}

/* Actions */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.action-btn {
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary) !important;
  border: 1px solid var(--border-color) !important;
  background: var(--bg-secondary) !important;
  transition: all var(--transition-fast) !important;
}

.action-btn:hover {
  color: var(--text-primary) !important;
  border-color: var(--border-hover) !important;
  background: var(--bg-tertiary) !important;
}

.lang-btn {
  width: auto !important;
  padding: 0 0.85rem !important;
  gap: 0.4rem;
  font-size: 0.82rem !important;
  font-weight: 600 !important;
}

.lang-icon {
  font-size: 0.9rem;
}

.mobile-menu-trigger {
  display: none !important;
  color: var(--text-primary) !important;
  border: 1px solid var(--border-color) !important;
  background: var(--bg-secondary) !important;
}

.mobile-menu-trigger:hover {
  background: var(--bg-tertiary) !important;
  border-color: var(--border-hover) !important;
}

/* Mobile Drawer Styling */
.drawer-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 1rem 0;
}

.drawer-nav-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.drawer-nav-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.85rem 1rem;
  border-radius: 10px;
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--text-secondary);
  border: 1px solid transparent;
  text-decoration: none;
  transition: all var(--transition-fast);
}

.drawer-nav-link:hover {
  color: var(--text-primary);
  background: var(--bg-tertiary);
  border-color: var(--border-color);
}

.drawer-nav-link.nav-link-active {
  color: var(--accent-emerald);
  background: var(--bg-tertiary);
  border-color: rgba(16, 185, 129, 0.25);
  font-weight: 600;
}

.drawer-nav-icon {
  font-size: 1.1rem;
  color: var(--accent-emerald);
}

.drawer-footer {
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
}

.drawer-settings {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

@media (max-width: 860px) {
  .desktop-nav {
    display: none;
  }

  .mobile-menu-trigger {
    display: inline-flex !important;
  }
}
</style>
