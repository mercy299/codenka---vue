<template>
    <div class="hero-section">
    <div class="content">
      <div class="input-search">
        <i class="fa-solid fa-magnifying-glass fg"></i>
        <input
          class="browse-input"
          type="search"
          placeholder="Search Libaries"
        />
      </div>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.hero-section{
    padding: 3em 6em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 39px;
    background-color: rgb(51, 132, 226);
}
.fg{
    padding: 0.1em 0.5em;
    font-size: 25px;
    /* width: 60px; */
    transform: scale(-1, 1);
    color: white;

}
.input-search{
    /* border: 1px solid red; */
    /* height: 20px; */
    padding: 1em 1.6em;
    background-color: #4690e3;
    border-radius: 4px;
    display: inline-flex;
}
.input-search ::placeholder{
    font-size: 16px;
    color: white;
}
.browse-input{
    border: none;
    width: 800px;
    font-size: 20px;
    outline: none;
    background-color: #4690e3;
}
@media screen and (max-width: 850px) {
    .browse-input{
        width: 400px;
    }
}
</style>