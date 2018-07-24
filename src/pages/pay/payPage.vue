<template>
  <div>
   <div class="list" v-for="item in pay" @click="payDetail(item.name)">
     <span>{{item.text}}</span>
     <i class="iconfont icon-icon-- rightArrow"></i>
   </div>
</div>
</template>

<script>
import Bus from '../../components/bus.js'
export default {
  
  data(){
    return {
      pay:[
        {name:'1711',
         text:'2017年11月返佣工资' 
      },
      {name:'1712',
         text:'2017年12月返佣工资' 
      },
      {name:'1802',
         text:'2018年2月返佣工资' 
      },
      ],
    }
  },
  methods:{
    payDetail(name){
      this.$router.push('/pay/payDetailPage');
      Bus.$emit('msg',name);
       console.log('name',name);

    }

  }
}
</script>

<style scoped>
.list{width: 100%;background-color: #ffffff;padding:6px 10px;border-bottom:1px solid #ececec;font-size: 14px; overflow: hidden;}
.icon-icon--{float: right;margin-top: 14px;font-size: 20px;margin-right: 10px;}
.rightArrow{margin-top: 1px;}

</style>
