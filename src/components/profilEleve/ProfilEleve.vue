<template>



          <v-row>
<v-card
    class="mx-auto elevation-20"
    color="blue"
    dark
    align="center"
    max-width="600"
    sm="12"
    md="12"
    lg="12"
  >
        <v-col
    
        >

    <v-avatar size="136" align="center">
                 <img src= "img/products/livre.jpg">
     </v-avatar>
         
<br> 
    <h1>  Gérard </h1>
   
    
    <h4 class="black--text text--lighten-2  mr-1">
      2 avis laissés
      </h4>

 
<br> 

    <v-btn-toggle
        v-model="text"
        tile
        color="deep-purple accent-3"
        group
      >
        <v-btn value="parent">
          Parent
        </v-btn>

        <v-btn value="eleve">
          Elève
        </v-btn>

      </v-btn-toggle>

        <v-col
          cols="12"
          class="text-center"
          v-if="text=='parent'"
        >
        <v-text-field
            v-model="nomEnf1"
            :rules="nameRules"
            label="Nom de l'enfant :"
            required
        ></v-text-field>
        <v-textarea
        v-model="description1"
        auto-grow
        filled
        color="deep-purple"
        label="Sa description"
        rows="1"
      ></v-textarea>

      <v-text-field
            v-model="nomEnf2"
            :rules="nameRules"
            label="Nom de l'enfant :"
            required
        ></v-text-field>
        <v-textarea
        v-model="description2"
        auto-grow
        filled
        color="deep-purple"
        label="Sa description"
        rows="1"
      ></v-textarea>


    <v-icon large color="blue darken-2">mdi-plus</v-icon> <span large color="blue darken-2"> Ajouter un enfant</span>


        </v-col>

        <v-col
          cols="12"
          class="text-center"
          v-if="text=='eleve'"
        >

    <v-textarea
        v-model="description"
        auto-grow
        filled
        color="deep-purple"
        label="Ma description"
        rows="1"
      ></v-textarea>


        </v-col>


        </v-col>   

        </v-card>  


  
    
 </v-row>


</template>


<script>




  export default {
    data () {
      return {
        dialog: false,
        text: 'parent'
        }
    },
    props: {
    
    }
  }
</script>