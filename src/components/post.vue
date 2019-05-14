<script>
import {mapState, mapActions} from 'vuex'

export default {
  data () {
    return {
      name: ''
    }
  },
  computed: {...mapState(['selectedPost'])},
  methods: {
    ...mapActions(['fetchPost']),
    goUser (userid) {
      this.$router.push('/profile/' + userid)
    }
  },
  created () {
    this.fetchPost(this.$route.params.id)
  }
}
</script>

<template lang="pug">
.container
  .main
    h1 {{ selectedPost.title}}
    .value {{ selectedPost.body}}
    p(@click='goUser(selectedPost.user.id)')
      | written by,&nbsp;
      span.value {{selectedPost.user.name}}
</template>

<style scoped>
@import '../assets/stylesheet/base';
@import '../assets/stylesheet/typography';

h1 {
  padding-bottom: 1rem;
}
.value {
  padding-bottom: 2rem;
}
</style>
