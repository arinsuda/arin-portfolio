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
          <Button
            as="router-link"
            to="/#projects"
            severity="secondary"
            variant="text"
            size="small"
            class="back-btn"
          >
            <i class="pi pi-arrow-left text-xs"></i>
            <span>{{ t.projectDetail.back }}</span>
          </Button>
        </div>

        <div class="hero-header-info">
          <h1 class="project-title">{{ project.title }}</h1>
          <p class="project-tagline">{{ locale === 'th' ? project.shortDescription.th : project.shortDescription.en }}</p>
          
          <div class="project-meta-badges">
            <Tag severity="info" class="meta-tag">
              <i class="pi pi-user mr-1 text-xs"></i>
              <span><strong>{{ t.projectDetail.role }}:</strong> {{ locale === 'th' ? project.role.th : project.role.en }}</span>
            </Tag>
            <Tag severity="secondary" class="meta-tag">
              <i class="pi pi-calendar mr-1 text-xs"></i>
              <span><strong>{{ t.projectDetail.period }}:</strong> {{ locale === 'th' ? project.period.th : project.period.en }}</span>
            </Tag>
            <Tag severity="success" class="meta-tag">
              <i class="pi pi-check-circle mr-1 text-xs"></i>
              <span><strong>{{ t.projectDetail.status }}:</strong> {{ locale === 'th' ? project.status.th : project.status.en }}</span>
            </Tag>
          </div>
        </div>
      </div>
    </div>

    <!-- Case Study Body Content -->
    <div class="container case-study-container">
      <!-- Confidentiality Banner with PrimeVue Message -->
      <Message
        v-if="project.confidentialityNote"
        severity="warn"
        :closable="false"
        class="confidential-banner"
      >
        <div class="banner-msg-content">
          <strong>{{ t.projectDetail.notice }}:</strong> {{ locale === 'th' ? project.confidentialityNote.th : project.confidentialityNote.en }}
        </div>
      </Message>

      <div class="case-study-grid">
        <!-- Main Content Column -->
        <div class="case-study-main">
          <!-- Overview Section -->
          <Card class="detail-card">
            <template #title>
              <h2 class="section-heading">{{ t.projectDetail.overview }}</h2>
            </template>
            <template #content>
              <p class="overview-text">{{ locale === 'th' ? project.description.th : project.description.en }}</p>
              <p v-if="project.ownership" class="ownership-text">
                <strong class="text-primary">{{ t.projectDetail.ownership }}:</strong> {{ locale === 'th' ? project.ownership.th : project.ownership.en }}
              </p>
            </template>
          </Card>

          <!-- Personal Contributions Section -->
          <Card class="detail-card" v-if="project.contributions && project.contributions.length > 0">
            <template #title>
              <h2 class="section-heading">{{ t.projectDetail.contributions }}</h2>
            </template>
            <template #content>
              <div class="contributions-list">
                <div v-for="(contribution, idx) in project.contributions" :key="idx" class="contribution-group">
                  <h4 class="contribution-area">{{ locale === 'th' ? contribution.area.th : contribution.area.en }}</h4>
                  <ul class="contributions-details">
                    <li v-for="(detail, dIdx) in contribution.details" :key="dIdx">
                      <i class="pi pi-check detail-check-icon"></i>
                      <span class="detail-text">{{ locale === 'th' ? detail.th : detail.en }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </template>
          </Card>

          <!-- Exclusions / Scope Boundaries Section -->
          <Card class="detail-card exclusion-card" v-if="project.exclusions && project.exclusions.length > 0">
            <template #title>
              <h2 class="section-heading border-danger">{{ t.projectDetail.scopeBoundaries }}</h2>
            </template>
            <template #content>
              <p class="exclusion-intro">{{ t.projectDetail.scopeBoundariesIntro }}</p>
              <ul class="exclusions-list">
                <li v-for="(exclusion, eIdx) in project.exclusions" :key="eIdx">
                  <i class="pi pi-times-circle exclusion-bullet-icon"></i>
                  <span class="exclusion-text">{{ locale === 'th' ? exclusion.th : exclusion.en }}</span>
                </li>
              </ul>
            </template>
          </Card>

          <!-- Project Image Gallery Section with PrimeVue Image Preview -->
          <Card class="detail-card gallery-card" v-if="project.gallery && project.gallery.length > 0">
            <template #title>
              <h2 class="section-heading">{{ t.projectDetail.galleryTitle }}</h2>
              <p class="gallery-subtitle-text">{{ t.projectDetail.gallerySubtitle }}</p>
            </template>
            <template #content>
              <div class="gallery-grid">
                <div 
                  v-for="img in project.gallery" 
                  :key="img.id"
                  class="gallery-item-box"
                >
                  <div class="gallery-img-wrapper">
                    <Image 
                      :src="img.src" 
                      :alt="locale === 'th' ? img.alt.th : img.alt.en" 
                      preview 
                      imageClass="gallery-img-tag"
                    />
                    <div class="placeholder-label-badge" v-if="img.isPlaceholder">
                      <i class="pi pi-image mr-1 text-xs"></i>
                      <span>{{ t.projectDetail.placeholderLabel }}</span>
                    </div>
                  </div>
                  <div class="gallery-caption" v-if="img.caption">
                    <p>{{ locale === 'th' ? img.caption.th : img.caption.en }}</p>
                  </div>
                </div>
              </div>
            </template>
          </Card>

          <!-- Key Features Section -->
          <Card class="detail-card" v-if="project.features && project.features.length > 0">
            <template #title>
              <h2 class="section-heading">{{ t.projectDetail.keyFeatures }}</h2>
            </template>
            <template #content>
              <ul class="features-checklist">
                <li v-for="(feature, i) in project.features" :key="i">
                  <i class="pi pi-check-circle feature-check-icon"></i>
                  <span class="feature-text">{{ locale === 'th' ? feature.text.th : feature.text.en }}</span>
                  <Tag 
                    v-if="feature.status" 
                    :value="getFeatureStatusText(feature.status)" 
                    :severity="getFeatureStatusSeverity(feature.status)" 
                    class="feature-status-tag"
                  />
                </li>
              </ul>
            </template>
          </Card>
        </div>

        <!-- Sidebar Column -->
        <aside class="case-study-sidebar">
          <!-- Technologies -->
          <Card class="sidebar-card">
            <template #title>
              <h3 class="sidebar-title">{{ t.projectDetail.technologies }}</h3>
            </template>
            <template #content>
              <div class="tech-stack-list">
                <Tag 
                  v-for="tech in project.technologies" 
                  :key="tech" 
                  :value="tech" 
                  severity="secondary"
                  class="tech-stack-tag"
                />
              </div>
            </template>
          </Card>

          <!-- Links -->
          <Card class="sidebar-card" v-if="project.links && project.links.length > 0">
            <template #title>
              <h3 class="sidebar-title">{{ t.projectDetail.links }}</h3>
            </template>
            <template #content>
              <div class="action-buttons-list">
                <div 
                  v-for="(link, lIdx) in project.links"
                  :key="lIdx"
                  class="link-row"
                >
                  <Button
                    as="a"
                    :href="link.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    :severity="link.type.includes('repository') ? 'primary' : 'secondary'"
                    :outlined="!link.type.includes('repository')"
                    class="sidebar-action-btn"
                  >
                    <i :class="link.type.includes('repository') ? 'pi pi-github' : 'pi pi-external-link'"></i>
                    <span>{{ locale === 'th' ? link.label.th : link.label.en }}</span>
                  </Button>
                  <p v-if="link.ownershipNote" class="link-ownership-note">
                    {{ locale === 'th' ? link.ownershipNote.th : link.ownershipNote.en }}
                  </p>
                </div>
              </div>
            </template>
          </Card>
        </aside>
      </div>
    </div>
  </div>

  <!-- Fallback Not Found -->
  <div v-else class="project-not-found">
    <div class="container error-container glass-card">
      <i class="pi pi-exclamation-circle text-4xl text-amber mb-4"></i>
      <h1 class="error-title">{{ t.projectDetail.notFoundTitle }}</h1>
      <p class="error-text">{{ t.projectDetail.notFoundText }}</p>
      <Button as="router-link" to="/" severity="primary" class="mt-4">
        {{ t.projectDetail.notFoundBtn }}
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import Card from "primevue/card";
import Tag from "primevue/tag";
import Button from "primevue/button";
import Image from "primevue/image";
import Message from "primevue/message";
import { projects } from "../data/projects";
import { useI18n } from "../i18n";
import type { FeatureStatus } from "../types";

const route = useRoute();
const { t, locale } = useI18n();

const project = computed(() => {
  const slug = route.params.slug as string;
  return projects.find((p) => p.slug === slug) || null;
});

const getFeatureStatusText = (status: FeatureStatus) => {
  if (locale.value === "th") {
    switch (status) {
      case "confirmed": return "ยืนยันแล้ว";
      case "implemented": return "เปิดใช้งานแล้ว";
      case "in-development": return "กำลังพัฒนา";
      case "planned": return "วางแผนแล้ว";
      default: return status;
    }
  } else {
    switch (status) {
      case "confirmed": return "Confirmed";
      case "implemented": return "Implemented";
      case "in-development": return "In Development";
      case "planned": return "Planned";
      default: return status;
    }
  }
};

const getFeatureStatusSeverity = (status: FeatureStatus) => {
  switch (status) {
    case "confirmed": return "success";
    case "implemented": return "info";
    case "in-development": return "warn";
    case "planned": return "secondary";
    default: return "secondary";
  }
};
</script>

<style scoped>
.project-detail-view {
  min-height: 100vh;
  padding-bottom: 6rem;
}

/* Hero Banner */
.project-hero {
  position: relative;
  padding: 4rem 0 3rem;
  background-color: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  overflow: hidden;
}

.banner-wrapper {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(20px) opacity(0.2);
  transform: scale(1.1);
}

.banner-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 0%, var(--bg-secondary) 90%);
}

