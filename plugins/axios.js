export default function ({
  $axios,
  redirect,
  store
}) {
  $axios.setHeader('token', store.state.token)

  $axios.onRequest(config => {
    //console.log(`Making request to ${config.url}`)
  })
  $axios.onResponse(response => {
    // console.log(response)
    // response.data = "修改了返回的内容"
  })
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    } else if (error.code === 500) {
      redirect('/sorry')
    }
  })
}
