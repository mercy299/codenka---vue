<template>
    <header>
        <nav :class="{ 'is-dark': dark }">
            <img src="@/assets/img/logo/logo.svg" alt="logo" />
            <ul>
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/browse">Browse</router-link>
                <router-link to="/author">Become an Author</router-link>
            </ul>
            <ul class="nav-signup">
                <!-- <li><a href="signup.html"></a> | <a href="login.html">Login</a></li> -->
                <router-link to="/signup">Sign Up</router-link> |
                <router-link to="/login">Login</router-link>
            </ul>

        </nav>
    </header>
    <router-view />
</template>

<script>
export default {
    props: {
        dark: {
            type: Boolean,
            default: false
        }
    },
}


</script>

<style scoped>
header {
    /* background-color: rgba(141, 144, 145, 1); */
    z-index: 99;
    width: 100%;
    /* position: fixed; */
    transition: .5s ease all;
    color: white;

}

nav {
    display: flex;
    padding: 1em 1em;
    background-color: white;
}

nav.is-dark {
    background-color: #3384e2;
    /* Additional blue background styles */
}

.icon-active {
    transform: rotate(180deg)
}

nav ul {
    list-style-type: none;
    display: flex;
    gap: 30px;
}

nav ul a {
    text-decoration: none;
    color: rgba(141, 144, 145, 1);
    font-weight: 600;
}

nav.is-dark ul a {
    color: #FBFBFB;
}

nav ul a.router-link-exact-active {
    color: #333333;
}

.nav-signup {
    display: flex;
    margin-left: auto;
    color: #023059;
}

.nav-signup a {
    color: #023059;
}

/* nav li.active > a{
        color: black;
}  */

nav ul a:hover {
    color: aqua;
}

nav img {
    width: 140px;
}
</style>