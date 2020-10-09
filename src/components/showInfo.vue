<template>
  <div>
      {{userInfo}}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'showInfo',
    props:{
        userInfo:{}
    }
}
</script>

<style>

</style>