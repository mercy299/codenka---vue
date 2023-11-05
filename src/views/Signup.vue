<template>
    <section class="signup-section">
      <div class="first-half">
        <div class="signup-logo-img"><img src="@/assets/img/logo/logo-full-blue.svg" /></div>
        <div>
          <div class="signup-earning-txt">Start earning with
          </div>
         <div class="signup-img"> <img src="@/assets/img/logo/Codenká.svg" alt="Codenka-logo-word" />
         </div>
        </div>
        <div class="signup-hand">
          <img src="@/assets/img/3d-hand.png" alt="3d-hand" />
        </div>
        <div class="signup-first-bottom"><img src="@/assets/img/signupbottom.svg" /></div>
      </div>
      <div class="second-half">
        <div class="back-to-home-txt">
          Back to <span class="blue-span"> <a href="/">Home</a></span>
        </div>
        <h3>Create your Account</h3>
        <p>
          Kindly provide us with these details to aid in creating your
          accounting
        </p>
        <!-- <label for="name"> Your name</label> -->
        <form>
          <input
            type="text"
            id="profession"
            name="profession"
            placeholder="What is your prrofession*"
          />
          <input type="text" id="name" name="name" placeholder="Full Name*" />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email Address*"
          />
          <input
            type="text"
            id="twitter"
            name="twitter"
            placeholder="Twitter Handle"
          />
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Password*"
          />
        </form>
        <div class="subscribe">
          <input
            type="checkbox"
            name="subscribe"
            id="subscribe"
            value="subscribe"
          />
          <label for="subscribe">
            By signing up, you agree to the Terms and Conditions and Privacy
            Policy. You also agree to recieve product-related marketing emails
            from Codenka, which you can unsubscribe from at any time.</label
          >
        </div>
        <button>Create your account</button>
        <div class="signup-bottom">Alredy have an account? <span class="blue-span"><a href="/login">Login</a></span></div>
        <div class="signup-bottom">Need help? <span class="blue-span">Contact Support.</span></div>
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.signup-section{
    display: flex;
    height: 100vh;
    letter-spacing: 0.1px;
}
.first-half{
    display: flex;
    flex-direction: column;
    background-color:#F2F2F2 ;
    flex: 1;
    height: 100%;
}
input ::placeholder{
    color: #8D9091;
}
input:not(input[type=checkbox]){
    background-color: #FBFBFB;
    height: 56px;
    width: 430px;
    border-radius: 4px;
    margin-bottom: 30px;
    border: none;
    padding: 0 1em;
}
/* input:not(input[type=checkbox]) {
    background: black !important;
} */
.signup-earning-txt{
    line-height: 22px;
    font-size: 28px;
    text-align: center;
    margin: 1em 0;
}
.signup-logo-img{
    margin: 3em 7em;
}
.signup-img{
    text-align: center;
}
.signup-hand{
    text-align: center;
    margin: 5em 0;
}
/* .signup-first-bottom{
    margin-bottom: 0;
} */
.second-half{
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 6em;
    color: grey;
    overflow: auto;
    justify-content: space-between;
}
.second-half h3{
    color: #023059;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
}
.subscribe{
    margin-bottom: 3em;
    /* color: grey; */
    text-align: center;
    line-height: 27px;
    font-size: 14px;
    font-weight: 400;
}
.back-to-home-txt{
    /* display: flex; */
    margin-left: auto;
}
form{
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
}
.form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
}
button:not(button[class=forgtpsswd]){
    background-color: rgba(3, 76, 188, 1);
    padding: 1.2em 7em;
    width: auto;
    border-radius: 8px;
    border: none;
    color: white;
    font-size: 19px;
    line-height: 20px;
    font-weight: 700;
    margin-bottom: 2em;
    align-self: center;
}
.forgtpsswd{
    background-color: rgba(3, 76, 188, 1);
    padding: 1.2em 10em;
    width: auto;
    border-radius: 8px;
    border: none;
    color: white;
    font-size: 19px;
    line-height: 20px;
    font-weight: 700;
    margin-bottom: 2em;
    align-self: center;
}
.signup-bottom{
    /* color: grey; */
    text-align: center;
    margin-bottom: 2em;
}
.signup-bottomm{
    /* color: grey; */
    text-align: center;
    /* margin-top: 10em; */
    margin-bottom: 1em;
}
.blue-span{
    color: #034cbc;
    font-size: 16px;
    font-weight: 700;
}
.blue-span a{
    text-decoration: none;
}
.blue-span a:visited{
    color: #034cbc;
}
</style>