<template>
  <div class="seccionNoticias">
    <v-row class="dobleColumna">
      <v-col cols="12" md="8">
        <h3>.......</h3>
        <v-btn @click="Obtener()"> LLAMAR EL API</v-btn>
      </v-col>
      <v-col cols="12" md="4">
        <h3>{{losDatos}}</h3>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "seccionNoticias",
  data() {
    return {
      losDatos: [],
    };
  },
  methods: {
    
    Obtener() {
      let vue = this;
      fetch("https://xicolass.herokuapp.com/FirstAPI.php?var=othon")
        .then((datos) => datos.json())

        .then((datos) => {
          vue.losDatos = datos[0][8];
          console.log(vue.losDatos) //esto solo muestra
        });
    },

  },

  mounted() {
    
    this.Obtener();

  }
};
</script>

<style scoped>
.seccionNoticias {
  display: block;
  margin-top: 100px;
}

.dobleColumna {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
</style>
