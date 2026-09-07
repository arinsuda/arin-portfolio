import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'
import ToastService from 'primevue/toastservice'
import Tooltip from 'primevue/tooltip'

import 'primeicons/primeicons.css'
import './style.css'
import App from './App.vue'
import router from './router'
import { initLanguage } from './i18n'

// Initialize language from localStorage or browser
initLanguage()

// Define Emerald & Zinc preset aligned with professional developer portfolio aesthetic
const PortfolioPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{emerald.50}',
      100: '{emerald.100}',
      200: '{emerald.200}',
      300: '{emerald.300}',
      400: '{emerald.400}',
      500: '{emerald.500}',
      600: '{emerald.600}',
      700: '{emerald.700}',
      800: '{emerald.800}',
      900: '{emerald.900}',
      950: '{emerald.950}',
    },
    colorScheme: {
      dark: {
        surface: {
          0: '#ffffff',
          50: '{zinc.50}',
          100: '{zinc.100}',
          200: '{zinc.200}',
          300: '{zinc.300}',
          400: '{zinc.400}',
          500: '{zinc.500}',
          600: '{zinc.600}',
          700: '{zinc.700}',
          800: '{zinc.800}',
          900: '{zinc.900}',
          950: '{zinc.950}',
        },
      },
    },
  },
})

// Initialize theme class on documentElement before mounting
const savedTheme = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
  document.documentElement.classList.remove('dark')
  document.documentElement.classList.add('light-theme')
  document.body.classList.add('light-theme')
} else {
  document.documentElement.classList.add('dark')
  document.documentElement.classList.remove('light-theme')
  document.body.classList.remove('light-theme')
}

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: PortfolioPreset,
    options: {
      darkModeSelector: '.dark',
    },
  },
})

app.use(ToastService)
app.directive('tooltip', Tooltip)
app.use(router)
app.mount('#app')
