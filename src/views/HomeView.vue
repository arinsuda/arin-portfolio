<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div
        class="spotlight"
        :style="{ left: mouseX + 'px', top: mouseY + 'px' }"
      ></div>

      <div class="container hero-container">
        <div class="hero-content">
          <!-- Availability status indicator -->
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
              as="router-link"
              to="/projects"
              severity="primary"
              class="cta-btn primary-cta"
            >
              <span>{{ t.hero.viewProjects }}</span>
              <i class="pi pi-arrow-right text-sm"></i>
            </Button>

            <Button
              as="a"
              href="#contact"
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
            <div class="social-links-bar">
              <component
                v-for="s in socialList"
                :key="s.id"
                :is="s.url.startsWith('http') || s.url.startsWith('mailto:') ? 'a' : 'router-link'"
                :href="s.url.startsWith('http') || s.url.startsWith('mailto:') ? s.url : undefined"
                :to="!s.url.startsWith('http') && !s.url.startsWith('mailto:') ? s.url : undefined"
                :target="s.url.startsWith('http') ? '_blank' : undefined"
                :rel="s.url.startsWith('http') ? 'noopener noreferrer' : undefined"
                class="social-icon-link"
                :aria-label="s.title"
                :title="s.title"
              >
                <i :class="s.icon"></i>
              </component>
            </div>

            <div class="meta-divider"></div>

            <!-- Unified Resume Split Button -->
            <div class="hero-resume-box">
              <ResumeButton />
            </div>
          </div>
        </div>

        <!-- Hero Visual Side -->
        <div class="hero-visual">
          <div class="visual-card glass-card">
            <div class="profile-image-box">
              <img
                :src="profile.profileImages[0]?.src || profile.avatar"
                :alt="locale === 'th' ? (profile.profileImages[0]?.alt.th || profile.name) : (profile.profileImages[0]?.alt.en || profile.name)"
                class="profile-img"
              />
            </div>

            <!-- Floating Badges from profile.heroBadges -->
            <div
              v-if="profile.heroBadges && profile.heroBadges[0]"
              class="floating-badge badge-top"
            >
              <Tag
                :severity="profile.heroBadges[0].severity as any"
                :value="profile.heroBadges[0].label"
                class="tech-tag"
              />
            </div>

            <div
              v-if="profile.heroBadges && profile.heroBadges[1]"
              class="floating-badge badge-bottom"
            >
              <Tag
                :severity="profile.heroBadges[1].severity as any"
                :value="profile.heroBadges[1].label"
                class="tech-tag"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contribution Graph Section -->
    <section class="home-contribution-section">
      <ContributionGraph />
    </section>

    <!-- Featured Projects Showcase Preview -->
    <section class="home-featured-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ t.home.featuredTitle }}</h2>
          <p class="section-subtitle">{{ t.home.featuredSubtitle }}</p>
        </div>

        <div class="featured-grid">
          <Card
            v-for="project in featuredProjects"
            :key="project.slug"
            class="featured-card"
          >
            <template #header>
              <div class="featured-thumb-wrap">
                <img
                  :src="project.thumbnail"
                  :alt="project.title"
                  class="featured-thumb"
                  loading="lazy"
                />
              </div>
            </template>
            <template #content>
              <div class="featured-card-body">
                <div class="featured-tags">
                  <Tag
                    v-for="tag in project.tags.slice(0, 3)"
                    :key="tag"
                    :value="tag"
                    severity="secondary"
                    class="project-tag"
                  />
                </div>
                <h3 class="featured-title">{{ project.title }}</h3>
                <p class="featured-desc">
                  {{ locale === 'th' ? project.shortDescription.th : project.shortDescription.en }}
                </p>
                <div class="featured-action">
                  <Button
                    as="router-link"
                    :to="'/project/' + project.slug"
                    severity="secondary"
                    variant="text"
                    size="small"
                    class="case-study-btn"
                  >
                    <span>{{ t.projects.viewCaseStudy }}</span>
                    <i class="pi pi-arrow-right text-xs"></i>
                  </Button>
                </div>
              </div>
            </template>
          </Card>
        </div>

        <div class="explore-all-box">
          <Button
            as="router-link"
            to="/projects"
            severity="secondary"
            outlined
            class="explore-btn"
          >
            <span>{{ t.home.exploreAllProjects }}</span>
            <i class="pi pi-arrow-right text-sm"></i>
          </Button>
        </div>
      </div>
    </section>

    <!-- Experience Snapshot Section -->
    <section class="home-exp-snapshot-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ t.journey.title }}</h2>
          <p class="section-subtitle">{{ t.journey.subtitle }}</p>
        </div>

        <!-- Mini Journey Waypoint Route Track -->
        <div class="mini-journey-track glass-card">
          <div
            v-for="(wp, idx) in journeyWaypoints"
            :key="wp.id"
            class="mini-waypoint-step"
            :class="{ 'is-current-active': wp.status === 'active' }"
          >
            <div class="step-marker">
              <span v-if="wp.status === 'active'" class="marker-radar"></span>
              <i :class="wp.category === 'academic' ? 'pi pi-graduation-cap' : (wp.category === 'internship' ? 'pi pi-briefcase' : 'pi pi-building')" class="marker-icon"></i>
            </div>
            <div class="step-meta">
              <span class="step-code">{{ wp.code }}</span>
              <span class="step-name">{{ wp.shortName || wp.organization }}</span>
              <span class="step-status">{{ wp.status === 'active' ? t.journey.statusActive : t.journey.statusCompleted }}</span>
            </div>
            <div v-if="idx < journeyWaypoints.length - 1" class="step-path-line">
              <i class="pi pi-angle-right path-arrow"></i>
            </div>
          </div>
        </div>

        <div class="exp-snapshot-card glass-card" v-if="primaryExperience">
          <div class="exp-snapshot-inner">
            <div class="exp-logo-wrap" v-if="primaryExperience.logo">
              <img
                :src="primaryExperience.logo"
                :alt="primaryExperience.company"
                class="exp-logo"
              />
            </div>
            <div class="exp-snapshot-content">
              <div class="exp-meta-line">
                <span class="active-beacon-pill">
                  <span class="beacon-dot"></span>
                  <span>{{ t.journey.statusActive }}</span>
                </span>
                <span class="exp-badge">{{ locale === 'th' ? primaryExperience.duration.th : primaryExperience.duration.en }}</span>
                <span class="exp-loc">{{ locale === 'th' ? primaryExperience.location.th : primaryExperience.location.en }}</span>
              </div>
              <h3 class="exp-company-title">{{ primaryExperience.company }}</h3>
              <h4 class="exp-role-title">{{ locale === 'th' ? primaryExperience.role.th : primaryExperience.role.en }}</h4>
              <p class="exp-desc-line">{{ locale === 'th' ? primaryExperience.description.th : primaryExperience.description.en }}</p>

              <div class="exp-snapshot-link">
                <Button
                  as="router-link"
                  to="/about"
                  severity="secondary"
                  variant="text"
                  class="learn-more-btn"
                >
                  <span>{{ t.journey.routeOverview }}</span>
                  <i class="pi pi-arrow-right text-xs"></i>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Quick Section -->
    <section id="contact" class="home-contact-section">
      <div class="container">
        <div class="contact-card glass-card">
          <div class="contact-header">
            <h2 class="section-title">{{ t.contact.title }}</h2>
            <p class="section-subtitle">{{ t.contact.subtitle }}</p>
            <p class="contact-lead">{{ t.contact.lead }}</p>
          </div>

          <div class="contact-actions">
            <Button
              as="a"
              :href="'mailto:' + profile.email"
              severity="primary"
              class="contact-action-btn"
            >
              <i class="pi pi-envelope"></i>
              <span>{{ t.contact.sendEmail }}</span>
            </Button>

            <Button
              severity="secondary"
              outlined
              class="contact-action-btn"
              @click="copyEmail"
            >
              <i class="pi pi-copy"></i>
              <span>{{ t.contact.copyEmail }}</span>
            </Button>

            <Button
              v-if="profile.socials.linkedin"
              as="a"
              :href="profile.socials.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              severity="secondary"
              outlined
              class="contact-action-btn"
            >
              <i class="pi pi-linkedin"></i>
              <span>LinkedIn</span>
            </Button>
          </div>

          <!-- All Social Profiles Quick Bar -->
          <div class="contact-social-row">
            <component
              v-for="s in socialList.filter((item) => item.id !== 'email')"
              :key="s.id"
              :is="s.url.startsWith('http') ? 'a' : 'router-link'"
              :href="s.url.startsWith('http') ? s.url : undefined"
              :to="!s.url.startsWith('http') ? s.url : undefined"
              :target="s.url.startsWith('http') ? '_blank' : undefined"
              :rel="s.url.startsWith('http') ? 'noopener noreferrer' : undefined"
              class="contact-social-icon-btn"
              :aria-label="s.title"
              :title="s.title"
            >
              <i :class="s.icon"></i>
            </component>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from "vue";
