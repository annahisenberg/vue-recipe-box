<template>
  <div id="app">
    <h1>Recipe Box</h1>
    <recipe-list></recipe-list>
    <recipe></recipe>
  </div>
</template>

<script>
import RecipeList from "./components/RecipeList.vue";
import Recipe from "./components/Recipe.vue";

export default {
  name: "app",
  components: {
    RecipeList,
    Recipe
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
