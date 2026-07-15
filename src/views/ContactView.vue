<template>
  <section class="contact-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Let’s Build Reliable Systems</h2>
        <p class="section-subtitle">
          I am open to Backend Developer and Full-Stack Developer opportunities. For job opportunities, project discussions, or technical collaboration, contact me by email or view my work on GitHub.
        </p>
      </div>

      <div class="contact-layout glass-card">
        <div class="contact-info">
          <p class="contact-lead">
            Whether you are looking to design robust database schemas, configure multi-service Docker deployments, or develop high-performance APIs in Go or Java, I am ready to collaborate.
          </p>
        </div>

        <div class="contact-actions">
          <a 
            :href="'mailto:' + profile.email" 
            class="btn btn-primary action-btn"
          >
            <BaseIcon name="mail" size="18" stroke-width="2" class="btn-icon" />
            Send Email
          </a>
          
          <a 
            :href="profile.socials.github" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn btn-secondary action-btn"
          >
            <BaseIcon name="github" size="18" stroke-width="2" class="btn-icon" />
            GitHub Profile
          </a>

          <button 
            @click="copyEmail" 
            class="btn btn-secondary action-btn"
            id="copy-email-btn"
          >
            <BaseIcon name="check" size="18" stroke-width="2" class="btn-icon" />
            {{ copyStatus }}
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

const copyStatus = ref("Copy Email");

const copyEmail = () => {
  navigator.clipboard.writeText(profile.email)
    .then(() => {
      copyStatus.value = "Email Copied!";
      setTimeout(() => {
        copyStatus.value = "Copy Email";
      }, 2000);
    })
    .catch(() => {
      copyStatus.value = "Failed to copy";
    });
};
</script>

<style scoped>
.contact-section {
  padding: 6rem 0;
}

.contact-layout {
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
}

.contact-info {
  max-width: 600px;
}

.contact-lead {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-secondary);
}

.contact-actions {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 2rem;
  min-width: 180px;
}

.btn-icon {
  margin-right: 0.5rem;
}

@media (max-width: 640px) {
  .contact-actions {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .action-btn {
    width: 100%;
    max-width: 300px;
  }
}
</style>
