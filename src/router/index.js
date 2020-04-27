import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CategoryWiseProductView from '../views/CategoryWiseProductView.vue'
import CategoryWiseProductView1 from '../views/CategoryWiseProductView1.vue'
import SearchWiseProductView from '../views/SearchWiseProductView.vue'
import SearchWiseProductView1 from '../views/SearchWiseProductView1.vue'
import productDetetailsView from '../views/productDetails.vue'
import signInView from '../views/signInView.vue'
import checkOutPage from '../views/checkOutPage.vue'
import cartReview from '../views/cartReview.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
   
    component: Home
  },
   {
    path: '/home',
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
    component:CategoryWiseProductView,

  },
  {
    path:'/product/category/:categoryUrl',
    name:'product.category',
    component:CategoryWiseProductView1,

  },
  {
    path:'/search/product/:search_key',
    name:'search.product',
    component:SearchWiseProductView,
 },

  {
    path:'/product/search/:search_key',
    name:'product.search',
    component:SearchWiseProductView1,
  },
  {
    path:'/product/details/:productUrl',
    name:'product.details',
    component:productDetetailsView,
  },
  {
    path:'/signin/',
    name:'signin',
    component:signInView,
  },
  {
    path:'/checkout/',
    name:'checkout',
    component:checkOutPage,
  },
   {
    path:'/cart/review',
    name:'cartReView',
    component:cartReview,
  },


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
