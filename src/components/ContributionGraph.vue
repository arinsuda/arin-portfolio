<template>
  <div class="contribution-graph-wrapper">
    <!-- Header Title -->
    <div class="graph-header">
      <h2 class="graph-title">{{ t.contributions.title }}</h2>
    </div>

    <!-- Main Card Container -->
    <div class="graph-card">
      <div class="graph-inner-layout">
        <!-- Left / Heatmap Area -->
        <div class="heatmap-area">
          <div class="heatmap-scroll-container" ref="scrollContainer">
            <div class="heatmap-table">
              <!-- Month Labels Header -->
              <div class="months-row">
                <span
                  v-for="(m, idx) in monthLabels"
                  :key="idx"
                  class="month-label"
                  :style="{ gridColumnStart: m.weekIndex + 1 }"
                >
                  {{ m.label }}
                </span>
              </div>

              <!-- 7 Rows x 53 Columns Grid -->
              <div class="weeks-grid">
                <div
                  v-for="(week, wIdx) in weeksData"
                  :key="wIdx"
                  class="week-col"
                >
                  <div
                    v-for="(day, dIdx) in week"
                    :key="dIdx"
                    class="day-cell-slot"
                  >
                    <div
                      v-if="day"
                      class="day-cell"
                      :class="['level-' + day.level]"
                      :data-date="day.date"
                      :data-count="day.count"
                      @mouseenter="showTooltip($event, day)"
                      @mouseleave="hideTooltip"
                    ></div>
                    <div v-else class="day-cell empty-cell"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Footer Row: Summary & Legend -->
          <div class="graph-footer">
            <div class="graph-summary">
              <span class="summary-count">{{ yearContributionCount }}</span>
              <span class="summary-text">{{ t.contributions.contributionsIn }} {{ selectedYear }}</span>
            </div>

            <div class="graph-legend">
              <span class="legend-text">{{ t.contributions.less }}</span>
              <span class="legend-cell level-0"></span>
              <span class="legend-cell level-1"></span>
              <span class="legend-cell level-2"></span>
              <span class="legend-cell level-3"></span>
              <span class="legend-cell level-4"></span>
              <span class="legend-text">{{ t.contributions.more }}</span>
            </div>
          </div>
        </div>

        <!-- Right Side / Year Selectors -->
        <div class="years-sidebar">
          <button
            v-for="year in availableYears"
            :key="year"
            class="year-btn"
            :class="{ active: selectedYear === year }"
            @click="selectYear(year)"
          >
            {{ year }}
          </button>
        </div>
      </div>
    </div>

    <!-- Floating Tooltip -->
    <div
      v-if="tooltip.visible"
      class="custom-tooltip"
      :style="{ left: tooltip.x + 'px', top: tooltip.y + 'px' }"
    >
      <div class="tooltip-text">
        <strong>{{ tooltip.count }}</strong> {{ tooltip.count === 1 ? t.contributions.contribution : t.contributions.contributions }} {{ t.contributions.on }} {{ tooltip.formattedDate }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { withBase } from "../utils/assets";
import { useI18n } from "../i18n";

const { t, locale } = useI18n();

interface DayContribution {
  date: string;
  count: number;
  level: number;
  month?: number;
  dateNum?: number;
}

const availableYears = [2026, 2025, 2024, 2023, 2022];
const selectedYear = ref<number>(2026);

const rawContributions = ref<DayContribution[]>([]);
const yearlyTotals = ref<Record<string, number>>({
  "2026": 611,
  "2025": 206,
  "2024": 194,
  "2023": 1,
  "2022": 0,
});

// Tooltip state
const tooltip = ref({
  visible: false,
  x: 0,
  y: 0,
  count: 0,
  formattedDate: "",
});

const showTooltip = (event: MouseEvent, day: DayContribution) => {
  const target = event.currentTarget as HTMLElement;
  const rect = target.getBoundingClientRect();
  const dateObj = new Date(day.date + "T00:00:00");
  
  const options: Intl.DateTimeFormatOptions = { 
    month: "short", 
    day: "numeric", 
    year: "numeric" 
  };
  const formatted = dateObj.toLocaleDateString(locale.value === "th" ? "th-TH" : "en-US", options);

  tooltip.value = {
    visible: true,
    x: rect.left + rect.width / 2,
    y: rect.top - 8,
    count: day.count,
    formattedDate: formatted,
  };
};

const hideTooltip = () => {
  tooltip.value.visible = false;
};

// Select Year
const selectYear = (year: number) => {
  selectedYear.value = year;
};

// Compute contributions for selected year
const selectedYearData = computed(() => {
  const year = selectedYear.value;
  const yearStr = String(year);
  
  // Filter matching days from raw data
  const dataMap = new Map<string, DayContribution>();
  for (const item of rawContributions.value) {
    if (item.date.startsWith(yearStr)) {
      dataMap.set(item.date, item);
    }
  }

  // Generate full calendar days for the year
  const days: DayContribution[] = [];
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  const totalDays = isLeap ? 366 : 365;

  const current = new Date(year, 0, 1);
  for (let i = 0; i < totalDays; i++) {
    const month = String(current.getMonth() + 1).padStart(2, "0");
    const dateNum = String(current.getDate()).padStart(2, "0");
    const dateStr = `${year}-${month}-${dateNum}`;
    
    const existing = dataMap.get(dateStr);
    if (existing) {
      days.push({
        date: dateStr,
        count: existing.count,
        level: existing.level,
        month: current.getMonth(),
        dateNum: current.getDate(),
      });
    } else {
      days.push({
        date: dateStr,
        count: 0,
        level: 0,
        month: current.getMonth(),
        dateNum: current.getDate(),
      });
    }

    current.setDate(current.getDate() + 1);
  }

  return days;
});

// Group days into weeks (53 columns x 7 rows)
const weeksData = computed(() => {
  const days = selectedYearData.value;
  if (!days.length) return [];

  const year = selectedYear.value;
  const firstDay = new Date(year, 0, 1);
  const startDayOfWeek = firstDay.getDay(); // 0 = Sunday

  const weeks: (DayContribution | null)[][] = [];
  let currentWeek: (DayContribution | null)[] = [];

  // Pad beginning of first week
  for (let i = 0; i < startDayOfWeek; i++) {
    currentWeek.push(null);
  }

  for (const day of days) {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  // Pad end of last week
  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }
    weeks.push(currentWeek);
  }

  return weeks;
});

