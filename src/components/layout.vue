<template>
  <div class="layout">
    <header>
    <h2>{{bigTitle}}</h2>
    <p class="new" v-show="$route.meta.infoShow">
      <i class="iconfont icon-yinliang"></i>
      <span>通告: {{news}}</span>
    </p>
  </header>
  <div class="contain" :class="{'moreheight':$route.meta.infoShow}">
    <router-view></router-view> 
  </div>
  <footer>
    <ul>
      <router-link to="/layout/custome/customPage"  tag="li" active-class="active">
        <div>
          <i class="iconfont icon-custome"></i>
        </div>
        <div>我的客户</div>
      </router-link>
      <router-link to="/layout/materia/materiaPage" tag="li" active-class="active">
        <div>
          <i class="iconfont icon-file"></i>
        </div>
        <div>我的资料</div>
      </router-link>
      <router-link to="/layout/pay/payPage" tag="li" active-class="active">
        <div>
          <i class="iconfont icon-pay"></i>
        </div>
        <div>我的工资</div>
      </router-link>
      <router-link to="/layout/more/otherPage" tag="li" active-class="active">
        <div><i class="iconfont icon-other"></i></div>
        <div>其他</div>
      </router-link>
    </ul>
  </footer>
  </div>
</template>

<script>

export default {
  data () {
    return {
      newShow:true,
      title:{
        '/layout/custome/customPage':'我的客户',
        '/layout/materia/materiaPage':'我的资料',
        '/layout/pay/payPage':'我的工资',
        '/layout/more/otherPage':'其他'
      },
      news:'特大新闻date新闻号外号外'
    }
  },
computed:{
  bigTitle(){
    return this.title[this.$route.path];
  }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout{
  width: 100%;
  height: 100%;
  padding-bottom: 30px;
  overflow: hidden;
}
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
header p{margin:0;background-color: #FFFAD7;border:1px solid #F9E8A3;color: #333333;font-size: 12px;padding:0 6px;line-height: 30px;height: 30px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
header p i{color: #FFAB2B;font-size: 20px;display: inline-flex;vertical-align: middle; }
footer ul {
  list-style-type: none;
  padding: 0;
}
footer ul li {
  display: block;
  width: 25%;
  text-align: center;
  background-color: #f7f7f7;
  float: left;
}
footer ul li.active,
footer ul li:hover{
  color: #4DA9E8;
}
header{
  position: fixed;
  top: 0;
  left: 0;
  color: #ffffff;
  width: 100%;
  z-index:999;
}
footer{
  position: fixed;
  bottom: 0;
  left: 0;
  color: #d0d0d0;
  width: 100%;
  background-color: #f7f7f7;
  color: #999999;padding-bottom: 4px;
  z-index: 10;
}
footer div{font-size: 14px;}
footer div i{font-size: 20px;}
.contain{width: 100%;position: absolute;top:56px;height:80%;overflow-y: auto;z-index:1;}
.moreheight{position: absolute;top:86px;}
</style>
