<template>
  <section class="about-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t.nav.about }}</h2>
        <p class="section-subtitle">
          {{ locale === 'th' ? 'ข้อมูลเบื้องหลัง แนวคิดทางวิศวกรรมซอฟต์แวร์ และความสนใจหลักของผม' : 'Background, engineering philosophy, and core architectural focus areas.' }}
        </p>
      </div>

      <div class="about-layout">
        <!-- Left: Text Details & Core Interests -->
        <div class="about-content">
          <p class="about-p">
            {{ locale === 'th' ? thText.p1 : enText.p1 }}
          </p>
          <p class="about-p">
            {{ locale === 'th' ? thText.p2 : enText.p2 }}
          </p>

          <!-- Core Architecture & System Interests with PrimeVue Card -->
          <div class="interests-grid">
            <Card class="interest-card">
              <template #content>
                <div class="interest-inner">
                  <div class="interest-icon-box">
                    <i class="pi pi-server text-xl"></i>
                  </div>
                  <div class="interest-text">
                    <h4 class="interest-title">
                      {{ locale === 'th' ? 'เน้นระบบหลังบ้านและฐานข้อมูล' : 'Backend & System Focus' }}
                    </h4>
                    <p class="interest-desc">
                      {{ locale === 'th' ? 'ออกแบบโครงสร้างฐานข้อมูล (SQL/NoSQL) และพัฒนา RESTful APIs ที่มีประสิทธิภาพสูง' : 'Designing relational schemas, query optimization, and high-performance RESTful API services.' }}
                    </p>
                  </div>
                </div>
              </template>
            </Card>

            <Card class="interest-card">
              <template #content>
                <div class="interest-inner">
                  <div class="interest-icon-box">
                    <i class="pi pi-sitemap text-xl"></i>
                  </div>
                  <div class="interest-text">
                    <h4 class="interest-title">
                      {{ locale === 'th' ? 'ความเข้าใจในภาพรวมระบบ' : 'System-Wide Understanding' }}
                    </h4>
                    <p class="interest-desc">
                      {{ locale === 'th' ? 'เชื่อมต่อ API, ฐานข้อมูล, ความปลอดภัย, การจัดเก็บไฟล์ และ Deployment เข้าด้วยกัน' : 'Connecting APIs, relational schemas, storage systems, security, and VM network deployments.' }}
                    </p>
                  </div>
                </div>
              </template>
            </Card>
          </div>
        </div>

        <!-- Right: Profile Photo Gallery with PrimeVue Image Preview -->
        <div class="about-visual" v-if="profile.profileImages && profile.profileImages.length > 0">
          <div class="gallery-wrapper glass-card">
            <div 
              class="active-photo-container"
              @mouseenter="stopSlideshow"
              @mouseleave="startSlideshow"
            >
              <!-- PrimeVue Image with Preview Zoom -->
              <div class="image-preview-frame">
                <Image
                  :key="activeImage.id"
                  :src="activeImage.src"
                  :alt="locale === 'th' ? activeImage.alt.th : activeImage.alt.en"
                  preview
                  imageClass="main-preview-img"
                />
              </div>

              <!-- Caption -->
              <div class="photo-caption" v-if="activeImage.caption">
                <span>{{ locale === 'th' ? activeImage.caption.th : activeImage.caption.en }}</span>
              </div>

              <!-- Navigation Controls with PrimeVue Button -->
              <div class="gallery-controls" v-if="profile.profileImages.length > 1">
                <Button
                  severity="secondary"
                  rounded
                  size="small"
                  class="gallery-nav-btn prev-btn"
                  @click="prevImage"
                  :aria-label="locale === 'th' ? 'รูปก่อนหน้า' : 'Previous image'"
                >
                  <i class="pi pi-chevron-left"></i>
                </Button>
                <Button
                  severity="secondary"
                  rounded
                  size="small"
                  class="gallery-nav-btn next-btn"
                  @click="nextImage"
                  :aria-label="locale === 'th' ? 'รูปถัดไป' : 'Next image'"
                >
                  <i class="pi pi-chevron-right"></i>
                </Button>
              </div>
            </div>

            <!-- Thumbnail Navigation Strip -->
            <div class="thumbnails-strip" v-if="profile.profileImages.length > 1">
              <button 
                v-for="img in profile.profileImages" 
                :key="img.id"
                class="thumb-btn"
                :class="{ active: img.id === activeImage.id }"
                @click="setActiveImage(img)"
                :aria-label="locale === 'th' ? 'ดูรูป: ' + img.alt.th : 'View: ' + img.alt.en"
              >
                <img 
                  :src="img.src" 
                  :alt="locale === 'th' ? img.alt.th : img.alt.en" 
                  class="thumb-img"
                  loading="lazy"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Card from "primevue/card";
import Image from "primevue/image";
import Button from "primevue/button";
import { profile } from "../data/profile";
import { useI18n } from "../i18n";
import type { ProfileImage } from "../types";

const { t, locale } = useI18n();

const primaryImage = profile.profileImages.find(img => img.isPrimary) || profile.profileImages[0];
const activeImage = ref<ProfileImage>(primaryImage);

let intervalId: any = null;

const startSlideshow = () => {
  if (profile.profileImages.length <= 1) return;
  stopSlideshow();
  intervalId = setInterval(() => {
    nextImage();
  }, 4500);
};

const stopSlideshow = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

