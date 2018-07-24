<template>
  <div class="box">
   <header-box></header-box>
    <div class="maContain"> 
    <el-form ref="form" :model="rate" label-width="90px"> 
    <el-form-item label="申请类型" prop="rateType" >
    <el-input class="middleInput" v-model="rate.rateType.text" placeholder="请选择类型" :readonly="readonly"></el-input>
     <i class="iconfont icon-icon--" @click="selectType"></i>
  </el-form-item>
  <el-form-item v-if="rate.rateType.value == '1'||rate.rateType.value == '2'" label="客户名称" prop="rateCustome">
    <el-input v-model="rate.rateCustome" placeholder="请输入客户名称"></el-input>
  </el-form-item>
  <el-form-item class="last" label="申请理由" prop="rateReason">
    <el-input type="textarea" v-model="rate.rateReason" placeholder="请输入申请理由"></el-input>
  </el-form-item>
  
  </el-form>
  </div>
  <el-button class="bigBtn" type="primary">提交申请</el-button>
  <el-button class="bigBtn noCheck" type="primary" @click="back">返回上一层</el-button>
  <p class="tip" v-if="rate.rateType.value == '0'"><span>!</span>客户基本手续费率一个月只能申请一次</p>
  <vue-pickers
      :show="show"
      :columns="1"
      :selectData="pickData"
      @cancel="close"
      @confirm="confirmFn"></vue-pickers>
</div>
</template>

<script>
import Header from '../../components/header'
import Bus from '../../components/bus.js'
import vuePickers from 'vue-pickers'
export default {
  components:{'HeaderBox':Header,vuePickers},
  data(){
    return {
        show:false,
        readonly:true,
        rate:{
          rateType:{
             text:'',
             value:'' 
          },
          rateReason:'',
          rateCustome:''
        },
      pickData: {
        // 第一列的数据结构
        data1: [
          {
            text: '客户基本手续费率申请',
            value: 0,
          },
          {
            text: '特殊客户手续费率申请',
            value: 1,
          },
          {
            text: '特殊客户保证金手续费率申请',
            value: 2,
          }
        ],
      },
    }
  },
  methods:{
    selectType(){
      this.show = true
    },
    close() {
      this.show = false
    },
       confirmFn(val) {
         this.show = false;
         console.log(val);
         this.rate.rateType = val.select1;
         this.rate.rateReason = '';
         this.rate.rateCustome = '';
         //this.$refs['form'].resetFields();
    },
     back(){
      this.$router.go(-1);
    },

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
.maContain{background-color: #ffffff;margin-top: 56px;padding-bottom:6px;font-size: 14px}
.bigBtn{width: 80%;margin-left:10%;margin-top: 16px;}
.noCheck{border:1px solid #4DA9EB;color: #4DA9EB;background-color:#f8f8f8;}
.tip{text-align: center;font-size: 12px;}
.tip span{display: inline-block;width: 14px;height: 14px;border-radius: 100%;background-color: red;color: #ffffff;font-size: 12px;line-height: 14px;text-align: center;margin-right: 10px;}
  .el-form-item{border-bottom: 1px solid #ececec;}
  .el-input{width: 80%;}
  .el-textarea{width:90%;border:none;}
  .el-input__inner:hover{border-color:transparent;}
  .iconfont{font-size: 24px;margin-left: 16px;color: #d9d9d9;}
   .last{border:none;}
</style>
