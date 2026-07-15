<template>
  <section class="projects-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Projects Showcase</h2>
        <p class="section-subtitle">Verified software engineering projects spanning backend services, database schema design, and reactive clients.</p>
      </div>

      <!-- Featured Projects Section -->
      <div class="projects-subsection-header">
        <h3 class="subsection-title">Featured Projects</h3>
        <p class="subsection-desc">Primary personal and capstone engineering achievements.</p>
      </div>

      <div class="projects-grid">
        <div
          v-for="project in featuredProjects"
          :key="project.slug"
          class="project-card glass-card"
        >
          <div class="card-media">
            <img :src="project.thumbnail" :alt="project.title" class="project-image" />
            <div class="media-overlay">
              <router-link :to="'/project/' + project.slug" class="btn btn-primary overlay-btn">
                View Case Study
              </router-link>
            </div>
          </div>

          <div class="card-content">
            <div class="project-tags">
              <span v-for="tag in project.tags.slice(0, 3)" :key="tag" class="project-tag">
                {{ tag }}
              </span>
            </div>
            
            <h4 class="project-title">{{ project.title }}</h4>
            <p class="project-description">{{ project.shortDescription }}</p>

            <div class="card-footer">
              <span class="project-role">{{ project.role }}</span>
              <router-link :to="'/project/' + project.slug" class="details-link">
                Details
                <span class="arrow">
                  <BaseIcon name="arrow-right" size="14" />
                </span>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Projects Section -->
      <div class="projects-subsection-header academic-header">
        <h3 class="subsection-title">Additional Academic Projects</h3>
        <p class="subsection-desc">Collaborative coursework and foundational web development projects.</p>
      </div>

      <div class="projects-grid additional-grid">
        <div
          v-for="project in additionalProjects"
          :key="project.slug"
          class="project-card glass-card additional-card"
        >
          <div class="card-media additional-media">
            <img :src="project.thumbnail" :alt="project.title" class="project-image" />
            <div class="media-overlay">
              <router-link :to="'/project/' + project.slug" class="btn btn-primary overlay-btn">
                View Details
              </router-link>
            </div>
          </div>

          <div class="card-content additional-card-content">
            <div class="project-tags">
              <span v-for="tag in project.tags.slice(0, 3)" :key="tag" class="project-tag">
                {{ tag }}
              </span>
            </div>
            
            <h4 class="project-title">{{ project.title }}</h4>
            <p class="project-description">{{ project.shortDescription }}</p>

            <div class="card-footer">
              <span class="project-role">{{ project.role }}</span>
              <router-link :to="'/project/' + project.slug" class="details-link">
                Details
                <span class="arrow">
                  <BaseIcon name="arrow-right" size="14" />
                </span>
              </router-link>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import BaseIcon from "../components/BaseIcon.vue";
import { projects } from "../data/projects";

const featuredProjects = computed(() => {
  return projects.filter(p => p.category === 'featured');
});

const additionalProjects = computed(() => {
  return projects.filter(p => p.category === 'additional');
});
</script>

<style scoped>
.projects-section {
  background-color: var(--bg-secondary);
  transition: background-color var(--transition-normal);
}

.projects-subsection-header {
  text-align: left;
  margin: 3rem 0 1.5rem;
}

.subsection-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.subsection-desc {
  font-size: 1rem;
  color: var(--text-muted);
}

.academic-header {
  margin-top: 5rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
}

.project-card {
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-media {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  background-color: var(--bg-tertiary);
  border-bottom: 1px solid var(--border-color);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.media-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(9, 10, 15, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-normal);
  backdrop-filter: blur(4px);
}

.card-media:hover .media-overlay {
  opacity: 1;
}

.overlay-btn {
  transform: translateY(10px);
  transition: transform var(--transition-normal);
}

.card-media:hover .overlay-btn {
  transform: translateY(0);
}

.card-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: left;
}

.project-tags {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.project-tag {
  font-size: 0.75rem;
  font-family: var(--font-mono);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
}

.project-title {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.project-description {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.6;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--border-color);
  padding-top: 1.25rem;
  font-size: 0.9rem;
}

.project-role {
  font-weight: 600;
  color: var(--text-muted);
}

.details-link {
  font-weight: 600;
  color: var(--accent-blue);
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.details-link:hover {
  color: var(--accent-cyan);
}

.details-link .arrow {
  display: inline-flex;
  align-items: center;
  transition: transform var(--transition-fast);
}

.details-link:hover .arrow {
  transform: translateX(3px);
}

/* De-emphasized Academic Cards Layout */
.additional-card {
  box-shadow: none;
}

.additional-media {
  opacity: 0.85;
}

.project-card:hover .additional-media {
  opacity: 1;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
