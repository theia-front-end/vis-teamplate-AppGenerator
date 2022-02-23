import axios, { Method } from 'axios';
// dev 使用 node 代理，生产模式使用 nginx 代理
const baseURL = `/api/`;

/**
 * 简易封装axios
 * @param method 请求方法类型
 * @param url 请求地址
 * @param params 请求参数
 */
function apiAxios(method: Method, url: string, params: any = {}): Promise<any> {
  return new Promise((resolve, reject) => {
    axios({
      method,
      baseURL,
      url,
      params: method === 'GET' ? params : null,
      data: method === 'POST' ? params : null,
    })
      .then(({ data }) => {
        /** 额外处理 */
        resolve(data);
      })
      .catch((e) => {
        /** 额外处理 */
        reject(e);
      });
  });
}

export default {
  get: function (url: string, params?: any) {
    return apiAxios('GET', url, params);
  },
  post: function (url: string, params?: any) {
    return apiAxios('POST', url, params);
  },
};
