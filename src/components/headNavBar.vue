<template>
    <div class="header">
            <div>{{title}}</div>
            <!-- 头部右边功能集 -->
            <div id="header-contentRight">
                <ul>
                    
                    <li v-for='item in options' :key='item.id' :title='item.title'>
                        <i :class="'iconfont '+item.iconClass"></i>
                    </li>
                    <li class="search-wrapper">
                        <transition appear name="slide-in">
                            <input type="text" v-model="searchInfo" v-show="isShown" :placeholder="placeholder">
                        </transition>
                        <i class="iconfont icon-icon-test" @click="showSearchBar"></i>
                    </li>
                    <li>
                        <router-link to="/user" class="avatar-wrapper"><el-avatar :size="size" :src="userInfo.avatar"></el-avatar></router-link>
                        
                    </li>
                </ul>
            </div>
    </div>
</template>
<script>
import router from "@/router/index.js";
import { mapState } from 'vuex';

export default {
    name:'headNavBar',
    props:{
        options:{},
        title:'',
        
        
    },
    data(){
        return {
            size: 'medium',
            isShown: false,
            searchInfo: '',
            placeholder: ''
        }
    },
    router,
    computed:{
        ...mapState('user',['userInfo'])
    },
    methods:{
        showSearchBar(){
            if(!this.isShown){
                this.isShown = !this.isShown
                switch(this.title){
                    case '用户':
                        alert('满共就没几条信息你隔着搜啥呢')
                        this.isShown = !this.isShown
                        break
                    case '主页':
                        this.placeholder = '输入完整城市名'
                        break
                    case '备忘录':
                        alert('满共就没几条信息你隔着搜啥呢')
                        this.isShown = false
                        break
                    case '日历':
                        this.placeholder = '输入日期'
                        break
                }
            }else{
                if(this.searchInfo){
                    this.$emit('search-clicked',this.searchInfo)
                    
                }
                this.isShown = !this.isShown
                
            }
            
        }
    }
}
</script>
<style scoped>
.header{
    background-color: #77777766;
    width: calc(100% - 50px);
    height: 50px;
    display: flex;
    justify-content: space-between;
    line-height: 50px;
    padding-left: 20px;
    font-size: 15px;
    color: #eee;
    position: absolute;
    font-weight: bold;
    filter: blur(0.3);
    box-sizing: border-box;
}
#header-contentRight>ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#header-contentRight>ul>li{
    /* width: 50px; */
    list-style-type: none;
    transition: all 0.2s;
    text-align: center;
    display: flex;
    justify-content: center;
    margin-right: 10px;
    align-items: center;
}
#header-contentRight>ul>li:hover{
    background-color: #aaaaaa5d;
}
#header-contentRight>ul>li>i{
    font-weight: 100;
    width: 50px;
}
input{
    height: 40px;
    margin: auto 0;
    outline: none;
    border: 1px solid #eee;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding-left: 10px;
}
.search-wrapper{
    display: flex;
    justify-content: space-around;
}
.slide-in-enter-active{
    transition: all .5s;
    transform-origin: right;
}
.slide-in-enter{
    transform: scaleX(0);
}
.avatar-wrapper{
    height: 100%;
    display: flex;
    align-items: center;
}
/* .slide-in-leave{
    width: 200px;
} */
@media screen and (min-width: 180px) and (max-width: 500px){
    .header{
        width: 100%;
    }
}
</style>