import Button from "primevue/button";
import Tag from "primevue/tag";
import Card from "primevue/card";
import { useToast } from "primevue/usetoast";
import ResumeButton from "../components/ResumeButton.vue";
import ContributionGraph from "../components/ContributionGraph.vue";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { experiences } from "../data/experiences";
import { journeyWaypoints } from "../data/journey";
import { useI18n } from "../i18n";
import type { SocialItem } from "../types";

const { t, locale } = useI18n();
const toast = useToast();

const featuredProjects = computed(() => {
  return projects.filter((p) => p.category === "featured").slice(0, 3);
});

const primaryExperience = computed(() => {
  return experiences[0] || null;
});

const socialList = computed<SocialItem[]>(() => {
  const items = [
    {
      id: "github",
      url: profile.socials.github,
      icon: "pi pi-github",
      title: t.value.contact.githubProfile,
    },
    {
      id: "linkedin",
      url: profile.socials.linkedin,
      icon: "pi pi-linkedin",
      title: t.value.contact.linkedinProfile,
    },
    {
      id: "instagram",
      url: profile.socials.instagram,
      icon: "pi pi-instagram",
      title: t.value.contact.instagramProfile,
    },
    {
      id: "twitter",
      url: profile.socials.twitter,
      icon: "pi pi-twitter",
      title: t.value.contact.twitterProfile,
    },
    {
      id: "facebook",
      url: profile.socials.facebook,
      icon: "pi pi-facebook",
      title: t.value.contact.facebookProfile,
    },
    {
      id: "email",
      url: "mailto:" + profile.email,
      icon: "pi pi-envelope",
      title: t.value.contact.sendEmail,
    },
  ];
  return items.filter((item): item is SocialItem => typeof item.url === "string" && item.url.length > 0);
});

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

