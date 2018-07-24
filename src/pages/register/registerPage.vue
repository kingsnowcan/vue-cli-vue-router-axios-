<template>
  <div class="findPassContain">
  <el-form :model="ruleForm2" status-icon :rules="rules" ref="ruleForm2" label-width="80px" label-position="left" class="demo-ruleForm">
    <el-form-item label="手机号码" prop="phone">
    <el-input class="smallInput" v-model.number="ruleForm2.phone" placeholder="请输入手机号码"></el-input>
     <el-button type="primary" @click="sendMessage" class="messageBtn">{{btnText}}</el-button>
  </el-form-item>
  <el-form-item label="验证码" prop="checkMa">
    <el-input  v-model.number="ruleForm2.checkMa" placeholder="请输入验证码"></el-input>   
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" placeholder="请输入密码" v-model="ruleForm2.pass" auto-complete="off"></el-input>
  </el-form-item>
  <el-checkbox v-model="checked">我已阅读居间人服务准则</el-checkbox>
  <el-button class="loginBtn" :disabled = "isDisabled"type="primary" @click="submitForm('ruleForm2')">下一步</el-button>
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
          callback();
        }
      };
     
      return {
        isDisabled:true,
        checked:false,
        btnText:'获取验证码',
        time:60,
        ruleForm2: {
          pass: '',
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
          
          
        }
      };
    },
    watch: {
            ruleForm2:{
                handler:function(nowVal,oldVal){

                    for(let i in this.ruleForm2){
                      if(nowVal[i]!==''){
                        //console.log('val',nowVal[i]);
                        this.isDisabled = false;
                      }else{
                        this.isDisabled = true;
                      }
                    }

                    
                },
                 deep:true
                
            }
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
            this.$router.push('/register/infoPage');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted() {
            
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
  .el-checkbox{margin-bottom: 10px;margin-left:10px;}
  
</style>
