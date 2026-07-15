<template>
  <section class="contact-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-subtitle">Have a project proposal, job opportunity, or just want to say hello? Drop a message below!</p>
      </div>

      <div class="contact-grid">
        <!-- Contact Meta Info -->
        <div class="contact-info-panel">
          <h3 class="panel-title">Contact Channels</h3>
          <p class="panel-desc">Feel free to reach out through the form, or directly via email. I will respond to your inquiry as soon as possible.</p>
          
          <div class="contact-channels">
            <div class="channel-card glass-card">
              <span class="channel-icon">
                <BaseIcon name="mail" size="24" stroke-width="2" class="accent-color" />
              </span>
              <div class="channel-content">
                <span class="channel-label">Email Me</span>
                <a :href="'mailto:' + profile.email" class="channel-link">{{ profile.email }}</a>
              </div>
            </div>

            <div class="channel-card glass-card">
              <span class="channel-icon">
                <BaseIcon name="github" size="24" stroke-width="2" class="accent-color" />
              </span>
              <div class="channel-content">
                <span class="channel-label">GitHub</span>
                <a :href="profile.socials.github" target="_blank" rel="noopener" class="channel-link">github.com/arinsuda</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Interactive Contact Form -->
        <div class="contact-form-panel glass-card">
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-row">
              <div class="form-group">
                <label for="name" class="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  class="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div class="form-group">
                <label for="email" class="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  class="form-control"
                  placeholder="email@example.com"
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <label for="subject" class="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                class="form-control"
                placeholder="Job Opportunity / Project Discussion"
                required
              />
            </div>

            <div class="form-group">
              <label for="message" class="form-label">Message Content</label>
              <textarea
                id="message"
                v-model="form.message"
                class="form-control"
                placeholder="Hello Arin, I would like to discuss..."
                required
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary form-submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Success Modal Overlay -->
    <transition name="modal-fade">
      <div v-if="showSuccessModal" class="modal-overlay">
        <div class="modal-card glass-card">
          <span class="modal-success-icon">
            <BaseIcon name="check" size="32" stroke-width="3" />
          </span>
          <h3 class="modal-title">Message Sent!</h3>
          <p class="modal-text">
            Thank you for reaching out, <strong>{{ submittedName }}</strong>. Your simulated message has been received successfully!
          </p>
          <div class="modal-summary">
            <div class="summary-item"><strong>Subject:</strong> {{ formSummary.subject }}</div>
            <div class="summary-item"><strong>Message preview:</strong> "{{ formSummary.message }}"</div>
          </div>
          <button @click="closeModal" class="btn btn-primary modal-close-btn">
            Done
          </button>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import BaseIcon from "../components/BaseIcon.vue";
import { profile } from "../data/profile";

const showSuccessModal = ref(false);
const submittedName = ref("");

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const formSummary = reactive({
  subject: "",
  message: "",
});

const handleSubmit = () => {
  submittedName.value = form.name;
  formSummary.subject = form.subject;
  // Truncate message preview for layout safety
  formSummary.message = form.message.length > 80 
    ? form.message.substring(0, 80) + "..." 
    : form.message;

  showSuccessModal.value = true;
};

const closeModal = () => {
  showSuccessModal.value = false;
  // Reset form fields
  form.name = "";
  form.email = "";
  form.subject = "";
  form.message = "";
};
</script>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 4rem;
  align-items: start;
}

.contact-info-panel {
  text-align: left;
}

.panel-title {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.panel-desc {
  font-size: 1.05rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
}

.contact-channels {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.channel-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: 12px;
}

.channel-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
}

.accent-color {
  color: var(--accent-cyan);
}

.channel-content {
  display: flex;
  flex-direction: column;
}

.channel-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 600;
  text-transform: uppercase;
}

.channel-link {
  font-weight: 600;
  color: var(--accent-blue);
  word-break: break-all;
}

.channel-link:hover {
  color: var(--accent-cyan);
}

.contact-form-panel {
  padding: 2.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-submit-btn {
  width: 100%;
  padding: 0.9rem;
}

/* Success Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(9, 10, 15, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.modal-card {
  max-width: 500px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2.5rem;
}

.modal-success-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(34, 197, 94, 0.1);
  border: 2px solid #22c55e;
  color: #22c55e;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 0 15px rgba(34, 197, 94, 0.2);
}

.modal-title {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.modal-text {
  font-size: 1.05rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.modal-summary {
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--border-color);
  padding: 1rem;
  border-radius: 8px;
  text-align: left;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  color: var(--text-secondary);
}

.light-theme .modal-summary {
  background: rgba(0, 0, 0, 0.02);
}

.summary-item {
  margin-bottom: 0.5rem;
}

.summary-item:last-child {
  margin-bottom: 0;
}

.modal-close-btn {
  width: 120px;
}

/* Modal Fade Animation */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active .modal-card,
.modal-fade-leave-active .modal-card {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal-fade-enter-from .modal-card {
  transform: scale(0.9) translateY(10px);
}

.modal-fade-leave-to .modal-card {
  transform: scale(0.9) translateY(-10px);
}

@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 580px) {
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .contact-form-panel {
    padding: 1.5rem;
  }
}
</style>
