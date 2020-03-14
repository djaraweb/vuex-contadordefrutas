<template>
  <div id="app" class="container">
    <Cabecera />
    <Listafrutas />
  </div>
</template>

<script>
import Cabecera from "./components/Cabecera.vue";
import Listafrutas from "./components/Listafrutas.vue";
export default {
  name: "App",
  components: {
    Cabecera,
    Listafrutas
  }
};
</script>
