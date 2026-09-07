<template>
  <div
    class="coverflow-wrapper"
    tabindex="0"
    role="region"
    :aria-label="t.about.title"
    @keydown.left.prevent="prev"
    @keydown.right.prevent="next"
    @keydown.esc="closeLightbox"
  >
    <!-- Top Bar: Counter & Quick Controls -->
    <div class="coverflow-header">
      <div class="counter-badge">
        <i class="pi pi-images badge-icon"></i>
        <span>{{ currentIndex + 1 }} / {{ images.length }}</span>
      </div>
      <div class="swipe-hint" v-if="images.length > 1">
        <i class="pi pi-arrows-h hint-icon"></i>
      </div>
    </div>

    <!-- 3D Stage Container -->
    <div
      class="coverflow-stage"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      @mousedown="onMouseDown"
      @mousemove="onMouseMove"
      @mouseup="onMouseUp"
      @mouseleave="onMouseLeave"
    >
      <div class="coverflow-track">
        <div
          v-for="(img, idx) in images"
          :key="img.id"
          class="coverflow-card"
          :class="{
            'is-active': idx === currentIndex,
            'is-prev': idx < currentIndex,
            'is-next': idx > currentIndex,
            'is-hidden': Math.abs(idx - currentIndex) > 2
          }"
          :style="getSlideStyle(idx)"
          @click="onCardClick(idx)"
        >
          <div class="card-inner">
            <img
              :src="img.src"
              :alt="locale === 'th' ? img.alt.th : img.alt.en"
              class="card-image"
              loading="lazy"
              draggable="false"
            />
            <!-- Subtle lighting vignette -->
            <div class="card-lighting"></div>

            <!-- Active Card Actions: Zoom / Lightbox -->
            <button
              v-if="idx === currentIndex"
              type="button"
              class="card-action-btn zoom-btn"
              :title="t.about.photoZoom"
              :aria-label="t.about.photoZoom"
              @click.stop="openLightbox(img)"
            >
              <i class="pi pi-search-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Controls: Prev / Dots / Next -->
    <div class="coverflow-controls" v-if="images.length > 1">
      <button
        type="button"
        class="nav-arrow-btn"
        :disabled="currentIndex === 0"
        :aria-label="t.about.photoCarouselPrev"
        :title="t.about.photoCarouselPrev"
        @click="prev"
      >
        <i class="pi pi-chevron-left"></i>
      </button>

      <!-- Dot Indicators -->
      <div class="dots-track" role="tablist">
        <button
          v-for="(_, idx) in images"
          :key="idx"
          type="button"
          class="dot-pill"
          :class="{ active: idx === currentIndex }"
          :aria-label="`${t.about.photoCarouselSlide} ${idx + 1}`"
          @click="goTo(idx)"
        ></button>
      </div>

      <button
        type="button"
        class="nav-arrow-btn"
        :disabled="currentIndex === images.length - 1"
        :aria-label="t.about.photoCarouselNext"
        :title="t.about.photoCarouselNext"
        @click="next"
      >
        <i class="pi pi-chevron-right"></i>
      </button>
    </div>

    <!-- High-Resolution Lightbox Modal Overlay -->
    <Teleport to="body">
      <Transition name="lightbox-fade">
        <div
          v-if="lightboxOpen && lightboxImage"
          class="lightbox-backdrop"
          @click.self="closeLightbox"
        >
          <div class="lightbox-modal">
            <!-- Close Button -->
            <button
              type="button"
              class="lightbox-close-btn"
              :aria-label="t.about.photoClose"
              :title="t.about.photoClose"
              @click="closeLightbox"
            >
              <i class="pi pi-times"></i>
            </button>

            <!-- Lightbox Main Image -->
            <div class="lightbox-img-box">
              <img
                :src="lightboxImage.src"
                :alt="locale === 'th' ? lightboxImage.alt.th : lightboxImage.alt.en"
                class="lightbox-img"
              />
            </div>

            <!-- Lightbox Nav -->
            <div class="lightbox-footer">
              <button
                type="button"
                class="lightbox-nav-btn"
                :disabled="currentIndex === 0"
                @click="lightboxPrev"
              >
                <i class="pi pi-chevron-left"></i>
              </button>
              <span class="lightbox-counter">{{ currentIndex + 1 }} / {{ images.length }}</span>
              <button
                type="button"
                class="lightbox-nav-btn"
                :disabled="currentIndex === images.length - 1"
                @click="lightboxNext"
              >
                <i class="pi pi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { ProfileImage } from "../types";
