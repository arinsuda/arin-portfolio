<template>
  <section class="experience-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Work Experience</h2>
        <p class="section-subtitle">Professional software engineering internship timeline and verified roles.</p>
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
              {{ exp.duration }}
            </span>
            <span class="timeline-location">{{ exp.location }}</span>
          </div>
          
          <h3 class="timeline-title">{{ exp.role }} — {{ exp.position }}</h3>
          <div class="timeline-org">{{ exp.company }}</div>
          
          <!-- Confidentiality Warning Banner -->
          <div v-if="exp.isConfidential" class="confidential-callout">
            <BaseIcon name="lock" size="16" stroke-width="2.5" class="confidential-icon" />
            <div class="confidential-text">
              <strong>Confidentiality Notice:</strong> {{ exp.confidentialityNote }}
            </div>
          </div>

          <p class="timeline-desc">{{ exp.description }}</p>
          
          <ul class="timeline-list">
            <li v-for="(highlight, i) in exp.highlights" :key="i">
              {{ highlight.text }}
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
</script>

<style scoped>
.experience-section {
  position: relative;
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

.timeline-location {
  font-size: 0.9rem;
  color: var(--text-muted);
}

.timeline {
  text-align: left;
}

.timeline-desc {
  font-size: 1.05rem;
  line-height: 1.6;
  margin: 1.5rem 0 1rem;
  color: var(--text-primary);
}

.confidential-callout {
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(225, 29, 72, 0.05);
  border: 1px stroke rgba(225, 29, 72, 0.15);
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
</style>
