// 在http.js中引入axios
import axios from "axios";
import QS from "qs";
// 设置超时时间
axios.defaults.timeout = 10000;
// 设置默认post的请求头
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";

// 添加token 在登录成功后进行设置
export function setToken(token) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}

export default {
  /**
   * get方法，对应get请求
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
  get(url, params) {
    return new Promise((resolve, reject) => {
      axios
          .get(url, {
            params: params,
          }, {
            async: false,
          })
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
    });
  },
  /**
   * post方法，对应post请求
   * @param {String} url [请求的url地址]
   * @param {Object} data [请求时携带的参数]
   */
  post(url, data, contentType) {
    data = QS.stringify(data)  //post需要序列化
    return new Promise((resolve, reject) => {
      axios
          .post(url, data, {
            // headers: {
            //     "Content-Type": contentType ? contentType : "application/json",
            // },
            headers: {      //请求头
              "Accept": "*/*",
              "Content-Type": contentType ? contentType : "application/json",
              "JWT-token": ""  //这是获取的token
            },
            async: false
          })
          .then(res => {
            if (res.data.code == 200) {
              resolve(res.data);
            } else {
              console.log(res);
            }
          })
          .catch(err => {
            reject(err);
          });
    });
  }
}
