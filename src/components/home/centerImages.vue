<template>
  <div class="center-info">
    <v-row align-content="space-around" class="my-0 py-0">
      <v-col cols="12" sm="12" align-self="center" class="my-0 py-0">
        <v-card flat>
          <v-img
            class="img-borders"
            src="@/assets/media/holders/1600x500.png"
            max-height="500px"
            max-width="80%"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row align-content="space-around" class="my-0 py-0">
      <v-col cols="12" sm="12" align-self="center" class="my-0 py-0">
        <v-card flat>
          <v-img
            class="img-borders"
            src="@/assets/media/holders/1600x500.png"
            max-height="500px"
            max-width="80%"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "centerImages",
  data() {
    return{

    };
  },
};


</script>

<style scoped>
.center-info {
  margin-top: 10px;
  display: block;
}
.spacer {
  display: block;
  height: 20px;
}
.img-borders {
  margin-right: auto !important;
  margin-left: auto !important;
}
</style>
