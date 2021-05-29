<template>
  <v-container fluid>
    <v-row dense class="">
      <!-- Barra de avisos recientes-->
      <v-col cols="12" xs="6" lg="8" class="">
        <h2 style="color: #f45b69" id="ods">Avisos recientes</h2>
        <hr class="mb-3" color="#f45b69" id="od" />
        <!-- Carta de Avisos-->
        <v-card class="sizes" color="#f45b69" dark>
          <v-card-title class="ods">
            {{ losDatos[1] }}
          </v-card-title>
          <v-card-subtitle class="texto">{{ losDatos[2] }}</v-card-subtitle>
          <v-card-actions>
            <v-btn color="#f45b69" dark v-bind:href="'' + losDatos[5]">
              Enlace
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <!--Columna de Redes sociales-->
      <v-col cols="12" xs="6" lg="4" class="">
        <h2 class="ml-6" style="color: #1565c0">Redes Sociales</h2>
        <v-card class="ml-6" color="#26c6da" dark max-width="400">
          <v-card-title>
            <v-icon large left> mdi-twitter </v-icon>
            <span class="title font-weight-light">Twitter</span>
          </v-card-title>

          <v-card-text class="headline font-weight-bold">
            "Turns out semicolon-less style is easier and safer in TS because
            most gotcha edge cases are type invalid as well."
          </v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  alt=""
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Evan You</v-list-item-title>
              </v-list-item-content>

              <v-row align="center" justify="end">
                <v-icon class="mr-1"> mdi-heart </v-icon>
                <span class="subheading mr-2">256</span>
                <span class="mr-1">·</span>
                <v-icon class="mr-1"> mdi-share-variant </v-icon>
                <span class="subheading">45</span>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "seccionNoticias",
  data() {
    return {
      losDatos: [],
      items: [
        {
          color: "#1F7087",
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Supermodel",
          artist: "Foster the People",
        },
        {
          color: "#952175",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          title: "Halcyon Days",
          artist: "Ellie Goulding",
        },
      ],
    };
  },
  methods: {
    Obtener() {
      let vue = this;
      fetch("https://xicolass.herokuapp.com/FirstAPI.php?var=1&ap=1")
        .then((datos) => datos.json())
        .then((datos) => {
          vue.losDatos = datos[0];
          console.log(vue.losDatos); //esto solo muestra
        });
    },
  },
  mounted() {
    this.Obtener();
  },
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
.sizes {
  min-height: 250px;
  max-height: 250px;
}
.texto {
  height: 150px;
  overflow-y: auto;
}
</style>
