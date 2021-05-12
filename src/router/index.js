import Vue from "vue";
import VueRouter from "vue-router";
import HomeBeforeLog from "../views/HomeBeforeLog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeBeforeLog",
    component: HomeBeforeLog,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/log",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "log" */ "../views/Login.vue"),
  },
  {
    path: "/reg",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "reg" */ "../views/Register.vue"),
  },
  {
    path: "/studentLog",
    name: "StudentLog",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "StudentLog" */ "../views/StudentLog.vue"),
  },
  {
    path: "/teacherLog",
    name: "TeacherLog",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "TeacherLog" */ "../views/TeacherLog.vue"),
  },
  {
    path: "/homeAfterLogStudent",
    name: "HomeAfterLogStudent",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "HomeAfterLogStudent" */ "../views/HomeAfterLogStudent.vue"
      ),
  },
  {
    path: "/homeAfterLogTeacher",
    name: "HomeAfterLogTeacher",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "HomeAfterLogTeacher" */ "../views/HomeAfterLogTeacher.vue"
      ),
  },
  {
    path: "/test",
    name: "Test",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Test" */ "../views/Test.vue"),
  },
  {
    path: "/search",
    name: "Search",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Search" */ "../views/Search.vue"),
  },
  {
    path: "/cabinetStudent",
    name: "CabinetStudent",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "CabinetStudent" */ "../views/CabinetStudent.vue"
      ),
  },
  {
    path: "/cabinetTeacher",
    name: "CabinetTeacher",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "CabinetTeacher" */ "../views/CabinetTeacher.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
