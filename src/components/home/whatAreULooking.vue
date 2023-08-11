<template>
   <div class="boxSh  container d-flex  flex-column justify-content-center">
      <div class="box    px-5 pb-4  text-center">
         <h3 class="pb-1 fw-bolder pt-3">به دنبال چه میگردید؟</h3>

         <div class=" px-3 pb-2 pt-1 ">
               <div  class=" col position-relative ">
                  <a href="" class="text-dark">
                     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-search position-absolute" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                     </svg>
                  </a>
                  <input dir="rtl" class="form-control  form-control-lg form-control-borderless" type="search" placeholder="جستجو کنید ....">
               </div>
         </div>
         
      </div>
   </div>
</template>
<style scoped>
.boxSh{
   height: 220px;
   background-color: #f5f5f5;
   border-radius: 55px;
}
.box{
   height: 180px;
   background-color: #ffff;
}
svg{
   bottom: 8px;
   left: 14px;
}
input{
   font-size: 14px;
   border-radius:0px ;
   border: 1px solid rgb(255, 255, 255);
   border-bottom: 1px solid rgb(109, 108, 108);
  
}
input:focus{
    border-color: rgb(255, 255, 255);
    border-bottom: 1px solid rgb(109, 108, 108);
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>