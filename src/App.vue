<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
// data(){
//   return {
//     screenWidth: window.innerWidth,
//   }
// },
// computed: {
//   shouldShowComponent() {
//     return this.screenWidth <= 900;
//   },
// },
// mounted() {
//   window.addEventListener('resize', this.handleResize);
// },
// methods: {
//   handleResize() {
//     this.screenWidth = window.innerWidth;
//   },

// },
</script>

<style>
body,
#app {
  font-family: "DM Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}
.hamburger{
    display: none;
  }
@media screen and (max-width: 850px) {
  .navbar:not(.always-visible) {
    display: none;
  }
  .hamburger{
    display: block;
  }
}
</style>
