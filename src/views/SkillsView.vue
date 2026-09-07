<template>
  <section class="skills-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t.skills.title }}</h2>
        <p class="section-subtitle">{{ t.skills.subtitle }}</p>
      </div>

      <div class="skills-grid">
        <!-- Render Skills Categories with PrimeVue Card -->
        <Card 
          v-for="cat in skillsData" 
          :key="cat.tier" 
          class="skill-category-card"
          :class="'tier-' + cat.tier"
        >
          <template #header>
            <div class="category-header">
              <div class="header-icon-box">
                <i :class="getCategoryIcon(cat.tier)"></i>
              </div>
              <div class="header-text">
                <div class="tier-pill-wrapper">
                  <Tag 
                    :value="getTierLabel(cat.tier)" 
                    :severity="cat.tier === 'core' ? 'success' : (cat.tier === 'project' ? 'info' : 'secondary')" 
                    class="tier-tag"
                  />
                </div>
                <h3 class="category-title">
                  {{ locale === 'th' ? cat.label.th : cat.label.en }}
                </h3>
              </div>
            </div>
          </template>

          <template #content>
            <p class="category-desc">
              {{ locale === 'th' ? cat.description.th : cat.description.en }}
            </p>

            <div class="skills-chips-wrapper">
              <Chip
                v-for="item in cat.items"
                :key="item"
                :label="item"
                class="skill-chip"
              />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Card from "primevue/card";
import Tag from "primevue/tag";
import Chip from "primevue/chip";
import { skillsData } from "../data/skills";
import { useI18n } from "../i18n";

const { t, locale } = useI18n();

const getCategoryIcon = (tier: string) => {
  switch (tier) {
    case "core": return "pi pi-bolt";
    case "project": return "pi pi-code";
    case "familiarity": return "pi pi-compass";
    default: return "pi pi-circle";
  }
};

const getTierLabel = (tier: string) => {
  switch (tier) {
    case "core": return t.value.skills.coreTier;
    case "project": return t.value.skills.projectTier;
    case "familiarity": return t.value.skills.familiarityTier;
    default: return tier;
  }
};
</script>

<style scoped>
.skills-section {
  position: relative;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: stretch;
}

.skill-category-card {
  height: 100%;
  border-radius: 18px !important;
  background: var(--bg-secondary) !important;
  border: 1px solid var(--border-color) !important;
  display: flex;
  flex-direction: column;
  transition: all var(--transition-normal) !important;
}

.skill-category-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-hover) !important;
  box-shadow: var(--shadow-xl);
}

/* Highlight Core Category */
.tier-core {
  border-color: var(--accent-primary-border) !important;
}

.tier-core:hover {
  border-color: var(--accent-primary) !important;
  box-shadow: 0 10px 30px -10px var(--accent-glow) !important;
}

.category-header {
  padding: 1.75rem 1.75rem 0;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  text-align: left;
}

.header-icon-box {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-primary);
  font-size: 1.15rem;
  flex-shrink: 0;
}

.tier-core .header-icon-box {
  background: var(--accent-primary-bg);
  border-color: var(--accent-primary-border);
}

.header-text {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.tier-tag {
  font-size: 0.72rem !important;
  padding: 0.15rem 0.5rem !important;
}

.category-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.01em;
}

.category-desc {
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 1.75rem;
  min-height: 4rem;
  text-align: left;
}

.skills-chips-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
}

.skill-chip {
  font-family: var(--font-mono) !important;
  font-size: 0.8rem !important;
  background: var(--bg-tertiary) !important;
  border: 1px solid var(--border-color) !important;
  color: var(--text-secondary) !important;
  transition: all var(--transition-fast) !important;
}

.skill-chip:hover {
  border-color: var(--accent-primary) !important;
  color: var(--text-primary) !important;
}

@media (max-width: 1100px) {
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }

  .category-desc {
    min-height: auto;
  }
}
</style>
