<template>
    <div id="app">
        <div id="main" :style="{width:'300px',height:'300px'}"></div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
            }
        },
        mounted(){
            this.draw();
        },
        methods:{
            draw(){
                var mychart=this.$echarts.init(document.getElementById('main'));
                mychart.setOption({
                    title:{
                        tetxt:'echart'
                    },
                    toootip:{},
                    xAxis:{
                        data:['衬衫','羊毛衫','雪纺衫']
                    },
                    yAxis:{},
                    series:[{
                        name:'销量',
                        type:'bar',
                        data:[5,20,15,8,6]
                    }]
                })
            }
        }
    }
</script>

<style scoped>

</style>