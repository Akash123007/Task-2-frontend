<template>
  <div>
    <div class="container my-2">
      <div class="row">
        <div
          class="col-4"
          style="overflow-y: scroll; overflow-x: hidden; height: 100px"
        >
          <h1>Latest News</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            exercitationem, ex vel odio placeat distinctio, ut sit magnam fugit
            atque et accusantium sunt mollitia amet molestiae veritatis pariatur
            maiores incidunt delectus nostrum illo, tempore cumque. Quasi
            facilis labore, consequatur voluptatibus officiis sint placeat.
          </p>
        </div>
        <div class="col-8">
          <div class="row">
            <div class="col-5 md-4">
              <h2 class="text-danger">Login</h2>
              <input
                type="text"
                name="login_email"
                placeholder="Your Username*"
                style="width: 50%"
                v-model="login_username"
              />
              <p></p>

              <input
                type="text"
                name="login_password"
                placeholder="Your Password*"
                style="width: 50%"
                v-model="login_password"
              />
              <p></p>

              <button
                class="btn btn-outline-danger"
                v-on:click="login()"
                style="width: 50%"
              >
                Login
              </button>
              <!-- <button ><router-link to="/profile">B</router-link></button>    this.$router.push({name: "Profile"}) -->
            </div>

            <div class="col-1">
              <div class="vr"></div>
            </div>

            <div class="col-6 md-4">
              <h2 class="text-danger">SignUp</h2>
              <input
                class="text-outline-danger"
                type="email"
                name="signup_email"
                placeholder="Your Email*"
                style="width: 50%"
                v-model="register_email"
                required="required"
              />
              <p></p>

              <input
                type="text"
                name="signup_password"
                placeholder="Your Username*"
                style="width: 50%"
                v-model="register_username"
              />
              <p></p>

              <input
                type="text"
                name="confirm_password"
                placeholder="Your Password*"
                style="width: 50%"
                v-model="register_password"
              />
              <p></p>
              <button
                class="btn btn-outline-danger"
                v-on:click="signUp()"
                style="width: 50%"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div>{{this.register_email}}</div>
    <div>{{this.register_username}}</div>
    <div>{{this.register_password}}</div> -->
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "RegisterLogin",
  data() {
    return {
      register_email: "",
      register_username: "",
      register_password: "",
      value: [],

      login_username: "",
      login_password: "",
    };
  },

  methods: {
    getData() {
      console.warn("values:", this.register_username, this.register_password);
      console.log("hello");
    },
    signUp() {
      if (
        this.register_email == " " &&
        this.register_username == " " &&
        this.register_password == " "
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "All field Are required",
          // footer: '<a href="">Why do I have this issue?</a>'
        });
      } else {
        console.log("hello");
        let url = "http://localhost:4887/o/setStudentData";
        axios
          .post(url, {
            EMAIL: this.register_email,
            USERNAME: this.register_username,
            PASSWORD: this.register_password,
          })
          .then((response) => {
            console.log(response.data);
            this.value = response.data;
            if (response.data == true) {
              Swal.fire("You are registered successfully");
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong",
                // footer: '<a href="">Why do I have this issue?</a>'
              });
            }
          })
          .catch(function (err) {
            console.error(err);
          });
      }
    },
    login() {
      let url = "http://localhost:4887/o/getLogin";
      axios
        .post(url, {
          USERNAME: this.login_username,
          PASSWORD: this.login_password,
        })
        .then((response) => {
          console.log(response.data);
          this.value = response.data;
          if (response.data == true) {
            Swal.fire(
              "You are loggged in",

              "ok"
            );
            this.$router.push("profile");
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "You must check your login credential!",
              // footer: '<a href="">Why do I have this issue?</a>'
            });
          }
        })
        .catch(function (err) {
          console.error(err);
        });
    },
  },
};
</script>

<style scoped>
.vr {
  border-left: 2px solid grey;
  height: 100%;
}
</style>
