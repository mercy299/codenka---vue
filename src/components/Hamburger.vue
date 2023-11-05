<template>
    <div class="hamburger">
      <button @click="toggleMenu">☰</button>
      <div v-if="showMenu" class="menu">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/browse">Browse</router-link>
        <router-link to="/author">Become an Author</router-link>
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
button {
    position: absolute;
    top: 10px; 
    right: 10px; 
    z-index: 2; 
    background: none;
    border: none;
    font-size: 50px;
    cursor: pointer;
}

.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* justify-content: center; */
  background-color: #023059;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  padding-top: 60px;
  border-radius: 5px;
  height: 100vh;
  z-index: 1;
}



a {
  color: white;
  text-decoration: none;
  font-size: 58px;
}

a:hover {
  text-decoration: underline;
}

</style>