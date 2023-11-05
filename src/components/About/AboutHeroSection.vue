<template>
    <section class="hero-section">
      <p class="hero-section-text">About Us</p>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.hero-section{
    background-image: url(@/assets/img/Group.svg);
    background-color: rgba(2, 48, 89, 1);
    height: 404px;
    display: flex;
    justify-content: center;
    /* text-align: center; */
}
.hero-section-text{
    color: rgba(255, 255, 255, 1);
    align-self: center;
    font-size: 56px;
    font-weight: 700;
    justify-content: center;
    text-align: center;
}
</style>