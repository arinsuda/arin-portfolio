<template>
  <section class="contact-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t.contact.title }}</h2>
        <p class="section-subtitle">
          {{ t.contact.subtitle }}
        </p>
      </div>

      <div class="contact-card-wrapper">
        <Card class="contact-main-card glass-card">
          <template #content>
            <div class="contact-content-inner">
              <div class="contact-badge-box">
                <i class="pi pi-comments text-2xl text-emerald"></i>
              </div>

              <h3 class="contact-heading">
                {{ locale === 'th' ? 'ร่วมงานหรือสนทนาเกี่ยวกับเทคโนโลยี' : 'Let\'s collaborate on your next project' }}
              </h3>

              <p class="contact-lead-text">
                {{ t.contact.lead }}
              </p>

              <!-- Action Buttons with PrimeVue Button -->
              <div class="contact-actions-grid">
                <!-- Direct Email Button -->
                <Button
                  as="a"
                  :href="'mailto:' + profile.email"
                  severity="primary"
                  class="action-btn email-primary-btn"
                >
                  <i class="pi pi-send"></i>
                  <span>{{ t.contact.sendEmail }}</span>
                </Button>

                <!-- Copy Email with Toast Feedback -->
                <Button
                  severity="secondary"
                  outlined
                  class="action-btn"
                  @click="copyEmailToClipboard"
                  id="copy-email-btn"
                >
                  <i :class="copied ? 'pi pi-check' : 'pi pi-copy'"></i>
                  <span>{{ copied ? (locale === 'th' ? 'คัดลอกเรียบร้อยแล้ว!' : 'Copied to Clipboard!') : (locale === 'th' ? 'คัดลอกอีเมล' : 'Copy Email Address') }}</span>
                </Button>

                <!-- Phone Call Button -->
                <Button
                  as="a"
                  :href="'tel:' + profile.phone.replace(/\s+/g, '')"
                  severity="secondary"
                  outlined
                  class="action-btn"
                  :aria-label="'Call ' + profile.phone"
                >
                  <i class="pi pi-phone"></i>
                  <span>{{ t.contact.call }} ({{ profile.phone }})</span>
                </Button>

                <!-- GitHub Profile -->
                <Button
                  as="a"
                  :href="profile.socials.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  severity="secondary"
                  outlined
                  class="action-btn"
                >
                  <i class="pi pi-github"></i>
                  <span>{{ t.contact.githubProfile }}</span>
                </Button>

                <!-- LinkedIn Profile if available -->
                <Button
                  v-if="profile.socials.linkedin"
                  as="a"
                  :href="profile.socials.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  severity="secondary"
                  outlined
                  class="action-btn"
                >
                  <i class="pi pi-linkedin"></i>
                  <span>LinkedIn Profile</span>
                </Button>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Card from "primevue/card";
import Button from "primevue/button";
import { useToast } from "primevue/usetoast";
import { profile } from "../data/profile";
import { useI18n } from "../i18n";

const { t, locale } = useI18n();
const toast = useToast();
const copied = ref(false);

const copyEmailToClipboard = () => {
  navigator.clipboard.writeText(profile.email)
    .then(() => {
      copied.value = true;
      toast.add({
        severity: "success",
        summary: locale.value === "th" ? "คัดลอกสำเร็จ" : "Email Copied!",
        detail: profile.email,
        life: 3000
      });
      setTimeout(() => {
        copied.value = false;
      }, 2500);
    })
    .catch(() => {
      toast.add({
        severity: "error",
        summary: locale.value === "th" ? "เกิดข้อผิดพลาด" : "Failed",
        detail: locale.value === "th" ? "ไม่สามารถคัดลอกอีเมลได้" : "Could not copy email",
        life: 3000
      });
    });
};
</script>

<style scoped>
.contact-section {
  position: relative;
}

.contact-card-wrapper {
  max-width: 840px;
  margin: 0 auto;
}

.contact-main-card {
  border-radius: 20px !important;
  background: var(--bg-secondary) !important;
  border: 1px solid var(--border-color) !important;
  box-shadow: var(--shadow-xl) !important;
}

.contact-content-inner {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.contact-badge-box {
  width: 54px;
  height: 54px;
  border-radius: 14px;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.text-emerald {
  color: var(--accent-emerald);
}

.contact-heading {
  font-size: 1.85rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.contact-lead-text {
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--text-secondary);
  max-width: 600px;
  margin-bottom: 2.5rem;
}

/* Actions Grid */
.contact-actions-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  width: 100%;
}

.action-btn {
  padding: 0.75rem 1.4rem !important;
  font-size: 0.92rem !important;
  font-weight: 600 !important;
  border-radius: 10px !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 0.5rem !important;
  transition: all var(--transition-fast) !important;
}

.email-primary-btn {
  background: var(--accent-emerald) !important;
  border-color: var(--accent-emerald) !important;
  color: #ffffff !important;
  box-shadow: 0 4px 15px var(--accent-glow) !important;
}

.email-primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px var(--accent-glow) !important;
}

.action-btn:not(.email-primary-btn):hover {
  transform: translateY(-2px);
  border-color: var(--border-hover) !important;
}

@media (max-width: 640px) {
  .contact-content-inner {
    padding: 1rem;
  }

  .contact-heading {
    font-size: 1.45rem;
  }

  .contact-actions-grid {
    flex-direction: column;
  }

  .action-btn {
    width: 100% !important;
    justify-content: center !important;
  }
}
</style>
