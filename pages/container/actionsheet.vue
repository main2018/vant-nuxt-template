<template>
  <div>{{getUser}}</div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getUser"])
  },
  mounted(){
    console.log(this.$store.state.token)
  }
}
</script>

