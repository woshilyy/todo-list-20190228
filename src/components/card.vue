<template>
  <div>
    <!-- <strong>error!</strong>   
    <slot></slot>-->
    <!-- <button @click="handleClick"> -->
    <!-- <slot></slot> -->
    <!-- </button> -->
    <input type="text" v-model="mymessage" @input="passData(mymessage)">
    <!-- C组件中能直接触发getCData的原因在于 B组件调用C组件时 使用 v-on 绑定了$listeners 属性 -->
    <!-- 通过v-bind 绑定$attrs属性，C组件可以直接获取到A组件中传递下来的props（除了B组件中props声明的） -->
    <grandson v-bind="$attrs" v-on="$listeners"></grandson>
  </div>
</template>

<script>
import grandson from "./grandson";
export default {
    data(){
        return{
            mymessage:''
        }
    },
  methods: {
    // handleClick(event) {
    //   this.$emit("on-click", event);
    // },
    // sayHello() {
    //   window.alert("hello");
    // }
    passData(val) {
      //触发父组件中的事件
      this.$emit("getChildData", val);
    }
  },
  inject: ["name"],
  mounted() {
    console.log(this.name);
  },
  components: {
    grandson
  }
};
</script>

<style scoped>
</style>