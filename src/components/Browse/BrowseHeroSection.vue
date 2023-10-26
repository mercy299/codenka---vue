<template>
      <section class="hero-section">
      <div class="content">
        <div class="hero-section-left">
          <p class="hero-section-text">Browse</p>
          <div class="input-search">
            <i class="fa-solid fa-magnifying-glass fg"></i>
            <input
              class="browse-input"
              type="search"
              placeholder="Search Libaries"
            />
          </div>
        </div>
        <div class="hero-section-right">
          <img
            src="@/assets/img/browse-illustration.svg"
            alt="objects"
            width="250px"
          />
        </div>
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.hero-section {
    background-color: #3284e2;
    position: relative;
}
.hero-section .content{
    max-width: 1300px;
    margin: 0px auto;
    padding: 4em 0px;
}
.hero-section-text {
    color: white;
    font-weight: 700;
    line-height: 72px;
    font-size: 64px;
    margin: 0px;
}
.hero-section-left{
    padding: 0 6em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 39px;
}
.hero-section-right{
    position: absolute;
    right: 0px;
    bottom: -4em;
}
.fg{
    padding: 0.1em 0.5em;
    font-size: 25px;
    /* width: 60px; */
    transform: scale(-1, 1);
    color: white;

}
.search{
    display: flex;
    /* width: 5em; */
}
.input-search{
    /* border: 1px solid red; */
    /* height: 20px; */
    padding: 1em 1.6em;
    background-color: #4690e3;
    border-radius: 4px;
    display: inline-flex;
}
.browse-input{
    border: none;
    width: 800px;
    font-size: 20px;
    outline: none;
    background-color: #4690e3;
}
.input-search ::placeholder{
    font-size: 16px;
    color: white;
}
@media screen and (max-width: 850px){
  .browse-input{
    border: none;
    width: 280px;
    font-size: 20px;
    outline: none;
    background-color: #4690e3;
  }
  .hero-section-left{
    padding: 0 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 39px;
}
}
</style>