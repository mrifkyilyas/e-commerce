<template>
<div>
  <br>
  <br>
  <br>
  <div class="container-fluid py-8 row ">
    <div class="card text-left col-6 mx-auto py-10">
      <div class="card-body">
        <form>
          <h1>Login</h1>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref="email"
              placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" ref="password" placeholder="Password">
          </div>
          <p><small>belum terdaftar? <router-link to="register"> <a>register</a></router-link></small></p>
          
          <button type="submit" class="btn btn-primary" @click.prevent="login">Login</button>
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
const serverUrl = 'http://localhost:3000'
export default{
    methods:{
        login(){
            console.log(this.$refs.email.value)
             axios.post(`${serverUrl}/user/login`, {
                email: this.$refs.email.value,
                password: this.$refs.password.value
                
            })
                .then(({ data }) => {
                    console.log('login berhasil')
                    localStorage.setItem('access_token', data.access_token)
                    localStorage.setItem('name', data.name)
                    axios.defaults.headers.common['access_token'] = localStorage.access_token
                    this.$router.push('/products')
                    this.$emit('postLogin')


                })
                .catch(err => {
                    this.errorMsg = 'Wrong email/password'
                    this.$refs.email.value = ""
                    this.$refs.password.value = ""
                    console.log(err.message)
})

        }
    }

}
</script>