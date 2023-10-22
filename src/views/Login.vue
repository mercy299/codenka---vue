<template>
    <section class="signup-section">
      <div class="first-half">
        <div class="signup-logo-img"><img src="@/assets/img/logo/logo-full-blue.svg" /></div>
        <div>
          <div class="signup-earning-txt">Fund your hustle with
          </div>
         <div class="signup-img"> <img src="@/assets/img/logo/Codenká.svg" alt="Codenka-logo-word" />
         </div>
        </div>
        <div class="signup-hand">
          <img src="@/assets/img/Dueces-hand.png" alt="Deuces-hand" width="240px"/>
        </div>
        <div class="signup-first-bottom"><img src="@/assets/img/signupbottom.svg" /></div>
      </div>
      <div class="second-half">
        <div class="back-to-home-txt">
          Back to <span class="blue-span"> <a href="/">Home</a></span>
        </div>
       <div class="second-half-mid">
        <h3>Login to your Account</h3>
        <p>
          Fill the form to access your account
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
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Password"
          />
        </form>
        </div>
        <button>Login to your account</button>
        <div class="signup-bottom">Don't have an account? <span class="blue-span"><a href="/signup">Sign Up</a></span></div>
       </div>
       <div> 
        <!-- <div class="signup-bottomm">Need help? <span class="blue-span">Contact Support.</span></div> -->
       <div class="signup-bottomm">Forgotten Password? <span class="blue-span"><a href="/forgotpasswd">Click Here.</a></span></div>
        </div>
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
    background-color:#F2F2F2 ;
    flex: 1;
}
input ::placeholder{
    color: #8D9091;
}
#email, #profession, #twitter, #password, #name{
    background-color: #FBFBFB;
    height: 56px;
    width: 520px;
    border-radius: 4px;
    margin-bottom: 30px;
    border: none;
    padding: 0 1em;
}
.signup-earning-txt{
    line-height: 22px;
    font-size: 28px;
    text-align: center;
    margin: 2em 0;
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
.signup-first-bottom{
    margin-top: 9em;
}
.second-half{
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 5em;
    color: grey;
    margin-bottom: 0;
}
.second-half h3{
    color: #023059;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    margin-top: 10em;
}
.subscribe{
    /* margin-bottom: 3em; */
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
}
button{
    background-color: rgba(3, 76, 188, 1);
    padding: 1.2em 9em;
    border-radius: 8px;
    border: none;
    color: white;
    font-size: 19px;
    line-height: 20px;
    font-weight: 700;
    margin-bottom: 2em;
}
.signup-bottom{
    /* color: grey; */
    text-align: center;
    margin-bottom: 2em;
}
.signup-bottomm{
    /* color: grey; */
    text-align: center;
    margin-top: 1em;
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