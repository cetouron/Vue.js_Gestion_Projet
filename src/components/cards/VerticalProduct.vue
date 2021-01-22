<template>
  <v-card
    outlined

  >
    <v-img
      :src="product.image"
      height="200px"
    />

    <v-card-title>
      {{ product.name }}
    </v-card-title>

    <v-card-subtitle>
      ${{ product.price }}
    </v-card-subtitle>

    <v-row justify="center">
    <v-dialog
      v-model="dialog"
      width="1200px"
      hight="1200px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          En savoir plus...
        </v-btn>
      </template>
      <v-card>
       <Profil :product="product" /> 
      </v-card>
    </v-dialog>
  </v-row>
  </v-card>
</template>

<script>
import VueTypes from 'vue-types'
import Profil from '@/components/profil/Profil.vue'

export default {
  components: {
    Profil
  },
  props: {
    product: VueTypes.shape({
      name: VueTypes.string.isRequired,
      price: VueTypes.number.isRequired,
      image: VueTypes.string.isRequired
    }),
    addToCart: VueTypes.func.isRequired,
    i: VueTypes.integer.isRequired
      }
}
</script>
