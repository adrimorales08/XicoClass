<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="450">
      <template v-slot:activator="{ on, attrs }">
        <p>
          ¿Olvidaste Tu Contraseña? <br />
          Haz Click
          <a
            v-bind="attrs"
            v-on="on"
            style="color: yellow; text-decoration: underline"
            >Aqui</a
          >
        </p>
      </template>
      <v-card>
        <v-card-title style="font-size: 18px">
          ¿Olvidaste Tu Contraseña?
        </v-card-title>
        <v-card-text style="font-size: 20px"
          >Si olvidaste tu contraseña podemos puedes restablecerla desde tu
          correo electronico, por favor introduce el correo al cual quieres
          restablecer la contraseña a continuacion:
        </v-card-text>

        <div class="input-correo">
          <v-text-field prepend-icon="mdi-email" label="Correo"> </v-text-field>
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="btn-enviar green darken-1" dark @click="dialog = false">
            Enviar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "forgottenPassword",
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style scoped>
.input-correo {
  margin-left: 20px !important;
  margin-right: 40px !important;
}
.btn-enviar {
  margin-right: 20px !important;
  margin-bottom: 10px !important;
}
</style>
