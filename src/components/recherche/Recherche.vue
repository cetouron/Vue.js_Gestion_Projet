 <template>
  <v-sheet
    :height="sheetHeight"
    class="overflow-hidden"
    style="position: relative;"
  >
    <v-container class="fill-height">
      <v-row
          cols="12"
          sm="56"
          md="143"
        >
          <v-text-field
            v-model="data.searchText"
            label="Recherche"
            outlined
          ></v-text-field>


   <!--         <v-checkbox
            v-model="data.ordre"
            label="Ordre"
            outlined
          ></v-checkbox>

         <v-btn
        color="success"
        outlined
        @click="resultats"
      >
        <v-icon>mdi-book-search</v-icon>
      </v-btn> -->
        </v-row>


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