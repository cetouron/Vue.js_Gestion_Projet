<template>

<v-card
    dark
    align="center"
    max-width="400"

  >
  <v-tabs
      v-model="tab"
      background-color="primary"
      dark
      show-arrows
    >
          <v-tabs-slider color="teal lighten-3"></v-tabs-slider>

      <v-tab
        v-for= "item in products"
            :key="item.name"
            >
<v-col> 
    <v-row>
        <v-badge
          color="pink"
          bottom
          dot         
          overlap
         v-if= "item.new == true"
        >
          <v-avatar size="25" >
                 <img :src= item.image>
     </v-avatar> 
        </v-badge>
    
     </v-row>
    <v-row>
     <span> {{item.name}} </span>
</v-row>
</v-col>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in reponse"
        :key="item.idmess"
      >
    <div v-if="item.user === 'me'">
        <v-card flat>
          <v-card-text align='right'>{{ item.content }}</v-card-text>
        </v-card>
    </div>
     <div v-else>
        <v-card flat>
          <v-card-text align='left'>{{ item.content }}</v-card-text>
        </v-card>
    </div>
      </v-tab-item>
    <v-row>
    <v-col>

        
<div class="typer">
          <input type="text" style="width:340px; height:25px; color:black" placeholder="Type here..." v-on:keyup.enter="sendMessage" v-model="content">
        </div>  
</v-col>
<v-col>
        <v-btn icon class="blue--text emoji-panel" @click="toggleEmojiPanel">
            <v-icon>mdi-send</v-icon>
          </v-btn> 
</v-col>
</v-row>
    </v-tabs-items>


</v-card>
         


</template>


<script>

import { mapState } from 'vuex'


  export default {
    data () {
      return {
        dialog: false,
        data: Object,
        tab: null,
        items: [
          { tab: 'One', content: 'Tab 1 Content' },
          { tab: 'Two', content: 'Tab 2 Content' },
          { tab: 'Three', content: 'Tab 3 Content' },
          { tab: 'Four', content: 'Tab 4 Content' },
          { tab: 'Five', content: 'Tab 5 Content' },
          { tab: 'Six', content: 'Tab 6 Content' },
          { tab: 'Seven', content: 'Tab 7 Content' },
          { tab: 'Eight', content: 'Tab 8 Content' },
          { tab: 'Nine', content: 'Tab 9 Content' },
          { tab: 'Ten', content: 'Tab 10 Content' },
        ],
        
        }
    },
      computed: {
    ...mapState(['products', 'cart']),
    message: function(){

return this.products
    },

    reponse: function(){ 


        return "right"
    }

  },
    props: {

    }
  }
</script>