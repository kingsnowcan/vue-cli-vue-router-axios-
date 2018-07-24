<template>
  <div class="infoContain">
  <div class="maContain">
  <p class="infolist"><label>开户状态</label><span>{{proStatue}}</span></p>
  <div v-if="upload=='ok'" class="infolist"><label>居间协议</label><span><el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload></span></div>
<p class="infolist" v-else><label>居间协议</label><span><img :src="proPhoto"></span></p>
  <p class="infolist" v-for="item in user"><label>{{item.label}}</label><span>{{item.text}}</span></p>
</div>
  <el-button v-show="upload=='ok'"  class="bigBtn" type="primary" @click="checkInfo">提交审核</el-button>
</div>
</template>

<script>
import api from '../../axios/api.js'
export default {
  
  data(){
    return {
      proStatue:'等待上传居间协议',
      proPhoto:require('../../assets/img/logo.png'),
      upload:'ok',
      imageUrl:'',
      user:[
       {
        label:'姓名',
        text:'王雪可'
       },
       {
        label:'身份证号',
        text:'467829299277718369'
       },
       {
        label:'手机号',
        text:'13691699016'
       },
       {
        label:'开启时间',
        text:'2018-05-01'
       },
       {
        label:'来源',
        text:'都某人'
       },
       {
        label:'权益',
        text:1000.00
       },
       {
        label:'手续费',
        text:1000.00
       },
      
      ],
    }
  },
  created(){
    this.setUserApi();
    api.JH_info('user/ma','123')
    .then(res=>{
      console.log('img',res);
      this.imageUrl = res.photo;
    })
  },
  methods:{
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
       //提交审核
      checkInfo(){
        this.upload = 'true';
        this.proStatue = '等待审核';
      },

      setUserApi(){
      api.JH_info('/user/index','123')
      .then(res => {
        console.log(res);
        this.user = res.person;
      });
    },

  }
}
</script>

<style scoped>
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
    height: 129px;
    line-height: 120px;
    text-align: center;
    border:1px solid #ececec;
  }
  .avatar {
    width: 120px;
    height: 120px;
    display: block;
  }
.maContain{background-color: #ffffff;}
.bigBtn{width: 80%;margin-left:10%;margin-top: 16px;margin-bottom: 40px;}
.infolist{width: 92%;margin:auto;padding:10px 6px;border-bottom: 1px solid #ececec;overflow: hidden;}
.infolist label{display: inline-block;width: 40%;}
.infolist span{display: inline-block;;width: 60%;text-align: right;}
</style>
