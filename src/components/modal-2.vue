<template>
  <div>
    <b-form-group label="title" label-for="input-1" variant="primary">
      <b-form-input id="input-1" :value="currentTitle" type="text" placeholder="title"></b-form-input>
    </b-form-group>
    <b-form-group label="ingredients:">
      <b-form-input
        @change="separateIngredients"
        :value="currentIngredients"
        type="text"
        placeholder="ingredients"
      ></b-form-input>
    </b-form-group>
    <b-form-group label="directions:">
      <b-form-input
        @change="separateDirections"
        :value="currentDirections"
        type="text"
        placeholder="directions"
      ></b-form-input>
    </b-form-group>
    <div slot="modal-footer">
      <b-button @click.prevent="editRecipe">Edit Recipe</b-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ModalTwo",
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
    ...mapGetters([
      "currentRecipe",
      "oneRecipe",
      "currentTitle",
      "currentIngredients",
      "currentDirections",
      "allRecipes"
    ])
  },
  methods: {
    separateIngredients() {
      this.form.Ingredients = this.form.Ingredients.split(",");
    },
    separateDirections() {
      this.form.Directions = this.form.Directions.split(",");
    }
    // editRecipe() {
    //     this.$store.dispatch("editRecipe", this.)
    // }
  }
};
</script>

<style scoped>
input {
  text-align: center;
}
</style>