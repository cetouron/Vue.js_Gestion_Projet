<template>
  <v-container>
    <v-row sm="4" offset-sm="2" xl="4" offset-xl="2">

         <v-col sm="6" offset-sm="3" xl="4" offset-xl="4">
        <Recherche
        :data="data"
        />

        <Resultats
        :data="data"
        />
         </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Recherche from '@/components/recherche/Recherche.vue'
import Resultats from '@/components/recherche/Resultats.vue'

export default {
    data() {
    return {
      data: {
        searchText: 'Nintendo Switch',
        ordre: "ok"
      }
    }
  },
  components: {
    Recherche,
    Resultats
  }
}
</script>
