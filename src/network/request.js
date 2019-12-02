import axios from 'axios'


// //一
// export function request(config,success,failure) {
//   //创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000'
//     // timeout: 5000
//   })

//   //发送真正的网络请求
//   instance(config)
//   .then(res => {
//     // console.log(res);
//     success(res)     //回调出去
//   })
//   .catch(err => {
//     // console.log(err);
//     failure(err)     //回调出去
//   })
// }


// //二
// export function request(config) {
//   //创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000'
//     // timeout: 5000
//   })

//   //发送真正的网络请求
//   instance(config.baseConfig)
//   .then(res => {
//     // console.log(res);
//    config.success(res)     //回调出去
//   })
//   .catch(err => {
//     // console.log(err);
//     config.failure(err)     //回调出去
//   })
// }

// //三
// export function request(config) {
//   return new Promise((resolve,reject) => {
//       //创建axios实例
//     const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000'
//     // timeout: 5000
//   })

//   //发送真正的网络请求
//   instance(config)
//   .then(res => {
//     resolve(res)
//   })
//   .catch(err => {
//     reject(err)
//   })
//   })

// }


//四
export function request(config) {
      //1.创建axios实例
    const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000'
    // timeout: 5000
  })

    //2.axios的拦截器

    //2.1拦截请求(拦截之后要记得return出去呀，不然那边拿不到).use  要求传入两个函数(一个成功一个错误)
    instance.interceptors.request.use(config => {      
      // console.log(config);
      // 1.config中的一些信息不符合服务器的要求时
      // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标（就是在请求的时候有一个圈圈再转动，请求完了之后就可以在拦截响应的地方把他拦截掉
      // 3.在某些特殊的情况下（比如登录（token）。必须携带以下一些特殊的信息
      return config
    }, err => {

    })
    //2.2拦截响应      

    instance.interceptors.response.use(res => {
      // console.log(res);      //结果不是在这里处理的    所以要记得返回出去
      return res.data      //请求的我们主要是想要data    如果没有data就是返回所有
    },err => {
      // console.log(err);
      return err
    })

     
    //3.发送真正的网络请求
    return instance(config)    //本身返回的就是promis   也就是相当于返回了一个promis所以另一边的main.js就可以.then和.catch
}



// //理解
// // 其他的就是分成了两个文件而已
// function test(aaa,bbb){
// //想要回调必须要传入函数或参数，有他们来回调
// aaa('hello world')    //调用aaa就是调用下面的aaa       上面这里回调底下的aaa就可以拿到    回调这里的函数就是调用底下的aaa
// }



// test(function (res){
//         //赋值给了上面的aaa
//         console.log(res)//hello world    上面aaa返回来的
// },function (){
//           //赋值给了bbb
// })

// // 上面的aaa是保存下面的aaa的路径地址