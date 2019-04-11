<template>
  <div>
    <b-form-group label="title" label-for="input-1" variant="primary">
      <b-form-input id="input-1" v-model="form.title" type="text" placeholder="title"></b-form-input>
    </b-form-group>
    <b-form-group label="ingredients:">
      <b-form-input
        @change="separateIngredients"
        v-model="form.Ingredients"
        type="text"
        placeholder="ingredients -- separate with a comma"
      ></b-form-input>
    </b-form-group>
    <b-form-group label="directions:">
      <b-form-input
        @change="separateDirections"
        v-model="form.Directions"
        type="text"
        placeholder="directions -- separate with a comma"
      ></b-form-input>
    </b-form-group>
    <div slot="modal-footer">
      <b-button @click.prevent="saveNewRecipe">Add Recipe</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalOne",
  data() {
    return {
      form: {
        title: "",
        Ingredients: "",
        Directions: ""
      }
    };
  },
  methods: {
    separateIngredients() {
      this.form.Ingredients = this.form.Ingredients.split(",");
    },
    separateDirections() {
      this.form.Directions = this.form.Directions.split(",");
    },
    saveNewRecipe() {
      this.$store.dispatch("saveNewRecipe", this.form);
    }
  }
};
</script>

<style scoped>
input {
  text-align: center;
}
</style>