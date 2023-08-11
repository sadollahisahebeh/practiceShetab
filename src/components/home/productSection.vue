<template>
   <div class=" d-flex flex-column mb-5   align-items-center">
      <boxfilter></boxfilter>
      <div class="m-5 productEllements ">
         <ellementPro></ellementPro>
      </div>
      <router-link to="/newest">
         <button  type="button" class="px-3 pb-2 rounded-0 border-0 pt-1 bg-dark text-light d-flex flex-column">
            <span>مشاهده محصولات</span>
         </button>
      </router-link>
   </div>
</template>
<script>
import boxfilter from "@/components/home/boxfilter.vue"
import ellementPro from "@/components/ellementPro.vue"

export default {
   components:
   {
      boxfilter,ellementPro
   },

}
</script>
<style scoped>
.productEllements{
   
   padding: 0px;
}
</style>