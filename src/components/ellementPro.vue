<template>
  <div v-if="products" class="product-list cantainer-fluid  d-flex justify-content-center">
    <product
     v-for="item in products"
      :key="item.id"
      :product="item"
       >
      
    </product>


  </div>
</template>

<script setup>
import product from "./product.vue"
import {useStore} from "vuex"
import {computed} from "vue"
const store=useStore();
let products=computed(
  ()=>{
    return store.getters.getProductsListHome
  }
)
</script>


<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
}



.cardPro {
  height: 500px;
  font-size: 17px;
  font-weight: 700;
  position: relative;
  cursor: pointer;
}

.imgCardPro {
  width: 100%;
  height: 401px;
}

.toman {
  color: rgb(143, 142, 142);
  font-weight: 500;
  font-size: 16px;
}

.box {
  position: absolute;
  width: 100%;
  bottom: 35px;
  background: #fff;
  animation-duration: 0.5s;
  animation-fill-mode: both;

}

.cardPro:hover .box {
  animation-name: slide-top;
  animation-play-state: running;
  animation-delay: 0s;
}

@keyframes slide-top {
  0% {
    height: 30px;
  }
  100% {
    height: 170px;
  }
}
</style>



