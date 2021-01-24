<template>



          <v-row>
<v-card
    class="mx-auto elevation-20"
    color="blue"
    dark
    align="center"
    max-width="320"
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
    <h1>  Murielle </h1>
   
        <v-row align="center"
      justify="center">
    <v-card-actions class="pa-4" align="center">
    <v-spacer></v-spacer>
        <span class="grey--text text--lighten-2 caption mr-1">
      (3.2) 
      </span><!--   -->
      <v-rating
        :value= '3.2'
        background-color="black"
        color="yellow accent-4"
        readonly
        dense
        half-increments
        hover
        size="35"
      ></v-rating>

      
    </v-card-actions>
</v-row>

    <h4 class="black--text text--lighten-2  mr-1">
      12 avis
      </h4>

 
<br> 

<v-col
       
        >
          <v-select
            v-model="value"
            :items="items"
            chips
            label="Matières"
            multiple
            outlined
          ></v-select>
        </v-col>


           <v-col
          cols="12"
          class="text-center"
        >

    <v-textarea
        v-model="bio"
        auto-grow
        filled
        color="deep-purple"
        label="Ma bio"
        rows="1"
      ></v-textarea>

      <v-textarea
        v-model="formation"
        auto-grow
        filled
        color="deep-purple"
        label="Mes formations"
        rows="1"
      ></v-textarea>

    <v-textarea
        v-model="autre"
        auto-grow
        filled
        color="deep-purple"
        label="Autre"
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
        text: 'parent',
        items: ['Mathémathique', 'Français',  'Anglais', 'Espagnol', 'SVT', 'Italien', 'Physique-Chimie', 'Philosophie', 'Histoire', 'Géographie'],
        value: ['Mathémathique', 'Italien', 'Physique-Chimie', 'Géographie'],
        }
    },
    props: {
    
    }
  }
</script>