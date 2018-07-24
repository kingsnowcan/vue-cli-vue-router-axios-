<template>
  <div class="findPassContain">
  <el-form :model="ruleForm2" status-icon :rules="rules" ref="ruleForm2" label-width="100px" label-position="left" class="demo-ruleForm">
    <el-form-item label="居间人类型" prop="peopleType" >
    <el-input class="middleInput" v-model="ruleForm2.peopleType.text" placeholder="选择居间人类型" :readonly="readonly"></el-input>
     <i class="iconfont icon-icon--" @click="selectType('peopleType')"></i>
  </el-form-item>
  <template v-if="ruleForm2.peopleType.text==='个人'">
  <el-form-item label="姓名" prop="peopleName">
    <el-input v-model="ruleForm2.peopleName" placeholder="请输入姓名"></el-input>
  </el-form-item>   
   <el-form-item label="身份证号" prop="IDCard">
    <el-input v-model.number="ruleForm2.IDCard" placeholder="请输入身份证号码"></el-input>
  </el-form-item>
  </template>
  <template v-else>
  <el-form-item label="公司名称" prop="companyName">
    <el-input v-model="ruleForm2.companyName" placeholder="请输入公司名称"></el-input>
  </el-form-item>
  <el-form-item label="营业执照号" prop="companyWork">
    <el-input v-model="ruleForm2.companyWork" placeholder="请输入营业执照号"></el-input>
  </el-form-item>
  <el-form-item label="法人姓名" prop="companyBoss">
    <el-input v-model="ruleForm2.companyBoss" placeholder="请输入法人姓名"></el-input>
  </el-form-item>
  <el-form-item label="法人电话" prop="companyPhone">
    <el-input v-model="ruleForm2.companyphone" placeholder="请输入法人电话"></el-input>
  </el-form-item>
  </template>
   <el-form-item label="联系地址" prop="peopleAddress" >
    <el-input class="middleInput" v-model="ruleForm2.peopleAddress.text" placeholder="选择地区信息" :readonly="readonly"></el-input>
     <i class="iconfont icon-icon--" @click="selectType('peopleAddress')"></i>
  </el-form-item>
  <el-form-item label="" prop="DetailAddress">
    <el-input v-model="ruleForm2.peopleAddress.DetailAddress" placeholder="请输入详细地址"></el-input>
  </el-form-item>
  <el-form-item label="返佣银行卡号" prop="BankCard">
    <el-input v-model="ruleForm2.BankCard" placeholder="请输入返佣银行卡号"></el-input>
  </el-form-item>
  <el-form-item label="开户银行" prop="Bank" >
    <el-input class="middleInput" v-model="ruleForm2.Bank.text" placeholder="选择开户行" :readonly="readonly"></el-input>
     <i class="iconfont icon-icon--" @click="selectType('Bank')"></i>
  </el-form-item>
  <el-form-item label="" prop="BankName">
    <el-input v-model="ruleForm2.Bank.BankName" placeholder="请输入支行名称"></el-input>
  </el-form-item>
  <el-form-item label="返佣方式" prop="GetMoneyType">
    <el-radio-grop v-model = "ruleForm2.GetMoneyType">
      <el-radio class="radio1" :label="0">当月手续费净收入70%返佣</el-radio>
      <el-radio class="radioStyle" :label="1">当月手续费净收入少于 1000元，当月不返佣；当月手续费净收入大于等于1000元，按80%返佣</el-radio>
    </el-radio-grop>
  </el-form-item>
  <el-form-item label="身份证正面照" prop="cardPhoto1">
    <el-upload class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
     :show-file-list="false"
     :on-success="handleAvatarSuccess"
     :before-upload="beforeAvatarUpload">
      <img v-if="ruleForm2.photoUrl1" :src="ruleForm2.photoUrl1" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </el-form-item>
  <el-form-item label="协议发送方式" prop="sendType" >
    <el-input class="middleInput" v-model="ruleForm2.sendType.text" placeholder="选择协议发送方式" :readonly="readonly"></el-input>
     <i class="iconfont icon-icon--" @click="selectType('sendType')"></i>
  </el-form-item>
  <el-form-item label="邮箱地址" prop="email">
    <el-input v-model="ruleForm2.email" placeholder="请输入邮箱地址"></el-input>
  </el-form-item>
  <el-button class="loginBtn" :disabled = "isDisabled"type="primary" @click="submitForm('ruleForm2')">提交生成居间协议</el-button>
  
</el-form>
<vue-pickers
      :show="show"
      :link="link"
      :columns="columns"
      :defaultData="defaultData"
      :selectData="pickData"
      @cancel="close"
      @confirm="confirmFn"></vue-pickers>
