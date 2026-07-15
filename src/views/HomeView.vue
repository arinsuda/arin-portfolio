<template>
  <section class="hero-section">
    <!-- Spotlight glowing background indicator -->
    <div 
      class="spotlight" 
      :style="{ left: mouseX + 'px', top: mouseY + 'px' }"
    ></div>

    <div class="container hero-container">
      <div class="hero-content">
        <div class="greeting-badge">
          <span class="pulse-dot"></span>
          Available for new opportunities
        </div>
        
        <h1 class="hero-title">
          Hi, I'm <span class="text-gradient">{{ profile.name }}</span>
        </h1>
        
        <h2 class="hero-subtitle">
          I'm a <span class="typed-text">{{ displayText }}</span><span class="cursor">|</span>
        </h2>
        
        <p class="hero-lead">
          {{ profile.bio }}
        </p>
        
        <div class="hero-actions">
          <a href="#projects" class="btn btn-primary" @click="scrollToSection($event, 'projects')">
            View My Projects
            <span class="btn-arrow">
              <BaseIcon name="arrow-right" size="16" />
            </span>
          </a>
          <a href="#contact" class="btn btn-secondary" @click="scrollToSection($event, 'contact')">
            Let's Talk
          </a>
        </div>
      </div>

      <div class="hero-visual">
        <div class="glass-frame">
          <div class="avatar-wrapper">
            <img :src="profile.avatar" :alt="profile.name" class="avatar-img" />
          </div>
          <div class="visual-badge visual-badge-1">
            <BaseIcon name="zap" size="14" stroke-width="2.5" class="badge-icon" />
            <span>Robust Architectures</span>
          </div>
          <div class="visual-badge visual-badge-2">
            <BaseIcon name="shield" size="14" stroke-width="2.5" class="badge-icon" />
            <span>Type Safe APIs</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import BaseIcon from "../components/BaseIcon.vue";
import { profile } from "../data/profile";

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
const words = ["Backend Developer", "Database Architect", "API Engineer"];
const displayText = ref("");
const currentWordIndex = ref(0);
const isDeleting = ref(false);
const typingSpeed = ref(100);
let typingTimeout: ReturnType<typeof setTimeout> | null = null;

const typeText = () => {
  const currentWord = words[currentWordIndex.value];
  const length = displayText.value.length;

  if (!isDeleting.value) {
    // Add character
    displayText.value = currentWord.substring(0, length + 1);
    typingSpeed.value = 100;

    if (displayText.value === currentWord) {
      // Pause at full word
      isDeleting.value = true;
      typingSpeed.value = 2000;
    }
  } else {
    // Remove character
    displayText.value = currentWord.substring(0, length - 1);
    typingSpeed.value = 50;

    if (displayText.value === "") {
      isDeleting.value = false;
      currentWordIndex.value = (currentWordIndex.value + 1) % words.length;
      typingSpeed.value = 500;
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
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 4rem 0;
}

/* Spotlight glow background */
.spotlight {
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 0;
  transition: opacity 0.3s ease;
  opacity: 0.7;
}

.hero-container {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 4rem;
  z-index: 1;
}

.hero-content {
  text-align: left;
}

.greeting-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-color);
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 2rem;
}

.light-theme .greeting-badge {
  background: rgba(0, 0, 0, 0.02);
}

.pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--accent-cyan);
  box-shadow: 0 0 8px var(--accent-cyan);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 8px rgba(6, 182, 212, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(6, 182, 212, 0);
  }
}

.hero-title {
  font-size: 3.8rem;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -2px;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  height: 3rem; /* maintain height spacing for typed text */
}

.typed-text {
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cursor {
  color: var(--accent-blue);
  animation: blink 0.8s infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

.hero-lead {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  max-width: 600px;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
}

.btn-arrow {
  margin-left: 0.5rem;
  display: inline-flex;
  align-items: center;
  transition: transform var(--transition-fast);
}

.btn-primary:hover .btn-arrow {
  transform: translateX(3px);
}

/* Avatar Frame Visual */
.hero-visual {
  display: flex;
  justify-content: center;
  position: relative;
}

.glass-frame {
  position: relative;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 30px;
  box-shadow: var(--shadow-lg);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.avatar-wrapper {
  width: 320px;
  height: 320px;
  border-radius: 20px;
  overflow: hidden;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.visual-badge {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  padding: 0.6rem 1rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-primary);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.badge-icon {
  color: var(--accent-cyan);
}

.visual-badge-1 {
  bottom: 2rem;
  left: -2rem;
}

.visual-badge-2 {
  top: 3rem;
  right: -2rem;
}

@media (max-width: 1024px) {
  .hero-title {
    font-size: 3rem;
  }
  .hero-subtitle {
    font-size: 1.75rem;
  }
}

@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .hero-content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-actions {
    justify-content: center;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
  }

  .btn {
    width: 100%;
  }

  .avatar-wrapper {
    width: 260px;
    height: 260px;
  }

  .visual-badge-1 {
    left: -1rem;
  }

  .visual-badge-2 {
    right: -1rem;
  }
}
</style>
