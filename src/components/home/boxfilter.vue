<template>
   <div class="row d-flex pt-5 mt-5 container align-items-center justify-content-between ">
      
      <div
      
      class=" col-lg-6 col-md-9 col-sm-12">
         <button
         :class="{activeBtn:key=='most-sales'}"
         type="button" @click="filter('most-sales')" 
         class=" btnAtlas mx-1 rounded-top border-0  p-2 "
         >پرفروش ترین</button>
         <button
         :class="{activeBtn:key=='discount-product'}"
         type="button" @click="filter('discount-product')" 
         class=" btnAtlas mx-1 rounded-top border-0  p-2 "
         >زده دار</button>
         <button type="button" @click="filter()" 
         class=" btnAtlas mx-1 rounded-top border-0  p-2 "
         >پیشنهادی</button>
         <button type="button" @click="filter()" 
         class=" btnAtlas mx-1 rounded-top border-0  p-2 "
         >تخفیفدار </button>
         <button 
         :class="{activeBtn:key=='new-products'}"
         type="button" @click="filter('new-products')" 
         class=" rounded-top border-0  p-2 new text-light"
         >جدید ترین</button>
      </div>
      <div class="d-flex justify-content-end   col-lg-6 col-md-3 col-sm-12 flex-start ">
         <hr class="border-upj  align-items-center d-none d-md-block">
         <span class="h5 pe-3" style="font-weight : 600;">پیشنهادی اطلس</span>
      </div>
   </div>
</template> 
<script setup>
import {useStore} from "vuex"
import {ref,computed} from "vue"
let key=ref("new-products")
// import {onMounted} from "vue"
const store=useStore();
let listObj=computed(()=>{
   return store.getters.getListOfProductsByKey;
})
function filter(k){
   key.value=k;
   // key===most-sales
   let checker=false;
   console.log(listObj.value);
   for (const keyObj in listObj.value) {
    if(k==keyObj){

      checker=true;
      break;
    }
   }
   if(checker){
      store.commit("setHomeListProducts",listObj.value[k])
   }else{

      store.dispatch("getProductListFromServer",k)
   }

}
filter(key.value)

// onMounted(()=>{

// });
</script>

<style scoped>
.border-upj{
       border-style: solid;
    border-width: 1px;
    border-image: linear-gradient(to left, rgba(0, 0, 0, 0.116) 1%, rgba(2, 8, 8, 0.651) 50%, rgba(0, 0, 0, 0) 100%) 
                  100% 0 100% 0/1px 0 0px 0 stretch;

    width: 350px;
    height: 1px;
    display: flex;
    justify-content: center;
    align-items: center;

}
button{
   font-weight: 600;
}
.btnAtlas{
   background-color: #fff;
   font-size: 16px;
   color: #000;

}
.btnAtlas:hover{
   background: #000;
   color: #fff;
}
.activeBtn {
   background: black !important;
   color: white !important;
}
</style>