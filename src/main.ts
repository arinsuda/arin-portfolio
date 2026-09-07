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

// Define Dark Academia Tech & Bio-Industrial preset (Warm amber & foliage charcoal)
const PortfolioPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{amber.50}',
      100: '{amber.100}',
      200: '{amber.200}',
      300: '{amber.300}',
      400: '{amber.400}',
      500: '#E58A3C', // Warm amber desk-lamp glow
      600: '{amber.600}',
      700: '{amber.700}',
      800: '{amber.800}',
      900: '{amber.900}',
      950: '{amber.950}',
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '{stone.50}',
          100: '{stone.100}',
          200: '{stone.200}',
          300: '{stone.300}',
          400: '{stone.400}',
          500: '{stone.500}',
          600: '{stone.600}',
          700: '{stone.700}',
          800: '{stone.800}',
          900: '{stone.900}',
          950: '{stone.950}',
        },
      },
      dark: {
        surface: {
          0: '#ffffff',
          50: '#EDECE8',
          100: '#D8D7D2',
          200: '#B8BAB2',
          300: '#8C9088',
          400: '#5F645C',
          500: '#434841',
          600: '#343A35',
          700: '#2E332F', // Raw iron/stone border
          800: '#1B1E1C', // Subtle elevated dark slate
          900: '#141715',
          950: '#0F1110', // Deep moody charcoal
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