.hero-content-container {
  position: relative;
  z-index: 1;
  text-align: left;
}

.back-link-wrapper {
  margin-bottom: 1.5rem;
}

.back-btn {
  color: var(--text-secondary) !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 0.5rem !important;
  font-weight: 600 !important;
}

.back-btn:hover {
  color: var(--text-primary) !important;
}

.project-title {
  font-size: 2.75rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.project-tagline {
  font-size: 1.15rem;
  color: var(--text-secondary);
  max-width: 750px;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-meta-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.meta-tag {
  font-size: 0.8rem !important;
  padding: 0.35rem 0.75rem !important;
  display: inline-flex !important;
  align-items: center !important;
}

/* Case Study Body */
.case-study-container {
  margin-top: 3rem;
}

.confidential-banner {
  margin-bottom: 2rem !important;
  font-size: 0.92rem !important;
}

.case-study-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2.5rem;
  align-items: start;
}

.case-study-main {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  text-align: left;
}

.detail-card {
  border-radius: 16px !important;
  background: var(--bg-secondary) !important;
  border: 1px solid var(--border-color) !important;
}

.section-heading {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.01em;
}

.overview-text {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.25rem;
}

.ownership-text {
  font-size: 0.94rem;
  line-height: 1.6;
  color: var(--text-muted);
  border-left: 3px solid var(--accent-emerald);
  padding-left: 1rem;
}

.text-primary {
  color: var(--text-primary);
}

/* Contributions */
.contributions-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contribution-area {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.contributions-details {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.contributions-details li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.95rem;
  line-height: 1.55;
  color: var(--text-secondary);
}

.detail-check-icon {
  color: var(--accent-emerald);
  margin-top: 0.35rem;
  flex-shrink: 0;
}

/* Scope Boundaries / Exclusions */
.exclusion-card {
  border-color: rgba(225, 29, 72, 0.2) !important;
}

.border-danger {
  color: #f43f5e !important;
}

.exclusion-intro {
  font-size: 0.92rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.exclusions-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.exclusions-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.94rem;
  color: var(--text-secondary);
  line-height: 1.55;
}

.exclusion-bullet-icon {
  color: #f43f5e;
  margin-top: 0.35rem;
  flex-shrink: 0;
}

/* Gallery Box */
.gallery-subtitle-text {
  font-size: 0.88rem;
  color: var(--text-muted);
  margin-top: 0.25rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

.gallery-item-box {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  background: var(--bg-tertiary);
}

.gallery-img-wrapper {
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
}

.gallery-img-wrapper :deep(.gallery-img-tag) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: transform var(--transition-normal);
}

.gallery-img-wrapper:hover :deep(.gallery-img-tag) {
  transform: scale(1.04);
}

.placeholder-label-badge {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: rgba(9, 9, 11, 0.75);
  backdrop-filter: blur(4px);
  color: #ffffff;
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
}

.gallery-caption {
  padding: 0.65rem 0.85rem;
  font-size: 0.82rem;
  color: var(--text-muted);
  border-top: 1px solid var(--border-color);
}

/* Key Features */
.features-checklist {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.features-checklist li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: var(--text-secondary);
  flex-wrap: wrap;
}

.feature-check-icon {
  color: var(--accent-emerald);
  flex-shrink: 0;
}

.feature-status-tag {
  font-size: 0.72rem !important;
  margin-left: auto;
}

/* Sidebar */
.case-study-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: left;
}

.sidebar-card {
  border-radius: 16px !important;
  background: var(--bg-secondary) !important;
  border: 1px solid var(--border-color) !important;
}

.sidebar-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.01em;
}

.tech-stack-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.tech-stack-tag {
  font-size: 0.78rem !important;
  background: var(--bg-tertiary) !important;
  border: 1px solid var(--border-color) !important;
  color: var(--text-secondary) !important;
}

.action-buttons-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.sidebar-action-btn {
  width: 100% !important;
  justify-content: center !important;
  gap: 0.5rem !important;
  font-weight: 600 !important;
}

.link-ownership-note {
  font-size: 0.78rem;
  color: var(--text-muted);
  margin-top: 0.35rem;
  line-height: 1.4;
}

/* Fallback Not Found */
.project-not-found {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
}

.error-container {
  padding: 3rem;
  text-align: center;
  max-width: 500px;
}

.text-amber {
  color: #f59e0b;
}

.error-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.error-text {
  font-size: 0.95rem;
  color: var(--text-secondary);
}

@media (max-width: 900px) {
  .case-study-grid {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .project-title {
    font-size: 2.2rem;
  }
}
</style>
