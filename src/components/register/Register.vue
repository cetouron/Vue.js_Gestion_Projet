<template>
 <div>
    <v-breadcrumbs :items="links">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
   <h1>Création d'un compte</h1>
  <v-card
    class="mx-auto"
    max-width="500"
    outlined
  >
  <div class="text-center mx-16">
    <v-img 
      src="https://simpleicon.com/wp-content/uploads/add-user-256x256.png"
      height="200px"
      width="200px"
      
    ></v-img>
   </div>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
       prepend-icon="mdi-email"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      type="password"
      :counter="20"
      :rules="passwordRules"
      label="Mot de passe"
      prepend-icon="mdi-lock"
      required
    ></v-text-field>

    <v-text-field
      v-model="password2"
      type="password"
      :counter="20"
      :rules="passwor2dRules"
      label="Confirmer le mot de passe"
      prepend-icon="mdi-lock"
      required
    ></v-text-field>

    <v-btn block
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Valider
    </v-btn>
   <br />

    <v-btn block
      color="warning"
      @click="reset"
    >
      Annuler
    </v-btn>
   
  
  </v-form>
  </v-card>


  <br />
   </div>
</template>

<script>
  export default {
    data: () => ({
     links: [{text: 'Home', to: '/'},{text: 'Connexion', to: '/connexion'},{text: 'Enregistrer', to: '/register'}],
      valid: true,
      password: '',
      passwordRules: [
        v => !!v || 'password is required',
        v => (v && v.length <= 20) || 'password must be less than 20characters',
      ],
      password2: '',
      password2Rules: [
        v => !!v || 'password is required',
        v => (v && v.length <= 20) || 'password must be less than 20characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>