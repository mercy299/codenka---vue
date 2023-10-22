<template>
    <NavBar/>
    <BrowseHeroSection/>
    <BrowseFilterAndResults/>
    <Footer/>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import BrowseHeroSection from '../components/Browse/BrowseHeroSection.vue'
import BrowseFilterAndResults from '../components/Browse/BrowseFilterAndResults.vue'
import Footer from '@/components/Footer.vue'
export default {
    components: {
        NavBar,
        BrowseHeroSection,
        BrowseFilterAndResults,
        Footer
    }
}
</script>

<style>

</style>