<template>
  <section>
    <ul>
      <li
        @click="updateCurrentRecipe(recipe)"
        :key="index"
        v-for="(recipe, index) in recipes"
      >{{recipe.title}}</li>
    </ul>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "RecipeList",
  computed: mapState(["recipes"]),
  methods: {
    updateCurrentRecipe(recipe) {
      this.$store.dispatch("addCurrentRecipe", recipe);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
}

li:hover {
  background-color: lightcoral;
  color: white;
  cursor: pointer;
}
</style>
