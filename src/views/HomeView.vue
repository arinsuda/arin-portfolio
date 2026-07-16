<template>
  <section class="hero-section textured-grid-primary">
    <!-- Spotlight glowing background indicator -->
    <div
      class="spotlight"
      :style="{ left: mouseX + 'px', top: mouseY + 'px' }"
    ></div>

    <div class="container hero-container">
      <div class="hero-content">
        <!-- Availability indicator -->
        <div
          class="greeting-badge"
          v-if="profile.availability && profile.availability.enabled"
        >
          <span class="pulse-dot"></span>
          {{
            locale === "th" ? profile.availability.th : profile.availability.en
          }}
        </div>

        <h1 class="hero-title">
          {{ t.hero.greeting }}
          <span class="text-gradient">{{ profile.name }}</span>
        </h1>

        <h2 class="hero-subtitle">
          I'm a <span class="typed-text">{{ displayText }}</span
          ><span class="cursor">|</span>
        </h2>

        <p class="hero-lead">
          {{ locale === "th" ? profile.bio.th : profile.bio.en }}
        </p>

        <!-- Profile Sub-Bio -->
        <p class="hero-subbio">
          {{ locale === "th" ? profile.subBio.th : profile.subBio.en }}
        </p>

        <!-- Action Buttons -->
        <div class="hero-actions">
          <a
            href="#projects"
            class="btn btn-primary"
            @click="scrollToSection($event, 'projects')"
          >
            {{ t.hero.viewProjects }}
            <span class="btn-arrow">
              <BaseIcon name="arrow-right" size="16" />
            </span>
          </a>

          <a
            href="#contact"
            class="btn btn-secondary"
            @click="scrollToSection($event, 'contact')"
          >
            {{ t.hero.talk }}
          </a>

          <div class="social-actions">
            <a
              :href="profile.socials?.github"
              target="_blank"
              rel="noopener noreferrer"
              class="social-btn"
              aria-label="GitHub"
              title="GitHub"
            >
              <BaseIcon name="github" size="20" />
            </a>

            <a
              :href="profile.socials?.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="social-btn"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <BaseIcon name="linkedin" size="20" />
            </a>
          </div>
        </div>

        <!-- Resume Actions -->
        <div class="resume-actions-group">
          <a
            :href="withBase('documents/Arin_Sudakijjathorn_Full_Stack_Developer_Resume.pdf')"
            target="_blank"
            rel="noopener noreferrer"
            class="resume-btn"
            :title="locale === 'th' ? 'ดูเรซูเม่ฉบับเต็ม' : 'View full resume'"
          >
            <BaseIcon name="file" size="16" class="resume-icon" />
            <span>{{ locale === "th" ? "ดูเรซูเม่" : "View Resume" }}</span>
          </a>

          <a
            :href="withBase('documents/Arin_Sudakijjathorn_Full_Stack_Developer_Resume.pdf')"
            download="Arin_Sudakijjathorn_Full_Stack_Developer_Resume.pdf"
            class="resume-btn"
            :title="
              locale === 'th'
                ? 'ดาวน์โหลดเรซูเม่ไฟล์ PDF'
                : 'Download resume PDF'
            "
          >
            <BaseIcon name="download" size="16" class="resume-icon" />
            <span>{{
              locale === "th" ? "ดาวน์โหลดเรซูเม่" : "Download Resume"
            }}</span>
          </a>
        </div>
      </div>

      <!-- Hero Avatar Frame -->
      <div class="hero-visual">
        <div class="glass-frame">
          <div class="avatar-wrapper">
            <img
              :src="profile.profileImages[0]?.src || profile.avatar"
              :alt="
                locale === 'th'
                  ? profile.profileImages[0]?.alt.th || profile.name
                  : profile.profileImages[0]?.alt.en || profile.name
              "
              class="avatar-img"
            />
          </div>
          <div class="visual-badge visual-badge-1">
            <BaseIcon
              name="zap"
              size="14"
              stroke-width="2.5"
              class="badge-icon"
            />
            <span>{{ t.hero.robustArchitectures }}</span>
          </div>
          <div class="visual-badge visual-badge-2">
            <BaseIcon
              name="shield"
              size="14"
              stroke-width="2.5"
              class="badge-icon"
            />
            <span>{{ t.hero.typeSafeApis }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted, computed, watch } from "vue"
  import BaseIcon from "../components/BaseIcon.vue"
  import { profile } from "../data/profile"
  import { useI18n } from "../i18n"
  import { withBase } from "../utils/assets"

  const { t, locale } = useI18n()

  // Mouse spotlight tracking
  const mouseX = ref(0)
  const mouseY = ref(0)

  const handleMouseMove = (e: MouseEvent) => {
    const rect = e.currentTarget
      ? (e.currentTarget as HTMLElement).getBoundingClientRect()
      : { left: 0, top: 0 }
    mouseX.value = e.clientX - rect.left
    mouseY.value = e.clientY - rect.top
  }

  // Text typing simulation
  const words = computed(() => {
    return locale.value === "th"
      ? ["นักพัฒนา Backend", "นักออกแบบฐานข้อมูล", "วิศวกร API"]
      : ["Backend Developer", "Database Architect", "API Engineer"]
  })

  const displayText = ref("")
  const currentWordIndex = ref(0)
  const isDeleting = ref(false)
  const typingSpeed = ref(100)
  let typingTimeout: ReturnType<typeof setTimeout> | null = null

  const typeText = () => {
    const currentWords = words.value
    const currentWord = currentWords[currentWordIndex.value] || ""
    const length = displayText.value.length

    if (!isDeleting.value) {
      // Add character
      displayText.value = currentWord.substring(0, length + 1)
      typingSpeed.value = 100

      if (displayText.value === currentWord) {
        // Pause at full word
        isDeleting.value = true
        typingSpeed.value = 2000
      }
    } else {
      // Remove character
      displayText.value = currentWord.substring(0, length - 1)
      typingSpeed.value = 50

      if (displayText.value === "") {
        isDeleting.value = false
        currentWordIndex.value =
          (currentWordIndex.value + 1) % currentWords.length
        typingSpeed.value = 500
      }
    }

    typingTimeout = setTimeout(typeText, typingSpeed.value)
  }

  const scrollToSection = (event: Event, id: string) => {
    const element = document.getElementById(id)
    if (element) {
      event.preventDefault()
      element.scrollIntoView({ behavior: "smooth" })
      history.pushState(null, "", `#${id}`)
    }
  }

  watch(locale, () => {
    if (typingTimeout) clearTimeout(typingTimeout)
    displayText.value = ""
    currentWordIndex.value = 0
    isDeleting.value = false
    typeText()
  })

  onMounted(() => {
    typeText()
    const heroSection = document.querySelector(".hero-section")
    if (heroSection) {
      heroSection.addEventListener(
        "mousemove",
        handleMouseMove as EventListener,
      )
    }
  })

  onUnmounted(() => {
    if (typingTimeout) clearTimeout(typingTimeout)
    const heroSection = document.querySelector(".hero-section")
    if (heroSection) {
      heroSection.removeEventListener(
        "mousemove",
        handleMouseMove as EventListener,
      )
    }
  })
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
    font-weight: 600;
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
    50% {
      opacity: 0;
    }
  }

  .hero-lead {
    font-size: 1.25rem;
    color: var(--text-secondary);
    margin-bottom: 1rem;
    max-width: 650px;
    line-height: 1.6;
  }

  .hero-subbio {
    font-size: 1rem;
    color: var(--text-muted);
    margin-bottom: 2.5rem;
    max-width: 650px;
    line-height: 1.6;
  }

  .hero-actions {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
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

  /* Social icon buttons (GitHub / LinkedIn) */
  .social-actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .social-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid var(--border-color);
    background: rgba(255, 255, 255, 0.03);
    color: var(--text-secondary);
    transition:
      color var(--transition-fast),
      border-color var(--transition-fast),
      transform var(--transition-fast);
  }

  .light-theme .social-btn {
    background: rgba(0, 0, 0, 0.02);
  }

  .social-btn:hover {
    color: var(--accent-cyan);
    border-color: var(--accent-cyan);
    transform: translateY(-2px);
  }

  /* Resume actions group styling */
  .resume-actions-group {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .resume-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-secondary);
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
    transition:
      color var(--transition-fast),
      transform var(--transition-fast);
  }

  .resume-btn:hover {
    color: var(--accent-cyan);
    transform: translateY(-1px);
  }

  .resume-icon {
    color: var(--text-muted);
    transition: color var(--transition-fast);
  }

  .resume-btn:hover .resume-icon {
    color: var(--accent-cyan);
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
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  .avatar-wrapper {
    width: 320px;
    height: 320px;
    border-radius: 20px;
    overflow: hidden;
    background: var(--bg-tertiary);
    border: 1px solid var(--border-color);
    aspect-ratio: 1/1;
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

  @media (max-width: 1200px) {
    .hero-title {
      font-size: 3.2rem;
    }
  }

  @media (max-width: 1024px) {
    .hero-container {
      gap: 2rem;
    }
    .hero-title {
      font-size: 2.8rem;
    }
    .hero-subtitle {
      font-size: 1.75rem;
    }
    .avatar-wrapper {
      width: 280px;
      height: 280px;
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

    .social-actions {
      justify-content: center;
    }

    .resume-actions-group {
      justify-content: center;
      width: 100%;
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