import { useI18n } from "../i18n";

interface Props {
  images: ProfileImage[];
  initialIndex?: number;
}

const props = withDefaults(defineProps<Props>(), {
  initialIndex: 0
});

const emit = defineEmits<{
  (e: "change", index: number, image: ProfileImage): void;
}>();

const { t, locale } = useI18n();

// Find primary image or use initialIndex
const defaultIndex = computed(() => {
  if (props.initialIndex !== undefined && props.initialIndex >= 0 && props.initialIndex < props.images.length) {
    return props.initialIndex;
  }
  const primaryIdx = props.images.findIndex((img) => img.isPrimary);
  return primaryIdx !== -1 ? primaryIdx : 0;
});

const currentIndex = ref<number>(defaultIndex.value);

// Lightbox state
const lightboxOpen = ref(false);
const lightboxImage = computed(() => props.images[currentIndex.value] || null);

const goTo = (index: number) => {
  if (index < 0 || index >= props.images.length) return;
  currentIndex.value = index;
  emit("change", index, props.images[index]);
};

const next = () => {
  if (currentIndex.value < props.images.length - 1) {
    goTo(currentIndex.value + 1);
  }
};

const prev = () => {
  if (currentIndex.value > 0) {
    goTo(currentIndex.value - 1);
  }
};

const onCardClick = (index: number) => {
  if (index === currentIndex.value) {
    openLightbox(props.images[index]);
  } else {
    goTo(index);
  }
};

const openLightbox = (img: ProfileImage) => {
  const foundIdx = props.images.findIndex((i) => i.id === img.id);
  if (foundIdx !== -1) {
    currentIndex.value = foundIdx;
  }
  lightboxOpen.value = true;
};

const closeLightbox = () => {
  lightboxOpen.value = false;
};

const lightboxPrev = () => {
  prev();
};

const lightboxNext = () => {
  next();
};

// 3D Cover Flow Transform Computation
const getSlideStyle = (index: number) => {
  const offset = index - currentIndex.value;
  const absOffset = Math.abs(offset);

  // Hide slides beyond 2 steps away
  if (absOffset > 2) {
    return {
      opacity: "0",
      pointerEvents: "none" as const,
      visibility: "hidden" as const,
      transform: `translateX(${offset * 80}px) scale(0.6)`,
      zIndex: 0
    };
  }

  // Active Center Slide
  if (offset === 0) {
    return {
      transform: "translateX(0) translateZ(0px) rotateY(0deg) scale(1)",
      opacity: "1",
      zIndex: 10,
      filter: "brightness(1)",
      cursor: "pointer"
    };
  }

  // Side Slides
  const direction = offset > 0 ? 1 : -1;
  const translateX = offset * 68; // horizontal offset in px
  const translateZ = -absOffset * 80; // depth offset in px
  // Left cards face toward center (+36deg), right cards face toward center (-36deg)
  const rotateY = direction === 1 ? -36 : 36;
  const scale = Math.max(0.78, 1 - absOffset * 0.12);
  const opacity = Math.max(0.42, 1 - absOffset * 0.32);
  const zIndex = 10 - absOffset;
  const brightness = Math.max(0.6, 1 - absOffset * 0.25);

  return {
    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
    opacity: `${opacity}`,
    zIndex,
    filter: `brightness(${brightness})`,
    cursor: "pointer"
  };
};

// Swipe / Drag Gestures Support
const touchStartX = ref(0);
const touchStartY = ref(0);
const isMouseDown = ref(false);
const dragStartX = ref(0);
const minSwipeDistance = 35;

const onTouchStart = (e: TouchEvent) => {
  if (!e.touches[0]) return;
  touchStartX.value = e.touches[0].clientX;
  touchStartY.value = e.touches[0].clientY;
};

const onTouchMove = (e: TouchEvent) => {
  // Allow normal scroll if vertical swipe is dominant
  if (!e.touches[0]) return;
  const deltaY = Math.abs(e.touches[0].clientY - touchStartY.value);
  const deltaX = Math.abs(e.touches[0].clientX - touchStartX.value);
  if (deltaX > deltaY && deltaX > 10) {
    e.preventDefault();
  }
};

const onTouchEnd = (e: TouchEvent) => {
  if (!e.changedTouches[0]) return;
  const endX = e.changedTouches[0].clientX;
  const deltaX = endX - touchStartX.value;

  if (Math.abs(deltaX) >= minSwipeDistance) {
    if (deltaX > 0) {
      prev();
    } else {
      next();
    }
  }
};