// Text typing animation
const words = computed(() => {
  if (profile.typingWords) {
    return locale.value === "th"
      ? profile.typingWords.th
      : profile.typingWords.en;
  }
  return ["Backend Architectures", "Relational Schemas", "High-Throughput APIs", "Scalable Services"];
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

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(profile.email);
    toast.add({
      severity: "success",
      summary: t.value.common.success,
      detail: t.value.contact.emailCopied,
      life: 3000,
    });
  } catch (_e) {
    toast.add({
      severity: "error",
      summary: t.value.common.error,
      detail: t.value.contact.failedCopy,
      life: 3000,
    });
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
.home-page {
  display: flex;
  flex-direction: column;
}

/* Hero Section */
.hero-section {
  min-height: calc(100vh - 76px);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 5.5rem 0 3.5rem;
}

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
  text-decoration: none !important;
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
  text-decoration: none;
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

.hero-resume-box {
  min-width: 200px;
  max-width: 240px;
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

/* Contribution Graph section */
.home-contribution-section {
  padding: 1rem 0 3rem;
}

/* Featured Section */
.home-featured-section {
  padding: 4.5rem 0;
  border-top: 1px solid var(--border-color);
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.featured-card {
  border-radius: 16px !important;
  overflow: hidden;
  background: var(--bg-secondary) !important;
  border: 1px solid var(--border-color) !important;
  transition: all var(--transition-fast) !important;
}

.featured-card:hover {
  border-color: var(--border-hover) !important;
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl) !important;
}

.featured-thumb-wrap {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--bg-tertiary);
}

.featured-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);
}

.featured-card:hover .featured-thumb {
  transform: scale(1.04);
}

.featured-card-body {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.featured-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.75rem;
}

.project-tag {
  font-size: 0.72rem !important;
  padding: 0.2rem 0.5rem !important;
}

.featured-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.featured-desc {
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--text-muted);
  flex-grow: 1;
  margin-bottom: 1rem;
}

.featured-action {
  padding-top: 0.5rem;
}

.case-study-btn {
  padding: 0 !important;
  color: var(--accent-emerald) !important;
  font-weight: 600 !important;
  font-size: 0.85rem !important;
  text-decoration: none;
  gap: 0.4rem;
}

.case-study-btn:hover {
  text-decoration: underline;
}

