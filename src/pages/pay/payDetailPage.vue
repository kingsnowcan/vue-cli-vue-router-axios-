<template>
  <div class="box">
   <header-box></header-box>
    <div class="maContain">  
    <p class="infolist" v-for="item in user"><label>{{item.label}}</label><span>{{item.text}}</span></p>
  
  </div>
  <el-button class="bigBtn" type="primary">返回上一层</el-button>
</div>
</template>

<script>
import Header from '../../components/header'
import Bus from '../../components/bus.js'
export default {
  components:{'HeaderBox':Header},
  data(){
    return {
      name:'',
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
       {
        label:'交易所手续费',
        text:1000.00
       },
       {
        label:'留存手续费',
        text:1000.00
       },
       {
        label:'投资者保障基金',
        text:50000.00
       },
       {
        label:'软件使用费',
        text:1000.00
       },
       {
        label:'核算留存手续费',
        text:1000.00
       },
       {
        label:'总盈亏',
        text:'+1000.00'
       },
      ],
    }
  },
  methods:{
    

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
.maContain{background-color: #ffffff;margin-top: 56px;}
.bigBtn{width: 80%;margin-left:10%;margin-top: 16px;}
.infolist{width: 92%;margin:auto;padding:10px 6px;border-bottom: 1px solid #ececec;overflow: hidden;}
.infolist label{display: inline-block;width: 40%;}
.infolist span{display: inline-block;;width: 60%;text-align: right;}

</style>
