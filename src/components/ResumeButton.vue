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
  background-color: rgba(24, 24, 27, 0.95);
  border: 1px solid rgba(63, 63, 70, 0.4);
  border-radius: 0.75rem;
  padding: 0.35rem 0.4rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.25s ease;
  width: 100%;
}

:global(.light-theme) .resume-split-container {
  background-color: #f4f4f5;
  border-color: #e4e4e7;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.resume-split-container:hover {
  border-color: rgba(113, 113, 122, 0.6);
}

:global(.light-theme) .resume-split-container:hover {
  border-color: #d4d4d8;
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
  color: #f4f4f5;
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: -0.01em;
  transition: all 0.2s ease;
}

:global(.light-theme) .resume-view-btn {
  color: #18181b;
}

.resume-view-btn:hover {
  background-color: rgba(255, 255, 255, 0.06);
  color: #ffffff;
}

:global(.light-theme) .resume-view-btn:hover {
  background-color: rgba(0, 0, 0, 0.04);
  color: #09090b;
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
  background-color: rgba(39, 39, 42, 0.7);
  border: 1px solid rgba(63, 63, 70, 0.5);
  color: #34d399;
  text-decoration: none;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

:global(.light-theme) .resume-download-btn {
  background-color: #e4e4e7;
  border-color: #d4d4d8;
  color: #059669;
}

.resume-download-btn:hover {
  background-color: rgba(52, 211, 153, 0.15);
  border-color: #34d399;
  color: #10b981;
  transform: translateY(-1px);
}

:global(.light-theme) .resume-download-btn:hover {
  background-color: rgba(16, 185, 129, 0.15);
  border-color: #10b981;
  color: #047857;
}

.download-icon {
  font-size: 1.1rem;
}
</style>
