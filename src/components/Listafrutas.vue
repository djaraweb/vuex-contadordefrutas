<template>
  <div>
    <ul class="list-group">
      <li
        v-for="(item,index) of arrayOrdenado"
        :key="item.id"
        class="list-group-item d-flex justify-content-between align-items-center"
        @click="aumentar(index)"
      >
        {{index}} - {{ item.nombre}}
        <span
          class="badge badge-primary badge-pill"
          v-text="item.cantidad"
        ></span>
      </li>
    </ul>
    <br />
    <button class="btn btn-danger btn-block" @click="reiniciar">Reiniciar</button>
    <br />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Listafrutas",
  computed: {
    ...mapGetters(["getArrayFrutas"]),
    arrayOrdenado() {
      return this.getArrayFrutas.sort((a, b) => b.cantidad - a.cantidad);
    }
  },
  methods: {
    ...mapMutations(["aumentar", "reiniciar"])
  }
};
</script>