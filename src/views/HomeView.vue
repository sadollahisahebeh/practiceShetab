<template >
   <h1>
      <router-link to="/products">
         برو به لیست محصولات ما
      </router-link>
   </h1>
  <div id="app ">
     <header>
        <mynav  class=" "></mynav>
        <slider class="w-100 slider d-none d-sm-block"></slider>
     </header>

   <section class=" justify-content-center d-flex flex-column align-items-center">
         <whatAreULooking class="container"></whatAreULooking>
         <productSection class=""></productSection>
         
   </section>  

  </div>
</template>
<script>

 import slider from "@/components/home/slider.vue"
import mynav from "@/components/gener/mynav.vue"
import whatAreULooking from "@/components/home/whatAreULooking.vue"
import productSection from "@/components/home/productSection.vue"




export default {
   components:
   {
      slider,
      mynav,
      whatAreULooking,
      productSection
   },
}

</script>
<style scoped>

header{
   padding: 0%;
   height: 750px;
}

</style>
