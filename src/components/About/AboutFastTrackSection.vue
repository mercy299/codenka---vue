<template>
    <section class="section4">
    <div class="content">
    <div class="section4-img">
      <img src="@/assets/img/3d-hand.png" />
    </div>
    <div class="section4-mid-text">
      <p>
        Earn more money on the go.<br />Get started with codenka
      </p>
      <button>Get Started</button>
    </div>
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
  
  justify-content: center;
  background-image: url("@/assets/img/section4-background.svg");
  background-size: 1930px;
  background-color: #efefef;
}
.content{
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3em;
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
  font-weight:700;
  text-align: center;
  line-height: 64px;
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
    padding: 80px 0;
  }
  /* .section4-img {
    width: 420px;
  } */
}
</style>