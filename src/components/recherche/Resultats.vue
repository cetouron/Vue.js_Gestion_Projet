<template>
  <v-container >

        <h2>Résultats de votre recherche pour {{data.searchText}} <v-btn to="store" text small color="primary">View All</v-btn></h2>


        <v-col>
          <v-row
            sm="12"
            md="4"
            v-for="item in result.slice(0,6)" 
            :key="item.name"
                      >

             <v-card
              outlined

              >
            <v-img
              :src="item.image"
              height="200px"
            />

            <v-card-title>
              {{ item.name }}
            </v-card-title>

            <v-card-subtitle>
              ${{ item.price }}
            </v-card-subtitle>
          </v-card>

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
     /*   if (this.data.ordre=="ok") {
                this.products.orderBy(this.products.price);

        } */
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

