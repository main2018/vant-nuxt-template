<template>
    <div>
        <van-nav-bar v-show="title" class="plug-nav-bar" :title="title" left-arrow @click-left="onBack"></van-nav-bar>
        <nuxt-child />
    </div>

</template>


<script>
import routerName from "~/assets/js/router-name";

export default {
  name: "container",
  computed: {
    title() {
      return routerName[this.$route.path];
    }
  },

  methods: {
    onBack() {
      history.back();
    }
  }
};
</script>

<style lang="scss">
.plug-nav-bar {
  .van-nav-bar__title {
    font-size: 15px;
    text-transform: capitalize;
  }

  .van-nav-bar__left,
  .van-nav-bar__right {
    cursor: pointer;
  }

  .van-nav-bar__right {
    font-size: 16px;
  }
}
</style>
