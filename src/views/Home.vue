<template>
  <div>
  <NavBar />
  <Hamburger/>
  <home-hero-section />
  <HomeEnrollSection/>
  <HomeFeaturedKits />
  <HomeFastTrackSection />
  <Footer />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Hamburger from '@/components/Hamburger.vue';
import HomeHeroSection from '@/components/Home/HomeHeroSection.vue';
import HomeEnrollSection from '../components/Home/HomeEnrollSection.vue'
import HomeFeaturedKits from '@/components/Home/HomeFeaturedKits.vue';
import HomeFastTrackSection from '@/components/Home/HomeFastTrackSection.vue';
import Footer from '@/components/Footer.vue';
export default {
  components: {
    NavBar,
    Hamburger,
    HomeHeroSection,
    HomeEnrollSection,
    HomeFeaturedKits,
    HomeFastTrackSection,
    Footer
  }
  
};
</script>

<style scoped>

</style>