<template>
  <v-card
      class="mx-3 my-12 blue-grey lighten-5 card-outter justify-center"
      hover
      max-width="200"
      min-height="200"
      outlined rounded
    >
    <v-img
      :src="card.escudo"
    ></v-img>

    <v-card-title>
      Time
    </v-card-title>

    <v-card-subtitle>
      {{card.nome}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{card.pontos}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
    name:'CardCreation',
    props:['card'],
    data: () => ({
      show: false,
    }),
}
</script>
<style scoped>
</style>