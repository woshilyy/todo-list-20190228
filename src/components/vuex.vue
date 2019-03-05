<template>
    <div>
         <router-link tag='button' to="/citylist">获取城市列表</router-link>
        <p>{{city}}</p>
    </div>
</template>

<script>
import store from '../store/store.js'
import { mapGetters } from 'vuex';
    export default {
        methods:{
            getInfo(){

            }
        },
        store,
        computed:{
            city(){
                 return this.$store.getters.getInfo;
            }
            // ...mapGetters(['getInfo'])
        }
    }
</script>

<style scoped>

</style>