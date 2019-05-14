<script>
import {mapState, mapActions} from 'vuex'

export default {
  props: ['post'],
  computed: mapState(['posts']),
  methods: {
    ...mapActions(['updatePost'])
  }
}
</script>

<template lang="pug">
portal(to='editPost')
  .modal-backdrop
    .modal
      header.modal-header Edit
        button.btn-close(type='button' @click="$emit('close')") x
      .modal-body
        input(type='hidden')
        .label Title
        input.form-control(type='text' v-model='post.title' placeholder='title')
        .label Body
        textarea.form-control(type='text' v-model='post.body' placeholder='body')
      .modal-footer
        button.btn-delete(type='button' @click='updatePost(post.id)') Update
</template>

<style scoped>
@import '../assets/stylesheet/modal';

.modal {
  height: 400px;
}
.modal-body {
  display: grid;
  grid-gap: 0.5rem;
}
.label {
  color: var(--purple);
  font-weight: 500;
}
.form-control {
  font-size: 14px;
}
textarea.form-control {
  height: 120px;
}
</style>
