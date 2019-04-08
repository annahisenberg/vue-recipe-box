<template>
  <div id="recipe-container">
    <div id="form-container" v-if="clicked">
      <form>
        <label>Title</label>
        <input v-model="form.title" type="text">
        <label>Ingredients</label>
        <input @change="separateIngredients" v-model="form.Ingredients" type="text">
        <label>Directions</label>
        <input @change="separateDirections" v-model="form.Directions" type="text">
        <button @click.prevent="saveNewRecipe">Add Recipe</button>
      </form>
    </div>
    <h2>
      {{ getTitle }}
      <button @click="addRecipe">+</button>
    </h2>
    <p>Ingredients:</p>
    <ul>
      <li :key="index" v-for="(ingredient, index) in getIngredients">{{ingredient}}</li>
    </ul>
    <p>Directions:</p>
    <ol>
      <li :key="index" v-for="(direction, index) in getDirections">{{direction}}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Recipe",
  data() {
    return {
      clicked: false,
      form: {
        title: "",
        Ingredients: "",
        Directions: ""
      }
    };
  },
  computed: {
    getTitle() {
      return this.$store.getters.getCurrentRecipe.title;
    },
    getIngredients() {
      return this.$store.getters.getCurrentRecipe.Ingredients;
    },
    getDirections() {
      return this.$store.getters.getCurrentRecipe.Directions;
    }
  },
  methods: {
    addRecipe() {
      this.clicked = !this.clicked;
    },
    saveNewRecipe() {
      this.$store.dispatch("saveNewRecipe", this.form);
    },
    separateIngredients() {
      this.form.Ingredients = this.form.Ingredients.split(",");
    },
    separateDirections() {
      this.form.Directions = this.form.Directions.split(",");
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
}

#recipe-container,
#form-container {
  border: 0.2rem solid black;
}
</style>
