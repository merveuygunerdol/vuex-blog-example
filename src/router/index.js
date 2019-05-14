import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/homepage'
import Post from '@/components/post'
import Profile from '@/components/profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: Post
    },
    {
      path: '/profile/:id',
      name: 'Profile',
      component: Profile
    }
  ],
  mode: 'history'
})
