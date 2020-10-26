<template>
    <div class="slider" :style="'width:'+width+'px'">
        
            <div>
                <ul>
                    <li @click='changeShown'>
                        <i :class="'iconfont '+ headIconClass"></i>
                        
                    </li>
                    <li v-for='item in routers' :key='item.name'>
                        <router-link :to="{ name:item.name }" class="slider-link">
                            <input type="radio" :value='item.name' :id="item.name" name='navTags' :checked='item.name == "weather_calender"'>
                            <label :for="item.name">
                                <i :class='"iconfont " + item.params.iconClass'></i>
                                <span>{{item.name}}</span>
                            </label>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div id="slider-userSet">
                <!-- <ul>
                    <li v-for='item in foot' :key='item.id'>
                    <input type="radio" :value='item.title' :id="item.label" name='navTags' :checked='item.title == title?true:false'>
                    <label :for="item.label" @click='submitTitle(item.title)'>
                        <i :class='"iconfont " + item.iconClass'></i>
                        <span>{{item.title}}</span>
                    </label> 
                    </li>
                </ul> -->
            </div>
    </div>
</template>
<script>
import router from '@/router/index.js'

export default {
    name:'sideBar',
    data(){
        return{
            width:50,
        }
    },
    computed:{
        routers(){
            return this.$router.options.routes
        }
    },
    created(){
    },
    props:{
        headIconClass:''
    },
    methods:{
        changeShown(){
            if(this.width == 50){
                this.width = 220
            }else{
                this.width = 50
            }
        },
    },
    router
    
}
</script>
<style scoped>
.slider{
    width: 50px;
    height: 100%;
    background-image: linear-gradient(180deg,#ccccccca 0%,#c5c3bfca 65%,#d1d4b9ca 90%);
    position: absolute;
    top: 0;
    transition: all 0.3s;
    overflow: hidden;
}
.slider li{
    width: 100%;
    height: 50px;
    list-style-type: none;
    line-height: 50px;

}
.slider li>i{
    position: relative;
    left: 16px;
}
.slider-link>input{
    display: none;
}
.slider-link>input~label{
    width: 250px;
    height: 50px;
    line-height: 50px;
    padding-left: 13px;
    display: flex;
    justify-content: space-between;
    border-left: 3px solid #77777700;
    transition: all 0.2s;
}
.slider-link>label>span{
    display: inline-block;
    width: 30%;
    margin-right: 30%;
}
/* .slider-link>input:checked~label{
    background-color: #777777ea;
    color: #eee;
    border-left: 3px solid #444;
} */
.slider li:hover{
    background-color: #ccccccea;
}
.router-link-exact-active label{
    background-color: #777777ea;
    color: #eee;
    border-left: 3px solid #444;
}
#slider-userSet{
    position: relative;

    bottom: 0px;
}
.slider-link{
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #333;
}
@media screen and (min-width: 180px) and (max-width: 500px){
    .slider{
        width: 125% !important; 
        height: 50px;
        background-image: linear-gradient(180deg,#ccccccca 0%,#c5c3bfca 65%,#d1d4b9ca 90%);
        top: calc(100% - 50px);
        z-index: 14;
        transform: translate(-20%);
    }   
    .slider ul{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }
    .slider li{
        width: 100%;
        height: 50px;
        list-style-type: none;
        line-height: 50px;

    }
    .slider-link>input~label{
        width: auto;
        height: 50px;
        line-height: 50px;
        padding-left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border-left: none;
        transition: all 0.2s;
    }
    .slider-link>input>i{
        width: fit-content;
        height: fit-content;
        margin: 0 auto;
    }
    .slider-link>label>span{
        display: none;
        width: 30%;
        height: fit-content;
        margin: 0 auto;
        font-size: 7px;
    }
    .iconfont{
        font-size: 1.5em;
        font-style: normal;
    }
    .router-link-exact-active label{
        width: 1.6em;
        height: 1.6em;
        background-color: #777777ea;
        color: #eee;
        /* border-radius: .8em; */
    }
}
</style>