<template>
  <section class="education-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t.education.title }}</h2>
        <p class="section-subtitle">{{ t.education.subtitle }}</p>
      </div>

      <div class="education-layout">
        <div class="timeline">
          <div v-for="edu in educationList" :key="edu.institution" class="timeline-item">
            <span class="timeline-dot"></span>
            
            <div class="timeline-meta">
              <span class="timeline-duration-badge">
                <BaseIcon name="calendar" size="14" stroke-width="2" class="icon-spacing" />
                {{ locale === 'th' ? edu.duration.th : edu.duration.en }}
              </span>
            </div>
            
            <h3 class="timeline-title">{{ locale === 'th' ? edu.degree.th : edu.degree.en }}</h3>
            <div class="timeline-org">{{ edu.institution }}</div>
            
            <h4 class="co-curricular-title">{{ t.education.coCurricular }}</h4>
            <ul class="timeline-list">
              <li v-for="(act, idx) in edu.activities" :key="idx">
                {{ locale === 'th' ? act.th : act.en }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseIcon from "../components/BaseIcon.vue";
import { educationList } from "../data/education";
import { useI18n } from "../i18n";

const { t, locale } = useI18n();
</script>

<style scoped>
.education-section {
  background-color: var(--bg-secondary);
  transition: background-color var(--transition-normal);
  padding: 6rem 0;
}

.education-layout {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding-left: 2rem;
  border-left: 2px solid var(--border-color);
}

.timeline {
  text-align: left;
}

.timeline-item {
  position: relative;
}

.timeline-dot {
  position: absolute;
  left: calc(-2rem - 6px);
  top: 6px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent-cyan);
  border: 2px solid var(--bg-secondary);
  box-shadow: 0 0 8px var(--accent-cyan);
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
  margin-bottom: 1.5rem;
}

.co-curricular-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 1.5rem 0 0.75rem;
}

.timeline-list {
  padding-left: 1.25rem;
  list-style-type: disc;
}

.timeline-list li {
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
  line-height: 1.5;
  font-size: 0.95rem;
}
</style>
