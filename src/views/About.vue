<template>
  <NavBar/>
  <AboutHeroSection/>
  <AboutWelcomeSection/>
  <AboutFastTrackSection/>
  <Footer/>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import AboutHeroSection from '@/components/About/AboutHeroSection.vue'
import AboutWelcomeSection from '@/components/About/AboutWelcomeSection.vue'
import AboutFastTrackSection from '@/components/About/AboutFastTrackSection.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    NavBar,
    AboutHeroSection,
    AboutWelcomeSection,
    AboutFastTrackSection,
    Footer
}
}
</script>

<style>

</style>