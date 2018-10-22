<template>
  <div>
    <div>{{getUser}}</div>
    <div>token为{{getToken}}</div>
  </div>
</template>


<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["getUser", "getToken"])
  },
  async fetch({ store }) {
    const data = await store.dispatch("getStatic1");
  },
  async mounted() {}
};
</script>

