<template>
  <div>
    <headNavBar title="备忘录"></headNavBar>

    <div class="content">
      <el-radio-group v-model="activeName" class="tags-group" fill="#eee" text-color="#333">
        <el-radio-button label="0" name="tags" class="tags-group-label">全部</el-radio-button>
        <el-radio-button label="976" name="tags" class="tags-group-label">紧急</el-radio-button>
        <el-radio-button label="975" name="tags" class="tags-group-label">非紧急</el-radio-button>
      </el-radio-group>
      <!-- <el-tabs v-model="activeName" stretch >
        <el-tab-pane label="全部" name="0"></el-tab-pane>
        <el-tab-pane label="紧急" name="976"></el-tab-pane>
        <el-tab-pane label="非紧急" name="975"></el-tab-pane>
      </el-tabs> -->
      <div v-if="!notes.list.length" style="text-align:center;padding-top:10%">
        暂无备忘信息，您可能还未登录或者没有添加备忘录
      </div>
      <div v-else v-for="item in computedList" :key="item.id">
        <p>{{ item }}</p>
        <note
          @note-clicked="updateHandler($event)"
          :fxDate="item"
          @delete-clicked="deleteHandler($event)"
          :dangerCode="activeName"
        ></note>
      </div>
    </div>
    <el-drawer
            :visible.sync="isShown"
            direction="btt"
            size= '50%'
            :show-close="false"
        >       
            <notesMoudal class="moudal" 
                :fxDate="fxDate"
                :notes="form"
                @ok-clicked='addOrUpdateHandler($event)'
                >
            </notesMoudal>
    </el-drawer>
  </div>
</template>
<script>
import headNavBar from "@/components/headNavBar.vue";
import note from "@/components/notes.vue";
import { mapState, mapActions } from "vuex";
import notesMoudal from "@/components/notesMoudal.vue";
import moment from "moment";

export default {
  data() {
    return {
      form: {},
      fxDate: "",
      isShown: false,
      activeName: "0"
    };
  },
  methods: {
    ...mapActions("notes", ["addOrUpdateNotes", "deleteNotes"]),
    addOrUpdateHandler(data) {
      this.addOrUpdateNotes(data);
      this.hideMoudal();
    },
    hideMoudal() {
      this.isShown = false;
      this.form = {
        content: "",
        commentTime: 1582613734000,
        cusId: "",
        orderId: "976",
      };
    },
    showMoudal(fxDate) {
      this.form = {
        content: "",
        commentTime: 1582613734000,
        cusId: "",
        orderId: "976",
      };
      this.isShown = true;
      this.fxDate = fxDate;
    },
    updateHandler(data) {
      this.form = data;
      this.isShown = true;
      this.fxDate = moment(data.commentTime).format("YYYY-MM-DD")
    },
    deleteHandler(data) {
      this.deleteNotes(data);
    },
    date(item) {
      return moment(item, "YYYY_MM_DD").format("YYYY-MM-DD");
    },
    setList(list) {
      return new Set(
        list.sort((a,b) => {
          return b.commentTime - a.commentTime
        }).map((i)=>{
          return moment(i.commentTime).format("YYYY-MM-DD");
        })
      );
    },
  },
  computed: {
    ...mapState("notes", ["notes"]),
    computedList() {
      if (!+this.activeName) {
        return this.setList(this.notes.list);
      } else {
        return this.setList(
          this.notes.list.filter((i) => {
            return i.orderId == this.activeName;
          })
        );
      }
    },
    screenWidth() {
      return window.outerWidth;
    },
  },
  components: {
    headNavBar,
    note,
    notesMoudal,
  },
  created() {},
};
</script>
<style>
.content {
  width: 80%;
  /* height: 100%; */
  color: #eee;
  padding-bottom: 50px;
  padding: 0 1em;
  box-sizing: border-box;
  /* background-color: rgba(96, 223, 255, 0.178); */
  margin: 0 auto;
  margin-top: 50px;
}
.content p {
  font-size: 1.1em;
  padding-top: 1em;
  border-bottom: 1px solid #eee;
}
.el-tabs__item {
  color: #eee;
}
.tags-group{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tags-group-label{
  box-sizing: border-box;
  flex: 1;
}
.tags-group>.tags-group-label>span{
  width: 100%;
  display: inline-block;
  box-sizing: border-box;
  flex: 1;
  background-color: transparent;
  color: #eee;
}
@media screen and (min-width: 180px) and (max-width: 500px) {
  .content {
    padding: 0 5px;
    width: 98%;
  }
}
</style>