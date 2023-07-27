import {createStore} from 'vuex';


const state = {
  user: null
};

export default createStore({
  // Sobre getters, actions y mutations, leer esto:
  // https://medium.com/@abuoop123/why-getters-mutations-actions-in-vuex-store-77069710d2d5

  state,
  getters: {
    // Obtiene el valor actual del estado
    user: state => {
      return state.user;
    }
  },
  actions: {
    // Cambia el valor del estado, pero se cambia realmente en el mutations
    user(context, user) {
      // El comando context.commit() es el trigger para el mutations
      // e.g. Aquí se pide el método user() y el valor de user
      context.commit('user', user);
    }
  },
  mutations: {
    // Es llamado por el actions para modificar el estado del getters
    user(state, user) {
      state.user = user;
    }
  },
  modules: {
    
  },
});
