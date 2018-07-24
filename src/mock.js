const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const userInfoData = function() {
        let person = [
            {
                label:'姓名',
                text:Random.cname(),
            },
            {
                label:'身份证号',
                text:Random.id()
            },
            {
                label:'手机号',
                text:/^1[3|4|5|7|8][0-9]\d{8}$/
            },
            {
                label:'地址',
                text:Random.county(true)
            },
            {
                label:'返佣银行卡号',
                text:/^([1-9]{1})(\d{14}|\d{18})$/
            },
            {
                label:'开户行',
                text:Random.cword(2,4)+'银行'
            },                 
        ]
    return {
        person: person
    }
};
const customeInfoData = function() {
        let person = [
            {
                label:'姓名',
                text:Random.cname(),
                color:false
            },
            {
                label:'身份证号',
                text:Random.id(),
                color:false
            },
            {
                label:'手机号',
                text:/^1[3|4|5|7|8][0-9]\d{8}$/,
                color:false
            },
             {
                label:'开户时间',
                text:Random.date(),
                color:false
            },
            {
                label:'来源',
                text:Random.cname(),
                color:false
            },
            {
                label:'权益',
                text:Random.float(0,1000000,2,2),
                color:false
            },
            {
                label:'手续费',
                text:Random.float(0,1000000,2,2),
                color:false
            },
            {
                label:'交易所手续费',
                text:Random.float(0,1000000,2,2),
                color:false

            }, 
             {
                label:'留存手续费',
                text:Random.float(0,1000000,2,2),
                color:false

            }, 
             {
                label:'投资者保障基金',
                text:Random.float(0,1000000,2,2),
                color:false

            }, 
             {
                label:'软件使用费',
                text:Random.float(0,1000000,2,2),
                color:false

            }, 
             {
                label:'核算留存手续费',
                text:Random.float(0,1000000,2,2),
                color:false

            }, 
             {
                label:'总盈亏',
                text:Random.float(-1000000,1000000,2,2),
                color:true
            }, 

        ]
    return {
        person: person
    }
};
 const customeList = function() {
    let list = [];
        for(let i=0;i<20;i++){
            let newCustomeObject = {
                name:Random.cname(),
                phone:/^1[3|4|5|7|8][0-9]\d{8}$/,
                date:Random.date(),
                id:Random.natural(0,100)
            }
            list.push(newCustomeObject)
        }
          
    return {
        list: list
    }
        };

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/user/index', 'post', userInfoData());



Mock.mock('user/ma','post',{
    phone:/^[1][3,4,5,7,8][0-9]{9}$/,
    photo:Random.dataImage('118x118', '居间协议')
});

Mock.mock('user/login','post',{
    userId:'@natural(0,100)',
    status:'ok'
});
Mock.mock('user/customList','post',customeList());
Mock.mock('user/customdetail','post',customeInfoData());
Mock.setup({
    timeout:0-300
})

// user_id: Random.natural(5, 30), //  Random.csentence( min, max )
            // user_ma: Random.dataImage('200x200', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            // user_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            // user_phone:/^1[3|4|5|7|8][0-9]\d{8}$/,
            // user_guid:Random.id(),//随机生成身份证号码
            // user_conty:Random.country(true),//随机生成一个县
            // user_bank:/^([1-9]{1})(\d{14}|\d{18})$/,
            // user_bankName:Random.cword(2,4)+'银行',//生成银行名字
            // proto_photo:Random.dataImage('118x118', 'mock的图片'),
            // user_email:Random.email();