const nextImage = () => {
  const currentIndex = profile.profileImages.findIndex(img => img.id === activeImage.value.id);
  const nextIndex = (currentIndex + 1) % profile.profileImages.length;
  activeImage.value = profile.profileImages[nextIndex];
};

const prevImage = () => {
  const currentIndex = profile.profileImages.findIndex(img => img.id === activeImage.value.id);
  const prevIndex = (currentIndex - 1 + profile.profileImages.length) % profile.profileImages.length;
  activeImage.value = profile.profileImages[prevIndex];
};

const setActiveImage = (img: ProfileImage) => {
  activeImage.value = img;
  startSlideshow();
};

onMounted(() => {
  startSlideshow();
});

onUnmounted(() => {
  stopSlideshow();
});

const enText = {
  p1: "I am a Backend-Focused Full-Stack Developer and Information Technology graduate from King Mongkut’s University of Technology Thonburi. My experience spans backend development, database design, infrastructure, and frontend implementation through academic projects, a personal platform, and an enterprise software internship.",
  p2: "I prefer to understand how an entire system works rather than treating features as isolated pieces. I focus on API design, relational data modeling, real-time communication, object storage, authentication, and deployment infrastructure. I approach new technologies carefully, question design decisions, and aim to build software that is not only functional but also maintainable and understandable."
};

const thText = {
  p1: "ผมเป็นนักพัฒนาซอฟต์แวร์สาย Full-Stack ที่ให้ความสำคัญกับ Backend และสำเร็จการศึกษาด้านเทคโนโลยีสารสนเทศจาก มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี ประสบการณ์ของผมครอบคลุม การพัฒนา Backend การออกแบบฐานข้อมูล โครงสร้างพื้นฐาน และการพัฒนา Frontend ผ่านโปรเจกต์การศึกษา โปรเจกต์ส่วนตัว และการฝึกงานกับระบบซอฟต์แวร์ระดับองค์กร",
  p2: "ผมให้ความสำคัญกับการทำความเข้าใจภาพรวมของระบบ มากกว่าการมองแต่ละฟีเจอร์แยกออกจากกัน โดยสนใจการออกแบบ API การจัดโครงสร้างฐานข้อมูลเชิงสัมพันธ์ ระบบ Real-time การจัดเก็บไฟล์ Authentication และโครงสร้างพื้นฐานสำหรับ Deployment ผมมักตรวจสอบเหตุผลเบื้องหลังการออกแบบ ศึกษาเทคโนโลยีใหม่อย่างรอบคอบ และพยายามสร้างซอฟต์แวร์ที่ไม่เพียงใช้งานได้ แต่ยังดูแลรักษาและทำความเข้าใจได้ในระยะยาว"
};
</script>

<style scoped>
.about-section {
  position: relative;
}

.about-layout {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: start;
  gap: 4rem;
}

.about-content {
  text-align: left;
}

.about-p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

/* Interest Cards */
.interests-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-top: 2rem;
}

.interest-card {
  border-radius: 14px !important;
  background: var(--bg-secondary) !important;
  border: 1px solid var(--border-color) !important;
  transition: all var(--transition-fast) !important;
}

.interest-card:hover {
  border-color: var(--border-hover) !important;
  transform: translateY(-2px);
}

.interest-inner {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
}

.interest-icon-box {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-emerald);
  flex-shrink: 0;
}

.interest-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.35rem;
}

.interest-desc {
  font-size: 0.92rem;
  line-height: 1.55;
  color: var(--text-muted);
}

/* Gallery Box */
.about-visual {
  display: flex;
  justify-content: center;
}

.gallery-wrapper {
  padding: 1.25rem;
  width: 100%;
  max-width: 420px;
  border-radius: 20px;
}

.active-photo-container {
  position: relative;
  width: 100%;
  border-radius: 14px;
  overflow: hidden;
  background-color: var(--bg-tertiary);
}

.image-preview-frame :deep(.main-preview-img) {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  display: block;
  border-radius: 12px;
  cursor: pointer;
}

.photo-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.75rem 1rem;
  background: rgba(9, 9, 11, 0.75);
  backdrop-filter: blur(8px);
  color: #ffffff;
  font-size: 0.8rem;
  text-align: center;
}

.gallery-controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  pointer-events: none;
}

.gallery-nav-btn {
  pointer-events: auto;
  width: 34px !important;
  height: 34px !important;
  background: rgba(9, 9, 11, 0.6) !important;
  color: #ffffff !important;
  border: 1px solid rgba(255, 255, 255, 0.15) !important;
  backdrop-filter: blur(6px) !important;
}

.gallery-nav-btn:hover {
  background: rgba(9, 9, 11, 0.9) !important;
}

/* Thumbnail Strip */
.thumbnails-strip {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.85rem;
  justify-content: center;
  overflow-x: auto;
  padding-bottom: 0.25rem;
}

.thumb-btn {
  width: 52px;
  height: 52px;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid var(--border-color);
  background: var(--bg-tertiary);
  cursor: pointer;
  padding: 0;
  opacity: 0.6;
  transition: all var(--transition-fast);
}

.thumb-btn:hover {
  opacity: 0.9;
}

.thumb-btn.active {
  opacity: 1;
  border-color: var(--accent-emerald);
  transform: scale(1.05);
}

.thumb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 992px) {
  .about-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about-visual {
    order: -1;
  }
}
</style>