// Compute month labels aligned with week columns
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const monthLabels = computed(() => {
  const weeks = weeksData.value;
  const labels: { weekIndex: number; label: string }[] = [];
  let lastMonth = -1;

  weeks.forEach((week, wIdx) => {
    const firstValidDay = week.find((d) => d !== null);
    if (firstValidDay && firstValidDay.month !== undefined && firstValidDay.month !== lastMonth) {
      labels.push({
        weekIndex: wIdx,
        label: monthNames[firstValidDay.month],
      });
      lastMonth = firstValidDay.month;
    }
  });

  return labels;
});

// Year total count
const yearContributionCount = computed(() => {
  const yearStr = String(selectedYear.value);
  if (yearlyTotals.value[yearStr] !== undefined) {
    return yearlyTotals.value[yearStr];
  }
  return selectedYearData.value.reduce((acc, curr) => acc + curr.count, 0);
});

// Fetch contributions (try API first, fallback to public static JSON)
onMounted(async () => {
  const staticUrl = withBase("data/github-contributions.json");

  // Load static fallback data immediately
  try {
    const res = await fetch(staticUrl);
    if (res.ok) {
      const data = await res.json();
      if (data && data.contributions) {
        rawContributions.value = data.contributions;
        if (data.total) {
          yearlyTotals.value = { ...yearlyTotals.value, ...data.total };
        }
      }
    }
  } catch (err) {
    console.warn("Could not load local static contribution data:", err);
  }

  // Try live API in background
  try {
    const liveRes = await fetch("https://github-contributions-api.jogruber.de/v4/arinsuda");
    if (liveRes.ok) {
      const liveData = await liveRes.json();
      if (liveData && liveData.contributions) {
        rawContributions.value = liveData.contributions;
        if (liveData.total) {
          yearlyTotals.value = { ...yearlyTotals.value, ...liveData.total };
        }
      }
    }
  } catch (_e) {
    // Graceful offline fallback
  }
});
</script>

