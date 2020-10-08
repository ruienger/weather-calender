<template>
    <div>
        <headNavBar title="日历"></headNavBar>
        <calender></calender>
    </div>
</template>
<script>
import headNavBar from '@/components/headNavBar.vue'
import calender from '@/components/calender.vue'

export default {
    components:{headNavBar, calender}
}
</script>