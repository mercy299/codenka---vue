<template>
    <section class="product-summary">
      <div class="product-summary-flex">
        <div class="bth-boxes">
          <div class="product-summary-head-text">
            <h3 class="product-summary-head-text-first">
              Neuorphic Soft UI Kit - NEU
            </h3>
            <p class="product-summary-head-text-second">
              By <span class="span-blue">Delightful Design</span>
            </p>
          </div>
          <div class="grey-box"></div>
          <div class="grey-boxes">
            <div class="grey-boxes-item"></div>
            <div class="grey-boxes-item"></div>
            <div class="grey-boxes-item"></div>
            <div class="grey-boxes-item"></div>
            <div class="grey-boxes-item"></div>
            <div class="grey-boxes-item"></div>
            <div class="grey-boxes-item"></div>
            <div class="grey-boxes-item"></div>
            <div class="grey-boxes-item"></div>
          </div>
        </div>
        <div class="product-pricing">
          <p>Compatible with</p>
          <div class="product-pricing-text">
            <p>Sketch</p>
            <p>$27</p>
          </div>
          <div class="product-pricing-text">
            <p>Figma</p>
            <p>$37</p>
          </div>
          <a class="button" id="checkout" @click="openModal">Buy Now</a>
          <hr width="380" />
          <div class="tag">
            <img src="@/assets/img/tag.svg" />
            <p>Tags</p>
            <br />
          </div>
          <div>
            <p class="tag-text">libary website soft neumorphic neumorphism</p>
          </div>
        </div>
       <SavedModal v-show="showModal" @close-modal="showModal = false"/>
      </div>
    </section>
</template>

<script>
import SavedModal from '@/components/SavedModal.vue'
export default {
    components: {
        SavedModal
    },
    data () {
        return {
            showModal: false,
        }
    },
    methods: {
      openModal() {
        this.showModal = true;
      }
    }
}
</script>

<style>
.bth-boxes{
    display: flex;
    row-gap: 10px;
    flex-direction: column;
    flex: 70%;
}
.grey-box{
    height: 540px;
    width: 800px;
    background-color: #FBFBFB;
}
.grey-boxes{
    display: flex;
    gap: 10px;
    /* justify-content: space-between; */
}
.grey-boxes-item{
    height: 54px;
    width: 78px;
    background-color: #FBFBFB;
}
.button{
    color: white;
    background-color: #034CBC;
    padding: 1.3em;
    border: none;
    border-radius: 4px;
    height: 20px;
    text-align: center;
    text-decoration: none;
}
hr{
    color: grey;
    /* width: 450px; */
    margin-top: 22px;
}
.product-summary-flex{
    display: flex;
    padding: 1em 4em;
}
.product-summary-head-text{
    display: flex;
    gap: 19px;
}
.product-summary-head-text-second{
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    padding: 1.8em 0;
}
.span-blue{
    color: #034CBC;
}
.product-summary-head-text-first{
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
}
.product-pricing{
    display: flex;
    flex-direction: column;
    flex: 30%;
}
.product-pricing-text{
    display: flex;
    justify-content: space-between;
}
.tag{
    display: flex;
    gap: 10px;
}
.tag-text{
    color: #034CBC;
    justify-content: space-around;
}
</style>