<template>
  <v-container>
<v-row>
      <v-col sm="4.2" md="4" lg="4" offset-lg="1">
        <Sidebar :data="data"/>
        </v-col>
      <v-col sm="7" md="7" lg="7">
        <Resultats :data="data"/>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import Sidebar from '@/components/recherche/Sidebar.vue'
import Resultats from '@/components/recherche/Resultats.vue'

export default {
    data() {
    return {
      data: {
        searchText: "",
        prixMax: '',
        ordre: false,
        note: 0
      }
    }
  },
  components: {
    Sidebar,
    Resultats
  }
}
</script>
