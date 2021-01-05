<template>
  <v-container>

        <Recherche
        :data="data"
        />

        <Resultats
        :data="data"
        />
        
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
        prixMax: '',
        ordre: false
      }
    }
  },
  components: {
    Recherche,
    Resultats
  }
}
</script>
