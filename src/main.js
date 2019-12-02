// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'      //导入


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// //一axios的最基本的使用

// // axios(config)    //config 一般是个对象类型


// // axios   是支持promis的 .then() 就是返回promise     然后promise就会调用内部的resolve(resolve 表示成功)

// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   method: 'get'    //默认就是get      可不写
// }).then(res=>{
//   console.log(res)
// })

// //带参数请求一
// axios({
//   url:'http://123.207.32.32:8000/home/data?type=sell&page=3',
//   method: 'get'    //默认就是get      可不写
// }).then(res=>{
//   console.log(res)
// })

// //带参数请求二
// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   //专门针对git的请求的参数的拼接
//   params: {
//     type: 'sell',
//     page: '1'
//   },
//   method: 'get'    //默认就是get      可不写
// }).then(res=>{
//   console.log(res)
// })


// ****************************************************************************************************************

// //二axios的发送的并发请求  axios.all()           promis也有promis.all()
// // axios.all([axios({}),axios({})]).then(results => {})

// axios.all([axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }),axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'sell',
//     page: '1'
//   }
// })])
// .then(results => {
//   console.log(results)
// })

// //axios.all() 也支持把数组展开
// // axios.spread()
// axios.all([axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }),axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'sell',
//     page: '1'
//   }
// })])
// .then(axios.spread((res1,res2) => {      //注意箭头函数    只有一个参数才可以省略括号，两个以上不能省
//   console.log(res1);
//   console.log(res2);
// }))

// *********************************************************************************************************************

// //三全局配置（使用全局的axios和对应的配置在进行网络请求）
// // 公共配置写在外面
// axios.defaults.baseURL="http://123.207.32.32:8000",
// axios.defaults.timeout=5000   //请求时间

// axios.all([axios({
//   url:'/home/multidata'
// }),axios({
//   url:'/home/data',
//   params: {
//     type: 'sell',
//     page: '1'
//   }
// })])
// .then(results => {
//   console.log(results)
// })

// //为了有时候服务的超负荷就会设置多个服务器，但多个的服务器他们的配置有时候并不一样，所以才有创建对应的axios的实例（）方便请求不同的URL..
// //创建对应axios的实例    
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })

// // const instance2 = axios.create({
// //   baseURL: '',
// //   timeout: 
// // })

// instance1({         //用的是instance1的配置
//   url: './home/multidata'
// }).then(res=>{
//   console.log(res);
// })




//五********封装request模块************************************************************************************************** */
import {request} from "./network/request";

// //一
// //request一共有三个参数   request(config,success,failure)    
// request({
//   url: './home/multidata'
// },res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// })


// //二
// //request一共有三个参数   request(config,success,failure)    
// request({
//   baseConfig: {

//   },
//   success: function (res) {

//   },
//   failure: function (err) {
  
//   }
// })



// //三
// //request一共有三个参数   request(config,success,failure)    
// request({
//   url: './home/multidata'
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })



//四
//request一共有三个参数   request(config,success,failure)    
request({
  url: './home/multidata'
}).then(res => {
  console.log(res);    //所以这里拿到的只有data了
}).catch(err => {
  console.log(err);
})





