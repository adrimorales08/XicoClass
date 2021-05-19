<template>
  <body>
    <div class="degradado"></div>
    <div class="right">
      <v-icon dark> mdi-arrow-left-bold </v-icon>
      <a href="/" style="color: yellow; text-decoration: underline">
        REGRESAR
      </a>
    </div>
    <div class="center">
      <h1 style="color: #30dba0">INICIA SESION</h1>
      <v-card class="mx-auto px-6" max-width="500" elevation="0" raised>
        <v-card-text>
          <br />
          <div class="descripcion-text">
            INICIA SESION AL SISTEMA COMO UN DOCENTE
          </div>
          <v-form class="login-form">
            <v-text-field
              prepend-icon="mdi-account"
              name="login"
              label="Usuario"
              type="text"
              class="form__input mb-6"
            >
            </v-text-field>
            <v-text-field
              prepend-icon="mdi-lock"
              id="password"
              name="password"
              label="Contraseña"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-btn dark color="red" width="200" class="btn-design" href="/home">
            INICIAR SESION
          </v-btn>
        </v-card-actions>
      </v-card>
      <div class="forgotten-password">
        <forgottenPasswordDocentes></forgottenPasswordDocentes>
      </div>
    </div>
  </body>
</template>

<script>
import forgottenPasswordDocentes from "@/components/dialogs/forgottenPasswordDocentes.vue";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "Landing",
  components: {
    forgottenPasswordDocentes,
  },
  data() {
    return {
      show: false,
      usuario: "",
      contraseña: "",
      submitStatus: null,
    };
  },
  methods: {
    submit() {
      console.log("submit!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
  },

  validations() {
    return {
      form: {
        usuario: {
          email,
          required,
        },
        contraseña: {
          required,
        },
      },
    };
  },
};
</script>

<!-- STYLEEEEEEEEESS -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&family=Poppins:wght@400;500;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat";
}
body {
  margin: 0;
  padding: 0;
  background: url("../../assets/media/backgrounds/background.png");
  height: 100vh;
  overflow: hidden;
}
.degradado {
  background: linear-gradient(120deg, #2b2c2c, #5d4f63);
  height: 100vh;
  opacity: 0.6;
}
.right {
  font-family: "Montserrat";
  color: white;
  font-size: 20px;
  position: absolute;
  top: 2%;
  left: 20px;
}

@media screen and (min-width: 800px) {
  .center {
    position: absolute;
    top: 2px;
    right: 2px;
    width: 550px;
    height: 100vh;
    background: white;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.05);
  }
}
@media screen and (max-width: 800px) {
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 600px;
    background: white;
    border-radius: 10px;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.05);
  }
}

.center h1 {
  text-align: center;
  padding: 20px 0;
  border-bottom: 1px solid silver;
}

.btn-design {
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}

.login-form {
  margin-top: 200px;
  margin-bottom: 50px;
}
@media screen and (max-width: 800px) {
  .login-form {
    margin-top: 50px;
  }
}

.descripcion-text {
  text-align: center;
  font-size: 24px !important;
  font-family: "Montserrat";
}
.forgotten-password {
  position: absolute;
  bottom: 10px;
  margin-left: 30%;
  align-self: auto;
  text-align: center;
  font-size: 16px !important;
}
@media screen and (max-width: 800px) {
  .forgotten-password {
    position: absolute;
    bottom: 10px;
    margin-left: 20%;
    align-self: auto;
    text-align: center;
    font-size: 16px !important;
  }
}
</style>
