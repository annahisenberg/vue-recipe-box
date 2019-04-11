import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentRecipe: {},
    recipes: [{
        title: 'Artichoke Pasta',
        Ingredients: ['2 tablespoons butter', '2 cloves garlic', '1 cup heavy cream'],
        Directions: ['In a medium saucepan, melt the butter over moderately low heat. Add the garlic and cook for 30 seconds. Stir in the cream, salt, pepper, and artichoke hearts. Cook until just heated through, about 3 minutes.', 'blah blah blah']
      },
      {
        title: 'Easy Chocolate Pie',
        Ingredients: ['Evaporated milk', 'instant pudding mix', 'graham cracker pie crust'],
        Directions: ['Pour milk into medium bowl. Add dry pudding mix; beat with wire whisk until well blended and mixture just begins to thicken. Stir in half of the chocolate chips.', 'blah blah blah']
      },
      {
        title: 'Lime Chicken Tacos',
        Ingredients: ['Boneless chicken tacos', 'limes', 'corn tortillas'],
        Directions: ['Saute chicken in a medium saucepan over medium high heat for about 20 minutes. Add vinegar, lime juice, sugar, salt, pepper, green onion, garlic and oregano. Simmer for an extra 10 minutes.', 'blah blah blah']
      }
    ],
    filteredRecipes: {},
    copiedRecipes: []
  },
  mutations: {
    UPDATE_CURRENT_RECIPE(state, payload) {
      state.currentRecipe = payload;
    },
    SAVE_NEW_RECIPE(state, payload) {
      state.recipes.push(payload);
    },
    DELETE_RECIPE(state, payload) {
      let item = state.recipes.indexOf(payload);
      state.recipes.splice(item, 1);
      state.currentRecipe = state.recipes[0];
    },
    FILTER_RECIPES(state, payload) {
      state.copiedRecipes = [...state.recipes];
      state.filteredRecipes = state.copiedRecipes.filter(recipe => {
        return recipe.title.toLowerCase().includes(payload);
      });
    },
    UPDATE_NEW_TITLE(state, payload) {
      let currentTitle = state.currentRecipe.title;
      return state.recipes.forEach(recipe => {
        if (recipe.title === currentTitle) {
          recipe.title = payload;
          console.log(recipe.title)
        }
      });
    },
    UPDATE_INGREDIENTS(state, payload) {
      let currentTitle = state.currentRecipe.title;
      let payloadArray = payload.split(",");

      return state.recipes.forEach(recipe => {
        if (recipe.title === currentTitle) {
          recipe.Ingredients = '';
          recipe.Ingredients = payloadArray;
        }
      });
    }
  },
  actions: {
    addCurrentRecipe({
      commit
    }, currentRecipe) {
      commit('UPDATE_CURRENT_RECIPE', currentRecipe);
    },
    saveNewRecipe({
      commit
    }, newRecipe) {
      commit('SAVE_NEW_RECIPE', newRecipe);
    },
    deleteRecipe({
      commit
    }, recipe) {
      console.log(recipe);
      commit('DELETE_RECIPE', recipe);
    },
    filterRecipes({
      commit
    }, searchValue) {
      commit('FILTER_RECIPES', searchValue);
    }
  },
  getters: {
    currentRecipe(state) {
      return state.currentRecipe;
    },
    currentTitle(state) {
      return state.currentRecipe.title;
    },
    currentIngredients(state) {
      return state.currentRecipe.Ingredients;
    },
    currentDirections(state) {
      return state.currentRecipe.Directions;
    },
    oneRecipe(state) {
      return state.recipes[0];
    },
    allRecipes(state) {
      return state.recipes;
    }
  }
})