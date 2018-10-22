<template>
    <div id="error">
        <div class="error-top">
            <div class="error-code">
                <div class="error-statuscode">{{error.statusCode}}</div>
                <div class="error-message" v-if="error.statusCode === 404">很抱歉，页面暂时无法访问</div>
            </div>
        </div>
        <div class="error-back">
            <a href="/">返回首页</a>
        </div>
    </div>
</template>

<script>
export default {
  props: ["error"],
  head() {
    return {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "error page" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#error {
  width: 100%;
  margin: 0 auto;
  &:before {
    content: "";
    display: table;
  }
  .error-top {
    margin-top: 15vh;
    display: -webkit-flex;
    display: flex;
    position: relative;
    .error-code {
      height: 420px;
      color: #6e90f5;
      margin: 0 auto;
      .error-statuscode {
        font-size: 200px;
        font-weight: 500;
        line-height: 240px;
      }
      .error-message {
        text-align: center;
        font-size: 30px;
      }
    }
  }
  .error-back {
    margin-top: 80px;
    a {
      border: 2px solid #6e90f5;
      border-radius: 100px;
      font-size: 24px;
      color: #6e90f5;
      width: 240px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      margin: 0 auto;
      display: block;
      &:active {
        background: #6e90f5;
        color: #ffffff;
      }
    }
  }
}
</style>
