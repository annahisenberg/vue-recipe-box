<template>
  <b-card bg-variant="info" text-variant="white" id="recipe-container">
    <button v-b-modal.modal-1>+</button>
    <b-modal id="modal-1">
      <form>
        <label>Title</label>
        <input v-model="form.title" type="text">
        <label>Ingredients</label>
        <input @change="separateIngredients" v-model="form.Ingredients" type="text">
        <label>Directions</label>
        <input @change="separateDirections" v-model="form.Directions" type="text">
        <button @click.prevent="saveNewRecipe">Add Recipe</button>
      </form>
    </b-modal>
    <button @click="deleteRecipe">Delete Recipe</button>
    <section>
      <h2>{{ getTitle }}</h2>
      <p>Ingredients:</p>
      <ul>
        <li :key="index" v-for="(ingredient, index) in getIngredients">{{ingredient}}</li>
      </ul>
      <p>Directions:</p>
      <ol>
        <li :key="index" v-for="(direction, index) in getDirections">{{direction}}</li>
      </ol>
    </section>
  </b-card>
</template>

<script>
export default {
  name: "Recipe",
  data() {
    return {
      form: {
        title: "",
        Ingredients: "",
        Directions: ""
      }
    };
  },
  computed: {
    getTitle() {
      return this.$store.getters.currentRecipe.title;
    },
    getIngredients() {
      return this.$store.getters.currentRecipe.Ingredients;
    },
    getDirections() {
      return this.$store.getters.currentRecipe.Directions;
    }
  },
  methods: {
    saveNewRecipe() {
      this.$store.dispatch("saveNewRecipe", this.form);
    },
    separateIngredients() {
      this.form.Ingredients = this.form.Ingredients.split(",");
    },
    separateDirections() {
      this.form.Directions = this.form.Directions.split(",");
    },
    deleteRecipe() {
      this.$store.dispatch("deleteRecipe", this.form);
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
