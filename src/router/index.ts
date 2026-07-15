import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import PortfolioView from "../views/PortfolioView.vue";
import ProjectDetailView from "../views/ProjectDetailView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Portfolio",
    component: PortfolioView,
  },
  {
    path: "/project/:slug",
    name: "ProjectDetail",
    component: ProjectDetailView,
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

export default router;