</div>
</template>
<script>
import vuePickers from 'vue-pickers'
import {provs_data, citys_data, dists_data} from 'vue-pickers/lib/areaData'
  export default {
    components:{
      vuePickers
    },
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
       var idCardCheck = (rule,value,callback) =>{
        if(!value){
          callback(new Error('请输入身份证号码'))
        }else{
          const reg =/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
          console.log(reg.test(value));
          if(reg.test(value)){
            callback();
          }else{
            callback(new Error('请输入正确的身份证号'))
          }
        }
      }; 
      var bankCardCheck = (rule,value,callback) =>{
        console.log('val',value)
        if(!value){
          callback(new Error('请输入返佣银行卡号'))
        }else{
          const reg =/^([1-9]{1})(\d{14}|\d{18})$/
          console.log(reg.test(value));
          if(reg.test(value)){
            callback();
          }else{
            callback(new Error('请输入正确的银行卡号'))
          }
        }
      }; 
      var emailCheck = (rule,value,callback) =>{
        console.log('val',value)
        if(!value){
          callback(new Error('请输入邮箱地址'))
        }else{
          const reg =/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
          console.log(reg.test(value));
          if(reg.test(value)){
            callback();
          }else{
            callback(new Error('请输入正确的邮箱地址'))
          }
        }
      }; 
      return {
        readonly:true,
        isDisabled:false,
        ruleForm2: {
          peopleType:{
          text: '个人',
          value: 0
        },
        companyName:'',
        companyPhone:'',
        companyBoss:'',
        companyWork:'',
        peopleName:'',
        IDCard:'',
        photoUrl1:'',
        peopleAddress:{
          text:'',
          value:'',
          DetailAddress:'',
        },
        Bank:{
          text:'',
          value:'',
          BankName:''
        },
        BankCard:'',
        GetMoneyType:0,
        email:'',
        sendType:{
          text:'电子邮件',
          value:0
        }
        },
        show: false,
      columns: 1,
      link:'',
      defaultData: [
        
      ],
      pickData:{},
      pickData1: {
        // 第一列的数据结构
        data1: [
          {
            text: '个人',
            value: 0,
            type:'peopleType'
          },
          {
            text: '企业',
            value: 1,
            type:'peopleType'
          }
        ],
      },
      pickData2: {
        // 第一列的数据结构
        
        data1:[
          {
            text: '电子邮件',
            value: 0,
            type:'sendType'
          },
          {
            text: '邮寄',
            value: 1,
            type:'sendType'
          }
        ],
      },
      pickData3: {
        // 第一列的数据结构
        data1: provs_data,
        data2: citys_data,
        data3: dists_data

      },
      pickData4:{
        data1:[
           {
            text:'中国银行',
            value:0,
            type:'bankType'
           },
           {
            text:'工商银行',
            value:1,
            type:'bankType'
           },
           {
            text:'浦发银行',
            value:2,
            type:'bankType'
           }
        ]
      },
    
        rules: {
          companyPhone:[
             {validator:checkPhone,trigger:'blur',}
          ], 
          IDCard:[
            {validator:idCardCheck,trigger:'blur',}
          ], 
          peopleName:[{
            required:true,message:'姓名不能为空',trigger:'blur'
          }], 
          BankCard:[{
            validator:bankCardCheck,trigger:'blur'
          }],
          email:[{
            validator:emailCheck,trigger:'blur'
          }],       
        }
      };
    },
    watch: {
            
        },
    methods: {
      // 下拉选择
      selectType(val){
        if(val=='peopleType'){
          this.columns = 1
          this.link = ''
          this.pickData = this.pickData1

           
        }else if(val=='peopleAddress'){
          this.columns = 3
          this.link = true
          this.pickData = this.pickData3
          
        }else if(val=='Bank'){
          this.columns = 1
          this.link = ''
          this.pickData = this.pickData4        
        }else{
          this.columns = 1
          this.link = ''
          this.pickData = this.pickData2
          
        }
        this.show = true
      },
    close() {
      this.show = false
    },
    confirmFn(val) {
      this.show = false
      if(val.select1.type=='peopleType'){
        this.ruleForm2.peopleType = val.select1
      }else if(val.select1.type=='bankType'){
        this.ruleForm2.Bank = val.select1
      } else if(val.select1.type == 'sendType'){
        this.ruleForm2.sendType = val.select1
      }else{
        console.log(val);
        this.ruleForm2.peopleAddress.text = val.select1.text+' '+val.select2.text+' '+val.select3.text
        this.ruleForm2.peopleAddress.value = val.select1.value+","+val.select2.value+","+val.select3.text
      }

      //
      console.log(val);
      val = '';
    },
    toShow() {
      this.show = true
    },
// 图片上传
     handleAvatarSuccess(res, file) {
      console.log('file',file);
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
// 表单提交
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
    },
    // mounted() {
            
    //     }
  }
</script>
<style type="text/css" scoped="scoped">
  .el-form{background: #ffffff;padding:20px 10px;}
  .el-form-item{border-bottom: 1px solid #ececec;}
  .el-input{width: 80%;}
  .el-input__inner:hover{border-color:transparent;}
  .middleInput{width:80%;}
  .loginBtn{width: 80%;margin: auto 10%;margin-bottom: 50px;}
  .iconfont{font-size: 24px;margin-left: 16px;color: #d9d9d9;}
  
/*图像上传样式*/
.avatar-uploader{float: right;}
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
    border:1px solid #ececec;
    margin-bottom: 10px;
    
  }
  .avatar {
    width: 120px;
    height: 130px;
    display: block;
  }
/*图像上传样式*/

</style>