.explore-all-box {
  display: flex;
  justify-content: center;
}

.explore-btn {
  padding: 0.75rem 2rem !important;
  border-radius: 10px !important;
  font-weight: 600 !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 0.5rem !important;
  text-decoration: none !important;
}

/* Experience Snapshot */
.home-exp-snapshot-section {
  padding: 4.5rem 0;
  border-top: 1px solid var(--border-color);
}

/* Mini Journey Waypoint Route Track */
.mini-journey-track {
  margin-bottom: 2rem;
  padding: 1.25rem 2rem;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  gap: 1rem;
}

.mini-waypoint-step {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
}

.step-marker {
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--bg-tertiary);
  border: 2px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all var(--transition-normal);
}

.is-current-active .step-marker {
  background: rgba(16, 185, 129, 0.15);
  border-color: #10b981;
  color: #10b981;
  box-shadow: 0 0 16px rgba(16, 185, 129, 0.35);
}

.marker-radar {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid #10b981;
  animation: marker-pulse 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.marker-icon {
  font-size: 1rem;
  color: var(--text-secondary);
}

.is-current-active .marker-icon {
  color: #10b981;
}

.step-meta {
  display: flex;
  flex-direction: column;
}

.step-code {
  font-family: var(--font-mono, monospace);
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--text-muted);
  letter-spacing: 0.05em;
}

.is-current-active .step-code {
  color: #10b981;
}

.step-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
}

.step-status {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.is-current-active .step-status {
  color: #10b981;
  font-weight: 600;
}

.step-path-line {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  color: var(--text-muted);
  opacity: 0.6;
}

.path-arrow {
  font-size: 1rem;
}

.active-beacon-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: #10b981;
  padding: 0.2rem 0.65rem;
  border-radius: 9999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.beacon-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 6px #10b981;
  animation: beacon-blink 1.5s ease-in-out infinite alternate;
}

@keyframes marker-pulse {
  0% {
    transform: scale(0.95);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.4);
    opacity: 0;
  }
}

@keyframes beacon-blink {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

.exp-snapshot-card {
  padding: 2rem;
  border-radius: 20px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
}

.exp-snapshot-inner {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

.exp-logo-wrap {
  width: 72px;
  height: 72px;
  border-radius: 14px;
  overflow: hidden;
  background: #ffffff;
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.exp-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.exp-snapshot-content {
  flex: 1;
}

.exp-meta-line {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.exp-badge {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--accent-emerald);
}

.exp-loc {
  font-size: 0.82rem;
  color: var(--text-muted);
}

.exp-company-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.exp-role-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
}

.exp-desc-line {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.learn-more-btn {
  padding: 0 !important;
  color: var(--accent-emerald) !important;
  font-weight: 600 !important;
  font-size: 0.9rem !important;
  text-decoration: none;
  gap: 0.4rem;
}

/* Quick Contact Section */
.home-contact-section {
  padding: 4.5rem 0 6rem;
  border-top: 1px solid var(--border-color);
}

.contact-card {
  padding: 3rem 2rem;
  border-radius: 24px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  text-align: center;
  max-width: 820px;
  margin: 0 auto;
}

.contact-lead {
  font-size: 1.05rem;
  color: var(--text-secondary);
  max-width: 580px;
  margin: 0.75rem auto 2rem;
  line-height: 1.65;
}

.contact-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.contact-action-btn {
  padding: 0.75rem 1.75rem !important;
  font-weight: 600 !important;
  border-radius: 10px !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 0.5rem !important;
  text-decoration: none !important;
}

.contact-social-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
}

.contact-social-icon-btn {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 1.1rem;
  transition: all var(--transition-fast);
  text-decoration: none;
}

.contact-social-icon-btn:hover {
  border-color: var(--accent-emerald);
  color: var(--accent-emerald);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px var(--accent-glow);
}

/* Responsive */
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

  .featured-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 680px) {
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

  .featured-grid {
    grid-template-columns: 1fr;
  }

  .mini-journey-track {
    flex-direction: column;
    align-items: stretch;
    padding: 1.25rem 1rem;
    gap: 1.25rem;
  }

  .step-path-line {
    display: none;
  }

  .exp-snapshot-inner {
    flex-direction: column;
  }

  .contact-actions {
    flex-direction: column;
  }

  .contact-action-btn {
    width: 100% !important;
    justify-content: center !important;
  }
}
</style>
