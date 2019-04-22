<template>
  <div>
  <br>
  <br>
  <br>
  <div class="container-fluid py-8 row ">
    <div class="card text-left col-6 mx-auto py-10">
      <div class="card-body">
        <form>
          <h1>edit Product</h1>
          <div class="form-group">
            <label for="exampleInputName">name</label>
            <input type="name" class="form-control" id="exampleInputName" aria-describedby="nameHelp"
              placeholder="Enter name" v-model="name">
          </div>
           <div class="form-group">
            <label for="exampleInputQuantity">quantity</label>
            <input type="number" class="form-control" id="exampleInputQuantity" aria-describedby="quantityHelp" 
              placeholder="Enter quantity" v-model="quantity">
          </div>
          <div class="form-group">
            <label for="exampleInputprice">price</label>
            <input type="Number" class="form-control" id="exampleInputprice"  placeholder="price" v-model="price">
          </div>
           <div class="form-group">
            <label for="imageinput">image</label>
            <input type="file" class="form-control" id="file" ref="file"  v-on:change="handleFileUpload">
          </div>
          
          <button type="submit" class="btn btn-primary" @click.prevent="updateProduct">updateProduct</button>
        </form>
      </div>

    </div>



  </div>
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
  name: 'updateProduct',
  data(){
    return{
      name:'',
      price:'',
      quantity:'',   
      file:''
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
       this.name = data.name
       this.quantity = data.quantity
       this.price = data.price
       
        
         
         })
       .catch(err=>{
         console.log(err)
       })
     
  
  },
    methods:{
          updateProduct() {   
              console.log(this.file)
             let formData = new FormData()
            formData.append('name', this.name)
            formData.append('quantity', this.quantity)
            formData.append('price', this.price)
            formData.append('file', this.file)   
            console.log(formData)      
            axios.put(`${serverUrl}/product/${this.$route.params.id}`,formData,{
                headers:{
                    access_token : localStorage.access_token,
                    'Content-Type': 'multipart/form-data'                    
                }
            })
                .then(({ data }) => {
                  console.log('berhasil')
                    this.name = ""
                    this.price = ""
                    this.quantity = ""
                    this.$router.push('/myproduct' )
                })
                .catch(err => {
                  console.log(err)
                  
                    this.price= ""
                    this.name = ""
                    this.quantity= ""               
                })
    },
    handleFileUpload(event) {
            console.log('masuk file upload', this.$refs.file.files[0])
            this.file = this.$refs.file.files[0]
        },
  }

}
</script>



