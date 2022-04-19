import axios from "axios";

const instance = axios.create({
  baseURL: "https://tg.xuan-niao.com/api",
  timeout: 1000,
});

instance.interceptors.response.use(
  (response: any) => {
    if (response.status !== 200) {
      console.error("网络错误");
      console.log("response", response);
    } else {
      const { data } = response;
      if (data.code === 0) {
        return data.data;
      } else {
        console.error("http请求失败");
        console.log("response.data", response.data.items);
      }
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// instance.interceptors.

export { instance as axios };
