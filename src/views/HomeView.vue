<template>
  <section class="hero-section textured-grid-primary">
    <!-- Subtle interactive spotlight glow -->
    <div
      class="spotlight"
      :style="{ left: mouseX + 'px', top: mouseY + 'px' }"
    ></div>

    <div class="container hero-container">
      <div class="hero-content">
        <!-- Availability status indicator (like boatchrnthn.vercel.app) -->
        <div
          class="availability-badge"
          v-if="profile.availability && profile.availability.enabled"
        >
          <span class="status-ping">
            <span class="ping-wave"></span>
            <span class="ping-core"></span>
          </span>
          <span class="availability-text">
            {{ locale === "th" ? profile.availability.th : profile.availability.en }}
          </span>
        </div>

        <!-- Hero Title -->
        <h1 class="hero-headline">
          <span class="headline-greet">{{ t.hero.greeting }}</span>
          <span class="headline-name text-gradient">{{ profile.name }}</span>
        </h1>

        <!-- Subtitle with Typing Animation -->
        <h2 class="hero-role">
          <span class="role-prefix">I build</span>
          <span class="typed-text">{{ displayText }}</span>
          <span class="typing-cursor">|</span>
        </h2>

        <!-- Bio & Sub-Bio -->
        <p class="hero-bio">
          {{ locale === "th" ? profile.bio.th : profile.bio.en }}
        </p>
        <p class="hero-subbio">
          {{ locale === "th" ? profile.subBio.th : profile.subBio.en }}
        </p>

        <!-- CTAs with PrimeVue Button -->
        <div class="hero-cta-group">
          <Button
            as="a"
            href="#projects"
            @click="scrollToSection($event, 'projects')"
            severity="primary"
            class="cta-btn primary-cta"
          >
            <span>{{ t.hero.viewProjects }}</span>
            <i class="pi pi-arrow-right text-sm"></i>
          </Button>

          <Button
            as="a"
            href="#contact"
            @click="scrollToSection($event, 'contact')"
            severity="secondary"
            outlined
            class="cta-btn secondary-cta"
          >
            <i class="pi pi-envelope text-sm"></i>
            <span>{{ t.hero.talk }}</span>
          </Button>
        </div>

        <!-- Social & Resume Links Row -->
        <div class="hero-meta-row">
          <!-- Social Icons -->
          <div class="social-links-bar">
            <a
              :href="profile.socials.github"
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon-link"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <i class="pi pi-github"></i>
            </a>

            <a
              v-if="profile.socials.linkedin"
              :href="profile.socials.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon-link"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <i class="pi pi-linkedin"></i>
            </a>

            <a
              :href="'mailto:' + profile.email"
              class="social-icon-link"
              aria-label="Send Email"
              title="Email"
            >
              <i class="pi pi-envelope"></i>
            </a>
          </div>

          <div class="meta-divider"></div>

          <!-- Resume Actions -->
          <div class="resume-buttons">
            <Button
              as="a"
              :href="withBase('documents/Arin_Sudakijjathorn_Full_Stack_Developer_Resume.pdf')"
              target="_blank"
              rel="noopener noreferrer"
              severity="secondary"
              variant="text"
              size="small"
              class="resume-btn"
            >
              <i class="pi pi-file-pdf"></i>
              <span>{{ locale === "th" ? "ดูเรซูเม่" : "Resume" }}</span>
            </Button>

            <Button
              as="a"
              :href="withBase('documents/Arin_Sudakijjathorn_Full_Stack_Developer_Resume.pdf')"
              download="Arin_Sudakijjathorn_Full_Stack_Developer_Resume.pdf"
              severity="secondary"
              variant="text"
              size="small"
              class="resume-btn"
            >
              <i class="pi pi-download"></i>
              <span>{{ locale === "th" ? "ดาวน์โหลด" : "PDF" }}</span>
            </Button>
          </div>
        </div>
      </div>

      <!-- Hero Visual Side (Clean Profile Card + Floating Tech Tags) -->
      <div class="hero-visual">
        <div class="visual-card glass-card">
          <div class="profile-image-box">
            <img
              :src="profile.profileImages[0]?.src || profile.avatar"
              :alt="locale === 'th' ? (profile.profileImages[0]?.alt.th || profile.name) : (profile.profileImages[0]?.alt.en || profile.name)"
              class="profile-img"
            />
          </div>

          <!-- Floating Badges with PrimeVue Tag -->
          <div class="floating-badge badge-top">
            <Tag severity="success" value="Go Fiber &amp; Spring Boot" class="tech-tag" />
          </div>

          <div class="floating-badge badge-bottom">
            <Tag severity="info" value="PostgreSQL &amp; MySQL" class="tech-tag" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from "vue";
