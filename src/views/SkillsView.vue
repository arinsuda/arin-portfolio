<template>
  <section class="skills-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Technical Skills</h2>
        <p class="section-subtitle">Categorized breakdown of core proficiencies, project experience, and technical tools.</p>
      </div>

      <div class="skills-layout">
        <!-- Render Skills Categories -->
        <div 
          v-for="cat in skillsData" 
          :key="cat.tier" 
          class="skill-category-card glass-card"
          :class="'tier-' + cat.tier"
        >
          <div class="category-header">
            <BaseIcon name="code" size="20" stroke-width="2.5" class="category-icon" />
            <h3 class="category-title text-gradient">{{ cat.label }}</h3>
          </div>
          
          <p class="category-desc">{{ cat.description }}</p>
          
          <div class="skills-tags-container">
            <span 
              v-for="item in cat.items" 
              :key="item" 
              class="skill-tag"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseIcon from "../components/BaseIcon.vue";
import { skillsData } from "../data/skills";
</script>

<style scoped>
.skills-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: start;
}

.skill-category-card {
  padding: 2.5rem 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.category-icon {
  color: var(--accent-cyan);
}

.category-title {
  font-size: 1.4rem;
  font-weight: 700;
}

.category-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 2rem;
  min-height: 4.5rem; /* keep description blocks aligned */
}

.skills-tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: auto;
}

.skill-tag {
  font-size: 0.85rem;
  font-family: var(--font-mono);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  padding: 0.35rem 0.7rem;
  border-radius: 4px;
  transition: all var(--transition-fast);
}

.skill-tag:hover {
  border-color: var(--accent-cyan);
  color: var(--text-primary);
  background: rgba(6, 182, 212, 0.05);
}

/* Visually highlight Core skills card */
.tier-core {
  border-color: rgba(6, 182, 212, 0.2);
  box-shadow: 0 10px 30px -15px rgba(6, 182, 212, 0.1);
}

.tier-core .category-icon {
  color: var(--accent-blue);
}

.tier-familiarity {
  opacity: 0.9;
}

@media (max-width: 1024px) {
  .skills-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .category-desc {
    min-height: auto;
  }
}
</style>
