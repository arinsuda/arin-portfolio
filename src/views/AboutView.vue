<template>
  <div class="about-page">
    <div class="container about-container">
      <!-- Top Grid: Story (Left) + Sticky Photo & Actions Sidebar (Right) -->
      <section class="about-hero-grid">
        <!-- Left: Bio & Story Details -->
        <div class="about-story">
          <h1 class="about-heading">
            <span class="headline-prefix">{{ t.about.headlinePrefix }}</span>{{ ' ' }}<span class="text-gradient">{{ profile.name }}</span>{{ locale === 'th' ? ' ' : '. ' }}<span class="headline-suffix">{{ t.about.headlineSuffix }}</span>
          </h1>

          <!-- Story Narrative List with Clean PrimeIcons -->
          <div class="about-bio-body">
            <div
              v-for="item in aboutStory"
              :key="item.id"
              class="story-item"
            >
              <div class="story-icon-box">
                <i :class="item.icon" class="story-icon"></i>
              </div>
              <p class="story-text">
                {{ locale === 'th' ? item.text.th : item.text.en }}
              </p>
            </div>
          </div>

          <!-- Architecture & Systems Focus Cards -->
          <div class="interests-grid">
            <div
              v-for="focus in architectureFocusList"
              :key="focus.id"
              class="interest-card"
            >
              <div class="interest-icon-box">
                <i :class="focus.icon" class="text-xl"></i>
              </div>
              <div class="interest-text">
                <h3 class="interest-title">
                  {{ locale === 'th' ? focus.title.th : focus.title.en }}
                </h3>
                <p class="interest-desc">
                  {{ locale === 'th' ? focus.desc.th : focus.desc.en }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Sticky Profile Sidebar -->
        <aside class="about-sidebar">
          <div class="sticky-sidebar-content">
            <!-- Profile 3D Cover Flow Carousel -->
            <CoverflowCarousel :images="profile.profileImages" />

            <!-- Unified Résumé Split Button -->
            <div class="sidebar-resume-wrapper">
              <ResumeButton />
            </div>

            <!-- Direct Email Link -->
            <a
              :href="'mailto:' + profile.email"
              class="sidebar-email-link"
              :title="'Email ' + profile.email"
            >
              <i class="pi pi-envelope email-icon"></i>
              <span>{{ profile.email }}</span>
            </a>

            <!-- Social Media Quick Links -->
            <div class="sidebar-socials-row">
              <component
                v-for="s in sidebarSocials"
                :key="s.id"
                :is="s.url.startsWith('http') ? 'a' : 'router-link'"
                :href="s.url.startsWith('http') ? s.url : undefined"
                :to="!s.url.startsWith('http') ? s.url : undefined"
                :target="s.url.startsWith('http') ? '_blank' : undefined"
                :rel="s.url.startsWith('http') ? 'noopener noreferrer' : undefined"
                class="sidebar-social-btn"
                :aria-label="s.title"
                :title="s.title"
              >
                <i :class="s.icon"></i>
              </component>
            </div>
          </div>
        </aside>
      </section>

      <!-- Career Journey Route Section (Waypoints Architecture) -->
      <section id="journey" class="about-journey-section">
        <div class="section-header">
          <h2 class="section-title">{{ t.journey.title }}</h2>
          <p class="section-subtitle">{{ t.journey.subtitle }}</p>
        </div>

        <!-- Route Status Command Bar -->
        <div class="route-status-bar glass-card">
          <div class="status-left">
            <div class="route-icon-pulse">
              <span class="pulse-ring"></span>
              <i class="pi pi-compass text-base text-emerald"></i>
            </div>
            <div class="status-info">
              <span class="status-kicker">{{ t.journey.routeOverview }}</span>
              <div class="status-stops">
                <span
                  v-for="(wp, idx) in journeyWaypoints"
                  :key="wp.id"
                  class="stop-badge"
                  :class="{ 'stop-active': wp.status === 'active' }"
                >
                  <span class="stop-code">{{ wp.code }}</span>
                  <span class="stop-name">{{ wp.id === 'kmutt' ? 'KMUTT' : (wp.id === 'stream-it' ? 'Stream I.T.' : 'LPN Plate Mill') }}</span>
                  <i v-if="idx < journeyWaypoints.length - 1" class="pi pi-arrow-right stop-sep"></i>
                </span>
              </div>
            </div>
          </div>

          <div class="status-right">
            <div class="current-station-pill">
              <span class="beacon-pulse"></span>
              <span class="current-label">{{ t.journey.destinationStation }}:</span>
              <strong class="current-name">LPN Plate Mill</strong>
            </div>
          </div>
        </div>

        <!-- Vertical Transit Waypoints Corridor -->
        <div class="journey-corridor">
          <div
            v-for="(wp, index) in journeyWaypoints"
            :key="wp.id"
            class="waypoint-stop-item"
            :class="{
              'is-active-destination': wp.status === 'active',
              'is-academic': wp.category === 'academic',
              'is-internship': wp.category === 'internship',
              'is-professional': wp.category === 'professional'
            }"
          >
            <!-- Transit Track Column (Node Marker + Corridor Line) -->
            <div class="transit-track-col">
              <div class="waypoint-node-badge" :title="wp.code">
                <span v-if="wp.status === 'active'" class="node-radar-wave"></span>
                <span class="node-code-text">{{ wp.code }}</span>
                <i
                  :class="wp.category === 'academic' ? 'pi pi-graduation-cap' : (wp.category === 'internship' ? 'pi pi-briefcase' : 'pi pi-building')"
                  class="node-type-icon"
                ></i>
              </div>
              <div v-if="index < journeyWaypoints.length - 1" class="corridor-connector-line">
                <div class="corridor-line-pulse"></div>
                <div class="corridor-arrow-marker">
                  <i class="pi pi-angle-down text-xs"></i>
                </div>
              </div>
            </div>

            <!-- Waypoint Details Card -->
            <div class="waypoint-card glass-card">
              <!-- Waypoint Top Header -->
              <div class="waypoint-card-header">
                <a
                  v-if="wp.organizationUrl"
                  :href="wp.organizationUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="waypoint-logo-box"
                  :title="wp.organization"
                >
                  <img
                    v-if="wp.logo"
                    :src="wp.logo"
                    :alt="wp.organization"
                    class="waypoint-logo-img"
                  />
                  <i
                    v-else
                    :class="wp.category === 'academic' ? 'pi pi-graduation-cap' : 'pi pi-building'"
                    class="text-2xl text-emerald"
                  ></i>
                </a>
                <div v-else class="waypoint-logo-box">
                  <img
                    v-if="wp.logo"
                    :src="wp.logo"
                    :alt="wp.organization"
                    class="waypoint-logo-img"
                  />
                  <i
                    v-else
                    :class="wp.category === 'academic' ? 'pi pi-graduation-cap' : 'pi pi-building'"
                    class="text-2xl text-emerald"
                  ></i>
                </div>

                <div class="waypoint-header-info">
                  <div class="waypoint-meta-badges">
                    <span
                      class="waypoint-status-pill"
                      :class="wp.status === 'active' ? 'status-active-pill' : 'status-completed-pill'"
                    >
                      <span v-if="wp.status === 'active'" class="beacon-dot"></span>
                      <i v-else class="pi pi-check text-xs"></i>
                      <span>{{ wp.status === 'active' ? t.journey.statusActive : t.journey.statusCompleted }}</span>
                    </span>

                    <span class="waypoint-category-tag">
                      <i :class="wp.category === 'academic' ? 'pi pi-book' : (wp.category === 'internship' ? 'pi pi-code' : 'pi pi-desktop')" class="text-xs mr-1"></i>
                      <span>{{ wp.category === 'academic' ? t.journey.typeAcademic : (wp.category === 'internship' ? t.journey.typeInternship : t.journey.typeProfessional) }}</span>
                    </span>

                    <span class="waypoint-period-badge">
                      <i class="pi pi-calendar text-xs mr-1"></i>
                      <span>{{ locale === 'th' ? wp.period.th : wp.period.en }}</span>
                    </span>

                    <span class="waypoint-location-badge">
                      <i class="pi pi-map-marker text-xs mr-1"></i>
                      <span>{{ locale === 'th' ? wp.location.th : wp.location.en }}</span>
                    </span>
                  </div>

                  <div class="waypoint-title-group">
                    <h3 class="waypoint-org-name">
                      <a
                        v-if="wp.organizationUrl"
                        :href="wp.organizationUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="org-external-link"
                      >
                        <span>{{ wp.organization }}</span>
                        <i class="pi pi-arrow-up-right text-xs link-icon"></i>
                      </a>
                      <span v-else>{{ wp.organization }}</span>
                    </h3>
                    <h4 class="waypoint-role-name">
                      {{ locale === 'th' ? wp.role.th : wp.role.en }}
                    </h4>
                  </div>
                </div>
              </div>

              <!-- Confidential Notice if present -->
              <div v-if="wp.isConfidential" class="confidential-badge">
                <i class="pi pi-lock text-sm"></i>
                <span>{{ t.journey.confidentialNotice }} {{ locale === 'th' ? wp.confidentialityNote?.th : wp.confidentialityNote?.en }}</span>
              </div>

              <!-- Narrative Description -->
              <p class="waypoint-description">
                {{ locale === 'th' ? wp.description.th : wp.description.en }}
              </p>

              <!-- Co-Curricular for Academic -->
              <div v-if="wp.coCurricular && wp.coCurricular.length" class="waypoint-co-curricular">
                <h5 class="co-curricular-heading">
                  <i class="pi pi-star text-xs"></i>
                  <span>{{ t.journey.coCurricularHeading }}</span>
                </h5>
                <ul class="co-curricular-list">
                  <li v-for="(act, aIdx) in wp.coCurricular" :key="aIdx">
                    <i class="pi pi-check-circle text-xs text-emerald"></i>
                    <span>{{ locale === 'th' ? act.th : act.en }}</span>
                  </li>
                </ul>
              </div>

              <!-- Highlights for Work Experience -->
              <div v-if="wp.highlights && wp.highlights.length" class="waypoint-highlights">
                <ul class="highlights-list">
                  <li v-for="(h, hIdx) in wp.highlights" :key="hIdx" class="highlight-item">
                    <i class="pi pi-check text-xs highlight-check-icon"></i>
                    <span>{{ locale === 'th' ? h.text.th : h.text.en }}</span>
                  </li>
                </ul>
              </div>

              <!-- Technologies Row -->
              <div v-if="wp.technologies && wp.technologies.length" class="waypoint-tech-stack">
                <Tag
                  v-for="tech in wp.technologies"
                  :key="tech"
                  :value="tech"
                  severity="secondary"
                  class="tech-tag"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Bottom: Usage / Tech Stack Arsenal (With Sleek PrimeIcons, ZERO Emojis) -->
      <section class="usage-section">
        <div class="section-header">
          <h2 class="section-title">{{ t.about.usageTitle }}</h2>
          <p class="section-subtitle">{{ t.about.usageSubtitle }}</p>
        </div>

        <div class="usage-grid">
          <div
            v-for="category in usageCategories"
            :key="category.id"
            class="usage-card"
          >
            <div class="usage-category-header">
              <div class="usage-icon-box">
                <i :class="category.icon" class="usage-cat-icon"></i>
              </div>
              <h3 class="category-title">
                {{ locale === 'th' ? category.title.th : category.title.en }}
              </h3>
            </div>

            <ul class="usage-list">
              <li
                v-for="(item, iIdx) in category.items"
                :key="iIdx"
              >
                <span class="usage-label">
                  {{ locale === 'th' ? item.label.th : item.label.en }}:
                </span>
                <span class="usage-val">{{ item.val }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Tag from "primevue/tag";
import ResumeButton from "../components/ResumeButton.vue";
import CoverflowCarousel from "../components/CoverflowCarousel.vue";
import { profile } from "../data/profile";
import { aboutStory, architectureFocusList, usageCategories } from "../data/about";
import { journeyWaypoints } from "../data/journey";
import { useI18n } from "../i18n";
import type { SocialItem } from "../types";

const { t, locale } = useI18n();

const sidebarSocials = computed<SocialItem[]>(() => {
  const items = [
    { id: "github", url: profile.socials.github, icon: "pi pi-github", title: t.value.contact.githubProfile },
    { id: "linkedin", url: profile.socials.linkedin, icon: "pi pi-linkedin", title: t.value.contact.linkedinProfile },
    { id: "instagram", url: profile.socials.instagram, icon: "pi pi-instagram", title: t.value.contact.instagramProfile },
    { id: "twitter", url: profile.socials.twitter, icon: "pi pi-twitter", title: t.value.contact.twitterProfile },
    { id: "facebook", url: profile.socials.facebook, icon: "pi pi-facebook", title: t.value.contact.facebookProfile },
  ];
  return items.filter((item): item is SocialItem => typeof item.url === "string" && item.url.length > 0);
});
</script>

<style scoped>
.about-page {
  padding-top: calc(76px + 2.5rem);
  padding-bottom: 6rem;
  min-height: 100vh;
}

.about-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Hero Grid */
.about-hero-grid {
  display: grid;
  grid-template-columns: 1.25fr 380px;
  gap: 4rem;
  align-items: start;
  margin-bottom: 5rem;
}

.about-story {
  display: flex;
  flex-direction: column;
}

.about-heading {
  font-size: 2.65rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  margin-bottom: 2rem;
}

.about-bio-body {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.story-item {
  display: flex;
  align-items: flex-start;
  gap: 1.15rem;
}

.story-icon-box {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-emerald);
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.story-icon {
  font-size: 1rem;
}

.story-text {
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--text-secondary);
}

/* Highlight Cards */
.interests-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

.interest-card {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.25rem 1.5rem;
  border-radius: 1rem;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  backdrop-filter: blur(8px);
  transition: all 0.25s ease;
}

.interest-card:hover {
  border-color: var(--accent-emerald);
  transform: translateY(-2px);
}

.interest-icon-box {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.25);
  color: var(--accent-emerald);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.interest-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.35rem;
}

