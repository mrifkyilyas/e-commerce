import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import products from './views/products.vue'
import login from './views/login'
import register from './views/register'
import myproduct from './views/myproduct'
import addproduct from './views/addproduct'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'products',
      component: products
    }, {
      path: '/login',
      name: 'login',
      component: login

    },
    {
      path: '/register',
      name: 'register',
      component: register

    },
    {
      path: '/myproduct',
      name: 'myproduct',
      component: myproduct

    },
    {
      path: '/addproduct',
      name: 'addproduct',
      component: addproduct

    }

  ]
})
