<template>
      <section class="signup-section">
      <div class="first-half">
        <div class="signup-logo-img">
          <img src="@/assets/img/logo/logo-full-blue.svg" />
        </div>
        <div>
          <div class="signup-earning-txt">Fund your hustle with</div>
          <div class="signup-img">
            <img src="@/assets/img/logo/Codenká.svg" alt="Codenka-logo-word" />
          </div>
        </div>
        <div class="signup-hand">
          <img
            src="@/assets/img/3d-hand.png"
            alt="Deuces-hand"
          />
        </div>
        <div class="signup-first-bottom">
          <img src="@/assets/img/signupbottom.svg" />
        </div>
      </div>
      <div class="second-half">
        <div class="back-to-home-txt">
          Back to <span class="blue-span"> <a href="/">Home</a></span>
        </div>
        <div class="second-half-mid">
          <h3>Forgot Your Password?</h3>
          <p>
            Kindly provide us with the email address used in creating your account
          </p>
          <!-- <label for="name"> Your name</label> -->
          <div class="form">
            <form>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email Address"
              />
            </form>
          </div>
          <button @click="$router.push('/resetpasswd')" class="forgtpsswd">Let's go</button>
        </div>
        <div>
          <div class="signup-bottom">
            Back to
            <span class="blue-span"><a href="/login">Login</a></span>
          </div>
          <div class="signup-bottomm">
            Need help? <span class="blue-span"><a href="contactsuport.html">Contact Support.</a></span>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
body{
    margin: 0;
    padding: 0;
    font-family: 'DM Sans';
    /* width: 1440px; */
    letter-spacing: 0.1px;
}
.signup-section{
    display: flex;
    height: 100vh;
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