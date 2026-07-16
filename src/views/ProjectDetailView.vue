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
            {{ t.projectDetail.back }}
          </router-link>
        </div>

        <div class="hero-header-info">
          <h1 class="project-title">{{ project.title }}</h1>
          <p class="project-tagline">{{ locale === 'th' ? project.shortDescription.th : project.shortDescription.en }}</p>
          <div class="project-meta-badges">
            <span class="meta-badge">
              <strong>{{ t.projectDetail.role }}:</strong> {{ locale === 'th' ? project.role.th : project.role.en }}
            </span>
            <span class="meta-badge">
              <strong>{{ t.projectDetail.period }}:</strong> {{ locale === 'th' ? project.period.th : project.period.en }}
            </span>
            <span class="meta-badge">
              <strong>{{ t.projectDetail.status }}:</strong> {{ locale === 'th' ? project.status.th : project.status.en }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Case Study Body Content -->
    <div class="container case-study-container">
      <!-- Confidentiality / Repository Notice Banner -->
      <div v-if="project.confidentialityNote" class="confidential-banner">
        <BaseIcon name="lock" size="20" stroke-width="2.5" class="confidential-banner-icon" />
        <div>
          <strong>{{ t.projectDetail.notice }}</strong> {{ locale === 'th' ? project.confidentialityNote.th : project.confidentialityNote.en }}
        </div>
      </div>

      <div class="case-study-grid">
        <!-- Main Description -->
        <div class="case-study-main">
          <!-- Overview Section -->
          <div class="content-block">
            <h2 class="section-heading">{{ t.projectDetail.overview }}</h2>
            <p class="overview-text">{{ locale === 'th' ? project.description.th : project.description.en }}</p>
            <p v-if="project.ownership" class="ownership-text">
              <strong>{{ t.projectDetail.ownership }}:</strong> {{ locale === 'th' ? project.ownership.th : project.ownership.en }}
            </p>
          </div>

          <!-- Personal Contributions Section -->
          <div class="content-block" v-if="project.contributions && project.contributions.length > 0">
            <h2 class="section-heading">{{ t.projectDetail.contributions }}</h2>
            <div class="contributions-list">
              <div v-for="(contribution, idx) in project.contributions" :key="idx" class="contribution-group">
                <h3 class="contribution-area">{{ locale === 'th' ? contribution.area.th : contribution.area.en }}</h3>
                <ul class="contributions-details">
                  <li v-for="(detail, dIdx) in contribution.details" :key="dIdx">
                    <span class="check-icon">
                      <BaseIcon name="check" size="14" stroke-width="3" />
                    </span>
                    <span class="detail-text">{{ locale === 'th' ? detail.th : detail.en }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Exclusions Section -->
          <div class="content-block exclusion-block" v-if="project.exclusions && project.exclusions.length > 0">
            <h2 class="section-heading border-danger">{{ t.projectDetail.scopeBoundaries }}</h2>
            <p class="exclusion-intro">{{ t.projectDetail.scopeBoundariesIntro }}</p>
            <ul class="exclusions-list">
              <li v-for="(exclusion, eIdx) in project.exclusions" :key="eIdx">
                <span class="exclusion-bullet"></span>
                <span class="exclusion-text">{{ locale === 'th' ? exclusion.th : exclusion.en }}</span>
              </li>
            </ul>
          </div>

          <!-- Optional Project Image Gallery Section -->
          <div class="content-block gallery-block" v-if="project.gallery && project.gallery.length > 0">
            <h2 class="section-heading">{{ t.projectDetail.galleryTitle }}</h2>
            <p class="gallery-subtitle-text">{{ t.projectDetail.gallerySubtitle }}</p>
            
            <div class="gallery-grid">
              <button 
                v-for="(img, idx) in project.gallery" 
                :key="img.id"
                class="gallery-item-card glass-card"
                @click="openLightbox(idx)"
                :aria-label="locale === 'th' ? 'ขยายรูปภาพที่ ' + (idx + 1) : 'Enlarge image ' + (idx + 1)"
              >
                <div class="gallery-img-wrapper">
                  <img 
                    :src="img.src" 
                    :alt="locale === 'th' ? img.alt.th : img.alt.en" 
                    class="gallery-img" 
                    loading="lazy" 
                  />
                  <!-- Placeholder Badge -->
                  <div class="placeholder-label-badge" v-if="img.isPlaceholder">
                    <BaseIcon name="image" size="14" class="badge-icon" />
                    <span>{{ t.projectDetail.placeholderLabel }}</span>
                  </div>
                </div>
                <div class="gallery-card-caption" v-if="img.caption">
                  <p class="gallery-caption-text">
                    {{ locale === 'th' ? img.caption.th : img.caption.en }}
                  </p>
                </div>
              </button>
            </div>
          </div>

          <!-- Key Features Section -->
          <div class="content-block">
            <h2 class="section-heading">{{ t.projectDetail.keyFeatures }}</h2>
            <ul class="features-checklist">
              <li v-for="(feature, i) in project.features" :key="i">
                <span class="check-icon">
                  <BaseIcon name="check" size="14" stroke-width="3" />
                </span>
                <span class="feature-text">{{ locale === 'th' ? feature.text.th : feature.text.en }}</span>
                <span v-if="feature.status" class="status-badge" :class="'status-' + feature.status">
                  {{ feature.status === 'confirmed' ? (locale === 'th' ? 'ยืนยันแล้ว' : 'confirmed') :
                     feature.status === 'implemented' ? (locale === 'th' ? 'เปิดใช้งานแล้ว' : 'implemented') :
                     feature.status === 'in-development' ? (locale === 'th' ? 'กำลังพัฒนา' : 'in development') :
                     (locale === 'th' ? 'วางแผนแล้ว' : 'planned') }}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Details Sidebar -->
        <aside class="case-study-sidebar">
          <div class="sidebar-block glass-card">
            <h3 class="sidebar-title">{{ t.projectDetail.technologies }}</h3>
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
          <div class="sidebar-block glass-card actions-block" v-if="project.links && project.links.length > 0">
            <h3 class="sidebar-title">{{ t.projectDetail.links }}</h3>
            <div class="action-buttons">
              <div 
                v-for="(link, lIdx) in project.links"
                :key="lIdx"
                class="link-action-container"
              >
                <a 
                  :href="link.url" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn action-btn-link"
                  :class="link.type === 'repository' || link.type === 'team-repository' ? 'btn-primary' : 'btn-secondary'"
                >
                  <BaseIcon :name="link.type === 'repository' || link.type === 'team-repository' ? 'github' : 'external-link'" size="16" class="btn-icon-spacing" />
                  {{ locale === 'th' ? link.label.th : link.label.en }}
                </a>
                <p v-if="link.ownershipNote" class="link-ownership-note">
                  {{ locale === 'th' ? link.ownershipNote.th : link.ownershipNote.en }}
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <transition name="fade">
      <div 
        class="lightbox-modal" 
        v-if="isLightboxOpen && activeGalleryImage" 
        role="dialog" 
        aria-modal="true"
        @click.self="closeLightbox"
      >
        <button 
          class="lightbox-close" 
          @click="closeLightbox" 
          :aria-label="locale === 'th' ? 'ปิดหน้าต่าง' : 'Close viewer'"
          ref="closeBtn"
        >
          <BaseIcon name="close" size="24" />
        </button>

        <button 
          class="lightbox-nav lightbox-prev" 
          @click="prevImage" 
          :aria-label="locale === 'th' ? 'รูปก่อนหน้า' : 'Previous image'"
        >
          <BaseIcon name="arrow-left" size="24" />
        </button>

        <div class="lightbox-content">
          <img 
            :src="activeGalleryImage.src" 
            :alt="locale === 'th' ? activeGalleryImage.alt.th : activeGalleryImage.alt.en" 
            class="lightbox-img" 
          />
          <div class="lightbox-caption-bar" v-if="activeGalleryImage && activeGalleryImage.caption">
            <p class="lightbox-caption-text">
              {{ locale === 'th' ? activeGalleryImage.caption.th : activeGalleryImage.caption.en }}
            </p>
            <span class="lightbox-counter">{{ activeImageIndex + 1 }} / {{ project.gallery?.length }}</span>
          </div>
        </div>

        <button 
          class="lightbox-nav lightbox-next" 
          @click="nextImage" 
          :aria-label="locale === 'th' ? 'รูปถัดไป' : 'Next image'"
        >
          <BaseIcon name="arrow-right" size="24" />
        </button>
      </div>
    </transition>
  </div>

  <!-- Project Not Found Fallback -->
  <div v-else class="project-not-found">
    <div class="container error-container glass-card">
      <span class="error-icon">
        <BaseIcon name="warning" size="48" class="warning-icon" />
      </span>
      <h1 class="error-title">{{ t.projectDetail.notFoundTitle }}</h1>
      <p class="error-text">
        {{ t.projectDetail.notFoundText }}
      </p>
      <router-link to="/" class="btn btn-primary">
        {{ t.projectDetail.notFoundBtn }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import BaseIcon from "../components/BaseIcon.vue";
import { projects } from "../data/projects";
import { useI18n } from "../i18n";

const route = useRoute();
const { t, locale } = useI18n();

const project = computed(() => {
  const slug = route.params.slug as string;
  return projects.find((p) => p.slug === slug) || null;
});

// Lightbox state
const isLightboxOpen = ref(false);
const activeImageIndex = ref(0);
const closeBtn = ref<HTMLButtonElement | null>(null);

const activeGalleryImage = computed(() => {
  if (!project.value || !project.value.gallery) return null;
  return project.value.gallery[activeImageIndex.value] || null;
});

const openLightbox = (index: number) => {
  activeImageIndex.value = index;
  isLightboxOpen.value = true;
  document.body.style.overflow = "hidden"; // Prevent background scroll
  
  // Set focus to close button for keyboard traps
  setTimeout(() => {
    if (closeBtn.value) {
      closeBtn.value.focus();
    }
  }, 50);
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
  document.body.style.overflow = ""; // Restore scroll
};

const prevImage = () => {
  if (!project.value || !project.value.gallery) return;
  const len = project.value.gallery.length;
  activeImageIndex.value = (activeImageIndex.value - 1 + len) % len;
};

const nextImage = () => {
  if (!project.value || !project.value.gallery) return;
  const len = project.value.gallery.length;
  activeImageIndex.value = (activeImageIndex.value + 1) % len;
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (!isLightboxOpen.value) return;
  if (e.key === "Escape") {
    closeLightbox();
  } else if (e.key === "ArrowLeft") {
    prevImage();
  } else if (e.key === "ArrowRight") {
    nextImage();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
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

/* Gallery Styles */
.gallery-block {
  margin-top: 3.5rem;
}

.gallery-subtitle-text {
  font-size: 0.95rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  text-align: left;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.gallery-item-card {
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
}

.gallery-item-card:hover {
  transform: translateY(-2px);
  border-color: var(--accent-cyan);
  box-shadow: var(--shadow-md);
}

.gallery-item-card:focus-visible {
  outline: 2px solid var(--accent-cyan);
  outline-offset: 2px;
}

.gallery-img-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  background-color: var(--bg-tertiary);
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.gallery-item-card:hover .gallery-img {
  transform: scale(1.03);
}

.placeholder-label-badge {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #f1f5f9;
}

.badge-icon {
  color: var(--accent-cyan);
}

.gallery-card-caption {
  padding: 0.75rem 1rem;
  border-top: 1px solid var(--border-color);
  background: rgba(255, 255, 255, 0.005);
}

.gallery-caption-text {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.4;
  margin: 0;
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
  gap: 1.5rem;
}

.link-action-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
}

.action-btn-link {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.link-ownership-note {
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.4;
  padding-left: 0.25rem;
}

.btn-icon-spacing {
  margin-right: 0.5rem;
}

/* Lightbox Modal Styles */
.lightbox-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(9, 10, 15, 0.95);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform var(--transition-fast), background-color var(--transition-fast);
  z-index: 2100;
}

.lightbox-close:hover {
  background-color: rgba(225, 29, 72, 0.8);
  border-color: rgba(225, 29, 72, 0.8);
  transform: scale(1.05);
}

.lightbox-close:focus-visible {
  outline: 2px solid var(--accent-cyan);
  outline-offset: 2px;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform var(--transition-fast), background-color var(--transition-fast), border-color var(--transition-fast);
  z-index: 2100;
}

.lightbox-nav:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: var(--accent-cyan);
  transform: translateY(-50%) scale(1.05);
}

.lightbox-nav:focus-visible {
  outline: 2px solid var(--accent-cyan);
  outline-offset: 2px;
}

.lightbox-prev {
  left: 2rem;
}

.lightbox-next {
  right: 2rem;
}

.lightbox-content {
  position: relative;
  max-width: 80%;
  max-height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.lightbox-img {
  max-width: 100%;
  max-height: 75vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.lightbox-caption-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1rem 1.5rem;
  margin-top: 1rem;
  color: #ffffff;
}

.lightbox-caption-text {
  font-size: 0.95rem;
  margin: 0;
  text-align: left;
  flex: 1;
  padding-right: 2rem;
}

.lightbox-counter {
  font-size: 0.85rem;
  font-family: var(--font-mono);
  color: var(--text-muted);
  flex-shrink: 0;
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

@media (max-width: 768px) {
  .lightbox-nav {
    display: none;
  }
  .lightbox-content {
    max-width: 95%;
  }
  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
