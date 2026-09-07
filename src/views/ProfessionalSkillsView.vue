<template>
  <section class="professional-skills-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t.nav.professionalSkills }}</h2>
        <p class="section-subtitle">
          {{ t.skills.professionalSkillsSubtitle }}
        </p>
      </div>

      <div class="skills-grid">
        <Card 
          v-for="skill in softSkills" 
          :key="skill.id" 
          class="soft-skill-card"
        >
          <template #content>
            <div class="skill-content-inner">
              <div class="skill-icon-box">
                <i :class="getSkillPrimeIcon(skill.id)"></i>
              </div>
              <div class="skill-text">
                <h4 class="skill-title">
                  {{ locale === 'th' ? skill.name.th : skill.name.en }}
                </h4>
                <p class="skill-desc">
                  {{ locale === 'th' ? skill.description.th : skill.description.en }}
                </p>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Card from "primevue/card";
import { softSkills } from "../data/softSkills";
import { useI18n } from "../i18n";

const { t, locale } = useI18n();

const getSkillPrimeIcon = (id: string) => {
  switch (id) {
    case "system-thinking": return "pi pi-sitemap";
    case "problem-solving": return "pi pi-wrench";
    case "ownership": return "pi pi-shield";
    case "critical-thinking": return "pi pi-search";
    case "continuous-learning": return "pi pi-sync";
    case "collaboration": return "pi pi-users";
    default: return "pi pi-check-circle";
  }
};
</script>

<style scoped>
.professional-skills-section {
  position: relative;
  background-color: var(--bg-secondary);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
}

.soft-skill-card {
  border-radius: 16px !important;
  background: var(--bg-primary) !important;
  border: 1px solid var(--border-color) !important;
  transition: all var(--transition-normal) !important;
  height: 100%;
}

.soft-skill-card:hover {
  transform: translateY(-3px);
  border-color: var(--border-hover) !important;
  box-shadow: var(--shadow-lg);
}

.skill-content-inner {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  text-align: left;
}

.skill-icon-box {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-emerald);
  font-size: 1.15rem;
  flex-shrink: 0;
}

.skill-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.4rem;
}

.skill-desc {
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--text-secondary);
}

@media (max-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 680px) {
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
}
</style>