const onMouseDown = (e: MouseEvent) => {
  isMouseDown.value = true;
  dragStartX.value = e.clientX;
};

const onMouseMove = (e: MouseEvent) => {
  if (!isMouseDown.value) return;
  e.preventDefault();
};

const onMouseUp = (e: MouseEvent) => {
  if (!isMouseDown.value) return;
  isMouseDown.value = false;
  const deltaX = e.clientX - dragStartX.value;
  if (Math.abs(deltaX) >= minSwipeDistance) {
    if (deltaX > 0) {
      prev();
    } else {
      next();
    }
  }
};

const onMouseLeave = () => {
  isMouseDown.value = false;
};
</script>

<style scoped>
.coverflow-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  outline: none;
}

.coverflow-wrapper:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 4px;
  border-radius: 1.25rem;
}

/* Header */
.coverflow-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem 0.75rem;
}

.counter-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  padding: 0.25rem 0.65rem;
  border-radius: 9999px;
  letter-spacing: 0.04em;
}

.badge-icon {
  font-size: 0.75rem;
  color: var(--accent-primary);
}

.swipe-hint {
  display: inline-flex;
  align-items: center;
  color: var(--text-muted);
  font-size: 0.8rem;
  opacity: 0.6;
}

/* 3D Stage */
.coverflow-stage {
  position: relative;
  width: 100%;
  height: 290px;
  perspective: 900px;
  perspective-origin: center center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  touch-action: pan-y;
  overflow: visible;
  padding: 1rem 0;
}

.coverflow-stage:active {
  cursor: grabbing;
}

.coverflow-track {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
}

/* Card */
.coverflow-card {
  position: absolute;
  width: 220px;
  height: 250px;
  border-radius: 1.15rem;
  transition: transform 0.42s cubic-bezier(0.25, 1, 0.5, 1),
    opacity 0.42s ease,
    filter 0.42s ease;
  transform-style: preserve-3d;
  will-change: transform, opacity, filter;
  -webkit-box-reflect: below 6px linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.12));
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1.15rem;
  overflow: hidden;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-lg);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.coverflow-card.is-active .card-inner {
  border-color: var(--accent-primary);
  box-shadow: 0 16px 36px -8px var(--accent-glow), 0 0 0 1px var(--accent-primary-border);
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  user-select: none;
  -webkit-user-drag: none;
}

.card-lighting {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(circle at top right, rgba(255, 255, 255, 0.08), transparent 70%);
}

.card-action-btn {
  position: absolute;
  top: 0.65rem;
  right: 0.65rem;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--bg-card);
  backdrop-filter: blur(8px);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  cursor: pointer;
  opacity: 0.9;
  transition: all var(--transition-fast);
  z-index: 5;
}

.card-action-btn:hover {
  opacity: 1;
  transform: scale(1.1);
  background: var(--accent-primary);
  border-color: var(--accent-primary);
  color: #ffffff;
}

/* Controls */
.coverflow-controls {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  margin-top: 0.5rem;
  padding-bottom: 0.25rem;
}

.nav-arrow-btn {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.nav-arrow-btn:hover:not(:disabled) {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: scale(1.08);
}

.nav-arrow-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.dots-track {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.dot-pill {
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background: var(--border-color);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all var(--transition-fast);
}

.dot-pill:hover {
  background: var(--text-secondary);
}

.dot-pill.active {
  width: 22px;
  background: var(--accent-primary);
  box-shadow: 0 0 8px var(--accent-glow);
}

/* Lightbox Modal */
.lightbox-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.lightbox-modal {
  position: relative;
  max-width: 640px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

.lightbox-close-btn {
  position: absolute;
  top: -3.5rem;
  right: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.lightbox-close-btn:hover {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
  transform: rotate(90deg);
}

.lightbox-img-box {
  width: 100%;
  max-height: 75vh;
  border-radius: 1.25rem;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: #000000;
}

.lightbox-img {
  width: 100%;
  height: 100%;
  max-height: 75vh;
  object-fit: contain;
  display: block;
}

.lightbox-footer {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.lightbox-nav-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.lightbox-nav-btn:hover:not(:disabled) {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
}

.lightbox-nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.lightbox-counter {
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 0.05em;
}

/* Transitions */
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.25s ease;
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}

@media (max-width: 480px) {
  .coverflow-stage {
    height: 270px;
  }
  .coverflow-card {
    width: 200px;
    height: 230px;
  }
}
</style>
