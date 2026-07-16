<template>
  <div class="portfolio-view">
    <HomeView id="home" />
    <AboutView id="about" />
    <ExperienceView id="experience" />
    <ProjectsView id="projects" />
    <SkillsView id="skills" />
    <ProfessionalSkillsView id="professional-skills" />
    <EducationView id="education" />
    <ContactView id="contact" />
  </div>
</template>

<script setup lang="ts">
import HomeView from "./HomeView.vue";
import AboutView from "./AboutView.vue";
import ExperienceView from "./ExperienceView.vue";
import ProjectsView from "./ProjectsView.vue";
import SkillsView from "./SkillsView.vue";
import ProfessionalSkillsView from "./ProfessionalSkillsView.vue";
import EducationView from "./EducationView.vue";
import ContactView from "./ContactView.vue";
</script>

<style scoped>
.portfolio-view {
  display: flex;
  flex-direction: column;
}
</style>
