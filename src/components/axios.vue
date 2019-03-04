<template>
  <div>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getInfo() {
      this.$axios
        .get(
          "https://www.easy-mock.com/mock/5c75eab82730bb18b51d9f40/ixiaowo-jinshang/paymentRecord"
        )
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    this.getInfo();
  }
};
</script>

<style scoped>
</style>