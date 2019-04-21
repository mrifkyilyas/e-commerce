<template>
  <div>
    <br>
    <br>
    <br>
    <div class="container-fluid py-8 row ">
      <div class="card text-left col-6 mx-auto py-10">
        <div class="card-body">
          <h1>Register</h1>
          <form>
            <div class="form-group">
              <label for="exampleInputName">Full Name</label>
              <input type="name" class="form-control" id="exampleInputName" aria-describedby="name"
                placeholder="Enter fullname" ref="name">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Enter email" ref="email">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                ref="password">
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="register">Register</button>
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
  name: 'register',
    methods:{
          register() {
            console.log(this.$refs.name.value)
            console.log(this.$refs.email.value)
            console.log(this.$refs.password.value)
            axios.post(`${serverUrl}/user/register`, {
                name: this.$refs.name.value,
                email: this.$refs.email.value,
                password: this.$refs.password.value
            })
                .then(({ data }) => {
                  console.log('berhasil')
                    this.$refs.name = ""
                    this.$refs.email = ""
                    this.$refs.password = ""
                    this.$router.push('/login' )
                })
                .catch(err => {
                    this.errorMsg = 'Wrong email/password'
                    this.$refs.email.value = ""
                    this.$refs.password.value = ""
               
                })
}
    }

}
</script>


