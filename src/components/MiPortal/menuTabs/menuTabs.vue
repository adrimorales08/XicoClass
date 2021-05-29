<template>
  <div class="menuTabs">
    <!-- VISTA DE LAS TABS EN WIDEVIEW --->
    <div class="hidden-sm-and-down">
      <v-tabs fixed-tabs class="menu-tabs" color="#30dba0!important">
        <v-tab @click="(texto = 'MIS MATERIAS'), setMaterias()">
          MIS MATERIAS
        </v-tab>
        <v-tab @click="(texto = 'TAREAS'), setTareas()"> TAREAS </v-tab>
        <v-tab @click="(texto = 'MIS DOCUMENTOS'), setDocumentos()">
          DATOS PERSONALES
        </v-tab>
        <v-tab @click="(texto = 'TRAMITES'), setTramites()"> FORMATOS </v-tab>
      </v-tabs>
    </div>
    <!-- VISTA DE LAS TABS EN DISPOSITIVOS MOVILES --->
    <div class="hidden-md-and-up">
      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              elevation="24"
              class="button-menu"
              color="red"
              dark
              v-bind="attrs"
              v-on="on"
            >
              {{ texto }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>
                <v-btn
                  class="button-menu ma-0"
                  color="red"
                  dark
                  @click="(texto = 'MIS MATERIAS'), setMaterias()"
                >
                  MIS MATERIAS
                </v-btn>
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>
                <v-btn
                  class="button-menu"
                  color="red"
                  dark
                  @click="(texto = 'TAREAS'), setTareas()"
                >
                  TAREAS
                </v-btn>
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>
                <v-btn
                  class="button-menu"
                  color="red"
                  dark
                  @click="(texto = 'MIS DOCUMENTOS'), setDocumentos()"
                >
                  DATOS PERSONALES
                </v-btn>
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>
                <v-btn
                  class="button-menu"
                  color="red"
                  dark
                  @click="(texto = 'TRAMITES'), setTramites()"
                >
                  TRAMITES
                </v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "menuTabs",
  data() {
    return {
      texto: "Mis Materias",
    };
  },
  methods: {
    setMaterias() {
      this.$store.commit("setMisMaterias");
    },
    setTareas() {
      this.$store.commit("setMisTareas");
    },
    setDocumentos() {
      this.$store.commit("setMisDocumentos");
    },
    setTramites() {
      this.$store.commit("setMisTramites");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap");
.menu-tabs {
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-weight: 900;
}
.button-menu {
  font-family: "Montserrat";
  width: 500px;
  height: 40px;
  font-weight: 900;
}
</style>
