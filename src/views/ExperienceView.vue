<template>
  <section class="experience-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t.experience.title }}</h2>
        <p class="section-subtitle">{{ t.experience.subtitle }}</p>
      </div>

      <!-- PrimeVue Timeline for Work Experience -->
      <div class="timeline-container">
        <Timeline :value="experiences" class="experience-timeline">
          <!-- Marker Slot -->
          <template #marker>
            <div class="timeline-marker">
              <i class="pi pi-briefcase marker-icon"></i>
            </div>
          </template>

          <!-- Content Slot -->
          <template #content="slotProps">
            <div class="experience-card glass-card">
              <!-- Top Header: Company Logo Box + Role Details -->
              <div class="exp-card-top">
                <!-- Company Logo Box (like boatchrnthn.vercel.app) -->
                <a
                  v-if="slotProps.item.companyUrl"
                  :href="slotProps.item.companyUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="org-logo-box"
                  :title="slotProps.item.company"
                >
                  <img
                    v-if="slotProps.item.logo"
                    :src="slotProps.item.logo"
                    :alt="slotProps.item.company + ' logo'"
                    class="org-logo-img"
                  />
                  <i v-else class="pi pi-briefcase text-2xl text-emerald"></i>
                </a>
                <div v-else class="org-logo-box">
                  <img
                    v-if="slotProps.item.logo"
                    :src="slotProps.item.logo"
                    :alt="slotProps.item.company + ' logo'"
                    class="org-logo-img"
                  />
                  <i v-else class="pi pi-briefcase text-2xl text-emerald"></i>
                </div>

                <div class="exp-card-info">
                  <!-- Meta Row: Duration + Location -->
                  <div class="exp-header-meta">
                    <span class="exp-duration">
                      <i class="pi pi-calendar meta-icon"></i>
                      {{ locale === 'th' ? slotProps.item.duration.th : slotProps.item.duration.en }}
                    </span>
                    <span class="exp-location">
                      <i class="pi pi-map-marker meta-icon"></i>
                      {{ locale === 'th' ? slotProps.item.location.th : slotProps.item.location.en }}
                    </span>
                  </div>

                  <!-- Title & Company -->
                  <h3 class="exp-role-title">
                    {{ locale === 'th' ? slotProps.item.role.th : slotProps.item.role.en }}
                    <span class="exp-position-badge">{{ slotProps.item.position }}</span>
                  </h3>
                  <div class="exp-company">
                    <a
                      v-if="slotProps.item.companyUrl"
                      :href="slotProps.item.companyUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="company-link"
                    >
                      <span>{{ slotProps.item.company }}</span>
                      <i class="pi pi-arrow-up-right text-xs link-arrow"></i>
                    </a>
                    <span v-else>{{ slotProps.item.company }}</span>
                  </div>
                </div>
              </div>

              <!-- Confidentiality Notice with PrimeVue Message -->
              <Message
                v-if="slotProps.item.isConfidential"
                severity="warn"
                :closable="false"
                class="confidential-msg"
              >
                <div class="confidential-msg-inner">
                  <strong>{{ t.experience.confidentialNotice }}:</strong>
                  {{ slotProps.item.confidentialityNote ? (locale === 'th' ? slotProps.item.confidentialityNote.th : slotProps.item.confidentialityNote.en) : '' }}
                </div>
              </Message>

              <!-- Description -->
              <p class="exp-desc">
                {{ locale === 'th' ? slotProps.item.description.th : slotProps.item.description.en }}
              </p>

              <!-- Highlights / Key Accomplishments -->
              <div class="exp-highlights">
                <h5 class="highlights-heading">{{ locale === 'th' ? 'ผลงานและความรับผิดชอบหลัก:' : 'Key Contributions & Responsibilities:' }}</h5>
                <ul class="highlights-list">
                  <li v-for="(highlight, i) in slotProps.item.highlights" :key="i">
                    <i class="pi pi-check text-xs highlight-bullet"></i>
                    <span>{{ locale === 'th' ? highlight.text.th : highlight.text.en }}</span>
                  </li>
                </ul>
              </div>

              <!-- Technologies Tags with PrimeVue Tag -->
              <div class="exp-tech-tags">
                <Tag
                  v-for="tech in slotProps.item.technologies"
                  :key="tech"
                  :value="tech"
                  severity="secondary"
                  class="tech-pill"
                />
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
import Message from "primevue/message";
import Tag from "primevue/tag";
import { experiences } from "../data/experiences";
import { useI18n } from "../i18n";

const { t, locale } = useI18n();
</script>

<style scoped>
.experience-section {
  position: relative;
}

.timeline-container {
  max-width: 920px;
  margin: 0 auto;
}

/* PrimeVue Timeline custom styling */
:deep(.p-timeline) {
  padding: 0;
}

:deep(.p-timeline-event-opposite) {
  display: none !important;
}

:deep(.p-timeline-event-content) {
  padding-left: 2rem !important;
  padding-bottom: 3.5rem !important;
}

:deep(.p-timeline-event-separator) {
  flex: 0 0 auto !important;
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
  font-size: 1rem;
}

/* Experience Card */
.experience-card {
  padding: 2.25rem;
  text-align: left;
  border-radius: 16px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
}

/* Top Header: Logo + Info */
.exp-card-top {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1.25rem;
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

.exp-card-info {
  flex-grow: 1;
}

.exp-header-meta {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
}

.exp-duration {
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

.exp-location {
  font-size: 0.85rem;
  color: var(--text-muted);
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.meta-icon {
  font-size: 0.82rem;
}

.exp-role-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.35rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.exp-position-badge {
  font-size: 0.8rem;
  font-weight: 600;
  font-family: var(--font-mono);
  color: var(--text-muted);
  background: var(--bg-tertiary);
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  border: 1px solid var(--border-color);
}

.exp-company {
  font-size: 1.05rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.company-link {
  color: var(--text-secondary);
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  transition: color var(--transition-fast);
}

.company-link:hover {
  color: var(--accent-emerald);
}

.link-arrow {
  transition: transform var(--transition-fast);
}

.company-link:hover .link-arrow {
  transform: translate(2px, -2px);
}

.confidential-msg {
  margin: 1.25rem 0 !important;
  font-size: 0.88rem !important;
}

.confidential-msg-inner {
  line-height: 1.5;
}

.exp-desc {
  font-size: 1.02rem;
  line-height: 1.65;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.exp-highlights {
  margin-bottom: 1.75rem;
}

.highlights-heading {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.highlights-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.highlights-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.94rem;
  line-height: 1.55;
  color: var(--text-secondary);
}

.highlight-bullet {
  color: var(--accent-emerald);
  margin-top: 0.35rem;
  flex-shrink: 0;
}

.exp-tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  border-top: 1px solid var(--border-color);
  padding-top: 1.25rem;
}

.tech-pill {
  font-size: 0.78rem !important;
  background: var(--bg-tertiary) !important;
  border: 1px solid var(--border-color) !important;
  color: var(--text-secondary) !important;
}

@media (max-width: 768px) {
  .experience-card {
    padding: 1.5rem;
  }

  .exp-card-top {
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

  .marker-icon {
    font-size: 0.85rem;
  }
}
</style>
