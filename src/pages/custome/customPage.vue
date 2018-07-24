<template>
  <div>
    <router-view></router-view>
   <div class="list" @click="myMa">
     <i class="iconfont icon-iconfonterweima"></i>
     <span>我的客户二维码</span>
     <i class="iconfont icon-icon-- rightArrow"></i>
   </div>
   <div class="list no-margin"  @click="setDate">
     <i class="iconfont icon-calendar2"></i>
     <span>开始日期</span>
     <el-input v-model="beginDate" placeholder="选择开始日期" :readonly="readonly"></el-input>
      <i class="iconfont icon-icon--"></i>
   </div>
    <div class="list no-margin" @click="setDate2">
     <i class="iconfont icon-calendar2"></i>
     <span>结束日期</span>
     <el-input v-model="endDate" placeholder="选择结束日期" :readonly="readonly"></el-input>
      <i class="iconfont icon-icon--"></i>
   </div>
   <div class="list">
     <ul>
       <li>姓名</li>
       <li>手机号</li>
       <li>开户时间</li>
       <li>操作</li>
     </ul>
     <ul class="table_info" v-for="item in customeLsit">
       <li>{{item.name}}</li>
       <li>{{item.phone}}</li>
       <li>{{item.date}}</li>
       <li class="detail" @click="customeDetail(item.id)">详情</li>
       <!-- <router-link tag="li" :to="{path:'/custome/customeDetailPage',params:{name:'customId',dataObj:item.id}}" class="detail">{{item.id}}</router-link> -->
     </ul>
     
   </div>
   <p class="tip">-------{{tip}}---------</p>
</div>
</template>

<script>
import api from '../../axios/api.js'
export default {
  // components:{Lcalendar}
  data(){
    return {
      readonly:true,
      beginDate:'',
      endDate:'',
      date2:'2018-3-2',
      customeLsit:'',
      tip:'请选择日期查看数据'
    }
  },
  methods:{
    customeDetail(id){
      console.log('id',id);
       this.$router.push({
        path:'/custome/customeDetailPage',
        query:{
          name:'id',
          dataObj:id
        }
       })
    },
    myMa(){
      console.log('userId',localStorage.getItem('userLogin'));
      this.$router.push('/custome/customeMaPage')
    },
    setDate(){
      console.log('calendar');
      //let vm = this;
       this.$picker.show({
          type:'datePicker',
         onOk:(e) =>{
           this.beginDate = e;
         }
       });

     },
     setDate2(){
       this.$picker.show({
        type:'datePicker',
        startTime:this.beginDate,
         onOk:(e)=>{
           this.endDate = e;
           if(this.endDate&&this.beginDate){
              api.JH_info('user/customList',this.endDate&this.beginDate)
          .then(res=>{
          console.log('customeList',res);
          this.customeLsit = res.list;
          this.tip = '加载完成'
        })
           }
           
         },

       })

     },

  },
  created(){
  }
}
</script>

<style scoped>
ul,li{list-style: none;margin:0;padding:0;}
ul li{float: left;width: 25%;text-align: center;border-bottom: 1px solid #ececec;line-height:36px;color:#666666;}
.list{width: 100%;background-color: #ffffff;padding:4px 6px;margin-bottom: 8px;font-size: 14px; overflow-x: hidden;}
.table_info li{padding-bottom: 12px;}
.no-margin{margin-bottom: 0;border-bottom: 1px solid #ececec;}
.el-input{width: 50%;border-radius: 0}
.icon-icon--{float: right;margin-top: 14px;font-size: 20px;margin-right: 10px;}
.rightArrow{margin-top: 1px;}
.tip{text-align: center;font-size: 12px;color: #999999;}
.detail{color:#4DA9EB;}
</style>
