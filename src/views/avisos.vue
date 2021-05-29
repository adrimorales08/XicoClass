<template>
  <div class="Avisos">
    <navbar></navbar>

    <h2 style="color: #f45b69" id="ods">Hoy</h2>
    <hr color="#f45b69" id="od" />

    <v-row class="margenes">
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="3"
        v-for="user in losDatos"
        :key="user[user]"
      >
        <v-card class="sizes" color="#f45b69" dark>
          <v-card-title class="ods">
            {{ user[1] }}
          </v-card-title>
          <v-card-subtitle class="texto">{{ user[2] }}</v-card-subtitle>
          <v-card-actions>
            <v-btn color="#f45b69" dark v-bind:href="'' + user[5]">
              Enlace
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <h2 style="color: #f8b725" id="ods">Esta semana</h2>
    <hr color="#f45b69" id="od" />
    <v-row class="margenes">
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="3"
        v-for="user in losDatos1"
        :key="user[user]"
      >
        <v-card class="sizes" color="#f8b725" dark>
          <v-card-title class="ods">
            {{ user[1] }}
          </v-card-title>
          <v-card-subtitle class="texto">{{ user[2] }}</v-card-subtitle>
          <v-card-actions>
            <v-btn text>
              {{ user[4] }}
            </v-btn>
            <v-btn color="#f8b725" dark v-bind:href="'' + user[5]">
              Enlace
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <h2 style="color: #349ff4" id="ods">Ultimos meses</h2>
    <hr color="#f45b69" id="od" />
    <v-row class="margenes">
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="3"
        v-for="user in losDatos2"
        :key="user[user]"
      >
        <v-card class="sizes" color="#349ff4" dark>
          <v-card-title class="ods">
            {{ user[1] }}
          </v-card-title>
          <v-card-subtitle class="texto">{{ user[2] }}</v-card-subtitle>
          <v-card-actions>
            <v-btn text>
              {{ user[4] }}
            </v-btn>
            <v-btn color="#349ff4" dark v-bind:href="'' + user[5]">
              Enlace
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <footerHome></footerHome>
  </div>
</template>

<script>
import navbar from "@/components/navbar-home/navbar.vue";
import footerHome from "@/components/footer-home/footer.vue";

export default {
  name: "avisos",

  components: {
    navbar,
    footerHome,
  },
  data() {
    return {
      losDatos: [],
      losDatos1: [],
      losDatos2: [],
    };
  },
  methods: {
    Obtener() {
      let vue = this;
      fetch("https://xicolass.herokuapp.com/FirstAPI.php?var=1&ap=1")
        .then((datos) => datos.json())
        .then((datos) => {
          vue.losDatos = datos;
          console.log(vue.losDatos); //esto solo muestra
        });
    },
    Obtener1() {
      let vue = this;
      fetch("https://xicolass.herokuapp.com/FirstAPI.php?var=1&ap=2")
        .then((datos) => datos.json())
        .then((datos) => {
          vue.losDatos1 = datos;
          console.log(vue.losDatos1); //esto solo muestra
        });
    },
    Obtener2() {
      let vue = this;
      fetch("https://xicolass.herokuapp.com/FirstAPI.php?var=1&ap=3")
        .then((datos) => datos.json())
        .then((datos) => {
          vue.losDatos2 = datos;
          console.log(vue.losDatos1); //esto solo muestra
        });
    },
  },
  mounted() {
    this.Obtener();
    this.Obtener1();
    this.Obtener2();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap");
.v-text-field {
  margin-left: 20px;
  margin-right: 20px;
}
#od {
  margin-left: 20px;
  margin-right: 20px;
  height: 5px;
  color: #f45b69;
}
#ods {
  font-family: "Montserrat";
  margin-left: 20px;
  margin-right: 20px;
}
.v-card {
  font-family: "Montserrat";
  margin-left: 20px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.margenes {
  margin-right: 30px;
  margin-left: 20px;
  min-height: 280px;
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
