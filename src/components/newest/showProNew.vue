<template>
  <div  class="item ">
    <div v-for="product in products" :key="product.id">
      <div class="cardPro m-2"  >
         <img class="imgCardPro" :src="product.image" alt="Card image cap">
         <div class="box text-center">
            <h5 class="pt-2 tittlePro">{{ product.name }}</h5>
            <span class="text-danger">
               <span class="toman">تومان</span>
               {{ product.price }} 
            </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: " زده دار2117", price: 180000, image: "https://api.atlasmode.ir/storage/f0de16f3-178e-4c07-97fa-d078e6e773ac/conversions/product-2509-thumb_lg.jpg" },
        { id: 2, name: "نیم تنه تور 2118", price: 145000, image: "https://api.atlasmode.ir/storage/db88717e-b919-43d3-a688-6fd1c73cfb85/conversions/product-2510-thumb_lg.jpg" },
        { id: 3, name: "کت زارا 2119", price: 559000, image: "https://api.atlasmode.ir/storage/47d3959c-390f-49cb-a847-26f789674bd5/conversions/product-2511-thumb_lg.jpg" },
        { id: 4, name: "دامن 2124 ", price: 339000, image: "https://api.atlasmode.ir/storage/0a58f7d1-5867-475a-a7d3-c1d35a3f5e52/conversions/product-2524-thumb_lg.jpg" },
        { id: 5, name: " ژیبه جین 2123", price: 269000, image: "https://api.atlasmode.ir/storage/b864d61a-0e41-412a-9084-f26bc4873ce0/conversions/product-2522-thumb_lg.jpg" },
        { id: 6, name: " تیشرت ترک 2121", price: 185000, image: "https://api.atlasmode.ir/storage/a5b46f7a-4b68-40d4-9441-21e18b8d20ff/conversions/product-2515-thumb_lg.jpg" },
        { id: 7, name: "شورتک جین 2108", price: 175000, image: "https://api.atlasmode.ir/storage/af78cb99-328f-4ade-b643-bb72e9901579/conversions/product-2493-thumb_lg.jpg" },
        { id: 8, name: "شلوار راحتی 2125", price: 175000, image: "https://api.atlasmode.ir/storage/be5d902c-4015-4440-b75d-2be5afc1a088/conversions/product-2520-thumb_lg.jpg" },
        { id: 9, name: "شورتک پیله دار2113", price: 175000, image: "https://api.atlasmode.ir/storage/0800e11e-ae0f-4449-9a6e-d6f4f0098f39/conversions/product-2497-thumb_lg.jpg" },
        { id: 10, name: "نیم تنه زارا 2112", price: 145000, image: "https://api.atlasmode.ir/storage/176c440e-baba-46c1-b35a-e10519b4e7cb/conversions/product-2495-thumb_lg.jpg" },
        { id: 11, name: " شومیز 2111", price: 259000, image: "https://api.atlasmode.ir/storage/22b320af-9d38-4374-9741-626dbef55a21/conversions/product-2494-thumb_lg.jpg" },
        { id: 12, name: "شلوار کارگو 2120 ", price: 459000, image: "https://api.atlasmode.ir/storage/be8aec5a-cade-4ead-8950-bfcfecad25ce/conversions/product-2513-thumb_lg.jpg" },

        // ...
      ]
    }
  },
  methods:{
     productAnim(){

     }
  }
}
</script>

<style scoped>
.item {
	display: grid;
	grid-template-columns: repeat(3,1fr);
	grid-template-rows: repeat(3,.5fr);
	grid-gap: 2px;
}

.cardPro {
   width: 240px;
   height: 423px;
   font-size: 17px;
   font-weight: 700;
   position: relative;
   cursor: pointer;

}

.imgCardPro {
   width: 100%;
   height: 320px;
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


