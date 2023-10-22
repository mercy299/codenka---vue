<template>
    <div :class="['hamburger-container', { opened: navMenu === 'block' }]">
        <div class="hamburger" @click="toggleDiv">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
        <div class="nav-menu" :style="{ display: navMenu }">
            <a href="Blog.html" class="nav-link">Hom</a>
            <a href="work.html" class="nav-link">About</a>
            <a href="contact.html" class="nav-link">Browse</a>
            <a href="contact.html" class="nav-link">Become an Author</a>
            <a href="contact.html" class="nav-link">Blog</a>
            <a href="contact.html" class="nav-link">Sign up</a>
            <a href="contact.html" class="nav-link">Login</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navMenu: 'none',
        };
    },
    methods: {
        toggleDiv() {
            this.navMenu = this.navMenu === 'block' ? 'none' : 'block';
        },
    },
}
</script>

<style>
.hamburger-container.opened {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background: brown;
    z-index: 999;
}

.bar {
    display: block;
    width: 3em;
    height: 0.5em;
    margin: 5px auto;
    transition: all 0.3s ease-in-out;
    background-color: #131344;
    position: relative;
    top: 10;
}

.hamburger.active .bar:nth-child(2) {
    opacity: 0;
}

.hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}

.hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}

.nav-menu {
    margin: 0;
    display: flex;
    flex-direction: column;
    /* height: 100%; */
    padding: 4.75rem 1rem;
    width: 100%;
    z-index: -1;
    gap: 2rem;
    transition: all .3s ease-in-out;
}

.nav-menu a {
    display: block;
    text-decoration: none;
    color: black;
    font-size: 4em;
    font-weight: 400;
}

.nav-menu.active {
    right: 0;
}
</style>