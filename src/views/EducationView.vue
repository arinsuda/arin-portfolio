<template>
  <section class="education-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Education</h2>
        <p class="section-subtitle">Academic background and student camp leadership activities.</p>
      </div>

      <div class="education-layout">
        <div class="timeline">
          <div v-for="edu in educationList" :key="edu.institution" class="timeline-item">
            <span class="timeline-dot"></span>
            
            <div class="timeline-meta">
              <span class="timeline-duration-badge">
                <BaseIcon name="calendar" size="14" stroke-width="2" class="icon-spacing" />
                {{ edu.duration }}
              </span>
            </div>
            
            <h3 class="timeline-title">{{ edu.degree }}</h3>
            <div class="timeline-org">{{ edu.institution }}</div>
            
            <h4 class="co-curricular-title">Co-curricular Activities &amp; Leadership:</h4>
            <ul class="timeline-list">
              <li v-for="(act, idx) in edu.activities" :key="idx">
                {{ act }}
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
</script>

<style scoped>
.education-section {
  background-color: var(--bg-secondary);
  transition: background-color var(--transition-normal);
}

.education-layout {
  max-width: 800px;
  margin: 0 auto;
}

.timeline {
  text-align: left;
}

.timeline-duration-badge {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--accent-cyan);
}

.icon-spacing {
  margin-right: 0.5rem;
}

.co-curricular-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 1.5rem 0 0.75rem;
}
</style>
