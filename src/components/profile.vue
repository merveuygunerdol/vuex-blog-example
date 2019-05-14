<script>
import {mapState, mapActions} from 'vuex'
import Maps from './maps'

export default {
  components: {
    Maps
  },
  computed: {...mapState(['profile'])},
  methods: {...mapActions(['fetchProfile'])
  },
  created () {
    this.fetchProfile(this.$route.params.id)
  }
}
</script>

<template lang="pug">
.container
  .main
    .profile-detail
      h1 {{profile.name}}
      h2 {{profile.address.city}}
    .field-detail
      .fields
        .label Username
        .value {{profile.username}}
        .label Email
        .value {{profile.email}}
        .label Phone
        .value {{profile.phone}}
        .label Website
        .value {{profile.website}}
        .label Company
        .value {{profile.company.name}}
      maps
</template>

<style scoped>
@import '../assets/stylesheet/base';
@import '../assets/stylesheet/typography';

.profile-detail {
  display: grid;
  grid-template-rows: repeat(2, auto);
  padding-bottom: 1rem;
}
.field-detail {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, auto));
}
.fields {
  display: grid;
  grid-template-columns: 150px 1fr;
}
@media (max-width: 768px) {
  .fields {
    padding-bottom: 1rem;
  }
}
</style>
