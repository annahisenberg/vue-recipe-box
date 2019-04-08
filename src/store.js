import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentRecipe: {},
    recipes: [{
        title: 'Artichoke Pasta',
        Ingredients: ['2 tablespoons butter', '2 cloves garlic', '1 cup heavy cream'],
        Directions: ['In a medium saucepan, melt the butter over moderately low heat. Add the garlic and cook for 30 seconds. Stir in the cream, salt, pepper, and artichoke       hearts. Cook until just heated through, about 3 minutes.', 'blah blah blah']
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
    ]
  },
  mutations: {
    UPDATE_CURRENT_RECIPE(state, payload) {
      state.currentRecipe = payload;
    }
  },
  actions: {
    addCurrentRecipe({
      commit
    }, currentRecipe) {
      commit('UPDATE_CURRENT_RECIPE', currentRecipe);
    }
  },
  getters: {
    getCurrentRecipe(state) {
      return state.currentRecipe;
    }
  }
})