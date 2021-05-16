<template>
  <div class="avisos">
      <navbar></navbar>
    <v-card>
    <v-tabs
      color="deep-purple accent-4"
      right
    >
      <v-tab>Hoy</v-tab>
      <v-tab>Esta semana</v-tab>
      <v-tab>Ultimos meses</v-tab>

      <v-tab-item
        v-for="n in 3"
        :key="n"
      >
       <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          src="@/assets/media/logos/letras.png"
          aspect-ratio="6"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 >Aqui va el título del aviso</h3>
            <div class="headline mb-0"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Comentar</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
      </v-tab-item>
    </v-tabs>
  </v-card>



    <footerHome></footerHome>
  </div>
</template>

<script>
import navbar from '../components/navbar-home/navbar.vue';
import footerHome from "@/components/footer-home/footer.vue";

export default {
  name: "avisos",
components: {
    navbar,
    footerHome,
  },
};

</script>

<style scoped>

</style>
