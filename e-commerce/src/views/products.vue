<template><div>
  <br>
  <br>
    <div class="container-fluid py-8 row " v-if="islogin">
    <div class="d-flex flex-wrap justify-content-between col-10 mx-auto">
      <div class="card my-4" style="width: 15rem;" v-for="(product, index) in products" :key="index"
:product="product" >
        <img class="card-img-top" src="https://dummyimage.com/600x400/000/fff" alt="Card image cap">
        <div class="card-body">
          <h4><a href="#">{{product.name}}</a></h4>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
          <div class="d-flex flex-column">
            <button class="btn btn-success my-2"><i class="fa fa-expand" aria-hidden="true"></i> detail</button>
            <button class="btn btn-info"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import { constants } from 'crypto';
const serverUrl = 'http://localhost:3000'
export default {
  props:['islogin'],
  data(){
    return{
      products  : []
    }
    
    

  },
  created(){
       axios.get(`${serverUrl}/product`)
       .then(({data})=>{
         this.products = data
         
       })
       .catch(err=>{
         console.log(err)
       })




  }

  
}
</script>