import Button from "primevue/button";
import Tag from "primevue/tag";
import { profile } from "../data/profile";
import { useI18n } from "../i18n";
import { withBase } from "../utils/assets";

const { t, locale } = useI18n();

// Mouse spotlight tracking
const mouseX = ref(0);
const mouseY = ref(0);

const handleMouseMove = (e: MouseEvent) => {
  const rect = e.currentTarget
    ? (e.currentTarget as HTMLElement).getBoundingClientRect()
    : { left: 0, top: 0 };
  mouseX.value = e.clientX - rect.left;
  mouseY.value = e.clientY - rect.top;
};

// Text typing simulation
const words = computed(() => {
  return locale.value === "th"
    ? ["Backend Architectures", "Relational Schemas", "High-Throughput APIs", "Scalable Services"]
    : ["Backend Architectures", "Relational Schemas", "High-Throughput APIs", "Scalable Services"];
});

const displayText = ref("");
const currentWordIndex = ref(0);
const isDeleting = ref(false);
const typingSpeed = ref(90);
let typingTimeout: ReturnType<typeof setTimeout> | null = null;

const typeText = () => {
  const currentWords = words.value;
  const currentWord = currentWords[currentWordIndex.value] || "";
  const length = displayText.value.length;

  if (!isDeleting.value) {
    displayText.value = currentWord.substring(0, length + 1);
    typingSpeed.value = 90;

    if (displayText.value === currentWord) {
      isDeleting.value = true;
      typingSpeed.value = 2200;
    }
  } else {
    displayText.value = currentWord.substring(0, length - 1);
    typingSpeed.value = 45;

    if (displayText.value === "") {
      isDeleting.value = false;
      currentWordIndex.value = (currentWordIndex.value + 1) % currentWords.length;
      typingSpeed.value = 400;
    }
  }

  typingTimeout = setTimeout(typeText, typingSpeed.value);
};

const scrollToSection = (event: Event, id: string) => {
  const element = document.getElementById(id);
  if (element) {
    event.preventDefault();
    element.scrollIntoView({ behavior: "smooth" });
    history.pushState(null, "", `#${id}`);
  }
};

watch(locale, () => {
  if (typingTimeout) clearTimeout(typingTimeout);
  displayText.value = "";
  currentWordIndex.value = 0;
  isDeleting.value = false;
  typeText();
});

onMounted(() => {
  typeText();
  const heroSection = document.querySelector(".hero-section");
  if (heroSection) {
    heroSection.addEventListener("mousemove", handleMouseMove as EventListener);
  }
});

onUnmounted(() => {
  if (typingTimeout) clearTimeout(typingTimeout);
  const heroSection = document.querySelector(".hero-section");
  if (heroSection) {
    heroSection.removeEventListener("mousemove", handleMouseMove as EventListener);
  }
});
</script>

<style scoped>
.hero-section {
  min-height: calc(100vh - 76px);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 4.5rem 0;
}

/* Spotlight glow */
.spotlight {
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 0;
  opacity: 0.6;
}

.hero-container {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  align-items: center;
  gap: 4rem;
  position: relative;
  z-index: 1;
}

.hero-content {
  text-align: left;
}

/* Availability Status Pill (like Boat's site) */
.availability-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  padding: 0.45rem 0.95rem;
  border-radius: 30px;
  font-size: 0.84rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 2rem;
  box-shadow: var(--shadow-sm);
}

.status-ping {
  position: relative;
  display: flex;
  width: 8px;
  height: 8px;
}