<style scoped>
.contribution-graph-wrapper {
  width: 100%;
  max-width: 1120px;
  margin: 3.5rem auto 0;
  padding: 0 1.5rem;
}

.graph-header {
  margin-bottom: 1.25rem;
}

.graph-title {
  font-size: 2.1rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  color: var(--text-primary);
}

.graph-card {
  background-color: var(--bg-card);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  padding: 1.75rem 2rem;
  box-shadow: var(--shadow-lg);
  transition: border-color var(--transition-normal), box-shadow var(--transition-normal);
}

.graph-inner-layout {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

/* Left Heatmap Area */
.heatmap-area {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.heatmap-scroll-container {
  overflow-x: auto;
  padding-bottom: 0.75rem;
  /* subtle scrollbar */
  scrollbar-width: thin;
  scrollbar-color: var(--border-color) transparent;
}

.heatmap-scroll-container::-webkit-scrollbar {
  height: 6px;
}

.heatmap-scroll-container::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 3px;
}

.heatmap-table {
  display: inline-flex;
  flex-direction: column;
  min-width: 680px;
}

/* Months Row */
.months-row {
  display: grid;
  grid-template-columns: repeat(53, 11px);
  column-gap: 3px;
  height: 20px;
  margin-bottom: 6px;
  position: relative;
}

.month-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 500;
  white-space: nowrap;
  grid-row: 1;
}

/* Grid of Weeks */
.weeks-grid {
  display: grid;
  grid-template-columns: repeat(53, 11px);
  column-gap: 3px;
}

.week-col {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.day-cell-slot {
  width: 11px;
  height: 11px;
}

.day-cell {
  width: 11px;
  height: 11px;
  border-radius: 2px;
  cursor: pointer;
  transition: transform 0.15s ease, filter 0.15s ease;
}

.day-cell:hover {
  transform: scale(1.35);
  z-index: 10;
  filter: brightness(1.2);
}

.empty-cell {
  background-color: transparent;
  pointer-events: none;
}

/* Contribution Colors (Tokenized Scale via CSS variables) */
.level-0 {
  background-color: var(--contrib-l0);
  border: 1px solid var(--border-color);
}

.level-1 {
  background-color: var(--contrib-l1);
}

.level-2 {
  background-color: var(--contrib-l2);
}

.level-3 {
  background-color: var(--contrib-l3);
}

.level-4 {
  background-color: var(--contrib-l4);
}

/* Footer (Summary & Legend) */
.graph-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.25rem;
  padding-top: 0.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.graph-summary {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.summary-count {
  font-weight: 700;
  color: var(--text-primary);
  margin-right: 0.25rem;
}

.graph-legend {
  display: flex;
  align-items: center;
  gap: 4px;
}

.legend-text {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin: 0 4px;
}

.legend-cell {
  width: 11px;
  height: 11px;
  border-radius: 2px;
  display: inline-block;
}

/* Years Sidebar */
.years-sidebar {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex-shrink: 0;
}

.year-btn {
  font-size: 0.88rem;
  font-weight: 600;
  padding: 0.45rem 1rem;
  border-radius: 0.5rem;
  background: transparent;
  color: var(--text-muted);
  border: 1px solid transparent;
  cursor: pointer;
  transition: all var(--transition-fast);
  text-align: center;
}

.year-btn:hover {
  color: var(--text-primary);
  background-color: var(--bg-tertiary);
}

.year-btn.active {
  background-color: var(--accent-primary);
  color: #0F1110;
  font-weight: 800;
  border-color: var(--accent-primary);
  box-shadow: 0 2px 10px var(--accent-glow);
}

/* Floating Tooltip */
.custom-tooltip {
  position: fixed;
  transform: translate(-50%, -100%);
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-lg);
  padding: 0.4rem 0.65rem;
  border-radius: 6px;
  font-size: 0.75rem;
  pointer-events: none;
  z-index: 9999;
  white-space: nowrap;
}

.tooltip-text strong {
  color: var(--accent-primary);
}

@media (max-width: 860px) {
  .graph-inner-layout {
    flex-direction: column;
  }

  .years-sidebar {
    flex-direction: row;
    overflow-x: auto;
    width: 100%;
    padding-bottom: 0.5rem;
  }
}
</style>
