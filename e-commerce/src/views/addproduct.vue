<template>
<div>
  <br>
  <br>
  <br>
  <div class="container-fluid py-8 row ">
    <div class="card text-left col-6 mx-auto py-10">
      <div class="card-body">
        <form>
          <h1>add Product</h1>
          <div class="form-group">
            <label for="exampleInputName">name</label>
            <input type="name" class="form-control" id="exampleInputName" aria-describedby="nameHelp" ref="name"
              placeholder="Enter name">
          </div>
           <div class="form-group">
            <label for="exampleInputQuantity">quantity</label>
            <input type="number" class="form-control" id="exampleInputQuantity" aria-describedby="quantityHelp" ref="quantity"
              placeholder="Enter quantity">
          </div>
          <div class="form-group">
            <label for="exampleInputprice">price</label>
            <input type="Number" class="form-control" id="exampleInputprice" ref="price" placeholder="price">
          </div>
           <div class="form-group">
            <label for="imageinput">image</label>
            <input type="file" class="form-control" id="file" ref="file"  v-on:change="handleFileUpload">
          </div>
          
          <button type="submit" class="btn btn-primary" @click.prevent="addProduct">addProduct</button>
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
  name: 'addProduct',
  data(){
    return {
      file:''

    }
  },
    methods:{
        handleFileUpload(event) {
            console.log('masuk file upload', this.$refs.file.files[0])
            this.file = this.$refs.file.files[0]

        },
          addProduct() {
            console.log(this.file)
             let formData = new FormData()
            formData.append('name', this.$refs.name.value)
            formData.append('quantity', this.$refs.quantity.value)
            formData.append('price', this.$refs.price.value)
            formData.append('file', this.file)
            axios.post(`${serverUrl}/product`,formData,{
                headers:{
                    access_token : localStorage.access_token
                }
            })
                .then(({ data }) => {
                  console.log('berhasil')
                    this.$refs.name = ""
                    this.$refs.price = ""
                    this.$refs.quantity = ""
                    this.$router.push('/myproduct' )
                })
                .catch(err => {
                  console.log(err)
                  
                    this.$refs.price.value = ""
                    this.$refs.name = ""
                    this.$refs.quantity.value = ""
               
                })
}
    }

}
</script>



