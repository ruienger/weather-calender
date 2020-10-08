<template>
    <div class="header">
            <div>{{title}}</div>
            <!-- 头部右边功能集 -->
            <div id="header-contentRight">
                <ul>
                    <li v-for='item in options' :key='item.id' :title='item.title'>
                        <i :class="'iconfont '+item.iconClass"></i>
                    </li>
                    <li><i class="iconfont icon-icon-test"></i></li>
                </ul>
            </div>
    </div>
</template>
<script>
import router from "@/router/index.js";
export default {
    name:'headNavBar',
    props:{
        options:{},
        title:''
    }
}
</script>
<style scoped>
.header{
    background-color: #77777766;
    height: 50px;
    display: flex;
    justify-content: space-between;
    line-height: 50px;
    padding-left: 20px;
    font-size: 15px;
    color: #eee;
    font-weight: bold;
    filter: blur(0.3);
}
#header-contentRight>ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#header-contentRight>ul>li{
    width: 50px;
    list-style-type: none;
    transition: all 0.2s;
    text-align: center;
}
#header-contentRight>ul>li:hover{
    background-color: #aaaaaa5d;
}
#header-contentRight>ul>li>i{
    font-weight: 100;
    width: 50px;
}
</style>