.interest-desc {
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--text-muted);
}

/* Sticky Sidebar */
.about-sidebar {
  display: flex;
  flex-direction: column;
}

.sticky-sidebar-content {
  position: sticky;
  top: 6.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.sidebar-resume-wrapper {
  width: 100%;
}

.sidebar-email-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
  padding: 0.25rem 0;
}

.sidebar-email-link:hover {
  color: var(--accent-emerald);
}

.email-icon {
  font-size: 1.1rem;
}

.sidebar-socials-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  width: 100%;
}

.sidebar-social-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 0.95rem;
  transition: all var(--transition-fast);
  text-decoration: none;
}

.sidebar-social-btn:hover {
  border-color: var(--accent-emerald);
  color: var(--accent-emerald);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--accent-glow);
}

/* Career Journey Route Section */
.about-journey-section {
  padding: 4.5rem 0;
  border-top: 1px solid var(--border-color);
}

/* Route Status Command Bar */
.route-status-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.75rem;
  border-radius: 16px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1.25rem;
}

.status-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.route-icon-pulse {
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.status-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  text-align: left;
}

.status-kicker {
  font-size: 0.76rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  font-family: var(--font-mono);
}

.status-stops {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.stop-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.stop-badge.stop-active {
  color: var(--accent-emerald);
  font-weight: 700;
}

.stop-code {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  background: var(--bg-tertiary);
  padding: 0.1rem 0.4rem;
  border-radius: 6px;
  border: 1px solid var(--border-color);
}

.stop-sep {
  font-size: 0.7rem;
  color: var(--text-muted);
  margin-left: 0.25rem;
}

.current-station-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid var(--accent-emerald);
  font-size: 0.86rem;
}

