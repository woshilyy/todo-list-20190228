<template>
  <div>
    <input type="text" v-model="$attrs.messagec" @input="passCData($attrs.messagec)">
  </div>
</template>

<script>
export default {
    methods:{
        passCData(val){
            this.$emit('getCData',val);
        }
    }
};
</script>

<style scoped>
</style>