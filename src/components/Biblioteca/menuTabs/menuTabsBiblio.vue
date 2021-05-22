<template>
  <div class="menuTabs">
    <!-- VISTA DE LAS TABS EN WIDEVIEW --->
    <div class="hidden-sm-and-down">
      <v-tabs grow class="menu-tabs" color="#30dba0!important">
        <v-tab @click="(texto = 'Materia Impreso'),setImpreso()"> MATERIAL IMPRESO </v-tab>
        <v-tab @click="(texto = 'Material Visual'),setVisual()"> MATERIAL VISUAL </v-tab>
        <v-tab @click="(texto = 'Material Didactico'),setDidactico()"> MATERIAL DIDACTICO </v-tab>
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
                  @click="texto = 'Material Impreso'"
                >
                  Material Impreso
                </v-btn>
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>
                <v-btn
                  class="button-menu"
                  color="red"
                  dark
                  @click="texto = 'Material Visual'"
                >
                  Material Visual
                </v-btn>
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>
                <v-btn
                  class="button-menu"
                  color="red"
                  dark
                  @click="texto = 'Material Didactico'"
                >
                  Material Didactico
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
  name: "menuTabsBiblio",
  data() {
    return {
      texto: "Material",
    };
  },
  methods: {
    setImpreso() {
      this.$store.commit("setImpresoTab");
    },
    setVisual() {
      this.$store.commit("setVisualTab");
    },
    setDidactico() {
      this.$store.commit("setDidacticoTab");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap");
.menu-tabs {
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.button-menu {
  font-family: "Montserrat";
  width: 500px;
  height: 40px;
}
</style>
