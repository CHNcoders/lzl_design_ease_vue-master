import { createRouter, createWebHistory } from 'vue-router';
import HomePage1 from '../views/HomePage1.vue';
import HomePage2 from '../views/HomePage2.vue';
import {hasLogin} from "@/util/authUtil";


const routes = [
  {
    path: '/',
    name: 'HomePage1',
    component: HomePage1,
    meta: {
      title: '主页1',
      needLogin: false
    }
  },
  {
    path: '/home2',
    name: 'HomePage2',
    component: HomePage2,
    meta: {
      title: '主页2',
      needLogin: false
    }
  },
  {
    path: '/person',
    name: 'Person',
    component: () => import('../views/person/PersonView.vue'),
    children: [
      {
        path: '',
        name: 'personhome',
        component: () => import('../views/person/personhome/PersonHome.vue')
      },
      {
        path: '/design',
        name: 'design',
        component: () => import('../views/person/personhome/PersonDesign.vue')
      },
      {
        path: '/material',
        name: 'material',
        component: () => import('../views/person/personhome/PersonMaterial.vue')
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('../views/person/personhome/PersonOrder.vue')
      },
      {
        path: '/collection',
        name: 'collection',
        component: () => import('../views/person/personhome/PersonCollection.vue')
      },
    ]
  }
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.needLogin && !hasLogin()){
    // TODO 这里做一个未登录的提示弹窗

    setTimeout(() => {
      location.href = "/login"
    }, 500)
  }else {
    next()
  }
  document.title = to.meta.title
})

export default router;
