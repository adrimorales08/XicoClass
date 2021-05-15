<template>
  <div class="footerHome">
    <v-footer color="#5D576B" padless height="150px">
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
        <v-col class="py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>XicoClass</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
// import  component  from '@/components/foler-name/component.vue'

export default {
  name: "footerHome",
  component: {},
  data: () => {
    return{
      links: ["Inicio", "Apartado Legal", "Equipo", "Acerca De"],
    };
    
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");

.text-redes {
  width: 250px;
}
.subtitle-text {
  font-family: "Montserrat";
  color: white !important;
}
</style>
