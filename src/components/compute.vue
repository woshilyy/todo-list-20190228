<template>
    <div>
        <input type="text" :value="a">
        <input type="text" :value="b">
        <input type="text" :value="c">
    </div>
</template>

<script>
    export default {
        data(){
            return{
                a:1,
                b:2,
                active:false
            }
        },
        computed:{
            c(){
                return this.a+this.b
            }
        },
        watch: {
            active(val){
                console.log(val)
            }
        },
        methods: {
            change() {
                this.active=!this.active;
            },
        },
    }
</script>

<style scoped>

</style>