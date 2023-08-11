<template>
  <h1 v-if="!sliders">loader</h1>
  <template v-else>
    <swiper
      :slides-per-view="1"
      :space-between="50"
      @swiper="swiperInit"
      @slideChange="slideChanged"
    >
      <swiper-slide 
      v-for="(item, index) in sliders" :key="index"
      >
         <router-link to="/">
          <img :src="item.image.url" :alt="item.title">
         </router-link>
      </swiper-slide>
      
    </swiper>
  </template>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import {routes} from "../../router/index.js"
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    // function findUrl(slider){
    //   let res="/";
    //   return {path:}
    // }
    let store = useStore();
    let sliders = computed(() => {
      return store.getters.getSliders;
    });
    if(!sliders.value){
      store.dispatch("getSlidersFromServer");
    }
  
    return {
      sliders,
      onSwiper,
      onSlideChange,
    };
  },
};
</script>
<style scoped>
.slider{
  top: 0;
}
</style>