.beacon-pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--accent-emerald);
  box-shadow: 0 0 10px var(--accent-glow);
  animation: ping 1.8s infinite;
}

.current-label {
  color: var(--text-muted);
  font-size: 0.82rem;
}

.current-name {
  color: var(--accent-emerald);
  font-weight: 700;
}

/* Journey Corridor & Stops */
.journey-corridor {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
}

.waypoint-stop-item {
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 1.75rem;
  align-items: stretch;
  position: relative;
}

/* Transit Track Column */
.transit-track-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.waypoint-node-badge {
  position: relative;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: var(--bg-secondary);
  border: 2px solid var(--border-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;
  z-index: 2;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-fast);
}

.is-active-destination .waypoint-node-badge {
  border-color: var(--accent-emerald);
  background: rgba(16, 185, 129, 0.1);
  box-shadow: 0 0 20px var(--accent-glow);
}

.node-radar-wave {
  position: absolute;
  inset: -4px;
  border-radius: 18px;
  border: 2px solid var(--accent-emerald);
  opacity: 0.75;
  animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
  pointer-events: none;
}

.node-code-text {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  color: var(--text-muted);
}

.is-active-destination .node-code-text {
  color: var(--accent-emerald);
}

.node-type-icon {
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.is-active-destination .node-type-icon {
  color: var(--accent-emerald);
}

.corridor-connector-line {
  flex: 1;
  width: 2px;
  min-height: 80px;
  background: linear-gradient(to bottom, var(--border-color) 0%, var(--accent-emerald) 50%, var(--border-color) 100%);
  position: relative;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.corridor-arrow-marker {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  box-shadow: var(--shadow-sm);
}

/* Waypoint Details Card */
.waypoint-card {
  padding: 2.25rem;
  border-radius: 20px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  text-align: left;
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-sm);
}

.waypoint-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-3px);
  box-shadow: var(--shadow-xl);
}

