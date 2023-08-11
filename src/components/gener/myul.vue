<template>
   <div class="myul">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0"  >
         <li
         v-for="(item, index) in menus" :key="index"
          class="ms-1 nav-item mb-1"
          >
          <a
           class="nav-link active" 
           aria-current="page" 
           href="item.link"
           >
           {{
            item.title
           }} 
         </a></li>
        </ul>
   </div>
   
</template>
<script setup>
defineProps(
   {
      menus:Array
   }
)
</script>
<style scoped>
 a{
   text-decoration: none;
   color: black;
   font-size: 16px;
   
   font-weight: 600 ;
}

.myul{
   z-index: 999;
}
</style>