<template>
  <div>
  <header-box></header-box>
 <div class="maContain">
 	
  	<p class="infolist" v-for="item in user"><label>{{item.label}}</label><span :class="item.color?'red':''">{{item.text}}</span></p>
  
  </div>
  <el-button class="bigBtn" type="primary" @click="back">返回上一层</el-button>
</div>
</template>

<script>
import Header from '../../components/header'
import api from '../../axios/api.js'
export default {
  components:{'HeaderBox':Header},
  data(){
    return {
      customId:'',
      user:[
       
      ],
    }
  },
  methods:{
    getParams(){
      let routerParams = this.$route.query.dataObj;
       this.customId = routerParams;
       console.log('id',routerParams);
       api.JH_info('user/customdetail',routerParams)
      .then(res => {
        console.log(res);
        this.user = res.person;
      });
    },
      
  back(){
    this.$router.go(-1);
  }

  },
  created(){
    this.getParams()
  }
}
</script>

<style scoped>

.maContain{margin-top:60px;background-color: #ffffff;}
.bigBtn{width: 80%;margin-left:10%;margin-top: 16px;}
.infolist{width: 92%;margin:auto;padding:10px 6px;border-bottom: 1px solid #ececec;overflow: hidden;}
.infolist label{display: inline-block;width: 40%;}
.infolist span{display: inline-block;;width: 60%;text-align: right;}
.red{color:red;}
</style>
