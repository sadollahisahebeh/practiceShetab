<template>
   <div class="d-flex justify-content-center">
    <div class="pagination p1">
      <ul>
        <a href="#"><li> .. </li></a>
        <a  href="#"><li>6</li></a>
        <a href="#"><li>5</li></a>
        <a href="#"><li>4</li></a>
        <a href="#"><li>3</li></a>
        <a href="#"><li>2</li></a>
        <a class="is-active" href="#"><li>1</li></a>
        <a href="#"><li>></li></a>
      </ul>
    </div>
   </div>
</template>
<style scoped>


/* GENERAL STYLES */

.pagination{
  padding: 30px 0;
}

.pagination ul{
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.pagination a{
  display: inline-block;
  padding: 10px 18px;
  color: #222;
  text-decoration: none;

}

/* ONE */

.p1 a{
  width: 40px;
  height: 40px;
  line-height: 40px;
  padding: 0;
  text-align: center;
}

.p1 a.is-active{
  background-color: #000000;
  border-radius: 100%;
  color: #fff;
}



</style>