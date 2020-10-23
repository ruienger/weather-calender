<template>
  <div class="tag" v-if="iteratorList">
      {{iteratorList}}
  </div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'
export default {
  name: 'notes',
  props:{
    fxDate: ''
  },
  computed:{
      ...mapState('notes',['notes']),
      iteratorList(){
      return this.notes.list.filter((item)=>{
        return moment(item.commentTime).format('YYYY-MM-DD') == moment(this.fxDate).format('YYYY-MM-DD')
      }).length
    }
  }
}
</script>

<style scoped>
.tag{
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: rgba(255, 61, 61, 0.87);
    line-height: 20px;
    text-align: center;
    font-size: 7px;
}
</style>