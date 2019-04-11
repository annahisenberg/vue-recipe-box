<template>
  <b-container>
    <b-modal id="modal-1">
      <modal-one></modal-one>
    </b-modal>
    <b-modal id="modal-2">
      <modal-two></modal-two>
    </b-modal>
    <div v-if="allRecipes.length > 0">
      <b-card
        class="m-2"
        bg-variant="info"
        text-variant="white"
        id="recipe-container"
        v-if="Object.keys(currentRecipe).length > 0"
      >
        <b-button-group>
          <b-button v-b-modal.modal-1>+</b-button>
          <b-button @click="deleteRecipe">Delete Recipe</b-button>
          <b-button v-b-modal.modal-2>Edit Recipe</b-button>
        </b-button-group>

        <b-card-text class="m-2">
          <h2>{{ currentTitle }}</h2>
          <div id="recipe-container">
            <p class="recipe-headers">Ingredients:</p>
            <ul>
              <li :key="index" v-for="(ingredient, index) in currentIngredients">{{ingredient}}</li>
            </ul>
            <p class="recipe-headers">Directions:</p>
            <ol>
              <li :key="index" v-for="(direction, index) in currentDirections">{{direction}}</li>
            </ol>
          </div>
        </b-card-text>
      </b-card>
    </div>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import ModalOne from "./modal-1";
import ModalTwo from "./modal-2";

export default {
  name: "Recipe",
  components: {
    ModalOne,
    ModalTwo
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
    deleteRecipe() {
      this.$store.dispatch("deleteRecipe", this.currentRecipe);
    }
  }
};
</script>

<style scoped>
#recipe-container {
  text-align: left;
}

.recipe-headers {
  font-weight: bold;
}
</style>
