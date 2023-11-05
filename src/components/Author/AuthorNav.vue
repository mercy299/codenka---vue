<template>
      <nav>
      <img src="@/assets/img/logo/logo.svg" alt="logo" width="150px" />
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="browse.html">Browse</a></li>
        <li class="active"><a href="">Become an author</a></li>
        <li><a>Blog</a></li>
      </ul>
      <ul class="nav-signup">
        <li><a href="signup.html">Sign Up</a> | <a>Login</a></li>
      </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
nav{
    background-color: rgb(51, 132, 226);
}
nav ul a{
    color: white;
}
</style>