<template>
      <div>
    <v-row class="justify-center">
        <CardCreation v-for="card in clubesLista" :key="card.id" :card="card"/>
    </v-row>
  </div>
</template>
<script>
import CardCreation from "./CardCreation.vue";
export default {
    components: {
    CardCreation,
  },
  data() {
    return {
      clubesLista: [],
    };
  },
  async created() {
    const response = await fetch(
      "https://hackthon-decola.firebaseio.com/clubes-lista.json"
    );
    const converted = await response.json();
    this.clubesLista = converted;
  },
}
</script>
<style scoped>

</style>