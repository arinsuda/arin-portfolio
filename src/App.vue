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
            <h5 class="footer-heading">{{ t.footer.navigationHeading }}</h5>
            <ul class="footer-link-list">
              <li><router-link to="/" class="footer-nav-link">{{ t.nav.home }}</router-link></li>
              <li><router-link to="/about" class="footer-nav-link">{{ t.nav.about }}</router-link></li>
              <li><router-link to="/projects" class="footer-nav-link">{{ t.nav.projects }}</router-link></li>
            </ul>
          </div>

          <div class="footer-nav-col">
            <h5 class="footer-heading">{{ t.footer.connectHeading }}</h5>
            <ul class="footer-link-list">
              <li v-for="s in footerSocials" :key="s.id">
                <component
                  :is="s.url.startsWith('http') || s.url.startsWith('mailto:') ? 'a' : 'router-link'"
                  :href="s.url.startsWith('http') || s.url.startsWith('mailto:') ? s.url : undefined"
                  :to="!s.url.startsWith('http') && !s.url.startsWith('mailto:') ? s.url : undefined"
                  :target="s.url.startsWith('http') ? '_blank' : undefined"
                  :rel="s.url.startsWith('http') ? 'noopener noreferrer' : undefined"
                  class="footer-nav-link"
                >
                  <i :class="s.icon + ' icon-sm'"></i> {{ s.label }}
                </component>
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
import { computed } from "vue";
import Toast from "primevue/toast";
import Navbar from "./components/Navbar.vue";
import { profile } from "./data/profile";
import { useI18n } from "./i18n";
import type { SocialItem } from "./types";

const { t } = useI18n();
const currentYear = new Date().getFullYear();

interface FooterSocialItem extends SocialItem {
  label: string;
}

const footerSocials = computed<FooterSocialItem[]>(() => {
  const items: { id: string; label: string; icon: string; url?: string; title: string }[] = [
    { id: "github", label: "GitHub", icon: "pi pi-github", url: profile.socials.github, title: t.value.contact.githubProfile },
    { id: "linkedin", label: "LinkedIn", icon: "pi pi-linkedin", url: profile.socials.linkedin, title: t.value.contact.linkedinProfile },
    { id: "instagram", label: "Instagram", icon: "pi pi-instagram", url: profile.socials.instagram, title: t.value.contact.instagramProfile },
    { id: "twitter", label: "X (Twitter)", icon: "pi pi-twitter", url: profile.socials.twitter, title: t.value.contact.twitterProfile },
    { id: "facebook", label: "Facebook", icon: "pi pi-facebook", url: profile.socials.facebook, title: t.value.contact.facebookProfile },
    { id: "email", label: "Email", icon: "pi pi-envelope", url: "mailto:" + profile.email, title: t.value.contact.sendEmail },
  ];
  return items.filter((item): item is FooterSocialItem => typeof item.url === "string" && item.url.length > 0);
});
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
  border-top: 1px solid var(--border-color);
  padding: 5rem 0 0;
  margin-top: auto;
  transition: border-color var(--transition-normal);
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
  color: var(--accent-primary);
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
