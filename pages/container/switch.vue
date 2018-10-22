<template>
    <div>
        <div>switch</div>
        <div id="echarts-demo" ref="echarts-demo"></div>
    </div>
</template>

<script>
export default {
  name: "myswitch",
  data() {
    return {
      myLineChart: null,
      lineOption: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      }
    };
  },
  async fetch({ store, params }) {
    const data = await store.dispatch("getStatic");
    console.log(data);
  },
  async mounted() {
    const data = await this.$store.dispatch("getStatic");
    this.myLineChart = this.$echarts.init(
      document.getElementById("echarts-demo")
    );
    this.myLineChart.setOption(this.lineOption);
    this.myLineChart.resize();
  }
};
</script>

<style lang="scss">
#echarts-demo {
  height: 300px;
}
</style>


