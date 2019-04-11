<template>
  <div>
    <b-container>
      <b-form-group>
        <b-form-input v-model="filterValue" placeholder="Search Recipes"></b-form-input>
        <b-button-group class="m-1">
          <b-button @click="searchRecipes">Search</b-button>
          <b-button @click="seeAllRecipes">See All Recipes</b-button>
        </b-button-group>
      </b-form-group>
    </b-container>

    <div v-if="showAllRecipes">
      <b-container>
        <b-card bg-variant="warning">
          <b-list-group>
            <b-list-group-item
              class="m-1 li"
              :class="{ active: recipe === currentRecipe}"
              @click="updateCurrentRecipe(recipe)"
              :key="index"
              v-for="(recipe, index) in allRecipes"
            >{{recipe.title}}</b-list-group-item>
          </b-list-group>
        </b-card>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "FilterRecipe",
  data() {
    return {
      filterValue: "",
      showAllRecipes: false
    };
  },
  computed: {
    ...mapGetters(["allRecipes"])
  },
  methods: {
    searchRecipes() {
      this.$store.dispatch("filterRecipes", this.filterValue);
    },
    seeAllRecipes() {
      this.filterValue = "";
      this.$store.dispatch("filterRecipes", this.filterValue);
    }
  }
};
</script>

<style scoped>
input {
  text-align: center;
}
</style>
