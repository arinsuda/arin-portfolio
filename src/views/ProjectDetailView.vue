<template>
  <div v-if="project" class="project-detail-view">
    <!-- Hero Banner Area -->
    <div class="project-hero">
      <div class="banner-wrapper">
        <img :src="project.thumbnail" :alt="project.title" class="banner-img" />
        <div class="banner-overlay"></div>
      </div>

      <div class="container hero-content-container">
        <div class="back-link-wrapper">
          <router-link to="/#projects" class="back-link">
            <span class="arrow-container">
              <BaseIcon name="arrow-left" size="16" />
            </span> 
            Back to Projects
          </router-link>
        </div>

        <div class="hero-header-info">
          <h1 class="project-title">{{ project.title }}</h1>
          <p class="project-tagline">{{ project.shortDescription }}</p>
          <div class="project-meta-badges">
            <span class="meta-badge">
              <strong>Role:</strong> {{ project.role }}
            </span>
            <span class="meta-badge">
              <strong>Period:</strong> {{ project.period }}
            </span>
            <span class="meta-badge">
              <strong>Status:</strong> {{ project.status }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Case Study Body Content -->
    <div class="container case-study-container">
      <!-- Confidentiality Warning Banner (if applicable) -->
      <div v-if="project.confidentialityNote" class="confidential-banner">
        <BaseIcon name="lock" size="20" stroke-width="2.5" class="confidential-banner-icon" />
        <div>
          <strong>Confidentiality Notice:</strong> {{ project.confidentialityNote }}
        </div>
      </div>

      <div class="case-study-grid">
        <!-- Main Description -->
        <div class="case-study-main">
          <!-- Overview Section -->
          <div class="content-block">
            <h2 class="section-heading">Project Overview</h2>
            <p class="overview-text">{{ project.description }}</p>
            <p v-if="project.ownership" class="ownership-text">
              <strong>Ownership:</strong> {{ project.ownership }}
            </p>
          </div>

          <!-- Personal Contributions Section -->
          <div class="content-block" v-if="project.contributions &amp;&amp; project.contributions.length > 0">
            <h2 class="section-heading">My Verified Contributions</h2>
            <div class="contributions-list">
              <div v-for="(contribution, idx) in project.contributions" :key="idx" class="contribution-group">
                <h3 class="contribution-area">{{ contribution.area }}</h3>
                <ul class="contributions-details">
                  <li v-for="(detail, dIdx) in contribution.details" :key="dIdx">
                    <span class="check-icon">
                      <BaseIcon name="check" size="14" stroke-width="3" />
                    </span>
                    <span class="detail-text">{{ detail }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Exclusions Section -->
          <div class="content-block exclusion-block" v-if="project.exclusions &amp;&amp; project.exclusions.length > 0">
            <h2 class="section-heading border-danger">Scope Boundaries (What I Did Not Work On)</h2>
            <p class="exclusion-intro">To maintain accuracy, the following boundaries specify features handled by other team members:</p>
            <ul class="exclusions-list">
              <li v-for="(exclusion, eIdx) in project.exclusions" :key="eIdx">
                <span class="exclusion-bullet"></span>
                <span class="exclusion-text">{{ exclusion }}</span>
              </li>
            </ul>
          </div>

          <!-- Key Features Section -->
          <div class="content-block">
            <h2 class="section-heading">Key Features</h2>
            <ul class="features-checklist">
              <li v-for="(feature, i) in project.features" :key="i">
                <span class="check-icon">
                  <BaseIcon name="check" size="14" stroke-width="3" />
                </span>
                <span class="feature-text">{{ feature.text }}</span>
                <!-- Status Badge (for REMOV feature state) -->
                <span v-if="feature.status" class="status-badge" :class="'status-' + feature.status">
                  {{ feature.status.replace('-', ' ') }}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Details Sidebar -->
        <aside class="case-study-sidebar">
          <div class="sidebar-block glass-card">
            <h3 class="sidebar-title">Technologies</h3>
            <div class="tech-stack-list">
              <span 
                v-for="tech in project.technologies" 
                :key="tech" 
                class="tech-badge"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Project Links (Render only if links exist) -->
          <div class="sidebar-block glass-card actions-block" v-if="project.links &amp;&amp; project.links.length > 0">
            <h3 class="sidebar-title">Project Links</h3>
            <div class="action-buttons">
              <a 
                v-for="(link, lIdx) in project.links"
                :key="lIdx"
                :href="link.url" 
                target="_blank" 
                rel="noopener" 
                class="btn"
                :class="link.type === 'github' ? 'btn-primary' : 'btn-secondary'"
              >
                <BaseIcon :name="link.type === 'github' ? 'github' : 'external-link'" size="16" class="btn-icon-spacing" />
                {{ link.label }}
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>

  <!-- Project Not Found Fallback -->
  <div v-else class="project-not-found">
    <div class="container error-container glass-card">
      <span class="error-icon">
        <BaseIcon name="warning" size="48" class="warning-icon" />
      </span>
      <h1 class="error-title">Case Study Not Found</h1>
      <p class="error-text">
        The project you are looking for does not exist or has been removed from our listings.
      </p>
      <router-link to="/" class="btn btn-primary">
        Return to Home
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import BaseIcon from "../components/BaseIcon.vue";
import { projects } from "../data/projects";

const route = useRoute();

const project = computed(() => {
  const slug = route.params.slug as string;
  return projects.find((p) => p.slug === slug) || null;
});
</script>

<style scoped>
.project-detail-view {
  min-height: 100vh;
  padding-bottom: 6rem;
}

/* Hero Banner Style */
.project-hero {
  position: relative;
  height: 50vh;
  min-height: 400px;
  display: flex;
  align-items: flex-end;
  color: #ffffff;
  overflow: hidden;
  padding-bottom: 3rem;
}

.banner-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(9, 10, 15, 0.4) 0%,
    rgba(9, 10, 15, 0.95) 100%
  );
}

