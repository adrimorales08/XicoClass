<template>
  <div class="carousel">
    <v-carousel height="600px" show-arrows-on-hover>
      <v-carousel-item
        v-for="(item, i) in itemsCarousel"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "carousel",

  data() {
    return {
      itemsCarousel: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>

<style>
.carousel {
  display: block;
}
</style>

<style scoped></style>
>
