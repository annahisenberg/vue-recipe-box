<template>
  <b-container>
    <b-card bg-variant="info" text-variant="white" id="recipe-container">
      <b-button-group>
        <b-button v-b-modal.modal-1>+</b-button>
        <b-button @click="deleteRecipe">Delete Recipe</b-button>
      </b-button-group>
      <b-modal id="modal-1">
        <b-form-group label="title" label-for="input-1" variant="primary">
          <b-form-input id="input-1" v-model="form.title" type="text" placeholder="title"></b-form-input>
        </b-form-group>
        <b-form-group label="ingredients:">
          <b-form-input
            @change="separateIngredients"
            v-model="form.Ingredients"
            type="text"
            placeholder="ingredients"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="directions:">
          <b-form-input
            @change="separateDirections"
            v-model="form.Directions"
            type="text"
            placeholder="directions"
          ></b-form-input>
        </b-form-group>
        <div slot="modal-footer">
          <b-button @click.prevent="saveNewRecipe">Add Recipe</b-button>
        </div>
      </b-modal>
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
  </b-container>
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
