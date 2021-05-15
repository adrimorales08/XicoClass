<template>
  <div class="navbar">
    <v-app-bar
      color="#5D576B"
      height="100px"
      dense
      fixed
      dark
      class="navbar-generals"
    >
      <!--#region              LOGO -- IZQUIERDA    -->
      <div class="img-logo mx-5">
        <img
          class="mx-10"
          src="@/assets/media/logos/letras.png"
          alt="XICO CLASS"
          width="200"
          height="80"
        />
      </div>
      <v-spacer></v-spacer>

      <!--#endregion-->

      <!--#region            VISTA DEL MENU DE SECCIONES EN WIDE VIEW                          -->
      <div class="hidden-sm-and-down mx-12">
        <v-row justify="space-around">
          <v-menu offset-y dark>
            <template v-slot:activator="{ on, attrs }">
              <div class="menu-text">
                <v-btn href="Home" depressed plain class="menu-text btn-selected">
                  Inicio
                </v-btn>
                <v-btn href="#" depressed plain class="menu-text">
                  Avisos
                </v-btn>
                <v-btn href="/Biblioteca" depressed plain class="menu-text">
                  Biblioteca
                </v-btn>
                <v-btn href="#" depressed plain class="menu-text">
                  Mi Portal
                </v-btn>
                <v-btn
                  depressed
                  plain
                  v-bind="attrs"
                  v-on="on"
                  class="menu-text"
                >
                  Mi Perfil
                </v-btn>
              </div>
            </template>
            <v-list light>
              <v-list-item>
                <v-list-item-title
                  ><v-btn href="#" depressed plain
                    >Mi Perfil</v-btn
                  ></v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  ><v-btn href="#" depressed plain
                    >Cerrar Sesion</v-btn
                  ></v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
        </v-row>
      </div>
      <!--#endregion -->

      <!--#region            VISTA DEL MENU DE SECCIONES EN DISPOSITIVOS MOVILES               -->

      <div class="hidden-md-and-up">
        <v-menu>
          <template v-slot:activator="{ on, att }">
            <v-btn dark plain v-bind="att" v-on="on" rounded>
              <v-icon color="white">mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title
                ><v-btn
                  id="navbar-inicio"
                  class="btn-selected"
                  href="Home"
                  depressed
                  plain
                  >Inicio</v-btn
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><v-btn id="navbar-avisos" href="#" depressed plain
                  >Avisos</v-btn
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><v-btn id="navbar-biblio" href="Biblioteca" depressed plain
                  >Biblioteca</v-btn
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><v-btn id="navbar-portal" href="#" depressed plain
                  >Mi Portal</v-btn
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><v-btn id="navbar-perfil" href="#" depressed plain
                  >Mi Perfil</v-btn
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><v-btn color="red" href="#" depressed plain
                  >Cerrar Sesion</v-btn
                ></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <!--#endregion -->
    </v-app-bar>
  </div>
</template>

<script>
// import  component  from '@/components/foler-name/component.vue'

export default {
  name: "navbar",

  components: {},
  data() {
    return {};
  },
};
</script>

<style>
.navbar {
  display: block;
  height: 100px;
  width: 100%;
}
</style>

<style scoped>
.menu-text {
  color: white !important;
  font-size: 18px !important;
  font-family: "Montserrat", sans-serif;
}
.btn-selected {
  color: #30dba0 !important;
}
</style>
