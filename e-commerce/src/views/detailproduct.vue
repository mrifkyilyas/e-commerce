<template>
    <div>
        <br>
        <br>
        <br>
            <div class="card text-left col-10 mx-auto py-10">
                <div class="card d-flex flex-row align-self-stretch">
                <div class="col-4">
                    <img :src="product.image" width="300px" height="450px">

                </div>

                <div class="col-8">
                    <article class="card-body p-5">
                    <h3 class="title mb-3">{{product.name}}</h3>

                    <p class="price-detail-wrap">
                        <span class="price h3 text-warning">
                        <span class="currency">Rp.</span><span class="num">{{product.price}}</span>
                        </span>
                       
                    </p> <!-- price-detail-wrap .// -->
                    <dl class="item-property">
                        <dt>seller : {{product.seller.name}}</dt>
                    </dl>
                     <dl class="item-property">
                        <dt>stock: {{product.quantity}} piece</dt>
                    </dl>


                    <hr>
                    <div class="row">
                        <div class="col-sm-5">
                        <dl class="param param-inline">
                            <dt>Quantity: </dt>
                            <dd>
                            <select class="form-control form-control-sm" style="width:70px;">
                                <option> 1 </option>
                                <option> 2 </option>
                                <option> 3 </option>
                            </select>
                            </dd>
                        </dl> <!-- item-property .// -->
                        </div> <!-- col.// -->
                        <div class="col-sm-7">
                        <!-- item-property .// -->
                        </div> <!-- col.// -->
                    </div> <!-- row.// -->
                    <hr>
                    <a href="#" class="btn btn-lg btn-success"> Add To Cart </a>
                    </article> <!-- card-body.// -->


                </div>



                </div> <!-- row.// -->
            </div> <!-- card.// -->
        <br>
        <br>
        <br>
    </div>
</template>

<script>
import axios from 'axios'
import { constants } from 'crypto';
const serverUrl = 'http://localhost:3000'
export default{
  name: 'addProduct',
  data(){
      return {
          product: {}
          


      }
  },
  mounted(){
    // console.log($route.params.id)
        axios.get(`${serverUrl}/product/${this.$route.params.id}`,{
         headers:{
           access_token : localStorage.access_token
         }
       })
       .then(({data})=>{
         console.log(data)
        this.product = data
        
         
         })
       .catch(err=>{
         console.log(err)
       })
     
  
  },
    methods:{
        
   }

}
</script>


