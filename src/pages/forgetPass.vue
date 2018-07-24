<template>
  <div class="findPassContain">
  <el-form :model="ruleForm2" status-icon :rules="rules" ref="ruleForm2" label-width="80px" label-position="left" class="demo-ruleForm">
    <el-form-item label="手机号码" prop="phone">
    <el-input v-model.number="ruleForm2.phone" placeholder="请输入手机号码"></el-input>
  </el-form-item>
  <el-form-item label="验证码" prop="checkMa">
    <el-input class="smallInput" v-model.number="ruleForm2.checkMa" placeholder="请输入验证码"></el-input>
    <el-button type="primary" @click="sendMessage" class="messageBtn">{{btnText}}</el-button>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" placeholder="请输入密码" v-model="ruleForm2.pass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" placeholder="请再次输入密码" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
  </el-form-item>
  <el-button class="loginBtn" type="primary" @click="submitForm('ruleForm2')">确认</el-button>
  <!-- <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
  </el-form-item> -->
</el-form>
</div>
</template>
<script>
  export default {
    data() {
      var checkPhone = (rule,value,callback) =>{
        if(!value){
          callback(new Error('请输入手机号码'))
        }else{
          const reg =/^1[3|4|5|7|8][0-9]\d{8}$/
          console.log(reg.test(value));
          if(reg.test(value)){
            callback();
          }else{
            callback(new Error('请输入正确的手机格式'))
          }
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        btnText:'获取验证码',
        time:60,
        ruleForm2: {
          pass: '',
          checkPass: '',
          phone:'',
          checkMa:''
        },
        rules: {
          phone:[
             {validator:checkPhone,trigger:'blur',}
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          
        }
      };
    },
    methods: {
     sendMessage(){
      this.$refs.ruleForm2.validateField('phone',valid=>{
        if(valid!==''){
          this.rules.phone;
        }else{
          console.log(this.time);
          let me = this;
        //me.isDisabled = true;
        let interval = window.setInterval(function () {
            me.btnText = me.time + '后重新发送';
            --me.time;
            if (me.time < 0) {
                me.btnText = "重新发送";
                me.time = 60;
                //me.isDisabled = false;
                window.clearInterval(interval);
            }
        }, 1000);

        }
      })
      
     },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push('/');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style type="text/css" scoped="scoped">
  .el-form{background: #ffffff;padding:20px 10px;}
  .el-form-item{border-bottom: 1px solid #ececec;}
  .el-input{width: 80%}
  .smallInput{width:55%;}
  .messageBtn{padding:10px 6px;background: none;color:#4da9eb;}
  .loginBtn{width: 80%;margin: auto 10%;}
</style>
