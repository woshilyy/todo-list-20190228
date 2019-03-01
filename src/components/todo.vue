<template>
  <div class="todo">
    <van-cell-group>
      <van-field v-model="todoInput" placeholder="请输入..." @keyup.enter="matter"/>
      <!-- <van-row v-for="(item,index) in does" :key="index">
        <van-col span="20">
          <van-checkbox-group v-model="result">
            <van-checkbox
              :name="item.val"
              @click="change(index)"
              :class="{isDone:item.isDone}"
            >{{ item.val }}</van-checkbox>
          </van-checkbox-group>
        </van-col>
        <van-col span="4">
          <van-icon name="close" @click="del(index)"/>
        </van-col>
      </van-row>-->
    </van-cell-group>
    <van-tabs :active="active">
      <van-tab title="全部">
        <van-row v-for="(item,index) in does" :key="index">
          <van-col span="20">
            <van-checkbox-group v-model="result">
              <van-checkbox
                :name="item.val"
                @click="change(index)"
                :class="{isDone:item.isDone}"
              >{{ item.val }}</van-checkbox>
            </van-checkbox-group>
          </van-col>
          <van-col span="4">
            <van-icon name="close" @click="del(index)"/>
          </van-col>
        </van-row>
      </van-tab>
      <van-tab title="未完成">
        <van-row v-for="(item,index) in doesNo" :key="index">
          <van-col span="20">
            <van-checkbox-group v-model="result">
              <van-checkbox
                :name="item.val"
                @click="changeNo(index)"
                :class="{isDone:item.isDone}"
              >{{ item.val }}</van-checkbox>
            </van-checkbox-group>
          </van-col>
          <van-col span="4">
            <van-icon name="close" @click="del(index)"/>
          </van-col>
        </van-row>
      </van-tab>
      <van-tab title="已完成">
        <van-row v-for="(item,index) in doesEd" :key="index">
          <van-col span="20">
            <van-checkbox-group v-model="result">
              <van-checkbox
                :name="item.val"
                @click="changeEd(index)"
                :class="{isDone:item.isDone}"
              >{{ item.val }}</van-checkbox>
            </van-checkbox-group>
          </van-col>
          <van-col span="4">
            <van-icon name="close" @click="del(index)"/>
          </van-col>
        </van-row>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      id: 1,
      todoInput: "",
      does: [],
      result: [],
      shouldShowItem: "",
    };
  },
  methods: {
    matter() {
      this.does.push({
        id: this.id,
        val: this.todoInput,
        isDone: false
      });
      localStorage.setItem("matter", JSON.stringify(this.does));
      this.id++;
      this.todoInput = "";
    },
    change(index) {
      this.does[index].isDone = !this.does[index].isDone;
      localStorage.setItem("matter", JSON.stringify(this.does));
    },
    changeEd(index) {
      this.doesEd.push({
        id: index,
        val: this.result[index],
        isDone: false
      });
      this.doesEd[index].isDone = !this.doesEd[index].isDone;
      localStorage.setItem("matterEd", JSON.stringify(this.doesEd));
    },
     changeNo(index) {
      this.doesNo.push({
        id: index,
        val: this.result[index],
        isDone: true
      });
      this.doesNo[index].isDone = !this.doesNo[index].isDone;
      localStorage.setItem("matterNo", JSON.stringify(this.doesNo));
    },
    del(index) {
      this.does.splice(index, 1);
      localStorage.setItem("matter", JSON.stringify(this.does));
    }
  },
  created() {
    if (localStorage.getItem("matter")) {
      this.does = JSON.parse(localStorage.getItem("matter"));
      this.does.map((item, key) => {
        if (item.isDone == true) {
          this.result[key] = item.val;
        }
      });
    } else {
    }
  },
  computed: {
    doesEd() {
      return this.does.filter(function(item) {
        return item.isDone;
      });
    },
    doesNo() {
      return this.does.filter(function(item) {
        return !item.isDone;
      });
    }
  },
  watch: {}
};
</script>

<style lang='scss'>
.todo {
  .van-cell-group {
    margin: 10px;
    .van-checkbox__icon {
      float: left;
    }
    .van-row {
      height: 45px;
      display: flex;
      align-items: center;
      .van-checkbox-group {
        display: flex;
      }
    }
    .isDone {
      text-decoration: line-through;
    }
    .van-checkbox__label {
      color: #ccc;
    }
  }
  .van-tabs {
    .van-tabs__line {
      background-color: #1989fa;
    }
    .van-tab__pane {
      margin: 10px;
    }
    .van-tabs__content {
      .van-tab__pane {
        .van-row {
          height: 45px;
        }
      }
    }
  }
}
</style>