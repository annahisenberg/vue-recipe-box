<template>
  <b-container>
    <b-card bg-variant="warning">
      <b-list-group v-if="Object.keys(filteredRecipes).length > 0">
        <b-list-group-item
          class="m-1 li"
          :class="{ active: recipe === currentRecipe}"
          @click="updateCurrentRecipe(recipe)"
          :key="index"
          v-for="(recipe, index) in filteredRecipes"
        >{{recipe.title}}</b-list-group-item>
      </b-list-group>
      <b-list-group v-else>
        <b-list-group-item
          class="m-1 li"
          :class="{ active: recipe === currentRecipe}"
          @click="updateCurrentRecipe(recipe)"
          :key="index"
          v-for="(recipe, index) in recipes"
        >{{recipe.title}}</b-list-group-item>
      </b-list-group>
    </b-card>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "RecipeList",
  computed: mapState(["recipes", "filteredRecipes"]),
  data() {
    return {
      currentRecipe: {}
    };
  },
  methods: {
    updateCurrentRecipe(recipe) {
      this.currentRecipe = recipe;
      this.$store.dispatch("addCurrentRecipe", recipe);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.li {
  cursor: pointer;
}
</style>
