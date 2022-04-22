import { createWebHistory, createRouter } from 'vue-router'
import AboutUs from '../components/AboutUs.vue'
import FilmDetails from '../components/FilmDetails.vue'
import FilmList from '../components/FilmList.vue'
import Login from '../components/Login.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: FilmList,
  },
  {
    path: '/film/:name',
    name: 'Film',
    component: FilmDetails,
    props: true,
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router