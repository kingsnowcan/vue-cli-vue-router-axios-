<template>
  <div>
   <div class="list" v-for="item in other" @click="otherInfo(item.name,item.path)">
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
      other:[
        {name:'1711',
         text:'消息',
         path:'/more/newsList'

      },
      {name:'1712',
         text:'费率申请',
         path:'/more/ratePage'
      },
      {name:'1802',
         text:'反馈',
         path:'/more/advincePage'
      },
      {name:'1803',
         text:'修改密码',
         path:'/more/checkPass' 
      },
      ],

    }
  },
  methods:{
    otherInfo(name,path){
       console.log('name',name);
       console.log('path',path);
       this.$router.push(path);

    }

  }
}
</script>

<style scoped>
.list{width: 100%;background-color: #ffffff;padding:6px 10px;border-bottom:1px solid #ececec;font-size: 14px; overflow: hidden;}
.icon-icon--{float: right;margin-top: 14px;font-size: 20px;margin-right: 16px;}
.rightArrow{margin-top: 1px;}

</style>
