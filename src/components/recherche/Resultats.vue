<template>
  <v-container >

      <v-col sm="10" offset-sm="1" md="8" offset-md="2">
        <h2>Résultats de votre recherche pour {{data.searchText}} <v-btn to="store" text small color="primary">View All</v-btn></h2>
      </v-col>

        <v-row>
          <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
          <v-row>
          <v-col
            sm="6"
            md="4"
            v-for="(item, i) in result" 
            :key="item.name"
                      >

             <VerticalProduct :product="item" :i="i" :addToCart="addToCart" />
  </v-col>
      </v-row>
    </v-col>
     </v-row> 
  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import VerticalProduct from '@/components/cards/VerticalProduct.vue'

export default {
   props: {
    resultats: Function,
    data: Object
  },
  components: {
    VerticalProduct
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(['products', 'cart']),
    result: function(){

      var produits = this.products;
      var prixMa;
    
      if (this.data.prixMax == '') {

       prixMa = 10000000;
      }
      else 
      {
       prixMa = this.data.prixMax;
      }


       if (this.data.ordre==true) {
                produits.sort(function(a, b) { return a.price - b.price;});

        } 

            return produits
            .filter((item) => {
                return item.name.toLowerCase().includes(this.data.searchText.toLowerCase()); })
            .filter((item) => { return item.price < prixMa})

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

