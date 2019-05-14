<script>
import {mapState} from 'vuex'

export default {
  name: 'App',
  computed: { ...mapState(['modalType']) }
}
</script>

<template lang="pug">
body
  header.container
    img.logo(src='./assets/logo.png' alt='Website Logo')
    nav
      ul
        li
          a(href='') HOME
        li
          a(href='') WORKS
        li
          a(href='') POSTS
        li
          a(href='') ABOUT US
        li
          a(href='') POSTS
        li
          a(href='') CONTACT
  router-view
  .footer.container
    p Thank you for supporting us!
    .footer-media Let&apos;s get in touch on any of these platforms.
      .social-media
        span(v-b-tooltip.hover='' title='Follow Us!')
          a(href='https://twitter.com/merveuygunerdol' target="_blank")
            i.fab.fa-twitter
        span(v-b-tooltip.hover='' title='Follow Us!')
          a(href='https://github.com/merveer' target="_blank")
            i.fab.fa-github
    .footer-end-line
    .trademark Designed and Developed with &nbsp;
      span
        img.love(src='./assets/like.png' alt='')
      br
      | by Merve ERDOL
  portal-target(:name='modalType')
</template>

<style scoped>
@import './assets/stylesheet/base';
@import './assets/stylesheet/typography.css';

header {
  display: grid;
  grid-template-columns: repeat(2, auto);
  padding-top: 3rem;
  align-items: center;
}
.logo {
  width: 81px;
  height: 68px;
  grid-column: 1 / 2;
}
nav {
  display: grid;
  justify-content: flex-end;
}
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(6, auto);
  grid-gap: 1rem;
}
.footer {
  margin-top: 2rem;
  position: absolute;
  margin-left: auto;
  left: 0;
  right: 0;
  bottom: 0;
}
@media (max-width: 768px) {
  .logo {
    width: 71px;
    height: 58px;
  }
}
.footer-media {
  display: grid;
  grid-template-columns: repeat(2, auto);
  padding-top: 1rem;
}
.social-media {
  display: grid;
  justify-content: flex-end;
  grid-template-columns: repeat(2, auto);
  grid-gap: 1rem;
}
@media (max-width: 500px) {
  header {
    display: grid;
    grid-template-columns: auto;
    padding-top: 3rem;
    grid-gap: 1rem;
  }
  .logo {
    width: 71px;
    height: 58px;
    justify-self: center;
  }
  nav {
    display: grid;
    background-color: rgba(154, 42, 142, .45);
    justify-content: center;
  }
  nav ul {
    grid-template-columns: auto;
    grid-template-rows: repeat(6, auto);
    grid-gap: 0.5rem;
    text-align: center;
  }
  .footer {
    text-align: center;
  }
  .footer-media {
    grid-template-columns: auto;
  }
  .social-media {
    justify-content: center !important;
    padding-top: 0.5rem;
  }
  .trademark img.love {
    height: 16px;
    width: 16px;
  }
}
.fa-github {
  color: black;
}
.fa-twitter {
  color: #1DA1F2;
}
.footer-end-line {
  height: 1px;
  background-color: var(--purple);
  margin-top: 1.5rem;
}
.trademark {
  text-align: center;
  color: #4a4a4a;
  margin: 1.5rem 0;
}
img.love {
  height: 20px;
  width: 20px;
}
@media (max-width: 640px) {
  .footer {
    padding-top: 4%;
  }
}
</style>
