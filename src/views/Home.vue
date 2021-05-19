<template>
  <div class="home">
    <navbar></navbar>
    <carousel> </carousel>
    <!--AGREGAR AQUI DISEÑO PARALAX PARA CUANDO HAGA SCROLL HACIA LAS IMAGENES 
    SE BAJE A UN AXIS ESPECIFICO EN Y ; (QUE SE VEAN LAS 2 IMAGENES POR COMPLETO)  -->
    <centerImages class="ml-0 pl-0 mr-0 pr-0"> </centerImages>
    <seccionNoticias></seccionNoticias>
    <div class="spacer"></div>
    <footerHome></footerHome>
  </div>
</template>

<script>
// import  component  from '@/components/foler-name/component.vue'
import navbar from "@/components/navbar-home/navbar.vue";
import footerHome from "@/components/footer-home/footer.vue";
import carousel from "@/components/home/carousel.vue";
import centerImages from "@/components/home/centerImages.vue";
import seccionNoticias from "@/components/home/seccionNoticias.vue";

export default {
  name: "Home",

  components: {
    navbar,
    footerHome,
    carousel,
    centerImages,
    seccionNoticias,
  },
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
.spacer {
  display: block;
  height: 20px;
}
</style>
