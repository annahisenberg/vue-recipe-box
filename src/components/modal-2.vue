<template>
  <div>
    <b-form-group label="title" label-for="input-1" variant="primary">
      <b-form-input id="input-1" v-model="currentTitle" type="text" placeholder="title"></b-form-input>
    </b-form-group>
    <b-form-group label="ingredients:">
      <b-form-input v-model="currentIngredients" type="text" placeholder="ingredients"></b-form-input>
    </b-form-group>
    <b-form-group label="directions:">
      <b-form-input v-model="currentDirections" type="text" placeholder="directions"></b-form-input>
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

  computed: {
    currentTitle: {
      get: function() {
        return this.$store.getters.currentTitle;
      },
      set: function(val) {
        return this.$store.commit("UPDATE_NEW_TITLE", val);
      }
    },
    currentIngredients: {
      get: function() {
        return this.$store.getters.currentIngredients;
      },
      set: function(val) {
        return this.$store.commit("UPDATE_INGREDIENTS", val);
      }
    },
    currentDirections: {
      get: function() {
        return this.$store.getters.currentDirections;
      },
      set: function(val) {
        return this.$store.commit("UPDATE_DIRECTIONS", val);
      }
    }
  },
  methods: {
    editRecipe() {
      console.log(this.currentTitle);
    }
  }
};
</script>

<style scoped>
input {
  text-align: center;
}
</style>