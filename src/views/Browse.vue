<template>
    <NavBar/>
    <Hamburger/>
    <BrowseHeroSection/>
    <BrowseFilterAndResults/>
    <Footer/>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Hamburger from '@/components/Hamburger.vue';
import BrowseHeroSection from '../components/Browse/BrowseHeroSection.vue'
import BrowseFilterAndResults from '../components/Browse/BrowseFilterAndResults.vue'
import Footer from '@/components/Footer.vue'
export default {
    components: {
        NavBar,
        Hamburger,
        BrowseHeroSection,
        BrowseFilterAndResults,
        Footer
    }
}
</script>

<style>

</style>