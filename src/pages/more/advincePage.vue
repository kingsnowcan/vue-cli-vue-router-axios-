<template>
  <div class="box">
   <header-box></header-box>
    <div class="maContain">
    <el-form ref="form" label-width="90px">  
    <el-form-item class="last" label="意见反馈" prop="advince">
    <el-input type="textarea" v-model="advinces" placeholder="请输入您的宝贵意见，两百字符以内"></el-input> 
  </el-form-item>
</el-form>
  </div>
  <el-button class="bigBtn" type="primary">提交</el-button>
  <el-button class="bigBtn noCheck" type="primary" @click="back">返回上一层</el-button>
</div>
</template>

<script>
import Header from '../../components/header'
export default {
  components:{'HeaderBox':Header},
  data(){
    return {
    advinces:''
    }
  },
  methods:{
    back(){
      this.$router.go(-1);
    }

  },
  }

</script>

<style scoped>
.maContain{background-color: #ffffff;margin-top: 56px;padding-bottom:6px;font-size: 14px;}
.bigBtn{width: 80%;margin-left:10%;margin-top: 16px;}
.noCheck{border:1px solid #4DA9EB;color: #4DA9EB;background-color:#f8f8f8;}
.el-textarea{width:90%;border:none;}
</style>
