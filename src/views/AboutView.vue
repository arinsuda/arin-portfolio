<template>
  <section class="about-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t.nav.about }}</h2>
      </div>

      <div class="about-layout">
        <!-- Left: Text Details -->
        <div class="about-content">
          <p class="about-p">
            {{ locale === 'th' ? thText.p1 : enText.p1 }}
          </p>
          <p class="about-p">
            {{ locale === 'th' ? thText.p2 : enText.p2 }}
          </p>

          <!-- Core Interests / Directions -->
          <div class="interests-grid">
            <div class="interest-item glass-card">
              <BaseIcon name="server" size="20" stroke-width="2" class="interest-icon" />
              <div class="interest-text">
                <h4 class="interest-title">{{ locale === 'th' ? 'เน้นระบบหลังบ้านและฐานข้อมูล' : 'Backend & System Focus' }}</h4>
                <p class="interest-desc">{{ locale === 'th' ? 'ออกแบบฐานข้อมูล (SQL/NoSQL) และเขียน API ประสิทธิภาพสูง' : 'Designing schemas, optimizing queries, and building scalable API services.' }}</p>
              </div>
            </div>
            <div class="interest-item glass-card">
              <BaseIcon name="layers" size="20" stroke-width="2" class="interest-icon" />
              <div class="interest-text">
                <h4 class="interest-title">{{ locale === 'th' ? 'ความเข้าใจในภาพรวมระบบ' : 'System-Wide Understanding' }}</h4>
                <p class="interest-desc">{{ locale === 'th' ? 'เชื่อต่อ Backend, ฐานข้อมูล, ระบบความปลอดภัย และ Infrastructure เข้าด้วยกัน' : 'Connecting APIs, relational schemas, storage systems, and VM network deployments.' }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Profile Photo Gallery -->
        <div class="about-visual" v-if="profile.profileImages && profile.profileImages.length > 0">
          <div class="glass-frame">
            <!-- Active Image Display -->
            <div class="active-photo-wrapper">
              <img 
                :src="activeImage.src" 
                :alt="locale === 'th' ? activeImage.alt.th : activeImage.alt.en" 
                class="active-photo-img"
              />
              <div class="photo-caption" v-if="activeImage.caption">
                <span class="caption-text">{{ locale === 'th' ? activeImage.caption.th : activeImage.caption.en }}</span>
              </div>
            </div>

            <!-- Thumbnail List (if > 1 image exists) -->
            <div class="thumbnails-container" v-if="profile.profileImages.length > 1">
              <button 
                v-for="img in profile.profileImages" 
                :key="img.id"
                class="thumbnail-btn"
                :class="{ active: img.id === activeImage.id }"
                @click="setActiveImage(img)"
                :aria-label="locale === 'th' ? 'ดูรูปภาพ: ' + img.alt.th : 'View image: ' + img.alt.en"
              >
                <img 
                  :src="img.src" 
                  :alt="locale === 'th' ? img.alt.th : img.alt.en" 
                  class="thumbnail-img"
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
import { ref } from "vue";
import BaseIcon from "../components/BaseIcon.vue";
import { profile } from "../data/profile";
import { useI18n } from "../i18n";
import type { ProfileImage } from "../types";

const { t, locale } = useI18n();

// Select primary image by default
const primaryImage = profile.profileImages.find(img => img.isPrimary) || profile.profileImages[0];
const activeImage = ref<ProfileImage>(primaryImage);

const setActiveImage = (img: ProfileImage) => {
  activeImage.value = img;
};

// Paragraph drafts
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
  padding: 6rem 0;
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
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.interests-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2.5rem;
}

.interest-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
}

.interest-icon {
  color: var(--accent-cyan);
  margin-top: 0.2rem;
}

.interest-text {
  text-align: left;
}

.interest-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.4rem;
}

.interest-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Photo Gallery Frame Styles */
.about-visual {
  display: flex;
  justify-content: center;
}

.glass-frame {
  position: relative;
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 24px;
  box-shadow: var(--shadow-lg);
  width: 100%;
  max-width: 380px;
}

.active-photo-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 4/5;
  border-radius: 16px;
  overflow: hidden;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
}

.active-photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity var(--transition-normal);
}

.photo-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.75rem 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
  color: #ffffff;
  font-size: 0.85rem;
  text-align: center;
}

.thumbnails-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.thumbnail-btn {
  width: 50px;
  height: 62.5px; /* keep aspect ratio 4:5 */
  border-radius: 6px;
  overflow: hidden;
  padding: 0;
  border: 2px solid transparent;
  cursor: pointer;
  background: var(--bg-tertiary);
  transition: border-color var(--transition-fast), transform var(--transition-fast);
}

.thumbnail-btn:hover {
  transform: translateY(-2px);
}

.thumbnail-btn.active {
  border-color: var(--accent-cyan);
  box-shadow: 0 0 8px rgba(6, 182, 212, 0.5);
}

.thumbnail-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 1024px) {
  .about-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .about-visual {
    order: -1; /* Place image on top on smaller screens */
  }

  .glass-frame {
    max-width: 320px;
  }
}
</style>
