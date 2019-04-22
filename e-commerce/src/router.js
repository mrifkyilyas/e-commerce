import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import products from './views/products.vue'
import login from './views/login'
import register from './views/register'
import myproduct from './views/myproduct'
import addproduct from './views/addproduct'
import updateproduct from './views/updateproduct'
import detailproduct from './views/detailproduct'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: products
    },
  {
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
      component: myproduct,
      children:[
       
      

      ]

    },
    {
      path: '/addproduct',
      name: 'addproduct',
      component: addproduct

    },
    {
      path: '/products/',
      name: 'products',
      component: products,
    }, 
    {
      path:'/product/:id',
      name:'detailproduct',
      component:detailproduct
    },
    {
      path:'/myproduct/:id/update',
      name:'updateproduct',
      component:updateproduct
     }
    

  ]
})
