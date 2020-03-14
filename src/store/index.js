import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dgFrutas: [
      { id: 1, nombre: "Manzana", cantidad: 0 },
      { id: 2, nombre: "Pera", cantidad: 0 },
      { id: 3, nombre: "Naranja", cantidad: 0 }
    ]
  },
  getters: {
    getArrayFrutas: (state) => state.dgFrutas
  },
  mutations: {
    aumentar(state, index) {
      state.dgFrutas[index].cantidad++;
    },
    reiniciar(state) {
      state.dgFrutas.forEach((element) => {
        element.cantidad = 0;
      });
    }
  },
  actions: {}
  /*modules: {}*/
});
