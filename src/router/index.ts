import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { projects } from "../data/projects";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/ProjectsView.vue"),
  },
  {
    path: "/project/:slug",
    name: "ProjectDetail",
    component: () => import("../views/ProjectDetailView.vue"),
    props: true,
  },
  // Legacy URL Redirects for seamless backward compatibility
  {
    path: "/experience",
    redirect: "/about",
  },
  {
    path: "/skills",
    redirect: "/about",
  },
  {
    path: "/education",
    redirect: "/about",
  },
  {
    path: "/portfolio",
    redirect: "/projects",
  },
  {
    path: "/contact",
    redirect: "/#contact",
  },
  {
    path: "/404",
    name: "NotFound",
    component: () => import("../views/NotFoundView.vue"),
  },
  {
    path: "/social/:platform",
    name: "SocialPlaceholder",
    component: () => import("../views/NotFoundView.vue"),
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "CatchAllNotFound",
    component: () => import("../views/NotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    return { top: 0, left: 0 };
  },
});

router.afterEach((to) => {
  const baseTitle = "Arin Sudakijjathorn";
  if (to.name === "Home" || to.path === "/") {
    document.title = `${baseTitle} | Backend-Focused Full Stack Developer`;
  } else if (to.name === "About" || to.path === "/about") {
    document.title = `About | ${baseTitle}`;
  } else if (to.name === "Projects" || to.path === "/projects") {
    document.title = `Projects | ${baseTitle}`;
  } else if (to.name === "ProjectDetail" && to.params.slug) {
    const slug = Array.isArray(to.params.slug) ? to.params.slug[0] : to.params.slug;
    const project = projects.find((p) => p.slug === slug);
    document.title = project ? `${project.title} | ${baseTitle}` : `Project | ${baseTitle}`;
  } else if (to.name === "SocialPlaceholder") {
    document.title = `Connect | ${baseTitle}`;
  } else if (to.name === "NotFound" || to.name === "CatchAllNotFound") {
    document.title = `Page Not Found | ${baseTitle}`;
  } else {
    document.title = baseTitle;
  }
});

export default router;
