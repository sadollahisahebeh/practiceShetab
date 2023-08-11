<template>
   <div class="d-flex hh flex-column justify-content-center ">
    <searchFilter class="my-2"></searchFilter>
    <titlenewest class="my-2"></titlenewest>
    <size class="my-2 "></size>
    <displymode class="my-2"></displymode>
    <price class="my-2"></price>
    <button class="my-2 border  border-0 py-2 px-5 bg-dark text-light">اعمال فیلتر</button>
   </div>
</template>
<script>
import searchFilter from "@/components/newest/searchFilter.vue"
import titlenewest from "@/components/newest/titlenewest.vue"
import size from "@/components/newest/size.vue"
import displymode from "@/components/newest/displymode.vue"
import price from "@/components/newest/price.vue"



export default {
   components:
   {
      searchFilter,
      titlenewest,
      size,
      displymode,
      price,
   }
}
</script>
<style scoped>

</style>

