import Vue from 'vue'
import VueRouter from 'vue-router'
import MeuInicio from '../views/MeuInicio'
import MeuCard from '../views/MeuCard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: MeuInicio
  },
  {
    path: '/api',
    name: 'Card',
    component: MeuCard
  },
]

const router = new VueRouter({
  routes
})

export default router
