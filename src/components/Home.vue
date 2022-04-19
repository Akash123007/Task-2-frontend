<template>
  <div>
    <Header />
    <div class="app">
      <carousel @next="next" @prev="prev">
        <carousel-slide
          v-for="(slide, index) in slides"
          :key="slide"
          :index="index"
          :visibleSlide="visibleSlide"
        >
          <img :src="slide" />
        </carousel-slide>
      </carousel>
      <div><CarouselSlide /></div>
      >
      <div>
        <RegisterLogin />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Carousel from "./Carousel.vue";
import CarouselSlide from "./CarouselSlide.vue";
import RegisterLogin from "./RegisterLogin.vue";
import Footer from "./Footer.vue";
export default {
  name: "HomeComponent",
  data() {
    return {
      slides: [
        "https://picsum.photos/id/238/1110/350",
        "https://picsum.photos/id/237/1110/350",
        "https://picsum.photos/id/239/1110/350",
        "https://picsum.photos/id/240/1110/350",
      ],
      visibleSlide: 0,
    };
  },
  computed: {
    slidesLen() {
      return this.slides.length;
    },
  },
  methods: {
    next() {
      if (this.visibleSlide >= this.slidesLen - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
      }
    },
    prev() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLen - 1;
      } else {
        this.visibleSlide--;
      }
    },
  },
  components: {
  Header,
  Carousel,
  CarouselSlide,
  RegisterLogin,
  Footer,
  }
};
</script>
