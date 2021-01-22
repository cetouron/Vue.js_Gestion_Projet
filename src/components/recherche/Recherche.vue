 <template>
  <v-sheet
    :height="sheetHeight"
    class="overflow-hidden"
    style="position: relative;"
  >
    <v-container class="fill-height">
      <v-col sm="10" offset-sm="1" md="8" offset-md="2">
      <v-row
          cols="1"
          sm="5"
          md="1"
        >
          <v-text-field
            v-model="data.searchText"
            label="Recherche"
            outlined
          ></v-text-field>

        <v-text-field
            v-model="data.prixMax"
            label="Prix Maximum"
            outlined
          ></v-text-field>
          

    <!--     <v-btn
        color="success"
        outlined
        @click="resultats"
      >
        <v-icon>mdi-book-search</v-icon>
      </v-btn> -->

          <v-checkbox
            v-model="data.ordre"
            label="Ordre"
            outlined
          ></v-checkbox>

        </v-row>
    </v-col>

    </v-container>
  </v-sheet>
</template>

<script>
export default {
  props: {
    resultats: Function,
    data: Object
  }
}
</script>