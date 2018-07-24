<template>
  <div class="layout">
    <header>
    <h2 ><a class="return">返回</a>{{bigTitle}}</h2>
  </header>
  
  
  </div>
</template>

<script>

export default {
  data () {
    return {
      title:{
        '/custome/customeMaPage':'我的客户二维码',
        '/custome/customeDetailPage':'客户详情',
        '/pay/payDetailPage':'工资详情',
        '/more/newsList':'信息列表',
        '/more/newsDetailPage':'信息详情',
        '/more/ratePage':'费率申请',
        '/more/advincePage':'意见反馈',
        '/more/checkPass':'修改密码',
      },
    }
  },
computed:{
  bigTitle(){
    return this.title[this.$route.path]
  }
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 header h2 {
  margin:0;
  font-weight: normal;
  text-align: center;
  font-size: 16px;
  line-height: 26px;
  width: 100%;
  background-color: #000000;
  padding: 10px 0;
  position: relative;
}
header h2 a{position: absolute;left: 20px;}
header{
  position: fixed;
  top: 0;
  left: 0;
  color: #ffffff;
  width: 100%;
  
}

</style>
