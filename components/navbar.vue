<template>
    <div class="plug-nav-bar">
        <van-nav-bar :title="title" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    </div>
</template>


<script>
import { NavBar } from "vant";

export default {
  name: "plugnavbar",
  props: {
    title: {
      type: String,
      default: ""
    },
    onClickRight: {
      type: Function,
      default: () => {}
    }
  },
  components: {
    [NavBar.name]: NavBar
  }
};
</script>