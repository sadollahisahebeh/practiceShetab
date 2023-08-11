<template>
   <div class="boxSh   rounded-5 d-flex align-items-center  flex-column justify-content-center">
      <div class="box    px-3 pb-2  text-center">
         <h5 class=" pt-3 text-end fw-bold">حالت نمایش</h5>
         <hr>
         <div class="d-flex flex-row-reverse"> 
            <input type="checkbox" id="switch" />
            <label for="switch">Toggle</label>	&nbsp;
             <span> فقط کالاهای موجود </span>
         </div>
      </div>
   </div>


</template>
<style scoped>
.boxSh{
   height: 170px;
   background-color: #f5f5f5;
   width: 330px;
}
.box{
   height: 150px;
   width: 310px;
   background-color: #ffff;
}

input[type=checkbox]{
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: 50px;
  height: 25px;
  background: black;
  display: block;
  border-radius: 100px;
  position: relative;
}

label:after {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  width: 16px;
  height: 16px;
  background: #fff;
  border-radius: 90px;
  transition: 0.3s;
}

input:checked + label {
  background: grey;
}

input:checked + label:after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}

label:active:after {
  width: 70px;
}
</style>
         
