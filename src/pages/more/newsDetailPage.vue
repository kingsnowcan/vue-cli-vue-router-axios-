<template>
  <div class="box">
   <header-box></header-box>
   <div class="newsContain">
    <h2>{{news.title}}</h2> 
    <p class="Nborder">{{news.detail}}</p>
    <p class="dateRight">{{news.date}}</p>
 </div>
  <el-button class="bigBtn" type="primary" @click="back">返回上一层</el-button>
</div>
</template>

<script>
import Header from '../../components/header'
import Bus from '../../components/bus.js'
export default {
  components:{'HeaderBox':Header},
  data(){
    return {
     news:{
        title:'提醒：身份证即将到期',
        detail:'亲爱的用户，提醒你，您的身份证即将过期，请您及时修改资料，完成身份证资料更新',
        date:'2018-07-17'
     }
    }
  },
  methods:{
     back(){
      this.$router.go(-1);
    },
  },
  mounted(){
    Bus.$on('msg',(e)=>{
     this.name = e
     console.log('传来数据',e);
    })
  }
}
</script>

<style scoped>
h2{margin:0;padding:0;font-size: 14px;}
.newsContain{background-color: #ffffff;width: 88%;margin:56px auto;margin-bottom:0;padding: 16px;color:#3333333;line-height: 30px;font-size: 14px;}
.newsContain .dateRight{text-align: right;}
.Nborder{border-bottom: 1px solid #ececec;}
.bigBtn{width: 80%;margin-left:10%;margin-top: 16px;}
</style>
