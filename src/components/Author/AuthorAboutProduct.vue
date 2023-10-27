<template>
    <section class="about">
    <div class="content">
      <hr />
      <h1>About the Product</h1>
      <p>
        The neumorphic Soft UI Kit for Sketch, Photoshop, Adobe & Figma allows
        you to quickly design any app or <br />
        website. The XD versions do not include nner shadows which are
        incompatible. With more than 50 <br />components and 15 ready-made
        screens
      </p>
      <ul>
        <li><span class="span-black">70+ pixel-perfect components</span></li>
        <li><span class="span-black">15 ready-to-use screens</span></li>
        <li><span class="span-black">Light & dark components</span></li>
        <li>
          <span class="span-black"
            >Use n your favourite software. (Sketch, Figma, PSD)</span
          >
        </li>
        <li><span class="span-black">All future updates</span></li>
      </ul>
    </div>
    <hr />
    </section>
   
</template>

<script>
export default {

}
</script>

<style scoped>
.about{
    padding-left: 5%;
    padding-top: 5%;
    /* width: 55%; */
}
.content{
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0;
}
.about h1{
    color: #023059;
    padding-top: 5%;
}
.about ul li{
    color: #023059;
}
.span-black, .about p{
    color: #8D9091;
}
hr{
  width: 1040px;
}
</style>