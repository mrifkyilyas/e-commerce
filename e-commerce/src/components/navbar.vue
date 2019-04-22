<template>
    <nav class="navbar navbar-expand-lg navbar-danger bg-danger fixed-top">
       <router-link to="/">
           <a class="navbar-brand position text-light" href="#"><i class="fa fa-scissors" aria-hidden="true"></i>beliDong.com</a>
             </router-link>  
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item">
             <router-link to="/">
          <a class="nav-link text-light" href="#">Home <span class="sr-only">(current)</span></a>
             </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products">
          <a class="nav-link text-light" >Products</a>
          </router-link>
        </li>
        <li class="nav-item"  v-show="ceklogin">
            <router-link to="/myproduct">
          <a class="nav-link text-light" >MyProducts</a>
          </router-link>
          </li>
      </ul>
    </div>
    <div class="collapse navbar-collapse d-flex flex-row-reverse ">
      <ul class="navbar-nav float-right ">
        <li class="nav-item">
          <a class="nav-link text-light" href="#"><i class="fa fa-cart-plus fa-lg" aria-hidden="true"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#"><i class="fa fa-user-circle fa-lg" aria-hidden="true"></i></a>
        </li>
         <li class="nav-item" v-show="!ceklogin">
          <router-link to="/login">
          <a class="nav-link text-light" >login</a>
          </router-link>
        </li>
        <li class="nav-item"  v-show="ceklogin">
          
          <a class="nav-link text-light btn " @click="logout" >logout</a>
          
       
        </li>

      </ul>
    </div>
  </nav>
</template>


<script>
export default {
    props:[
    'ceklogin'
  ],
  methods:{
         logout() {
            console.log('logout')
                localStorage.clear()
                this.$router.push('/login')
                 this.$emit('postLogout')        
},
  }
}
</script>