.light-theme .banner-overlay {
  background: linear-gradient(
    to bottom,
    rgba(248, 250, 252, 0.4) 0%,
    rgba(248, 250, 252, 0.98) 100%
  );
}

.hero-content-container {
  position: relative;
  z-index: 1;
  text-align: left;
}

.back-link-wrapper {
  margin-bottom: 2rem;
}

.back-link {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--accent-cyan);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  border-radius: 30px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: all var(--transition-fast);
}

.light-theme .back-link {
  background: rgba(0, 0, 0, 0.03);
}

.back-link:hover {
  transform: translateX(-3px);
  border-color: var(--accent-cyan);
  color: #ffffff;
  background: var(--accent-cyan);
}

.light-theme .back-link:hover {
  color: #ffffff;
}

.arrow-container {
  display: inline-flex;
  align-items: center;
}

.project-title {
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -1.5px;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.project-tagline {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  max-width: 800px;
}

.project-meta-badges {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.meta-badge {
  font-size: 0.9rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  padding: 0.35rem 1rem;
  border-radius: 30px;
  color: var(--text-secondary);
}

.light-theme .meta-badge {
  background: rgba(0, 0, 0, 0.03);
}

/* Case Study Body */
.case-study-container {
  margin-top: 3rem;
}

.confidential-banner {
  padding: 1.25rem;
  background: rgba(225, 29, 72, 0.05);
  border-left: 4px solid #e11d48;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: var(--text-primary);
  text-align: left;
  margin-bottom: 3rem;
}

.confidential-banner-icon {
  color: #e11d48;
}

.case-study-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 4rem;
  align-items: start;
}

.case-study-main {
  text-align: left;
}

.content-block {
  margin-bottom: 3.5rem;
}

.section-heading {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-color);
}

.border-danger {
  border-bottom: 1px solid rgba(225, 29, 72, 0.2);
}

.overview-text {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.ownership-text {
  font-size: 1.05rem;
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  padding: 1rem;
  border-radius: 8px;
}

/* Personal Contributions Section */
.contributions-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contribution-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contribution-area {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
}

.contributions-details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-left: 0.5rem;
}

.contributions-details li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.detail-text {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Exclusions Section */
.exclusion-block {
  background: rgba(225, 29, 72, 0.02);
  border: 1px solid rgba(225, 29, 72, 0.1);
  padding: 2rem;
  border-radius: 12px;
}

.exclusion-intro {
  font-size: 1.05rem;
  color: var(--text-secondary);
  margin-bottom: 1.25rem;
}

.exclusions-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.exclusions-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.exclusion-bullet {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #e11d48;
}

.exclusion-text {
  font-size: 1.05rem;
  color: var(--text-secondary);
}

/* Features checklist & status badges */
.features-checklist {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.features-checklist li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.check-icon {
  color: #22c55e;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
}

.feature-text {
  font-size: 1.05rem;
  color: var(--text-secondary);
}

.status-badge {
  font-size: 0.75rem;
  font-family: var(--font-mono);
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 600;
  border: 1px solid transparent;
}

.status-confirmed {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  border-color: rgba(34, 197, 94, 0.2);
}

.status-implemented {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  border-color: rgba(59, 130, 246, 0.2);
}

.status-in-development {
  background: rgba(234, 179, 8, 0.1);
  color: #eab308;
  border-color: rgba(234, 179, 8, 0.2);
}

.status-planned {
  background: rgba(100, 116, 139, 0.1);
  color: #64748b;
  border-color: rgba(100, 116, 139, 0.2);
}

/* Sidebar */
.case-study-sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: left;
}

.sidebar-block {
  padding: 2rem;
  border-radius: 16px;
}

.sidebar-title {
  font-size: 1.2rem;
  margin-bottom: 1.25rem;
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.5rem;
}

.tech-stack-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-badge {
  font-size: 0.85rem;
  font-family: var(--font-mono);
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  padding: 0.25rem 0.65rem;
  border-radius: 4px;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.action-buttons .btn {
  width: 100%;
}

.btn-icon-spacing {
  margin-right: 0.5rem;
}

/* Error Not Found page */
.project-not-found {
  padding: 6rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
}

.error-container {
  max-width: 500px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
}

.error-icon {
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items: center;
}

.warning-icon {
  color: #eab308;
}

.error-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.error-text {
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

@media (max-width: 1024px) {
  .project-hero {
    height: auto;
    padding-top: 4rem;
  }
  .case-study-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 480px) {
  .project-title {
    font-size: 2.2rem;
  }
  .sidebar-block {
    padding: 1.5rem;
  }
}
</style>
