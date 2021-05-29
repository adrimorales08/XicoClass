<template>
  <div class="MiPerfil">
    <navbar></navbar>
    <v-container class="pa-4">
      <v-row class="my-6">
        <v-col
        cols="12"
        class="tam-card estilo-card "
        >
        <v-avatar
        class="">
          <img src="@/assets/media/logos/CaraNiña.png">
        </v-avatar>
        <v-simple-table height="400px" class="deep-purple accent-2 mt-12" >
          <template v-slot:default>
            <thead>
              <tr >
                <th class="titulo-tabla text-left ">
                  Campos
                </th>
                <th class="titulo-tabla text-left">
                  Datos
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in datos" :key="item.campo" class="subtitulo">
              <td :bgcolor="getColor(item.id)" >{{item.campo}}</td>
              <td :bgcolor="getColor(item.id)" >{{item.dato}}</td>
            </tr>
            </tbody>
          </template>
        </v-simple-table> 
    
        </v-col>
      </v-row>

    </v-container>
  

  <footerHome></footerHome>
  </div>
</template>

<script>
import navbar from "@/components/navbar-home/navbar.vue";
import footerHome from "@/components/footer-home/footer.vue";

export default {
  name: "MiPerfil",
  data() {
    return {
      datos: [
        {
          id:1,
          campo: 'Matricula',
          dato: '167O00561',
        },
        {
          id:2,
          campo: 'Nombre del alumno',
          dato: 'Susana Distancia',
        },
        {
          id:3,
          campo: 'Curp',
          dato: 'MOVO970604HVZ',
        },
        {
          id:4,
          campo: 'Fecha de nacimiento',
          dato: '16/04/2018',
        },
        {
          id:5,
          campo: 'Grupo',
          dato: '3º grado',
        },
        {
          id:6,
          campo: 'Padre de familia o Tutor',
          dato: 'Elmer Homero',
        },
        {
          id:7,
          campo: 'En caso de emergencia llamar:',
          dato: '2283534791',
        },
      ]
    };
  }, 
  components: {
    navbar,
    footerHome,
  },
  methods: {
    getColor (id){
      if(id % 2 == 0) return '#4527A0'
      else return '#7C4DFF'
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap");

/* Proiedades Layout */
.tam-card{
  width: 1478px;
  height: 800px;
}
/* UI */
.estilo-card{
  background-color: #7C4DFF;
  box-shadow: 4px 6px 3px #00000029;
  border: 1px solid #707070;
  border-radius: 55px;
  opacity: 1;
}
.titulo{
  font-family: "Montserrat";
  font-weight: 800;
  font-size: 34;
  color: white;
}
.subtitulo{
  font-family: "Montserrat";
  font-weight: 800;
  font-size: 30;
  color: white;
}
.titulo-tabla{
  font-family:'Montserrat';
  font-weight: 800;
  font-size: 40;
  color:white;
}

</style>
