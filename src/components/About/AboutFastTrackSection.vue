<template>
    <section class="section4">
    <div class="section4-img">
      <img src="@/assets/img/3d-hand.png" />
    </div>
    <div class="section4-mid-text">
      <p>
        Fast-track your website or app creation <br />process with Codenka
      </p>
      <button>Get Started</button>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.section4{
  /* display: flex; */
  flex-direction: column;
  justify-content: center;
  background-image: url("@/assets/img/section4-background.svg");
  background-size: 1930px;
  background-color: #efefef;
  padding: 3em 0;
  padding-top: 3em;
}
.section4-img{
  display: flex;
  justify-content: center;
}
.section4-mid-text{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section4-mid-text p{
  font-size: 38px;
  font-weight:500;
  text-align: center;
}
.section4 button{
  padding: 1em 1em;
  color: rgb(3, 76, 188);
  background-color: rgb(254, 255, 255);
  width: 15em;
  border-radius: 6px;
  font-size: 20px;
  font-weight: 700;
  border: 3px solid rgb(254, 255, 255);
  /* margin: 2em 0; */
  /* text-align: center; */
}
@media screen and (max-width: 850px) {
  .section4{
    background-color: #d9e2ff;
  }
  .section4-img {
    display: none;
  }
}
</style>