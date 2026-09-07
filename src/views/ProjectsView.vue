<template>
  <section class="projects-section textured-grid-secondary">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t.projects.title }}</h2>
        <p class="section-subtitle">{{ t.projects.subtitle }}</p>
      </div>

      <!-- Filter Controls (All / Featured / Academic) -->
      <div class="filter-wrapper">
        <div class="filter-pills">
          <button
            v-for="filter in filterOptions"
            :key="filter.id"
            class="filter-pill-btn"
            :class="{ active: activeFilter === filter.id }"
            @click="activeFilter = filter.id"
          >
            <i :class="filter.icon" class="pill-icon"></i>
            <span>{{ locale === 'th' ? filter.label.th : filter.label.en }}</span>
            <span class="pill-count">{{ filter.count }}</span>
          </button>
        </div>
      </div>

      <!-- Projects Grid with PrimeVue Cards -->
      <div class="projects-grid">
        <Card
          v-for="project in filteredProjects"
          :key="project.slug"
          class="project-card"
        >
          <!-- Media Header -->
          <template #header>
            <div class="card-media-wrapper">
              <img
                :src="project.thumbnail"
                :alt="project.title"
                class="project-thumbnail"
                loading="lazy"
              />
              <div class="media-overlay">
                <Button
                  as="router-link"
                  :to="'/project/' + project.slug"
                  severity="primary"
                  size="small"
                  class="overlay-cta"
                >
                  <span>{{ t.projects.viewCaseStudy }}</span>
                  <i class="pi pi-arrow-up-right text-xs"></i>
                </Button>
              </div>
            </div>
          </template>

          <!-- Card Content -->
          <template #content>
            <div class="card-body">
              <!-- Tags Row with PrimeVue Tag -->
              <div class="tags-row">
                <Tag
                  v-for="tag in project.tags.slice(0, 4)"
                  :key="tag"
                  :value="tag"
                  severity="secondary"
                  class="project-tech-tag"
                />
              </div>

              <!-- Project Title & Role -->
              <h3 class="project-card-title">
                <router-link :to="'/project/' + project.slug" class="title-link">
                  {{ project.title }}
                </router-link>
              </h3>

              <div class="project-role-badge">
                <i class="pi pi-user text-xs"></i>
                <span>{{ locale === 'th' ? project.role.th : project.role.en }}</span>
              </div>

              <p class="project-card-desc">
                {{ locale === 'th' ? project.shortDescription.th : project.shortDescription.en }}
              </p>
            </div>
          </template>

          <!-- Card Footer -->
          <template #footer>
            <div class="card-footer-row">
              <span class="project-period">{{ locale === 'th' ? project.period.th : project.period.en }}</span>
              <Button
                as="router-link"
                :to="'/project/' + project.slug"
                severity="secondary"
                variant="text"
                size="small"
                class="details-btn"
              >
                <span>{{ t.projects.details }}</span>
                <i class="pi pi-arrow-right text-xs"></i>
              </Button>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Card from "primevue/card";
import Tag from "primevue/tag";
import Button from "primevue/button";
import { projects } from "../data/projects";
import { useI18n } from "../i18n";

const { t, locale } = useI18n();

const activeFilter = ref<"all" | "featured" | "additional">("all");

const filterOptions = computed(() => [
  {
    id: "all" as const,
    label: { en: "All Projects", th: "โปรเจกต์ทั้งหมด" },
    icon: "pi pi-grid",
    count: projects.length
  },
  {
    id: "featured" as const,
    label: { en: "Featured Systems", th: "โปรเจกต์แนะนำ" },
    icon: "pi pi-star",
    count: projects.filter(p => p.category === "featured").length
  },
  {
    id: "additional" as const,
    label: { en: "Academic & Tools", th: "โครงงานวิชาการและเครื่องมือ" },
    icon: "pi pi-book",
    count: projects.filter(p => p.category === "additional").length
  }
]);

const filteredProjects = computed(() => {
  if (activeFilter.value === "all") return projects;
  return projects.filter(p => p.category === activeFilter.value);
});
</script>

<style scoped>
.projects-section {
  position: relative;
  background-color: var(--bg-secondary);
}

/* Filter Controls */
.filter-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 3.5rem;
}

.filter-pills {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  padding: 0.35rem;
  border-radius: 40px;
  box-shadow: var(--shadow-sm);
  flex-wrap: wrap;
  justify-content: center;
}

.filter-pill-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.filter-pill-btn:hover {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.04);
}

.filter-pill-btn.active {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  box-shadow: var(--shadow-sm);
}

.pill-icon {
  font-size: 0.85rem;
  color: var(--accent-emerald);
}

.pill-count {
  font-size: 0.72rem;
  font-family: var(--font-mono);
  background: var(--bg-tertiary);
  padding: 0.1rem 0.45rem;
  border-radius: 10px;
  color: var(--text-muted);
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.25rem;
}

.project-card {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 16px !important;
  background: var(--bg-primary) !important;
  border: 1px solid var(--border-color) !important;
  transition: all var(--transition-normal) !important;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-hover) !important;
  box-shadow: var(--shadow-xl);
}

/* Card Media Header */
.card-media-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  background-color: var(--bg-tertiary);
  border-bottom: 1px solid var(--border-color);
}

.project-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.project-card:hover .project-thumbnail {
  transform: scale(1.04);
}

.media-overlay {
  position: absolute;
  inset: 0;
  background: rgba(9, 9, 11, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.card-media-wrapper:hover .media-overlay {
  opacity: 1;
}

.overlay-cta {
  background: var(--accent-emerald) !important;
  border-color: var(--accent-emerald) !important;
  font-weight: 600 !important;
  border-radius: 8px !important;
  gap: 0.4rem;
}

/* Card Body */
.card-body {
  text-align: left;
  display: flex;
  flex-direction: column;
}

.tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.9rem;
}

.project-tech-tag {
  font-size: 0.74rem !important;
  background: var(--bg-tertiary) !important;
  border: 1px solid var(--border-color) !important;
  color: var(--text-secondary) !important;
}

.project-card-title {
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
}

.title-link {
  color: var(--text-primary);
  transition: color var(--transition-fast);
}

.title-link:hover {
  color: var(--accent-emerald);
}

.project-role-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
  color: var(--accent-emerald);
  font-weight: 500;
  margin-bottom: 0.85rem;
}

.project-card-desc {
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--text-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Card Footer */
.card-footer-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--border-color);
  padding-top: 1rem;
  font-size: 0.85rem;
}

.project-period {
  font-family: var(--font-mono);
  color: var(--text-muted);
  font-size: 0.78rem;
}

.details-btn {
  color: var(--text-primary) !important;
  font-weight: 600 !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 0.4rem !important;
  padding: 0.3rem 0.6rem !important;
}

.details-btn:hover {
  color: var(--accent-emerald) !important;
}

@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
