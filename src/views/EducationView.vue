<template>
  <section class="education-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t.education.title }}</h2>
        <p class="section-subtitle">{{ t.education.subtitle }}</p>
      </div>

      <div class="education-container">
        <Timeline :value="educationList" class="education-timeline">
          <!-- Marker Slot -->
          <template #marker>
            <div class="timeline-marker">
              <i class="pi pi-graduation-cap marker-icon"></i>
            </div>
          </template>

          <!-- Content Slot -->
          <template #content="slotProps">
            <div class="education-card glass-card">
              <!-- Top Header: University Logo Box + Degree Details -->
              <div class="edu-card-top">
                <!-- University Logo Box (like boatchrnthn.vercel.app) -->
                <a
                  v-if="slotProps.item.institutionUrl"
                  :href="slotProps.item.institutionUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="org-logo-box"
                  :title="slotProps.item.institution"
                >
                  <img
                    v-if="slotProps.item.logo"
                    :src="slotProps.item.logo"
                    :alt="slotProps.item.institution + ' logo'"
                    class="org-logo-img"
                  />
                  <i v-else class="pi pi-graduation-cap text-2xl text-emerald"></i>
                </a>
                <div v-else class="org-logo-box">
                  <img
                    v-if="slotProps.item.logo"
                    :src="slotProps.item.logo"
                    :alt="slotProps.item.institution + ' logo'"
                    class="org-logo-img"
                  />
                  <i v-else class="pi pi-graduation-cap text-2xl text-emerald"></i>
                </div>

                <div class="edu-card-info">
                  <!-- Meta Row: Duration -->
                  <div class="edu-meta-row">
                    <span class="edu-duration">
                      <i class="pi pi-calendar meta-icon"></i>
                      {{ locale === 'th' ? slotProps.item.duration.th : slotProps.item.duration.en }}
                    </span>
                  </div>

                  <!-- Degree & Institution -->
                  <h3 class="edu-degree">
                    {{ locale === 'th' ? slotProps.item.degree.th : slotProps.item.degree.en }}
                  </h3>
                  <div class="edu-institution">
                    <a
                      v-if="slotProps.item.institutionUrl"
                      :href="slotProps.item.institutionUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="institution-link"
                    >
                      <span>{{ slotProps.item.institution }}</span>
                      <i class="pi pi-arrow-up-right text-xs link-arrow"></i>
                    </a>
                    <span v-else>{{ slotProps.item.institution }}</span>
                  </div>
                </div>
              </div>

              <!-- Activities & Leadership -->
              <div class="edu-activities">
                <h5 class="activities-title">{{ t.education.coCurricular }}</h5>
                <ul class="activities-list">
                  <li v-for="(act, idx) in slotProps.item.activities" :key="idx">
                    <i class="pi pi-check-circle text-xs activity-icon"></i>
                    <span>{{ locale === 'th' ? act.th : act.en }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </template>
        </Timeline>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Timeline from "primevue/timeline";
import { educationList } from "../data/education";
import { useI18n } from "../i18n";

const { t, locale } = useI18n();
</script>

<style scoped>
.education-section {
  position: relative;
}

.education-container {
  max-width: 920px;
  margin: 0 auto;
}

/* Timeline tuning */
:deep(.p-timeline) {
  padding: 0;
}

:deep(.p-timeline-event-opposite) {
  display: none !important;
}

:deep(.p-timeline-event-content) {
  padding-left: 2rem !important;
  padding-bottom: 2rem !important;
}

:deep(.p-timeline-event-connector) {
  background-color: var(--border-color) !important;
  width: 2px !important;
}

.timeline-marker {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-emerald);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-fast);
}

.timeline-marker:hover {
  border-color: var(--accent-emerald);
  transform: scale(1.08);
}

.marker-icon {
  font-size: 1.1rem;
}

.education-card {
  padding: 2.25rem;
  text-align: left;
  border-radius: 16px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
}

/* Top Header: Logo + Info */
.edu-card-top {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1.75rem;
}

.org-logo-box {
  width: 72px;
  height: 72px;
  min-width: 72px;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid var(--border-color);
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-fast);
  flex-shrink: 0;
}

.org-logo-box:hover {
  border-color: var(--accent-emerald);
  transform: scale(1.04);
}

.org-logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 6px;
}

.edu-card-info {
  flex-grow: 1;
}

.edu-meta-row {
  margin-bottom: 0.4rem;
}

.edu-duration {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--accent-emerald);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.meta-icon {
  font-size: 0.82rem;
}

.edu-degree {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.35rem;
  letter-spacing: -0.02em;
}

.edu-institution {
  font-size: 1.05rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.institution-link {
  color: var(--text-secondary);
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  transition: color var(--transition-fast);
}

.institution-link:hover {
  color: var(--accent-emerald);
}

.link-arrow {
  transition: transform var(--transition-fast);
}

.institution-link:hover .link-arrow {
  transform: translate(2px, -2px);
}

.activities-title {
  font-size: 0.88rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  margin-bottom: 0.85rem;
}

.activities-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.activities-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.55;
}

.activity-icon {
  color: var(--accent-emerald);
  margin-top: 0.35rem;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .education-card {
    padding: 1.5rem;
  }

  .edu-card-top {
    flex-direction: column;
    gap: 1rem;
  }

  :deep(.p-timeline-event-content) {
    padding-left: 1.25rem !important;
  }

  .timeline-marker {
    width: 32px;
    height: 32px;
    border-radius: 8px;
  }
}
</style>