.is-active-destination .waypoint-card {
  border-color: rgba(16, 185, 129, 0.4);
  box-shadow: 0 10px 30px -10px var(--accent-glow);
}

.is-active-destination .waypoint-card:hover {
  border-color: var(--accent-emerald);
}

/* Waypoint Card Header */
.waypoint-card-header {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1.25rem;
}

.waypoint-logo-box {
  width: 68px;
  height: 68px;
  border-radius: 14px;
  overflow: hidden;
  background: #ffffff;
  padding: 0.45rem;
  border: 1px solid var(--border-color);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-fast);
}

.waypoint-logo-box:hover {
  border-color: var(--accent-emerald);
  transform: scale(1.05);
}

.waypoint-logo-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.waypoint-header-info {
  flex: 1;
}

.waypoint-meta-badges {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.6rem;
}

.waypoint-status-pill {
  font-size: 0.74rem;
  font-weight: 600;
  padding: 0.2rem 0.65rem;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.status-completed-pill {
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
}

.status-active-pill {
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid var(--accent-emerald);
  color: var(--accent-emerald);
  font-weight: 700;
  box-shadow: 0 0 10px var(--accent-glow);
}

.beacon-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--accent-emerald);
  animation: ping 1.8s infinite;
}

.waypoint-category-tag {
  font-size: 0.74rem;
  font-family: var(--font-mono);
  color: var(--text-muted);
  background: var(--bg-tertiary);
  padding: 0.2rem 0.55rem;
  border-radius: 6px;
  border: 1px solid var(--border-color);
  display: inline-flex;
  align-items: center;
}

