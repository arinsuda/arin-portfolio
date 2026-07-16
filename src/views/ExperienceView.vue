<template>
  <section class="experience-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t.experience.title }}</h2>
        <p class="section-subtitle">{{ t.experience.subtitle }}</p>
      </div>

      <!-- Experience Timeline -->
      <div class="timeline">
        <div
          v-for="exp in experiences"
          :key="exp.company"
          class="timeline-item timeline-experience-card"
        >
          <span class="timeline-dot"></span>
          
          <div class="timeline-meta">
            <span class="timeline-duration-badge">
              <BaseIcon name="calendar" size="14" stroke-width="2" class="icon-spacing" />
              {{ locale === 'th' ? exp.duration.th : exp.duration.en }}
            </span>
            <span class="timeline-location">
              <BaseIcon name="globe" size="14" stroke-width="2" class="icon-spacing" />
              {{ locale === 'th' ? exp.location.th : exp.location.en }}
            </span>
          </div>
          
          <h3 class="timeline-title">
            {{ locale === 'th' ? exp.role.th : exp.role.en }} — {{ exp.position }}
          </h3>
          <div class="timeline-org">{{ exp.company }}</div>
          
          <!-- Confidentiality Warning Banner -->
          <div v-if="exp.isConfidential" class="confidential-callout">
            <BaseIcon name="lock" size="16" stroke-width="2.5" class="confidential-icon" />
            <div class="confidential-text">
              <strong>{{ t.experience.confidentialNotice }}</strong> 
              {{ exp.confidentialityNote ? (locale === 'th' ? exp.confidentialityNote.th : exp.confidentialityNote.en) : '' }}
            </div>
          </div>

          <p class="timeline-desc">
            {{ locale === 'th' ? exp.description.th : exp.description.en }}
          </p>
          
          <ul class="timeline-list">
            <li v-for="(highlight, i) in exp.highlights" :key="i">
              {{ locale === 'th' ? highlight.text.th : highlight.text.en }}
            </li>
          </ul>

          <div class="timeline-tags">
            <span
              v-for="tech in exp.technologies"
              :key="tech"
              class="tag"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseIcon from "../components/BaseIcon.vue";
import { experiences } from "../data/experiences";
import { useI18n } from "../i18n";

const { t, locale } = useI18n();
</script>

<style scoped>
.experience-section {
  position: relative;
  padding: 6rem 0;
}

.timeline-duration-badge {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--accent-cyan);
}

.icon-spacing {
  margin-right: 0.35rem;
}

.timeline-location {
  font-size: 0.9rem;
  color: var(--text-muted);
  display: inline-flex;
  align-items: center;
  margin-left: 1rem;
}

.timeline {
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding-left: 2rem;
  border-left: 2px solid var(--border-color);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
}

.timeline-dot {
  position: absolute;
  left: calc(-2rem - 6px);
  top: 6px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent-cyan);
  border: 2px solid var(--bg-primary);
  box-shadow: 0 0 8px var(--accent-cyan);
}

.timeline-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
}

.timeline-org {
  font-size: 1.1rem;
  color: var(--text-secondary);
  font-weight: 600;
  margin-bottom: 1rem;
}

.timeline-desc {
  font-size: 1.05rem;
  line-height: 1.6;
  margin: 1.5rem 0 1rem;
  color: var(--text-primary);
}

.timeline-list {
  padding-left: 1.25rem;
  margin-bottom: 1.5rem;
  list-style-type: disc;
}

.timeline-list li {
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
  line-height: 1.5;
  font-size: 0.95rem;
}

.timeline-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  font-size: 0.8rem;
  font-family: var(--font-mono);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}

.confidential-callout {
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(225, 29, 72, 0.05);
  border: 1px solid rgba(225, 29, 72, 0.15);
  border-left: 4px solid #e11d48;
  border-radius: 6px;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.confidential-icon {
  color: #e11d48;
  margin-top: 2px;
}

.confidential-text {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

@media (max-width: 640px) {
  .timeline-location {
    display: block;
    margin-left: 0;
    margin-top: 0.25rem;
  }
}
</style>
