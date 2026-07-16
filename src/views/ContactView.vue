<template>
  <section class="contact-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t.contact.title }}</h2>
        <p class="section-subtitle">
          {{ t.contact.subtitle }}
        </p>
      </div>

      <div class="contact-layout glass-card">
        <div class="contact-info">
          <p class="contact-lead">
            {{ t.contact.lead }}
          </p>
        </div>

        <div class="contact-actions">
          <!-- Send Email -->
          <a 
            :href="'mailto:' + profile.email" 
            class="btn btn-primary action-btn"
          >
            <BaseIcon name="mail" size="18" stroke-width="2" class="btn-icon" />
            {{ t.contact.sendEmail }}
          </a>

          <!-- Call Phone -->
          <a 
            :href="'tel:' + profile.phone.replace(/\s+/g, '')" 
            class="btn btn-secondary action-btn"
            :aria-label="locale === 'th' ? 'โทร ' + profile.phone : 'Call ' + profile.phone"
          >
            <BaseIcon name="phone" size="18" stroke-width="2" class="btn-icon" />
            {{ t.contact.call }} ({{ profile.phone }})
          </a>
          
          <!-- GitHub Profile -->
          <a 
            :href="profile.socials.github" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn btn-secondary action-btn"
          >
            <BaseIcon name="github" size="18" stroke-width="2" class="btn-icon" />
            {{ t.contact.githubProfile }}
          </a>

          <!-- Copy Email Button -->
          <button 
            @click="copyEmail" 
            class="btn btn-secondary action-btn"
            id="copy-email-btn"
          >
            <BaseIcon name="check" size="18" stroke-width="2" class="btn-icon" />
            {{ copyStatus === 'copy' ? t.contact.copyEmail : (copyStatus === 'copied' ? t.contact.emailCopied : t.contact.failedCopy) }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseIcon from "../components/BaseIcon.vue";
import { profile } from "../data/profile";
import { useI18n } from "../i18n";

const { t, locale } = useI18n();

const copyStatus = ref<"copy" | "copied" | "failed">("copy");

const copyEmail = () => {
  navigator.clipboard.writeText(profile.email)
    .then(() => {
      copyStatus.value = "copied";
      setTimeout(() => {
        copyStatus.value = "copy";
      }, 2000);
    })
    .catch(() => {
      copyStatus.value = "failed";
    });
};
</script>

<style scoped>
.contact-section {
  padding: 6rem 0;
}

.contact-layout {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
}

.contact-info {
  max-width: 700px;
}

.contact-lead {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-secondary);
}

.contact-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.5rem;
  min-width: 190px;
}

.btn-icon {
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  .contact-actions {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .action-btn {
    width: 100%;
    max-width: 350px;
  }
}
</style>
