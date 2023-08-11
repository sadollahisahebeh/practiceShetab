<template>
    <div class="product-item">
        <div class="cardPro  m-2 ">
            <img class="imgCardPro" :src="product.major_image.url" alt="Card image cap">
            <div class="box text-center">
              <h5 class="pt-2 tittlePro">{{ product.title }}</h5>
              <span class="text-danger">
                <span class="toman">تومان</span>
                {{ product.major_final_price.amount }} 
              </span>
            </div>
          </div>
    </div>
</template>
<script setup>
defineProps({
    product:Object
})
</script>