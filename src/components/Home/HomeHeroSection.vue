<template>
    <section class="hero-section">
      <div class="hero-section-text">
        <h1>Creative UI Kits <br />and Libaries</h1>
        <p>
          Explore more than 2,000 UI Kits and libraries with graphic assets and
          tools for developing websites and apps in niches ranging from gaming
          and dating to ecommerce and professional portfolios
        </p>
        <form class="search">
          <div class="input-search">
            <i class="fa-solid fa-magnifying-glass fg"></i>
            <input type="search" placeholder="Search..." />
          </div>
          <button class="btn">Let's go</button>
        </form>
      </div>
      <div class="hero-section-img">
        <img src="@/assets/img/objects.svg" alt="objects"  />
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped> 
.hero-section{
    display: flex;
    flex-direction:row;
    padding: 3em 5em;
    gap: 1em;
    padding-bottom: 11em;
    background-color: rgb(247, 249, 255);
}
.hero-section-text{
    flex: 25%;
}
.hero-section-img{
    flex: 75%;
}
.hero-section-img img{
  width: 625px;
}
.hero-section-text h1 {
    font-size: 72px;
    font-weight: 700;
    margin: 120px 0 0 0;
    color: rgb(2, 48, 89);
    line-height: 80px;
    letter-spacing: 3px;
}
.hero-section-text p{
    color: rgba(141, 144, 145, 1);
    line-height: 32px;
}
.search{
    display: flex;
}
.btn{
    color: white;
    background-color: rgba(3, 76, 188, 1);
    width: 150px;
    height: 68px;
    border-radius: 12px;
    border: none;
}
input{
    border: none;
    width: 454px;
    font-size: 19px;
    outline: none;
    background-color:rgba(251, 251, 251, 1);
    /* padding: 0 1em; */
}
.fg{
    padding: 0.2em 1em;
    width: 24px;
    transform: scale(-1, 1);
    color: rgba(141, 144, 145, 1);

}
.input-search{
    /* border: 1px solid red; */
    height: 20px;
    padding: 1.5em 0.6em;
    background-color:rgba(251, 251, 251, 1);
    border-radius: 9px;
    display: inline-flex;
}
.input-search ::placeholder{
    font-size: 14px;
    color: rgba(141, 144, 145, 1);
}
@media  screen and (max-width: 10px) {
    body{
        padding: 0;
        margin: 0;
        width: 100%;
        font-family: 'DM Sans';
    }
    .hero-section{
    display: flex;
    padding: 3em 5em;
    gap: 1em;
    /* padding-bottom: 11em; */
    /* background-color: rgb(247, 249, 255); */
    }
    .hero-section-img img{
        width: 234px;
    }
    .hero-section-text{
        width: 261px;
    }
    .hero-section-text h1{
        font-size: 24px;
    }
    .hero-section-text p{
        font-size: 14px;
    }
    .btn{
        width: 120px;
    }
    .search{
        width: 352px;
    }
    .input-search{
        width: 104px;
        padding: 1.5em 2em;
    }
    .section2-img{
        display: none;
    }
    .section2-text h1{
        font-size: 24px;
    }
    .section2-mobile-view-img{
        display: flex;
    }
    .section3-btns{
        display: none;
        /* flex-wrap: wrap; */
    }
    .section3{
        background-color: rgb(228, 233, 254);
    }
    .section3-cards{
        display: block;
    }
    .section3-card-item{
        width: 357px;
        margin: 0% 0 0 0;
        padding: 0%;
    }
    .section4{
        background-color: rgb(216, 226, 254);
        background-image: none;
        /* background-size: 10%; */
    }
    .section4-img{
        display: none;
    }
    .section4-mid-text{
        display: flex;
        width: fit-content;
        border: 1px solid red;
        margin: 0;
    }
    .section4-mid-text p{
        font-size: 38px;
    }
    .section4-flex-text{
        display: flex;
        flex-direction: column;
    }
}
@media  screen and (max-width: 500px) {
    body{
        padding: 0;
        margin: 0;
        width: 100%;
    }
    .hero-section{
        display: flex;
        flex-direction: column-reverse;
    }
    .hero-section-img img{
        width: 234px;
    }
    .hero-section-text{
        width: 261px;
    }
    .hero-section-text h1{
        font-size: 24px;
    }
    .hero-section-text p{
        font-size: 14px;
    }
    .btn{
        width: 120px;
    }
    .search{
        width: 352px;
    }
    .input-search{
        width: 104px;
        padding: 1.5em 2em;
    }
    .section2-img{
        display: none;
    }
    .section2-text h1{
        font-size: 24px;
    }
    .section2-mobile-view-img{
        display: flex;
    }
    .section3-btns{
        display: none;
        /* flex-wrap: wrap; */
    }
    .section3{
        background-color: rgb(228, 233, 254);
    }
    .section3-cards{
        display: block;
    }
    .section3-card-item{
        width: 357px;
        margin: 0% 0 0 0;
        padding: 0%;
    }
    .section4{
        background-color: rgb(216, 226, 254);
        background-image: none;
        /* background-size: 10%; */
    }
    .section4-img{
        display: none;
    }
    .section4-mid-text{
        display: flex;
        width: fit-content;
        border: 1px solid red;
        margin: 0;
    }
    .section4-mid-text p{
        font-size: 38px;
    }
    .section4-flex-text{
        display: flex;
        flex-direction: column;
    }
}
</style>