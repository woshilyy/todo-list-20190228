<template>
    <section>
        <form action="" onsubmit="return false;"><!--手机测试的话，改事件，调用搜索-->
          <mt-search v-model="searchVal" 
              :autofocus="autofocus"  
              placeholder="请输入身份证号"
               @keyup.native.enter="search(searchVal)"
                >
          </mt-search>
        </form>
    </section>
</template>

<script>
    export default{
        component:{
            Search
        },
        props:{
            fouce:Boolean,
            searchValog :String,
        },
        data(){
            return{
                searchVal:"",
                autofocus:true,
                result:"www",
            }
        },
        methods:{
                search(value){
                    this.$emit('search_val',value);//
                    document.activeElement.blur();/*关闭搜索框*/
                }
        },
        watch:{/*监视值的变化,前后跳页时候使用*/
            searchValog(val){
                this.searchVal = val;
            }
        },
        mounted(){
            this.searchVal = this.searchValog;
        }
        
    }
</script>

<!--一般，一个组件用一个section包住，绑定属性用:,绑定事件用@,-->
<!--传进来的参数 用props接受，可以数组或者对象的形式去写，对象里面也有对象-->
<!--也是可以的。-->

<!--this.$emit('search_val',value);-->
<!--这个是发射事前，在父亲组件绑定这个事件，这个事件就可以发生了。-->
