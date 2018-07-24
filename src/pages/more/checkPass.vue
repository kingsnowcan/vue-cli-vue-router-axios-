<template>
  <div class="box">
   <header-box></header-box>
   
    <div class="maContain">
    <el-form ref="checkForm" :model="checkForm" :rules="rules" label-width="90px" label-position="left">     
    <el-form-item  label="原密码" prop="password">
    <el-input type="password" v-model="checkForm.password" placeholder="输入原密码"></el-input> 
  </el-form-item>
    <el-form-item  label="新密码" prop="newPassword">
    <el-input type="password" v-model="checkForm.newPassword" placeholder="输入新密码"></el-input> 
  </el-form-item>
    <el-form-item class="last" label="确认密码" prop="copyPassword">
    <el-input type="password" v-model="checkForm.copyPassword" placeholder="再次输入新密码"></el-input> 
  </el-form-item>
  </el-form>
  </div>
  <el-button class="bigBtn" type="primary" @click="submit('checkForm')">确认</el-button>
  <el-button class="bigBtn noCheck" type="primary" @click="back">返回上一层</el-button>
  
</div>
</template>

<script>
import Header from '../../components/header'
export default {
  components:{'HeaderBox':Header},
  data(){
    var validatePass = (rule,value,callback)=>{
      if(value===''){
        callback(new Error('请输入密码'));
      }else if(this.checkForm.copyPassword!==''){
        this.$refs.checkForm.validateField('copyPassword');
      }else{
         callback();
      }
     
    };
    var validatePass2 = (rule,value,callback)=>{
      if(value===''){
        callback(new Error('请再次输入密码'));
      }else if(value!=this.checkForm.newPassword){
        callback(new Error('两次密码输入不一致'));
      }else{
         callback();
      }
     
    };
    return {
    checkForm:{
      password:'',
      newPassword:'',
      copyPassword:''
    },
    rules:{
       newPassword:[
        {validator:validatePass,trigger:'blur'}
       ],
       copyPassword:[
        {validator:validatePass2,trigger:'blur'}
       ],
    },
    }
  },
  methods:{
    submit(formName){
      this.$refs[formName].validate((valid)=>{
        if(valid){
          console.log('密码修改成功');
          this.$router.push('/');
        }else{
          console.log('密码修改失败');
          return false;
        }
      })
    },
    back(){
      this.$router.go(-1);
    }

  },
  }

</script>

<style scoped>
.maContain{background-color: #ffffff;margin-top: 56px;padding:0 10px;padding-bottom:2px;font-size: 14px;}
.bigBtn{width: 80%;margin-left:10%;margin-top: 16px;}
.noCheck{border:1px solid #4DA9EB;color: #4DA9EB;background-color:#f8f8f8;}
.el-form-item{border-bottom: 1px solid #ececec;}
.last{border:none;}

</style>
