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
  


        <v-btn to="recherche" text>
          <v-icon>mdi-feature-search</v-icon>
          Recherche 
        </v-btn>


<v-tooltip v-model="show" 
           input-activator 
           bottom 
           fixed
           :z-index="zIndex"
           :value="overlay"
           >
      <template v-slot:activator="attrs" bottom>
        <v-btn
          color="primary"
          dark
          @click="mssg()"
        >
        <v-icon>mdi-message</v-icon>
          Message
          </v-btn>
      </template>

      
      <Chat/>  
    </v-tooltip>



    <v-tooltip v-model="showP" 
           input-activator 
           bottom 
           fixed
           :z-index="zIndex"
           :value="overlay"
           >
      <template v-slot:activator="attrs" bottom>
        <v-btn
          dark
          @click="prfl()"
        >
        <v-icon>mdi-account</v-icon>
          Profil Eleve
          </v-btn>
      </template>

      <div v-if="profil='eleve'"> </div>
      <ProfilEleve/>  
      <div v-if="profil='tuteur'"> </div>

    </v-tooltip>

 <v-tooltip v-model="showPT" 
           input-activator 
           bottom 
           fixed
           :z-index="zIndex"
           :value="overlay"
           >
      <template v-slot:activator="attrs" bottom>
        <v-btn
          dark
          @click="prflT()"
        >
        <v-icon>mdi-account</v-icon>
          Profil Tuteur
          </v-btn>
      </template>

      <div v-if="profil='eleve'"> </div>
      <ProfilTuteur/>  
      <div v-if="profil='tuteur'"> </div>

    </v-tooltip>


    <!--     <v-btn @click="show = !show" text>
          <v-icon>mdi-message</v-icon>
          Message
        </v-btn> -->

        
 <!--
        <v-btn to="connexion" text>
          <v-icon>mdi-account</v-icon>
          Connexion
        </v-btn> -->
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
import ProfilEleve from '@/components/profilEleve/ProfilEleve.vue'
import ProfilTuteur from '@/components/profilTuteur/ProfilTuteur.vue'



export default {
  components: {
    Chat,
    ProfilEleve,
    ProfilTuteur
  },
  methods: {
    mssg: function() { this.showP = false; this.showPT = false; this.show = !this.show;},
    prfl: function() { this.show = false; this.showPT = false; this.showP = !this.showP;},
    prflT: function() { this.show = false; this.showP = false; this.showPT = !this.showPT;},

  },
  data() {
    return {
      drawer: false,
      show: false,
      showP: false,
      showPT: false,
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
