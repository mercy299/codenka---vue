<template>
  <footer>
    <div class="footer-top">
      <img src="@/assets/img/logo/logo-light.svg" alt="logo" width="150px" />
      <div>
        <i class="fa-regular fa-copyright"></i> 2021 Codenka. All rights
        reserved
      </div>
    </div>
    <div class="footer-ul">
      <div class="footer-product">
        <ul>
          <li>Product</li>
          <li>Overview</li>
          <li>Features</li>
          <li>Tutorials</li>
          <li>Pricing</li>
          <li>Releases</li>
        </ul>
      </div>
      <div class="footer-company">
        <ul>
          <li>Company</li>
          <li>About</li>
          <li>Press</li>
          <li>Careers</li>
          <li>Contact</li>
          <li>Partners</li>
        </ul>
      </div>

      <div class="footer-support">
        <ul>
          <li>Support</li>
          <li>Help Center</li>
          <li>Terms of service</li>
          <li>Legal</li>
          <li>Privacy Policy</li>
          <li>Status</li>
        </ul>
      </div>
      <div class="footer-follow">
        <ul>
          <li>Follow Us</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Dribble</li>
          <li>Instagram</li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
  display: flex;
  background-color: #0b0d17;
  color: white;
  padding: 4em 0;
}
.footer-top {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* justify-content: center; */
  align-items: center;
  margin-top: 6.5em;
}
.footer-ul ul :first-child {
  color: rgb(3, 76, 188);
  font-size: 20px;
  margin-bottom: 15px;
  /* display: flex; */
  /* flex-direction: column; */
}
.footer-ul {
  display: flex;
  flex: 3;
  justify-content: space-around;
  align-items: center;

  /* gap: 30px; */
}
.footer-ul ul {
  list-style-type: none;
  line-height: 230%;
}
@media screen and (max-width: 850px) {
  footer {
    display: flex;
    flex-direction: column;
    padding: 2em 0;
  }
  /* .footer-ul:nth-child(n + 2){
    display: inline;
  } */

  /* Add any other styles you need for the list items and links */
  footer .footer-ul {
    flex-wrap: wrap;
    max-width: 80%;
    margin: 0 auto;
  }

  footer .footer-ul [class^="footer-"],
  footer .footer-ul [class*="footer-"] {
    flex-basis: 50%;
  }
  .footer-ul{
    text-align: center;
  }
}
</style>
