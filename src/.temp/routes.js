export default [
  {
    path: "/why/",
    component: () => import(/* webpackChunkName: "page--src--pages--why-vue" */ "/home/riley/programming/vuejs/gridsome/riley-for-congress/src/pages/Why.vue")
  },
  {
    path: "/volunteer/",
    component: () => import(/* webpackChunkName: "page--src--pages--volunteer-vue" */ "/home/riley/programming/vuejs/gridsome/riley-for-congress/src/pages/Volunteer.vue")
  },
  {
    path: "/medicare-for-all/",
    component: () => import(/* webpackChunkName: "page--src--pages--medicare-for-all-vue" */ "/home/riley/programming/vuejs/gridsome/riley-for-congress/src/pages/Medicare-For-All.vue")
  },
  {
    path: "/issues/",
    component: () => import(/* webpackChunkName: "page--src--pages--issues-vue" */ "/home/riley/programming/vuejs/gridsome/riley-for-congress/src/pages/Issues.vue")
  },
  {
    path: "/donate/",
    component: () => import(/* webpackChunkName: "page--src--pages--donate-vue" */ "/home/riley/programming/vuejs/gridsome/riley-for-congress/src/pages/Donate.vue")
  },
  {
    path: "/blog/",
    component: () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/home/riley/programming/vuejs/gridsome/riley-for-congress/src/pages/Blog.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/home/riley/programming/vuejs/gridsome/riley-for-congress/src/pages/About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/riley/programming/vuejs/gridsome/riley-for-congress/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/riley/programming/vuejs/gridsome/riley-for-congress/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/riley/programming/vuejs/gridsome/riley-for-congress/node_modules/gridsome/app/pages/404.vue")
  }
]

