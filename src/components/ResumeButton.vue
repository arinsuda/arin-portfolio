<template>
  <div class="resume-split-container" :class="customClass">
    <!-- View Résumé (Opens PDF in new tab) -->
    <a
      :href="resumeUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="resume-view-btn group"
      :aria-label="viewLabel"
    >
      <span class="resume-text">{{ viewLabel }}</span>
      <i class="pi pi-external-link resume-icon transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></i>
    </a>

    <!-- Download Résumé (Downloads PDF directly) -->
    <a
      :href="resumeUrl"
      download="Arin_Sudakijjathorn_Full_Stack_Developer_Resume.pdf"
      class="resume-download-btn"
      :title="downloadTitle"
      :aria-label="downloadTitle"
    >
      <i class="pi pi-download download-icon"></i>
    </a>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { withBase } from "../utils/assets";
import { useI18n } from "../i18n";

defineProps<{
  customClass?: string;
}>();

const { t } = useI18n();

const resumeUrl = withBase("documents/Arin_Sudakijjathorn_Full_Stack_Developer_Resume.pdf");

const viewLabel = computed(() => t.value.hero.viewResume);
const downloadTitle = computed(() => t.value.hero.downloadResume);
</script>

<style scoped>
.resume-split-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 0.75rem;
  padding: 0.35rem 0.4rem;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  width: 100%;
}

.resume-split-container:hover {
  border-color: var(--border-hover);
}

.resume-view-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.65rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: -0.01em;
  transition: all var(--transition-fast);
}

.resume-view-btn:hover {
  background-color: var(--bg-tertiary);
  color: var(--text-primary);
}

.resume-text {
  line-height: 1;
}

.resume-icon {
  font-size: 0.95rem;
  opacity: 0.85;
}

.resume-download-btn {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  background-color: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  color: var(--accent-primary);
  text-decoration: none;
  transition: all var(--transition-fast);
  flex-shrink: 0;
}

.resume-download-btn:hover {
  background-color: var(--accent-primary-bg);
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  box-shadow: 0 0 12px var(--accent-glow);
  transform: translateY(-1px);
}

.download-icon {
  font-size: 1.1rem;
}
</style>
