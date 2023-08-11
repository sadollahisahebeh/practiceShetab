<template>
   <div >
      <boxfilterNew />
      <showProNew />
      <buttonsBox></buttonsBox>
   </div>
</template>
<script>
import boxfilterNew from "@/components/newest/boxfilterNew.vue"
import showProNew from "@/components/newest/showProNew.vue"
import buttonsBox from "@/components/newest/buttonsBox.vue"
showProNew
export default {
   components:
   {
      boxfilterNew,showProNew,buttonsBox
   },

}
</script>
<style scoped>

</style>