.ping-wave {
  position: absolute;
  display: inline-flex;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-color: var(--accent-emerald);
  opacity: 0.75;
  animation: ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.ping-core {
  position: relative;
  display: inline-flex;
  border-radius: 50%;
  height: 8px;
  width: 8px;
  background-color: var(--accent-emerald);
}

@keyframes ping {
  75%, 100% {
    transform: scale(2.2);
    opacity: 0;
  }
}

/* Headline */
.hero-headline {
  font-size: 3.5rem;
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.15;
  margin-bottom: 0.75rem;
  display: flex;
  flex-direction: column;
}

.headline-greet {
  color: var(--text-primary);
}

.headline-name {
  margin-top: 0.2rem;
}

/* Role Subtitle with Typing Animation */
.hero-role {
  font-size: 1.85rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  height: 2.6rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: -0.02em;
}

.role-prefix {
  color: var(--text-muted);
}

.typed-text {
  color: var(--accent-emerald);
  font-family: var(--font-mono);
  font-weight: 600;
}

.typing-cursor {
  color: var(--accent-emerald);
  animation: blink 0.9s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Bios */
.hero-bio {
  font-size: 1.15rem;
  color: var(--text-secondary);
  line-height: 1.65;
  max-width: 620px;
  margin-bottom: 0.75rem;
}

.hero-subbio {
  font-size: 0.98rem;
  color: var(--text-muted);
  line-height: 1.6;
  max-width: 620px;
  margin-bottom: 2.25rem;
}

/* CTA Group */
.hero-cta-group {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.25rem;
}

.cta-btn {
  padding: 0.75rem 1.75rem !important;
  font-weight: 600 !important;
  font-size: 0.95rem !important;
  border-radius: 10px !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 0.5rem !important;
  transition: all var(--transition-fast) !important;
}

.primary-cta {
  background: var(--accent-emerald) !important;
  border-color: var(--accent-emerald) !important;
  color: #ffffff !important;
  box-shadow: 0 4px 14px var(--accent-glow) !important;
}

.primary-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px var(--accent-glow) !important;
}

.secondary-cta {
  border-color: var(--border-color) !important;
  color: var(--text-primary) !important;
}

.secondary-cta:hover {
  border-color: var(--border-hover) !important;
  transform: translateY(-2px);
}

/* Meta Row (Socials + Resumes) */
.hero-meta-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.social-links-bar {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.social-icon-link {
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 1.05rem;
  transition: all var(--transition-fast);
}

.social-icon-link:hover {
  color: var(--accent-emerald);
  border-color: var(--accent-emerald);
  transform: translateY(-2px);
}

.meta-divider {
  width: 1px;
  height: 24px;
  background-color: var(--border-color);
}

.resume-buttons {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.resume-btn {
  color: var(--text-secondary) !important;
  font-weight: 500 !important;
  font-size: 0.85rem !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 0.4rem !important;
}

.resume-btn:hover {
  color: var(--text-primary) !important;
}

/* Hero Visual Box */
.hero-visual {
  display: flex;
  justify-content: center;
  position: relative;
}

.visual-card {
  position: relative;
  padding: 1.25rem;
  border-radius: 24px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-xl);
}

.profile-image-box {
  width: 320px;
  height: 340px;
  border-radius: 16px;
  overflow: hidden;
  background-color: var(--bg-tertiary);
  border: 1px solid var(--border-color);
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.visual-card:hover .profile-img {
  transform: scale(1.03);
}

.floating-badge {
  position: absolute;
  z-index: 2;
  box-shadow: var(--shadow-lg);
}

.badge-top {
  top: 2rem;
  right: -1.75rem;
}

.badge-bottom {
  bottom: 2rem;
  left: -1.75rem;
}

.tech-tag {
  box-shadow: var(--shadow-md) !important;
}

@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }
  
  .hero-headline {
    font-size: 2.8rem;
  }
  
  .hero-role {
    font-size: 1.5rem;
  }
  
  .hero-visual {
    order: -1;
  }
  
  .profile-image-box {
    width: 260px;
    height: 280px;
  }
}

@media (max-width: 640px) {
  .hero-headline {
    font-size: 2.3rem;
  }
  
  .hero-role {
    font-size: 1.3rem;
    height: auto;
    flex-wrap: wrap;
  }
  
  .hero-cta-group {
    flex-direction: column;
    width: 100%;
  }
  
  .cta-btn {
    width: 100% !important;
    justify-content: center !important;
  }
  
  .hero-meta-row {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .meta-divider {
    display: none;
  }
  
  .badge-top {
    right: -0.5rem;
  }
  
  .badge-bottom {
    left: -0.5rem;
  }
}
</style>
