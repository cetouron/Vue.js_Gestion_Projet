<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 class="text-xs-center">
          <h3>Select a chat to start! Or create yours. </h3>
          <Chats />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import Chats from '@/components/messagerie/Messagerie.vue'
  export default {
    components: {
      Chats
    }
  }
</script>