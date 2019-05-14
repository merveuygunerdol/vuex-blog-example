<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: 'Maps',
  data () {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: -10.999, lng: 99.123 },
      markers: [],
      places: [],
      currentPlace: null
    }
  },
  mounted () {
    this.geolocate()
  },
  computed: {...mapState(['profile'])},
  methods: {
    ...mapActions(['fetchProfile']),
    // receives a place object via the autocomplete component
    setPlace (place) {
      this.currentPlace = place
    },
    addMarker () {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        }
        this.markers.push({ position: marker })
        this.places.push(this.currentPlace)
        this.center = marker
        this.currentPlace = null
      }
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: parseFloat(this.profile.address.geo.lat),
          lng: parseFloat(this.profile.address.geo.lng)
        }
      })
    }
  },
  created () {
    this.fetchProfile(this.$route.params.id)
  }
}
</script>

<template lang="pug">
div
  gmap-map(:center='center' :zoom='12' style='width:360px;  height: 153px;')
    gmap-marker(:key='index' v-for='(m, index) in markers' :position='m.position' @click='center=m.position')
</template>
