<script>
import {mapState} from 'vuex'
import Posts from './posts'
import 'bootstrap/dist/css/bootstrap.css'

export default {
  components: {
    Posts
  },
  computed: mapState(['posts'])
}
</script>

<template lang="pug">
.container
  posts
</template>
