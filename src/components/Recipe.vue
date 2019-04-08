<template>
  <div id="recipe-container">
    <h2>
      {{ getTitle }}
      <button @click="addRecipe">+</button>
    </h2>
    <div id="form-container" v-if="clicked">
      <form>
        <label>Title</label>
        <input type="text">
        <label>Ingredients</label>
        <input type="text">
        <label>Directions</label>
        <input type="text">
      </form>
    </div>
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
      clicked: false
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
