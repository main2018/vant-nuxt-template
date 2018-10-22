import Vue from "vue"
import {
  Toast
} from 'vant';

Vue.use(Toast);
export default function ({
  $axios,
  store,
  redirect,
  error
}) {
  $axios.setHeader('token', store.state.token)

  $axios.onRequest(config => {
    Toast.loading({
      duration: 0, // 持续展示 toast
      forbidClick: true, // 禁用背景点击
      loadingType: 'spinner'
    })
    //console.log(`Making request to ${config.url}`)
  })
  $axios.onResponse(response => {
    Toast.clear();
    // console.log(response)
    // response.data = "修改了返回的内容"
  })
  $axios.onError(err => {
    Toast.clear();
    const code = parseInt(err.response && err.response.status);
    if (code === 404) {
      error({
        statusCode: 404,
        message: '服务未找到'
      })
    } else if (code === 500) {
      redirect('/sorry')
    }

  })
}
