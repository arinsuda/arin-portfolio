<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="base-icon"
    :aria-label="ariaLabel"
    :aria-hidden="!ariaLabel"
    role="img"
  >
    <!-- Github -->
    <path
      v-if="name === 'github'"
      d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
    />
    <path v-if="name === 'github'" d="M9 18c-4.51 2-5-2-7-2" />

    <!-- External Link -->
    <path v-if="name === 'external-link'" d="M15 3h6v6" />
    <path v-if="name === 'external-link'" d="M10 14 21 3" />
    <path v-if="name === 'external-link'" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />

    <!-- Mail (Email) -->
    <rect v-if="name === 'mail'" x="2" y="4" width="20" height="16" rx="2" />
    <path v-if="name === 'mail'" d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />

    <!-- Calendar -->
    <path v-if="name === 'calendar'" d="M8 2v4" />
    <path v-if="name === 'calendar'" d="M16 2v4" />
    <rect v-if="name === 'calendar'" x="3" y="4" width="18" height="18" rx="2" />
    <path v-if="name === 'calendar'" d="M3 10h18" />

    <!-- Code / Technology Stack -->
    <path v-if="name === 'code'" d="m18 16 4-4-4-4" />
    <path v-if="name === 'code'" d="m6 8-4 4 4 4" />
    <path v-if="name === 'code'" d="m14.5 4-5 16" />

    <!-- Sun -->
    <circle v-if="name === 'sun'" cx="12" cy="12" r="4" />
    <path v-if="name === 'sun'" d="M12 2v2" />
    <path v-if="name === 'sun'" d="M12 20v2" />
    <path v-if="name === 'sun'" d="m4.93 4.93 1.41 1.41" />
    <path v-if="name === 'sun'" d="m17.66 17.66 1.41 1.41" />
    <path v-if="name === 'sun'" d="M2 12h2" />
    <path v-if="name === 'sun'" d="M20 12h2" />
    <path v-if="name === 'sun'" d="m6.34 17.66-1.41 1.41" />
    <path v-if="name === 'sun'" d="m19.07 4.93-1.41 1.41" />

    <!-- Moon -->
    <path v-if="name === 'moon'" d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />

    <!-- Menu / Hamburger -->
    <line v-if="name === 'menu'" x1="4" x2="20" y1="12" y2="12" />
    <line v-if="name === 'menu'" x1="4" x2="20" y1="6" y2="6" />
    <line v-if="name === 'menu'" x1="4" x2="20" y1="18" y2="18" />

    <!-- Check (Success/Verified) -->
    <path v-if="name === 'check'" d="M20 6 9 17l-5-5" />

    <!-- Warning / Error -->
    <path v-if="name === 'warning'" d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line v-if="name === 'warning'" x1="12" x2="12" y1="9" y2="13" />
    <line v-if="name === 'warning'" x1="12" x2="12.01" y1="17" y2="17" />

    <!-- Arrow Right -->
    <path v-if="name === 'arrow-right'" d="M5 12h14" />
    <path v-if="name === 'arrow-right'" d="m12 5 7 7-7 7" />

    <!-- Arrow Left -->
    <path v-if="name === 'arrow-left'" d="M19 12H5" />
    <path v-if="name === 'arrow-left'" d="m12 19-7-7 7-7" />

    <!-- Shield / Safe -->
    <path v-if="name === 'shield'" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c4 0 7-2 7-2s3 2 7 2a1 1 0 0 1 1 1Z" />

    <!-- Zap / Speed -->
    <polygon v-if="name === 'zap'" points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />

    <!-- Lock / Confidential -->
    <rect v-if="name === 'lock'" x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path v-if="name === 'lock'" d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  name:
    | 'github'
    | 'external-link'
    | 'mail'
    | 'calendar'
    | 'code'
    | 'sun'
    | 'moon'
    | 'menu'
    | 'check'
    | 'warning'
    | 'arrow-right'
    | 'arrow-left'
    | 'shield'
    | 'zap'
    | 'lock';
  size?: number | string;
  strokeWidth?: number | string;
  ariaLabel?: string;
}

withDefaults(defineProps<Props>(), {
  size: 24,
  strokeWidth: 2,
});
</script>

<style scoped>
.base-icon {
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;
}
</style>
