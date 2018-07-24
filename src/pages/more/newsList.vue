<template>
  <div class="box">
   <header-box></header-box>
   <div class="newsContain">
     <div class="list" v-for="item in newslist" @click="newsList(item.name)">
      <span v-if="item.hot" class="hot-tag"></span>
     <span>{{item.text}}</span>
     <i class="iconfont icon-icon--"></i>
     <em class="dateTime">{{item.date}}</em>
   </div>
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
      newslist:[
         {
          name:'01',
          text:'提醒：身份证即将过期',
          date:'2018-7-20',
          hot:true
         },
         {
          name:'02',
          text:'提醒：身份证即将过期',
          date:'2018-7-26'
         },
         {
          name:'03',
          text:'提醒：身份证即将过期',
          date:'2018-8-20'
         },
      ],
    }
  },
  methods:{
    newsList(name){
      console.log('name',name)
      Bus.$emit('msg',name);
      this.$router.push('/more/newsDetailPage')
    },
     back(){
      this.$router.go(-1);
    }

  },
  // mounted(){
  //   Bus.$on('msg',(e)=>{
  //    this.name = e
  //    console.log('传来数据',e);
  //   })
  // }
}
</script>

<style scoped>
.newsContain{margin-top: 56px;}
.list{width: 100%;background-color: #ffffff;padding:6px 10px;border-bottom:1px solid #ececec;font-size: 14px; overflow: hidden;color:#999999;}
.list:hover{color:#333333;}
.icon-icon--{float: right;margin-top: 14px;font-size: 20px;margin-right: 16px;margin-top: 1px;}
.dateTime{float: right;font-style:normal;margin-top: 3px;margin-right: 6px;}
.hot-tag{background-color: red;color:#fff;border-radius: 100%;display: inline-block;width: 8px;height: 8px;}
.bigBtn{width: 80%;margin-left:10%;margin-top: 16px;}
</style>
