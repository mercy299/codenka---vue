<template>
    <section class="section2">
      <div class="section2-img">
        <img src="@/assets/img/section2-img.svg" width="577px" />
      </div>
      <div class="section2-text">
        <h1>Enroll as a Codenka Designer</h1>
        <div class="section2-mobile-view-img">
          <img src="@/assets/img/section2-img.svg" width="163px" />
        </div>
        <p>
          Become a part of our community of publishers and get paid doing what
          you love
        </p>
        <div class="section2-text-flex">
          <div class="section2-text-flex-items">
            <img src="@/assets/img/first-section2-tiny.png" alt="" />
            <p>Sign up</p>
          </div>
          <div class="section2-text-flex-items">
            <img src="@/assets/img/first-section2-tiny.png" alt="" />
            <p>Upload your UI Templates or Kits</p>
          </div>
          <div class="section2-text-flex-items">
            <img src="@/assets/img/second-section2-tiny.png" alt="" />
            <p>Name your Price</p>
          </div>
          <div class="section2-text-flex-items">
            <img src="@/assets/img/second-section2-tiny.png" alt="" />
            <p>Get credited for every purchase</p>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
.section2{
    background-color:rgb(251, 252, 255);
    display: flex;
    margin: auto;
    padding: 5em 4em 12em 4em ;
    border-radius: 12px;
}
.section2-img{
    flex: 1;
}
.section2-mobile-view-img{
    display: none;
}
.section2-text-flex-items{
    display: flex;
}
.section2-text{
    flex: 1;
    padding: 3em 0 0 0;
    color: rgba(141, 144, 145, 1);
}
.section2-text h1{
    font-size: 56px;
    color: rgba(2, 48, 89, 1);
}
</style>