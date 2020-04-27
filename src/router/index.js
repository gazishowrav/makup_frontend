import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
   {
    path: '/', alias: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/category/:categoryUrl',
    name:'category',
    component: () => import(/* webpackChunkName: "category" */ '../views/CategoryWiseProductView.vue')
  },
  {
    path:'/product/category/:categoryUrl',
    name:'product.category',
    component: () => import(/* webpackChunkName: "product.category" */ '../views/CategoryWiseProductView1.vue')

  },
  {
    path:'/search/product/:search_key',
    name:'search.product',
    component: () => import(/* webpackChunkName: "search.product" */ '../views/SearchWiseProductView.vue')
 },

  {
    path:'/product/search/:search_key',
    name:'product.search',
    component: () => import(/* webpackChunkName: "product.search" */ '../views/SearchWiseProductView1.vue')
  },
  {
    path:'/product/details/:productUrl',
    name:'product.details',
    component: () => import(/* webpackChunkName: "product.details" */ '../views/productDetails.vue')
  },
  {
    path:'/signin/',
    name:'signin',
    component: () => import(/* webpackChunkName: "signin" */ '../views/signInView.vue')
  },
  {
    path:'/checkout/',
    name:'checkout',
    component: () => import(/* webpackChunkName: "checkout" */ '../views/checkOutPage.vue')
  },
   {
    path:'/cart/review',
    name:'cartReView',
    component: () => import(/* webpackChunkName: "cartReView" */ '../views/cartReview.vue')
  }
]

const router = new VueRouter({
 mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
})

export default router
