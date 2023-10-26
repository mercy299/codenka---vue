<template>
  <NavBar dark />
  <Hamburger/>
  <AuthorHero />
  <AuthorProductSummary />
  <AuthorAboutProduct />
  <Footer />
</template>

<script>
import NavBar from '../components/NavBar.vue'
import AuthorHero from '../components/Author/AuthorHero.vue'
import AuthorProductSummary from '../components/Author/AuthorProductSummary.vue'
import AuthorAboutProduct from '../components/Author/AuthorAboutProduct.vue'
import Footer from '@/components/Footer.vue'
import Hamburger from '@/components/Hamburger.vue'
export default {
  components: {
    NavBar,
    Hamburger,
    AuthorHero,
    AuthorProductSummary,
    AuthorAboutProduct,
    Footer
  },
  data() {
    return {
      navbarBackgroundColor: 'white', // Set the default background color
    };
  },
}

</script>

<style></style>