<template>
  <div class="misTareas">
    <div class="container" v-for="(item, i) in Tareas" :key="i">
      <v-card elevation="24" class="card-container">
        <v-card-text>
          <v-row>
            <v-col cols="8">
              <p class="display-1 titulo-tarjeta">#{{item[0]}} {{item[1]}}</p>
            </v-col>
            <v-col cols="4" class="status-text">
              <span class="status-label">ESTATUS: </span>
              <span id="estado-text" class="status-label estado-pendiente"
                >PENDIENTE</span
              >
            </v-col>
          </v-row>

          <div class="texto-descriptivo mx-4">
            <span style="font-size: 18px; color: #8e78ec">
              <b>Descripcion:</b>
            </span>
            <p>
              {{item[2]}}
            </p>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-row class="acciones" align-content="space-around">
            <v-col cols="6">
              <span class="texto-material"> MATERIAL ADJUNTO: </span>
              <template>
                <!-- AQUI VA UN: V-FOR -->
                <v-chip class="mx-2" @click="DescargarArchivo(id)">
                  Este Es Un Documento
                </v-chip>
                <v-chip class="ma-2" @click="DescargarArchivo(id)">
                  Este Es Otro Documento
                </v-chip>
              </template>
            </v-col>
            <v-col cols="6">
              <span class="texto-trabajo">MI TRABAJO:</span>
              <!-- AQUI SUBEN EL ARCHIVO -->
              <template v-if="archivos">
                <v-chip class="ma-2">+</v-chip>
              </template>
              <template v-if="archivos == null">
                <v-chip class="ma-2" @click="SubirArchivo()">+</v-chip>
              </template>
              <v-btn class="boton-entregar" color="green" dark>
                Entregar
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "misTareas",
  data() {
    return {
      Tareas: [],
      archivos: null,
    };
  },
  methods: {
    DescargarArchivo() {},
    SubirArchivo() {},
    Tarea() {
      let vue = this;
      fetch("https://xicolass.herokuapp.com/TareasApi.php?ap=1")
        .then((datos) => datos.json())
        .then((datos) => {
          vue.Tareas = datos;
          console.log(vue.Tareas); //esto solo muestra
        });
    },
  },
mounted() {
    this.Tarea();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap");

.title-text {
  font-family: "Montserrat";
  font-weight: 800;
  color: white;
  font-size: 20px;
  margin-left: 20px;
}
.boton-entregar {
  float: right;
  margin-right: 20px;
}
.container {
  width: 100%;
  min-height: 300px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
}
.acciones {
  padding-left: 20px;
  margin-bottom: 10px;
}
.card-container {
  width: 80%;
  min-height: 300px;
  margin-left: auto;
  margin-right: auto;
}
.titulo-tarjeta {
  font-family: "Montserrat";
  font-weight: 800;
}
.status-text {
  text-align: right;
}
.status-label {
  font-family: "Montserrat";
  font-weight: 800;
  color: blue;
  margin-left: 10px;
}
.texto-descriptivo {
  font-family: "Montserrat";
  text-align: justify;
}
.texto-material {
  font-family: "Montserrat";
  font-weight: 800;
  color: #da37a4;
}
.texto-trabajo {
  font-family: "Montserrat";
  font-weight: 800;
  color: #30dba0;
}

/* Estos Estilos Los Aplicaremos Al ID: estado-text  */
.estado-pendiente {
  color: red !important;
}
.estado-entregado {
  color: green !important;
}
</style>
