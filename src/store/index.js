import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  modalType: '',
  posts: [],
  selectedPost: {
    user: {
      name: ''
    }
  },
  profile: {
    company: {
      name: ''
    },
    address: {
      city: '',
      geo: {
        lat: 0,
        lng: 0
      }
    }
  }
}

const mutations = {
  SET_POSTS (state, post) {
    state.posts = post
  },
  SET_SELECTED_POST (state, post) {
    state.selectedPost = post
  },
  SET_PROFILE (state, post) {
    state.profile = post
  },
  SET_MODAL_TYPE (state, modalType) {
    state.modalType = modalType
  }
}

const actions = {
  setModalType ({ commit }, type) {
    commit('SET_MODAL_TYPE', type)
  },
  setSelectedPost ({ commit }, selectedPost) {
    commit('SET_SELECTED_POST', selectedPost)
  },
  async fetchPosts ({commit}) {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts/')
      commit('SET_POSTS', res.data)
    } catch (err) {
      console.log(err)
    }
  },
  async fetchPost ({commit}, id) {
    try {
      const postRequest = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      const userRequest = await axios.get(`https://jsonplaceholder.typicode.com/users/${postRequest.data.userId}`)
      const post = postRequest.data
      post.user = userRequest.data
      commit('SET_SELECTED_POST', post)
    } catch (err) {
      console.log(err)
    }
  },
  async fetchProfile ({commit}, id) {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      commit('SET_PROFILE', res.data)
    } catch (err) {
      console.log(err)
    }
  },
  async updatePost ({commit}, id) {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`)
    } catch (err) {
      console.log(err)
    }
  },
  async deletePost ({commit}, id) {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    } catch (err) {
      console.log(err)
    }
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
