<template>
  <transition appear name="flow-up">
    <div>
      <!-- {{ notes }} -->
      <el-collapse v-model="activeNames" style="border: none">
        <el-collapse-item :title="'共 ' + iteratorList.length + ' 条'" name="1">
          <div class="content-notes">
            <div
              v-for="item in iteratorList"
              :key="item.id"
              :class="'item-wrapper ' + isDanger(item.orderId)"
            >
              <!-- {{item}} -->
              <p class="notes-time">
                <span> 于 {{ time(item.commentTime) }}  </span
                ><span>{{ from(item.commentTime) }}</span>
              </p>
              <div class="notes-content">
                <div>{{ item.content }}</div>
                <div>
                  <el-button
                    icon="el-icon-edit"
                    circle
                    @click="$emit('note-clicked', item)"
                  ></el-button>
                  <el-button
                    type="danger"
                    icon="el-icon-delete"
                    circle
                    slot="reference"
                    style="margin-left: 10px"
                    @click="showDailog(item)"
                  ></el-button>
                </div>
              </div>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
      <!-- <div class="trigger" @click="changeTrigger"> <span>共 {{ iteratorList.length }} 条</span> <span >{{ trigger }}</span> </div> -->
      <el-drawer
            :visible.sync="centerDialogVisible"
            direction="btt"
            size= '20%'
            :show-close="false"
        > 
        <p style="color:#333;text-align:center">确定要删除吗?</p>
        <span class="dialog-footer">
          <div type="text" @click="centerDialogVisible = false">取 消</div>
          <div type="text" @click="updateHandler"
            >确 定</div
          >
        </span>
      </el-drawer>
    </div>
  </transition>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";
export default {
  name: "notes",
  props: {
    fxDate: "",
    dangerCode: 0,
  },
  data() {
    return {
      trigger: "折叠",
      height: this.heightOffSet,
      activeNames: ["1"],
      centerDialogVisible: false,
      item: {}
    };
  },
  computed: {
    ...mapState("notes", ["notes"]),
    iteratorList() {
      let list = this.notes.list.filter((item) => {
        return (
          moment(item.commentTime).format("YYYY-MM-DD") ==
          moment(this.fxDate).format("YYYY-MM-DD")
        );
      });
      if (this.dangerCode == 0) {
        return list;
      } else {
        return list.filter((item) => {
          return item.orderId == this.dangerCode;
        });
      }
    },
    heightOffSet() {
      return this.iteratorList.length * 140;
    },
    dialogWidth() {
      return window.outerWidth > 500 ? "50%" : "90%";
    },
  },
  methods: {
    from(date) {
      return moment(date).from();
    },
    time(date) {
      return moment(date).format("hh:mm");
    },
    changeTrigger() {
      this.trigger == "更多"
        ? (this.trigger = "折叠")
        : (this.trigger = "更多");
      this.height != 0 ? (this.height = 0) : (this.height = this.heightOffSet);
    },
    isDanger(status) {
      if (status == "975") {
        return "danger";
      } else {
        return null;
      }
    },
    updateHandler(data){
      this.centerDialogVisible = false
      this.$emit('delete-clicked', this.item)
    },
    showDailog(item){
      this.item = item
      this.centerDialogVisible = true
    }
  },
};
</script>

<style>
.item-wrapper {
  height: 130px;
  width: 100%;
  background-color: #e6e6e660;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 0 1em;
  color: #eee;
  box-sizing: border-box;
}
.danger {
  background-color: rgba(163, 68, 68, 0.527);
}
.trigger {
  display: flex;
  justify-content: space-between;
  height: 20px;
  padding: 5px 1em;
  /* border-bottom: 1px solid #eee; */
}
.content-notes {
  height: auto;
  overflow: hidden;
  transition: all 0.7s;
}
.notes-content {
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.notes-time {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-top: 10px;
}
.flow-up-enter-active,
.flow-up-leave-active {
  transition: all 0.4s 0.3s;
}
.flow-up-delay-enter {
  transform: translateY(50px);
  opacity: 0;
}
.el-collapse-item__header {
  color: inherit;
  background-color: transparent;
  padding: 0.4em 1em;
  border-bottom: none;
}
.el-collapse-item__wrap {
  color: inherit;
  background-color: transparent;
  padding: 0.4em 1em;
  border-bottom: none;
}
.dialog-footer{
  position: relative;
  top: calc(100% - 80px);
  display: flex;
  justify-content: space-between;
}
.dialog-footer>div{
  flex: 1;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #333;
  font-size: 1.2em;
}
.notes-dialog{
  border-radius: 1em;
}
</style>