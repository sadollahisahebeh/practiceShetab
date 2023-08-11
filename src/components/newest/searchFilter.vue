<template>
   <div dir="rtl" class="boxSh   rounded-5 d-flex align-items-center  flex-column justify-content-center">
      <div class="box    px-2  text-center">
         <h5 class=" pt-3">فیلتر جستجو</h5>
         <hr>
         <div class=" px-3 d-flex flex-column ">
            <h6 class="text-end fw-bold">دسته بندی ها</h6>
            <ul class="">
               <li class="px-1"><a href="#" class="text-danger"> همه دسته بندی ها</a></li>
               <li class="px-1"><a href="#">زنانه</a></li>
               <li class="px-1"><a href="#">مردانه</a></li>
               <li class="px-1"><a href="#">زده دار</a></li>
               <li class="px-1"><a href="#">کفش</a></li>
            </ul>
         </div>
         
      </div>
   </div>
</template>
<style scoped>
.boxSh{
   height: 280px;
   background-color: #f5f5f5;
   width: 330px;
}
.box{
   height: 250px;
   width: 310px;
   background-color: #ffff;
}
a{
   text-decoration: none;
   color: rgb(0, 0, 0);
   font-size: 16px;
}
ul{
  
   text-align: right;
   width: 250px;
}

li{
  width: 180px;   
  list-style:none; 
  
}
li:hover{
   list-style:disc; 
   font-weight:600;
   transition: 0.5s;
}
</style>