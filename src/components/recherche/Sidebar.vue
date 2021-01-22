<template>
  <div>
    <v-sheet
      height="700"
      :elevation="4"
      class="pa-8"
      tile
    >
      <h3>Filtres</h3>
      <h4>Matière :</h4>
      <section>
        <v-radio-group
      v-model="data.searchText"
      mandatory
    >
        <v-radio label="Tout" value="Tout"></v-radio>
        <v-radio label="Mathémathique" value="Mathémathique"></v-radio>
        <v-radio label="Français" value="Français"></v-radio>
        <v-radio label="Espagnol" value="Espagnol"></v-radio>
        <v-radio label="SVT" value="SVT"></v-radio>
        <v-radio label="Italien" value="Italien"></v-radio>
        <v-radio label="Physique-Chimie" value="Physique-Chimie"></v-radio>
        <v-radio label="Philosophie" value="Philosophie"></v-radio>
        <v-radio label="Histoire" value="Histoire"></v-radio>
        <v-radio label="Géographie" value="Géographie"></v-radio>
        </v-radio-group>
        </section>     
        
        <hr>
<br>
      <h4>Prix maximum :</h4>
      <section>
        <v-row>
          <v-col>
<v-slider v-model="data.prixMax" max="100" step="1"></v-slider>
          </v-col>
          <v-col md="2" sm="2" >
{{data.prixMax}}€
          </v-col>
        </v-row>  
  </section>

<hr>
<br>
      <h4>Note Minimum :</h4>
<section>
<div class="text-center mt-2">
        <v-rating
          v-model="data.note"
          color="yellow darken-3"
          background-color="grey darken-1"
          half-increments
          hover
        ></v-rating>

        </div>
 </section>
    </v-sheet>





  </div>
</template>

<script>
export default {
  props: {
    resultats: Function,
    data: Object
  },
  data() {
    return {
      prices: [
        'Tout',
        'Mathémathique',
        'Français',
        'Espagnol', 
        'SVT', 
        'Italien', 
        'Physique-Chimie', 
        'Philosophie', 
        'Histoire', 
        'Géographie',
      ],
    }
  }
}
</script>
