<template>
  <div class="MiPortal">
    <navbar></navbar>
    <div class="tabs">
      <menuTabs></menuTabs>
    </div>
    <div class="AccionWindow">
      <v-window v-model="$store.state.portalStep">
        <v-window-item :value="1">
          <misMaterias></misMaterias>
        </v-window-item>
        <v-window-item :value="2">
          <misTareas></misTareas>
        </v-window-item>
        <v-window-item :value="3">
          <misDocumentos></misDocumentos>
        </v-window-item>
        <v-window-item :value="4">
          <misTramites></misTramites>
        </v-window-item>
      </v-window>
    </div>

    <footerHome></footerHome>
  </div>
</template>

<script>
import navbar from "@/components/navbar-home/navbar.vue";
import footerHome from "@/components/footer-home/footer.vue";
import menuTabs from "@/components/MiPortal/menuTabs/menuTabs.vue";
import misMaterias from "@/components/MiPortal/windows/misMaterias.vue";
import misTareas from "@/components/MiPortal/windows/misTareas.vue";
import misDocumentos from "@/components/MiPortal/windows/misDocumentos.vue";
import misTramites from "@/components/MiPortal/windows/misTramites.vue";

export default {
  name: "MiPortal",
  data() {
    return {};
  },
  components: {
    navbar,
    footerHome,
    menuTabs,
    misMaterias,
    misTareas,
    misDocumentos,
    misTramites,
  },
  mounted() {},
};
</script>

<style scoped></style>
