<template>
    <div>
      <button @click="toggleMenu">☰</button>
      <div v-if="showMenu" class="menu">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/browse">Browse</router-link>
        <router-link to="/author">Become an Author</router-link>
        <!-- Add more menu items as needed -->
      </div>
    </div>
  </template>
  
<script>

  
  export default {
    data() {
      return {
        showMenu: false,
      };
    },
    methods: {
      toggleMenu() {
        this.showMenu = !this.showMenu;
      },
    },
  };
</script>

<style scoped>
/* BurgerMenu.vue */
button {
    position: absolute;
    top: 10px; /* Adjust the top position as needed */
    right: 10px; /* Adjust the right position as needed */
    z-index: 2; /* Set a higher z-index to appear on top */
    background: none;
    border: none;
    font-size: 50px;
    cursor: pointer;
}

.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #023059;
  position: absolute;
  top: 0;
  right: 0;
  width: 830px;
  padding: 60px;
  border-radius: 5px;
  height: 100vh;
}

/* MenuItem.vue */

a {
  color: white;
  text-decoration: none;
  font-size: 58px;
}

a:hover {
  text-decoration: underline;
}

</style>