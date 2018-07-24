<template>
  <div id="app">
   <div class="logo"><img src="../assets/img/logo.png"></div>
   <el-form :model="ruleForm"  class="demo-ruleForm">
   <div class="bg_input">
    <i class="iconfont icon-shouji"></i>
    <el-input v-model="ruleForm.userName" class="loginInput" placeholder="请输入手机号"></el-input>
   </div> 
   <div class="bg_input">
    <i class="iconfont icon-mima"></i>
    <el-input v-model="ruleForm.pass" type="password" class="loginInput" placeholder="请输入密码"></el-input></div>
  <el-button class="loginBtn" type="primary" @click="LoginForm">登录</el-button>
  
    <a class=" link fp" @click="forgetPas">忘记密码</a>
  
  <a class="link res" @click = "register">立即注册</a>
</el-form>
</div>
</template>

<script>
import api from '../axios/api.js'
export default {
  name: 'Login',
  data(){
    return {
      ruleForm:{
        userName:'',
        pass:'',
      }
    }
  },
  methods:{
    LoginForm(){
      var userName = this.ruleForm.userName;
      var passWord = this.ruleForm.pass;
      console.log(userName+passWord);
      
       if(userName&&passWord){
         api.JH_info('user/login',userName,passWord)
      .then(res => {
        console.log(res);
        this.$store.commit('checkStatue',res.status);
        this.$store.commit('userLogin',res.userId);
        this.$router.push('/layout/custome/customPage');
      });
      //   this.$message({
      //     message:'登陆成功',
      //     center:true,
      //     type:'success',
      //     customClass:'dark'
      //   });
      //   this.$router.push('/layout/custome/customPage')
       }else{
        this.$message({
          message:'请输入正确密码',
          center:true,
          type:'error',
          customClass:'dark',

        })
      }
    },
    forgetPas(){
      this.$router.push('forgetPass')
    },
    register(){
      this.$router.replace('/register/registerPage')
    }

  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
.logo img{
  width: 30%;
  height: 30%;
  margin-bottom: 30px;
}
.bg_input{
  background: #ffffff;
  width: 100%;
}
.bg_input i{
   font-size: 26px;
   float:left;
   margin-top: 8px;
   margin-left: 10px;
   color: #999999;

}
.loginInput{
  width: 86%;
  margin:6px 0;
  border-bottom: 1px solid #ececec;
}
.loginBtn{
  width: 80%;margin-top:20px;
}
.dark{
  min-width:200px;
  background-color:rgba(0,0,0,0.2);
  position: fixed;
  top:30%;

}
.link{display: block;
  text-align:center;
  margin:auto;
  width: 100px;
  margin-top: 10px;
  cursor: pointer;
}

</style>
