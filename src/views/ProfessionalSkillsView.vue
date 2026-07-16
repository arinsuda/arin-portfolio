<template>
  <section class="professional-skills-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t.nav.professionalSkills }}</h2>
        <p class="section-subtitle">{{ t.education.coCurricular.includes('Leadership') ? 'Personal and soft skills backed by project ownership, internship work, and academic collaboration.' : (locale === 'th' ? 'ทักษะส่วนบุคคลและการทำงานร่วมกับผู้อื่นที่ขับเคลื่อนด้วยการบริหารจัดการโปรเจกต์ งานฝึกงาน และการวิชาการร่วมกัน' : 'Personal and soft skills backed by project ownership, internship work, and academic collaboration.') }}</p>
      </div>

      <div class="skills-grid">
        <div 
          v-for="skill in softSkills" 
          :key="skill.id" 
          class="skill-card glass-card"
        >
          <div class="skill-header">
            <div class="icon-wrapper">
              <BaseIcon :name="skill.icon" size="20" stroke-width="2.5" class="skill-icon" />
            </div>
            <h3 class="skill-name">{{ locale === 'th' ? skill.name.th : skill.name.en }}</h3>
          </div>
          <p class="skill-description">
            {{ locale === 'th' ? skill.description.th : skill.description.en }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseIcon from "../components/BaseIcon.vue";
import { softSkills } from "../data/softSkills";
import { useI18n } from "../i18n";

const { t, locale } = useI18n();
</script>

<style scoped>
.professional-skills-section {
  padding: 6rem 0;
  background-color: var(--bg-secondary);
  transition: background-color var(--transition-normal);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.skill-card {
  padding: 2rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform var(--transition-normal), border-color var(--transition-normal);
}

.skill-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-cyan);
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.icon-wrapper {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(6, 182, 212, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
}

.skill-icon {
  color: var(--accent-cyan);
}

.skill-name {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
}

.skill-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-secondary);
}

@media (max-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
