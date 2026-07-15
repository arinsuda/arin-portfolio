<template>
  <div class="app-layout">
    <!-- Navbar Navigation -->
    <Navbar />

    <!-- Main View Container with transition -->
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Global Footer -->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-info">
          <h4 class="footer-logo">Arin<span class="text-gradient">.S</span></h4>
          <p class="footer-description">
            Building robust backend architectures, clean API integrations, and developer tooling.
          </p>
        </div>

        <div class="footer-links">
          <a :href="profile.socials.github" target="_blank" rel="noopener" class="footer-social-link">GitHub</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} {{ profile.name }}. All rights reserved.</p>
        <p class="footer-notes">Static Developer Portfolio built with Vue 3, TS, and Vite.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import { profile } from "./data/profile";

const currentYear = new Date().getFullYear();
</script>

<style>
/* Global Router Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
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
  padding-top: 80px; /* offset for fixed navbar */
}

.footer {
  background-color: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  padding: 4rem 0 2rem;
  margin-top: auto;
  transition: background-color var(--transition-normal), border-color var(--transition-normal);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3rem;
}

.footer-info {
  max-width: 400px;
  text-align: left;
}

.footer-logo {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.footer-description {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-social-link {
  font-weight: 500;
  color: var(--text-secondary);
  position: relative;
  padding-bottom: 0.2rem;
}

.footer-social-link:hover {
  color: var(--text-primary);
}

.footer-social-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-gradient);
  transition: width var(--transition-fast);
}

.footer-social-link:hover::after {
  width: 100%;
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 2rem 0;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  width: 100%;
}

.footer-notes {
  font-family: var(--font-mono);
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .footer-bottom {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
