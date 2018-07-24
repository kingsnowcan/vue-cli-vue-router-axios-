import Vue from 'vue'
import Router from 'vue-router'
import RegisterPage from '../pages/register/registerPage'
import ForgetPage from '../pages/forgetPass'
import Login from '../pages/loginPage'
import Layout from '../components/layout'
import InfoPage from '../pages/register/infoPage'
import CustomPage from '../pages/custome/customPage'
import MateriaPage from '../pages/materia/materiaPage'
import PayPage from '../pages/pay/payPage'
import OtherPage from '../pages/more/otherPage'
import CDetailPage from '../pages/custome/customeDetailPage'
import CMaPage from '../pages/custome/customeMaPage'
import PDetailPage from '../pages/pay/payDetailPage'
import NewList from '../pages/more/newsList'
import NewsDetailPage from '../pages/more/newsDetailPage'
import RatePage from '../pages/more/ratePage'
import AdvincePage from '../pages/more/advincePage'
import CheckPass from '../pages/more/CheckPass'
Vue.use(Router)

const routes = [
    {
      path: '/',
      name: 'Login',
      component: Login,     
    },
    {
    	path:'/register/registerPage',
    	component:RegisterPage
    },
    {
    	path:'/register/infoPage',
    	component:InfoPage
    },
    {
    	path:'/forgetPass',
    	component:ForgetPage
    },
    {
    	path:'/layout',
    	component:Layout,
      children:[
          {path:'/layout/custome/customPage',meta:{infoShow:true},component:CustomPage},
          {path:'/layout/materia/materiaPage',meta:{infoShow:true},component:MateriaPage},
          {path:'/layout/pay/payPage',meta:{infoShow:false},component:PayPage},
          {path:'/layout/more/otherPage',meta:{infoShow:false},component:OtherPage}
      ]
    },
    {
      path:'/more/checkPass',
      component:CheckPass
    },
    {
      path:'/more/advincePage',
      component:AdvincePage
    },
     {
      path:'/more/ratePage',
      component:RatePage
    },
     {
      path:'/more/newsDetailPage',
      component:NewsDetailPage
    },
    {
      path:'/more/newsList',
      component:NewList
    },
    {
      path:'/pay/payDetailPage',
      component:PDetailPage
    },
    {
      path:'/custome/customeDetailPage',
      component:CDetailPage
    },
    {
      path:'/custome/customeMaPage',
      component:CMaPage
    },
   {
   	path:'*',
   	name:'Login',
   	redirect:'/loginPage'
   },
    
  
]
export default new Router({
	routes:routes,
  mode:'history'
})
