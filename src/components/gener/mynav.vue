<template>
  <nav class="navbar container navbar-expand-lg">
    <div class="container-fluid p-0 d-flex flex-row-reverse">
      <a class="navbar-brand" href="#"><logo /></a>
      <button
        class="navbar-toggler m-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse p-4" id="navbarSupportedContent">
        <mybtns />
        <myul v-if="menus" :menus="menus" />
        <!-- skeleton in vuejs -->
        <!-- <myul v-show="false" :menus="menus" /> -->
      </div>
    </div>
  </nav>
</template>
<script setup>
import logo from "@/components/gener/logo.vue";
import mybtns from "@/components/gener/mybtns.vue";
import myul from "@/components/gener/myul.vue";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
let menus = computed(() => {
  return store.getters.getMenus;
});
// if(menus!=null){
if(!menus.value){
store.dispatch("getMenusFromServer")

}
</script>
<style>
nav {
  height: 80px;
  z-index: 999;
  padding: 0px;
}
</style>
