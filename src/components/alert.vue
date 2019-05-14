<script>
import {mapState, mapActions} from 'vuex'

export default {
  props: ['post'],
  computed: mapState(['posts']),
  methods: {
    ...mapActions(['deletePost'])
  }
}
</script>

<template lang="pug">
portal(to='removePost')
  .modal-backdrop
    .modal
      header.modal-header Remove
        button.btn-close(type='button' @click="$emit('close')") x
      .modal-body {{ post.title }}
        span  will be deleted.
        p This action cannot be undone
      .modal-footer
        button.btn-delete(type='button' @click='deletePost(post.id)') Delete
</template>

<style scoped>
@import '../assets/stylesheet/modal';

.modal {
  height: 270px;
}
span {
  font-weight: 500;
  font-style: italic;
}
p {
  padding-top: 10px;
  color: var(--light);
  font-weight: 500;
}
</style>
