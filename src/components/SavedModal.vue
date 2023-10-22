<template>
    <div class="modal" id="checkout-modal">
        <div class="card" id="card">
            <span class="close" id="close-btn">&times;</span>
            <h3>CHECKOUT</h3>
            <p>You are about to purchase</p>
            <div class="card-product-summary-head-text">
                <h3 class="product-summary-head-text-first">
                    Neuorphic Soft UI Kit - NEU
                </h3>
            <p class="product-summary-head-text-second">
                    By <span class="span-blue">Delightful Design</span>
                </p>
            </div>
            <hr />
            <p>
                You will be charged
                <span class="span-bold"><strong>NGN15,000</strong></span>
            </p>
            <button>Proceed</button>
        </div>
    <div class="close" @click="$emit('close-modal')">
        x 
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
/* Modal */
.modal {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0;
    left: 0;
    display: none;
    align-items: center;
    justify-content: center;
}

.modal .card button {
    padding: 1em 1em;
    background-color: rgb(3, 76, 188);
    color: rgb(254, 255, 255);
    width: 15em;
    border-radius: 6px;
    font-size: 20px;
    font-weight: 700;
    border: 3px solid rgb(254, 255, 255);
    /* margin: 2em 0; */
    /* text-align: center; */
}

.modal .card {
    background: rgba(255, 255, 255, 1);
    /* Semi-transparent white background */
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 536px;
    height: 456px;
    z-index: 1;
}

.modal .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.modal .close:hover,
.modal .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}</style>