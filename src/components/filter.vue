<template>
  <b-container>
    <b-form-group>
      <b-form-input v-model="filterValue" placeholder="Search Recipes"></b-form-input>
      <b-button class="m-2" @click="searchRecipes">Search</b-button>
    </b-form-group>
  </b-container>
</template>

<script>
export default {
  name: "FilterRecipes",
  data() {
    return {
      filterValue: ""
    };
  },
  methods: {
    searchRecipes() {
      console.log(this.filterValue);
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
