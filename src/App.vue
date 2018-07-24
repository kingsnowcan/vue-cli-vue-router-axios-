<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './assets/icon/iconfont.css';
html,body{
  background: #ececec;
  padding:0;
  margin:0;
  width: 100%;
  height:100%;
  padding-bottom: 30px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
}
.el-form-item.is-error .el-input__inner, .el-form-item.is-error .el-input__inner:focus, .el-form-item.is-error .el-textarea__inner, .el-form-item.is-error .el-textarea__inner:focus, .el-message-box__input input.invalid, .el-message-box__input input.invalid:focus{border-color: #ffffff;}
.el-form-item__error{left:16px;}
.el-checkbox__inner{border:1px solid #ececec;}
.el-form-item.is-success .el-input__inner, .el-form-item.is-success .el-input__inner:focus, .el-form-item.is-success .el-textarea__inner, .el-form-item.is-success .el-textarea__inner:focus{border-color:#ffffff;}
.el-input__inner:hover {
    border-color: #ffffff;
}
.el-radio__label{white-space: normal;float: left;width: 90%}
.el-radio__input{float:right;margin-top: 8px;}
.radioStyle .el-radio__label{margin-left: -30px;line-height: 24px;}
.el-radio__inner{border:1px solid #dcdfe6;}
.el-radio{display: block;}
.radio1{line-height: 30px;}
.el-radio_input.is-checked .el-radio_inner{border-color: #409eff;background-color: #409eff;}
.el-textarea__inner{height: 100px;}
.el-textarea__inner:focus{border-color:#ffffff;}
</style>
