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
          <v-card-title class="text-h5">
            {{ user[1] }}
          </v-card-title>
          <v-card-subtitle class="texto">{{ user[3] }}</v-card-subtitle>
          <v-card-actions>
            <v-btn text>
              {{ user[2] }}
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
        v-for="user in losDatos"
        :key="user[user]"
      >
        <v-card class="sizes" color="#f8b725" dark>
          <v-card-title class="text-h5">
            {{ user[1] }}
          </v-card-title>
          <v-card-subtitle class="texto">{{ user[3] }}</v-card-subtitle>
          <v-card-actions>
            <v-btn text>
              {{ user[2] }}
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
        v-for="user in losDatos"
        :key="user[user]"
      >
        <v-card class="sizes" color="#349ff4" dark>
          <v-card-title class="text-h5">
            {{ user[1] }}
          </v-card-title>
          <v-card-subtitle class="texto">{{ user[3] }}</v-card-subtitle>
          <v-card-actions>
            <v-btn text>
              {{ user[2] }}
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
    };
  },
  methods: {
    Obtener() {
      let vue = this;
      fetch("https://xicolass.herokuapp.com/FirstAPI.php?var=othon")
        .then((datos) => datos.json())

        .then((datos) => {
          vue.losDatos = datos;
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
  margin-left: 20px;
  margin-right: 20px;
}
.v-card {
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
