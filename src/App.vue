<template>
  <div class="app-layout">
    <!-- Global PrimeVue Toast Notification Container -->
    <Toast position="bottom-right" />

    <!-- Navbar Navigation -->
    <Navbar />

    <!-- Main View Container with smooth transition -->
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Professional Minimalist Footer (Inspired by boatchrnthn.vercel.app) -->
    <footer class="footer">
      <div class="footer-container">
        <!-- Brand & Bio -->
        <div class="footer-brand">
          <router-link to="/" class="footer-logo">
            <span class="logo-bold">Arin</span><span class="logo-accent">.dev</span>
          </router-link>
          <p class="footer-description">
            {{ t.footer.bio }}
          </p>
          <div class="footer-built-with">
            <span>Built with</span>
            <span class="built-tech">Vue 3</span>
            <span>&amp;</span>
            <span class="built-tech">PrimeVue</span>
          </div>
        </div>

        <!-- Quick Links & Socials -->
        <div class="footer-nav">
          <div class="footer-nav-col">
            <h5 class="footer-heading">Navigation</h5>
            <ul class="footer-link-list">
              <li><a href="#about" class="footer-nav-link">{{ t.nav.about }}</a></li>
              <li><a href="#experience" class="footer-nav-link">{{ t.nav.experience }}</a></li>
              <li><a href="#projects" class="footer-nav-link">{{ t.nav.projects }}</a></li>
              <li><a href="#skills" class="footer-nav-link">{{ t.nav.skills }}</a></li>
              <li><a href="#contact" class="footer-nav-link">{{ t.nav.contact }}</a></li>
            </ul>
          </div>

          <div class="footer-nav-col">
            <h5 class="footer-heading">Connect</h5>
            <ul class="footer-link-list">
              <li>
                <a :href="profile.socials.github" target="_blank" rel="noopener noreferrer" class="footer-nav-link">
                  <i class="pi pi-github icon-sm"></i> GitHub
                </a>
              </li>
              <li v-if="profile.socials.linkedin">
                <a :href="profile.socials.linkedin" target="_blank" rel="noopener noreferrer" class="footer-nav-link">
                  <i class="pi pi-linkedin icon-sm"></i> LinkedIn
                </a>
              </li>
              <li>
                <a :href="'mailto:' + profile.email" class="footer-nav-link">
                  <i class="pi pi-envelope icon-sm"></i> Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <div class="container footer-bottom-inner">
          <p class="copyright-text">&copy; {{ currentYear }} {{ profile.name }}. {{ t.footer.rights }}</p>
          <p class="footer-notes">{{ t.footer.notes }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Toast from "primevue/toast";
import Navbar from "./components/Navbar.vue";
import { profile } from "./data/profile";
import { useI18n } from "./i18n";

const { t } = useI18n();
const currentYear = new Date().getFullYear();
</script>

<style>
/* Global Router Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex-grow: 1;
  padding-top: 76px; /* offset for fixed navbar */
}

/* Minimalist Modern Footer */
.footer {
  background-color: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  padding: 5rem 0 0;
  margin-top: auto;
  transition: background-color var(--transition-normal), border-color var(--transition-normal);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 3rem;
}

.footer-brand {
  max-width: 440px;
  text-align: left;
}

.footer-logo {
  display: inline-flex;
  align-items: baseline;
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.logo-bold {
  color: var(--text-primary);
}

.logo-accent {
  color: var(--accent-emerald);
  margin-left: 1px;
}

.footer-description {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.footer-built-with {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
}

.built-tech {
  color: var(--text-primary);
  font-weight: 600;
}

.footer-nav {
  display: flex;
  gap: 4rem;
}

.footer-nav-col {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.footer-heading {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}

.footer-link-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-nav-link {
  font-size: 0.92rem;
  color: var(--text-secondary);
  transition: color var(--transition-fast), transform var(--transition-fast);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-nav-link:hover {
  color: var(--text-primary);
  transform: translateX(2px);
}

.icon-sm {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.footer-bottom {
  border-top: 1px solid var(--border-color);
  padding: 1.75rem 0;
  background-color: var(--bg-primary);
}

.footer-bottom-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.footer-notes {
  font-family: var(--font-mono);
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    gap: 2.5rem;
  }
  
  .footer-nav {
    gap: 3rem;
  }
  
  .footer-bottom-inner {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
}
</style>
