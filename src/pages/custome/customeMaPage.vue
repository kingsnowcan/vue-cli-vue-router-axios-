<template>
  <div>
  <header-box></header-box>
  <div class="maContain">
  	<div class="title">
     <i class="iconfont icon-iconfonterweima"></i>
     <span>我的客户二维码</span>
   </div>
   <p class="ermaPhoto"><img src="../../assets/img/logo.png"></p>
   <p class="text">请让客户扫描二维码注册</p>
  </div>
  <el-button class="bigBtn" type="primary" @click="back">返回上一层</el-button>
</div>
</template>

<script>
import Header from '../../components/header'
export default {
  components:{'HeaderBox':Header},
  data(){
    return {
      
    }
  },
  methods:{
    back(){
      this.$router.go(-1);
    }

  }
}
</script>


<style scoped>
.maContain{margin-top:60px;background-color: #ffffff;}
.bigBtn{width: 80%;margin-left:10%;margin-top: 10px;}
.title{width: 92%;margin:auto;padding: 10px 6px;border-bottom: 1px solid #ececec;}
.ermaPhoto{width: 50%;margin:auto;margin-top:16px;}
.text{text-align: center;padding-bottom: 10px;}
</style>
