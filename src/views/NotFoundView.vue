<template>
  <div class="not-found-page">
    <div class="container not-found-container">
      <div class="not-found-card glass-card">
        <!-- Icon & Status Badge -->
        <div class="icon-wrapper">
          <div class="glow-backdrop"></div>
          <div class="icon-box">
            <i :class="statusIcon" class="main-icon"></i>
          </div>
        </div>

        <div class="badge-row">
          <span class="status-code-pill">{{ isSocialPlaceholder ? platformName : t.notFound.code }}</span>
        </div>

        <!-- Heading & Description -->
        <h1 class="not-found-title">
          {{ isSocialPlaceholder ? t.notFound.socialTitle : t.notFound.title }}
        </h1>

        <p class="not-found-desc">
          {{ isSocialPlaceholder ? t.notFound.socialDesc : t.notFound.description }}
        </p>

        <!-- Social Specific Preview if applicable -->
        <div v-if="isSocialPlaceholder" class="social-preview-pill">
          <i :class="platformIcon" class="preview-platform-icon"></i>
          <span class="preview-text">@{{ profile.name.toLowerCase().replace(/\s+/g, '') }}</span>
        </div>

        <!-- Action Navigation Buttons -->
        <div class="actions-group">
          <Button
            as="router-link"
            to="/"
            severity="primary"
            class="action-btn primary-btn"
          >
            <i class="pi pi-home"></i>
            <span>{{ t.notFound.backHome }}</span>
          </Button>

          <Button
            as="router-link"
            to="/projects"
            severity="secondary"
            outlined
            class="action-btn"
          >
            <i class="pi pi-folder"></i>
            <span>{{ t.notFound.viewProjects }}</span>
          </Button>

          <Button
            as="router-link"
            to="/about"
            severity="secondary"
            outlined
            class="action-btn"
          >
            <i class="pi pi-user"></i>
            <span>{{ t.notFound.exploreAbout }}</span>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import Button from "primevue/button";
import { useI18n } from "../i18n";
import { profile } from "../data/profile";

const route = useRoute();
const { t } = useI18n();

const platformParam = computed(() => {
  const param = route.params.platform as string | undefined;
  if (param) return param.toLowerCase();
  const query = route.query.from as string | undefined;
  return query ? query.toLowerCase() : "";
});

const isSocialPlaceholder = computed(() => {
  return ["instagram", "x", "twitter", "facebook"].includes(platformParam.value);
});

const platformName = computed(() => {
  switch (platformParam.value) {
    case "instagram":
      return "Instagram";
    case "x":
    case "twitter":
      return "X (Twitter)";
    case "facebook":
      return "Facebook";
    default:
      return "Social Media";
  }
});

const platformIcon = computed(() => {
  switch (platformParam.value) {
    case "instagram":
      return "pi pi-instagram";
    case "x":
    case "twitter":
      return "pi pi-twitter";
    case "facebook":
      return "pi pi-facebook";
    default:
      return "pi pi-share-alt";
  }
});

const statusIcon = computed(() => {
  if (isSocialPlaceholder.value) {
    return platformIcon.value;
  }
  return "pi pi-compass";
});
</script>

<style scoped>
.not-found-page {
  min-height: 85vh;
  padding-top: calc(76px + 4rem);
  padding-bottom: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.not-found-container {
  max-width: 680px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
}

.not-found-card {
  text-align: center;
  padding: 3.5rem 2.5rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
}

/* Glow & Icon Box */
.icon-wrapper {
  position: relative;
  margin-bottom: 1.5rem;
}

.glow-backdrop {
  position: absolute;
  inset: -20px;
  background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
  filter: blur(20px);
  opacity: 0.6;
  pointer-events: none;
}

.icon-box {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 1.25rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
}

.main-icon {
  font-size: 2.5rem;
  color: var(--accent-emerald);
}

.badge-row {
  margin-bottom: 1rem;
}

.status-code-pill {
  display: inline-block;
  padding: 0.35rem 0.9rem;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent-primary);
  background: var(--accent-primary-bg);
  border: 1px solid var(--accent-primary-border);
  border-radius: 9999px;
}

.not-found-title {
  font-size: 2.25rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.not-found-desc {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 480px;
  margin: 0 auto 1.75rem;
}

.social-preview-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: 0.75rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.preview-platform-icon {
  color: var(--accent-emerald);
  font-size: 1rem;
}

.preview-text {
  font-family: var(--font-mono, monospace);
  font-size: 0.85rem;
}

.actions-group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;
  width: 100%;
}

.action-btn {
  border-radius: 9999px !important;
  padding: 0.65rem 1.4rem !important;
  font-weight: 600 !important;
  font-size: 0.9rem !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 0.5rem !important;
  text-decoration: none !important;
  transition: all var(--transition-fast) !important;
}

.primary-btn {
  background: var(--accent-emerald) !important;
  border-color: var(--accent-emerald) !important;
  color: #ffffff !important;
  box-shadow: 0 4px 14px var(--accent-glow) !important;
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px var(--accent-glow) !important;
}

@media (max-width: 640px) {
  .not-found-card {
    padding: 2.5rem 1.5rem;
  }
  .not-found-title {
    font-size: 1.75rem;
  }
  .actions-group {
    flex-direction: column;
    width: 100%;
  }
  .action-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
