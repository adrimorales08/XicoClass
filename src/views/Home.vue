<template>
  <div class="home">
    <navbar></navbar>
    <carouselHome> </carouselHome>
    <!--AGREGAR AQUI DISEÑO PARALAX PARA CUANDO HAGA SCROLL HACIA LAS IMAGENES 
    SE BAJE A UN AXIS ESPECIFICO EN Y ; (QUE SE VEAN LAS 2 IMAGENES POR COMPLETO)  -->
    <centerImages> </centerImages>
    <seccion-noticias> </seccion-noticias>
    <div class="spacer"></div>
    <footerHome></footerHome>
  </div>
</template>

<script>
// import  component  from '@/components/foler-name/component.vue'
import navbar from "@/components/navbar-home/navbar.vue";
import footerHome from "@/components/footer-home/footer.vue";
import carouselHome from "@/components/home/carousel.vue";
import centerImages from "@/components/home/centerImages.vue";
import SeccionNoticias from "../components/home/seccionNoticias.vue";

export default {
  name: "Home",

  components: {
    navbar,
    footerHome,
    carouselHome,
    centerImages,
    SeccionNoticias,
  },
  data() {
    return {};
  },
};
</script>

<style>
.spacer {
  display: block;
  height: 20px;
}
</style>
