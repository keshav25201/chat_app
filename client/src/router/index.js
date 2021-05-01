import Vue from 'vue'
import VueRouter from 'vue-router'
import chatArea from '../components/chatArea'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: chatArea,
    props: true,
  },
  {
    path: '/rooms/:roomId',
    name: 'chatArea',
    component: chatArea,
    props: true,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
