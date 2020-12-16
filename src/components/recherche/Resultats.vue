<template>
  <v-container >

        <h2>Résultats de votre recherche pour {{data.searchText}} <v-btn to="store" text small color="primary">View All</v-btn></h2>


        <v-col>
          <v-row
            sm="12"
            md="4"
            v-for="item in result"
            :key="item.name"
                      >

        <VerticalProduct :product="item" :i="i" :addToCart="addToCart" />

      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
//import VerticalProduct from '@/components/cards/VerticalProduct.vue'

export default {
   props: {
    resultats: Function,
    data: Object
  },
  components: {
    //VerticalProduct
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(['products', 'cart']),
    result: function(){
            return this.products.filter((item) => {
                return item.name.toLowerCase().includes(this.data.searchText.toLowerCase());
            });
        }, 
    searchInLowerCase() {
    return this.data.searchText.toLowerCase().trim();
    },
    itemInLowerCase() {
    return this.products.name.toLowerCase().trim();
    }
  },
  methods: {
    ...mapMutations(['updateSnackbar', 'addItemToCart']),
    addToCart(index, quantity = 1) {
      this.addItemToCart({ itemId: index, quantity })
      this.updateSnackbar({ show: true })
    }
  }
}
</script>

