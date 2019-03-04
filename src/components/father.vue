<template>
  <div>
    <!-- <card>我是slot自定义内容</card> -->
    <!-- <card @on-click="handleClick" ref="coms">点击</card> -->
    <!-- <card @click.native="handleClick">点击</card> -->
    <p>this is parent compoent!</p>
    <card
      :messagec="messagec"
      :message="message"
      v-on:getCData="getCData"
      v-on:getChildData="getChildData(message)"
    ></card>
  </div>
</template>

<script>
import card from "./card";
export default {
  data() {
    return {
      message: "hello",
      messagec: "hello c"
      //传递给c组件的数据
    };
  },
  components: {
    card
  },
  methods: {
    handleClick() {
      console.log("点击了");
    },
    getChildData(val) {
      console.log("这是来自B组件的数据");
    },

    //执行C子组件触发的事件
    getCData(val) {
      console.log("这是来自C组件的数据：" + val);
    }
  },
  mounted() {
    const coms = this.$refs.coms;
    // coms.sayHello();
  },
  provide: {
    name: "viola"
  }
};
</script>

<style scoped>
</style>