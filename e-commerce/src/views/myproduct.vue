<template>
    <div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
         <div class="container-fluid py-8 row ">
    <div class="card text-left col-6 mx-auto py-10">
        <router-link to="/addproduct">
          <a class="btn btn-info text-light" >addproduct</a>
          </router-link>
      
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">no</th>
              <th scope="col">name</th>
              <th scope="col">quantity</th>
              <th scope="col">image</th>
              <th scope="col">price</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(myproduct,index) in myproducts"  :key="index">
              <td>{{index+1}}</td>
              <td>{{myproduct.name}}</td>
              <td>{{myproduct.quantity}}</td>
              <td><img :src="myproduct.image" height="30px"></td>
              <td>{{myproduct.price}}</td>
              <td><a href="#" class="btn btn-danger"  @click="deleteProduct(myproduct._id)">delete</a>
              <router-link :to="{ name: 'updateproduct', params: { id: myproduct._id }}">
                <a href="#" class="btn btn-info">update</a>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <br>
  <br>
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
      myproducts  : [],
     
    }    
  },
  created(){

           axios.get(`${serverUrl}/product/sell`,{
         headers:{
           access_token : localStorage.access_token
         }
       })
       .then(({data})=>{
         console.log(data)
         this.myproducts = data
        
         
         })
       .catch(err=>{
         console.log(err)
       })
     
  
  },
  methods:{
       deleteProduct(id) {
            axios
                .delete(serverUrl + '/product/' + id,{
                  headers:{
                    access_token : localStorage.access_token
                  }
                })
                .then(({ data }) => {
                  this.getAllProducts()
                  console.log('berhasil dihapus')                   

                })
                .catch((err) => {
                    console.log(err)
                })
     },
     getAllProducts(){
            axios.get(`${serverUrl}/product/sell`,{
         headers:{
           access_token : localStorage.access_token
         }
       })
       .then(({data})=>{
         this.myproducts = data
        
         
         })
       .catch(err=>{
         console.log(err)
       })
     }
  }

  
}
</script>

