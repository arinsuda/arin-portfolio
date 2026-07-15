<template>
  <div class="portfolio-view">
    <HomeView id="home" />
    <ExperienceView id="experience" />
    <ProjectsView id="projects" />
    <SkillsView id="skills" />
    <EducationView id="education" />
    <ContactView id="contact" />
  </div>
</template>

<script setup lang="ts">
import HomeView from "./HomeView.vue";
import ExperienceView from "./ExperienceView.vue";
import ProjectsView from "./ProjectsView.vue";
import SkillsView from "./SkillsView.vue";
import EducationView from "./EducationView.vue";
import ContactView from "./ContactView.vue";
</script>

<style scoped>
.portfolio-view {
  display: flex;
  flex-direction: column;
}
</style>
