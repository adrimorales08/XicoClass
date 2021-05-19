<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
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
        <v-card-text
          >Si olvidaste tu contraseña no te preocupes, siempre puedes
          solicitarle una nueva a tu maestro. utiliza el .... ...
          ..</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            ¡Vale!
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

<style scoped></style>
