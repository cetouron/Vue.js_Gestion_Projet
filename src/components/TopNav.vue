<template>
  <div>
    <v-app-bar>
<v-toolbar-side-icon>
        <v-img src='/img/products/logomin.png'/>
    </v-toolbar-side-icon>  
    
      <v-toolbar-title>Tut'up</v-toolbar-title>
      
      <v-spacer></v-spacer>

      <!-- mobile menu button -->
      <span class="hidden-sm-and-up">
        <v-btn
          @click.stop="drawer = !drawer"
        >
          Menu
        </v-btn>
      </span>

      <!-- desktop & tablet menu -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn to="/" text>
          <v-icon>mdi-home</v-icon>
          Home
        </v-btn>
     <!--      <v-btn to="store" text>
        <v-icon>mdi-store</v-icon>
          Store
        </v-btn> -->
        <v-btn to="cart" text>
          <v-icon>mdi-cart</v-icon>
          Propositions
        </v-btn>


        <v-btn to="recherche" text>
          <v-icon>mdi-feature-search</v-icon>
          Recherche 
        </v-btn>


<v-tooltip v-model="show"  bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          @click="show = !show"
        >
        <v-icon>mdi-message</v-icon>
          Message
          </v-btn>
      </template>
      <Chat/>
    </v-tooltip>



    <!--     <v-btn @click="show = !show" text>
          <v-icon>mdi-message</v-icon>
          Message
        </v-btn> -->

        

        <v-btn to="connexion" text>
          <v-icon>mdi-account</v-icon>
          Connexion
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>



    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon>mdi-{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>





</template>

<script>
import Chat from '@/components/messagerie/Messagerie.vue'

export default {
  components: {
    Chat
  },
  data() {
    return {
      drawer: false,
      show: false,
      items: [
        { title: 'Home', link: '/', icon: 'home' },
        { title: 'Store', link: 'store', icon: 'store' },
        { title: 'Cart', link: 'cart', icon: 'cart' },
        { title: 'Recherche', link: 'recherche', icon: 'feature-search' }
      ]
    }
  }
}
</script>
