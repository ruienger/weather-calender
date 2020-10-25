<template>
    <div>
        <headNavBar title="日历" @search-clicked="handleSearch($event)"></headNavBar>
        <calender></calender>
    </div>
</template>
<script>
import headNavBar from '@/components/headNavBar.vue'
import calender from '@/components/calender.vue'
import { mapMutations } from 'vuex'
import moment from 'moment';

export default {
    components:{headNavBar, calender},
    computed:{
        
    },
    methods:{
        ...mapMutations('calender',['SET_CALENDERDATE']),
        handleSearch(data){
            if(moment(data)){
                this.SET_CALENDERDATE(moment(data).toDate())
            }else{
                alert('输入内容不规范')
            }
        }
    }
}
</script>