<template>
    <div class="city">
        <ul>
            <li v-for="(item,index) in cityArr" @click="backFn(index)" :key="index">
                <h2>{{item}}</h2>
            </li>
        </ul>
    </div>
</template>

<script>
import store from '../store/store.js'
import { mapMutations } from 'vuex';
    export default {
        name:'citylist',
        data(){
            return{
                cityArr:['北京','上海','广州','深圳','茂名','张家界','清远','汕头','佛山']
            }
        },
        store,
        methods: {
          backFn(index){
              this.$store.dispatch('setNameInfo',this.cityArr[index]);
              this.$router.push('/vuex')
          }
          
        },
    }
</script>

<style scoped>

</style>