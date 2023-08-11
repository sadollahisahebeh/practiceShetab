<template>
   <div class="boxSh   rounded-5 d-flex align-items-center  flex-column justify-content-center">
      <div class="box    px-3  text-center">
         <h5 class="pb-3 text-end fw-bold pt-3">قیمت ها</h5>
         <input type="range" class="col-sm-2 form-range range-cust" value="" data-min="0" data-max="255" data-step="1" data-value="128" data-handle="round" />
         
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
.range-cust::-webkit-slider-thumb {
  background-color: #000;
}

.range-cust::-moz-range-thumb {
  background-color: #000;
}

.range-cust::-ms-thumb {
  background-color: #000;
}

.range-cust::-webkit-slider-runnable-track {
  background-color: #a09f9f;
}

.range-cust::-moz-range-track {
  background-color: #a09f9f;
}

.range-cust::-ms-track {
  background-color: #a09f9f;
}
</style>