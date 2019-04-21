<template>
  <div id="app">
  
    <navbar :ceklogin='islogin' @postLogout="islogin=false"></navbar>
    <router-view  @postLogin="islogin=true"  :islogin="islogin"/>


    <footerz></footerz>
  </div>
</template>
<script>
import navbar from './components/navbar'
import footerz from './components/footer'
export default {
  name:'app',
  components:{
    navbar,
    footerz
  },
  data(){
    return{
      islogin:false
    }

  },
  created(){
    if(localStorage.getItem('access_token')){
      this.loginGak()
    }
    
  },
  methods:{
    loginGak(){
      if(localStorage.getItem('access_token')){
        this.islogin=true
      }


    }
  }
  
}
</script>



