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
                 <img :src= product.image>
     </v-avatar>
         
<br> 
    <h1>    {{ product.name }} </h1>
   
    <v-row align="center"
      justify="center">
    <v-card-actions class="pa-4" align="center">
    <v-spacer></v-spacer>
        <span class="grey--text text--lighten-2 caption mr-1">
      ({{ product.note }}) 
      </span><!--   -->
      <v-rating
        :value= product.note 
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
      {{ product.nbAvis }} avis
      </h4>

<br> 

    <h4 class="black--text text--lighten-2  mr-1">
      {{ product.matiere }}
      </h4>

      <br>

<v-row>
<v-col>
<v-btn class="black--text" color="yellow accent-4">Contacter</v-btn>
</v-col>
<v-col>
<v-btn class="black--text" color="yellow accent-4">Signaler</v-btn>
</v-col>
</v-row>

<br> 
   <h2>Commentaires</h2>


      <v-card
    class="mx-auto elevation-20"
    color="white"
    dark
    align="left" justify="left">
  >

<span class="black--text text--lighten-2 mr-1" align="right" justify="right">
    <span class="font-weight-bold" align="left">
      Boudboule43 : 
      </span>
      {{ product.comm1 }} 
      </span>

  </v-card>
   <br>
        <v-card
    class="mx-auto elevation-20"
    color="white"
    dark
    align="left" justify="left"
  >
>
<span class="black--text text--lighten-2 mr-1" align="right" justify="right">
    <span class="font-weight-bold" align="left">
      Boudboule43 : 
      </span>
      {{ product.comm2 }} 
      </span>

  </v-card>
    <br>
        <v-card
    class="mx-auto elevation-20"
    color="white"
    dark
    align="left" justify="left"
  >
>
<span class="black--text text--lighten-2 mr-1" align="right" justify="right">
    <span class="font-weight-bold" align="left">
      Boudboule43 : 
      </span>
      {{ product.comm3 }} 
      </span>

  </v-card>

        </v-col>   

        </v-card>  


        <v-col
        sm="8"
        md="5"
        align="left"
        justify="center"
        >
<v-col align="center" justify="center">
        <h1 align="center">Formations</h1>

    <span class="black--text text--lighten-2 mr-1" align="center">
      {{ product.formations }} 
      </span>

    <h1 align="center">Bio</h1>

    <span class="black--text text--lighten-2 mr-1" align="center">
      {{product.bio}}  <u><h4 style="font-decoration:underline;">Lire plus, ou fuir...</h4></u>
      </span>


            <h1 align="center">Autre</h1>

    <span class="black--text text--lighten-2 mr-1" align="center">
      {{product.autres}}  <u><h4 style="font-decoration:underline;">Franchement, abondonnez...</h4></u>
      </span>
</v-col>
        </v-col>
    
 </v-row>





  


</template>

<script>


import VueTypes from 'vue-types'


  export default {
    data () {
      return {
        dialog: false,
        rating: '3.2',
        nbAvis:'8',
        comm:"Salut les zamis il est bon ce mec je recommande, a bientôt avec planet sushi",
        comm1:"Cette personne a un sérieux problème... Engagez-le !",
        comm2:"Si je devais donner le nom d'un dessin animé pour résumer... 'Les Zinzins de l'espace', il propose du dentifrice au goûté et a la gueule d'un Bogdanov.",
        form:"Dans la vie je voulais faire de la danse classique de base, bon voyez ça mal tourné, alors aujourd'hui je fais du tutorat. Mais sinon bon alors bah j'ai fait un Bac C. Ouai un Bac C, à vrai dire j'ai 58 ans, donc forcement à un moment ça joue.",
        bio:"Aujourd'hui j'ai donc décidé de me consacré à l'escalde en milieu aquatique. Voyez la dorsale dans l'océan, bah je me dis que bon je pourrais y escalader mais dans le sens inserve des aiguilles du montre. Mon tutorat ça sera plus de la SVT, parce que j'avais une prof et l'époque et elle avait un",
        autre:"Houlà mais je suis torp long j'ai pas pu finir mon histoire dans la premier paragraphe. Qui sont ces développeurs qui ne laissent que 12000 caractères pour se décrire ? Pense t'il une peronne ne se résume qu'en si peu de vie ? Ayez honte, sérieusement. Bon j'en étais ou déjà ? Et oui donc là elle me dit 'Ca va pas se passer comme ça jeune homme.' Et je ne suis sorti de prison que depuis quelques mois." 
      }
    },
    props: {
    product: VueTypes.shape({
      name: VueTypes.string.isRequired,
      price: VueTypes.number.isRequired,
      image: VueTypes.string.isRequired,
      note: VueTypes.number.isRequired,
      formations: VueTypes.string.isRequired,
      bio: VueTypes.string.isRequired,
      autres: VueTypes.string.isRequired,
      comm1: VueTypes.string.isRequired,
      comm2: VueTypes.string.isRequired,
      comm3: VueTypes.string.isRequired,
      comm4: VueTypes.string,
      matiere: VueTypes.string.isRequired,
      nbAvis: VueTypes.number.isRequired,
    }),
    }
  }
</script>