.waypoint-period-badge,
.waypoint-location-badge {
  font-size: 0.78rem;
  color: var(--text-muted);
  display: inline-flex;
  align-items: center;
}

.waypoint-title-group {
  margin-top: 0.25rem;
}

.waypoint-org-name {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.org-external-link {
  color: var(--text-primary);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: color var(--transition-fast);
}

.org-external-link:hover {
  color: var(--accent-emerald);
}

.link-icon {
  font-size: 0.75rem;
  opacity: 0.7;
}

.waypoint-role-name {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-secondary);
}

/* Confidentiality Notice */
.confidential-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  background: rgba(234, 179, 8, 0.1);
  border: 1px solid rgba(234, 179, 8, 0.3);
  color: #eab308;
  font-size: 0.82rem;
  margin-bottom: 1rem;
}

.waypoint-description {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--text-secondary);
  margin-bottom: 1.25rem;
}

/* Co-Curricular for Academic Station */
.waypoint-co-curricular {
  border-top: 1px solid var(--border-color);
  padding-top: 1.25rem;
  margin-bottom: 1.25rem;
}

.co-curricular-heading {
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.co-curricular-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem;
}

.co-curricular-list li {
  font-size: 0.88rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Highlights for Internship & Professional */
.waypoint-highlights {
  margin-bottom: 1.25rem;
}

.highlights-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.highlight-item {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--text-muted);
}

.highlight-check-icon {
  color: var(--accent-emerald);
  margin-top: 0.35rem;
  flex-shrink: 0;
}

/* Tech Stack Tags */
.waypoint-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.tech-tag {
  font-size: 0.75rem !important;
}

@media (max-width: 860px) {
  .waypoint-stop-item {
    grid-template-columns: 56px 1fr;
    gap: 1.25rem;
  }

  .waypoint-node-badge {
    width: 46px;
    height: 46px;
  }

  .waypoint-card-header {
    flex-direction: column;
    gap: 1rem;
  }

  .co-curricular-list {
    grid-template-columns: 1fr;
  }

  .route-status-bar {
    flex-direction: column;
    align-items: flex-start;
  }
}

/* Usage Section */
.usage-section {
  padding: 4.5rem 0 2rem;
  border-top: 1px solid var(--border-color);
}

.usage-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.75rem;
  margin-top: 2rem;
}

.usage-card {
  background-color: var(--bg-secondary);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  padding: 1.75rem;
  transition: all 0.25s ease;
}

.usage-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-2px);
}

.usage-category-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border-color);
}

.usage-icon-box {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-emerald);
}

.usage-cat-icon {
  font-size: 1.15rem;
}

.category-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.01em;
}

.usage-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.usage-list li {
  font-size: 0.92rem;
  line-height: 1.6;
}

.usage-label {
  font-weight: 700;
  color: var(--text-primary);
  margin-right: 0.5rem;
  display: inline-block;
}

.usage-val {
  color: var(--text-muted);
}

/* Responsive */
@media (max-width: 960px) {
  .about-hero-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about-sidebar {
    order: -1;
    max-width: 400px;
    margin: 0 auto;
    width: 100%;
  }

  .sticky-sidebar-content {
    position: static;
  }

  .usage-grid {
    grid-template-columns: 1fr;
  }

  .activities-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .about-heading {
    font-size: 2rem;
  }

  .exp-card-header {
    flex-direction: column;
  }

  .edu-card-top {
    flex-direction: column;
  }
}
</style>
