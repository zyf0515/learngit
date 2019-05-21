<template>
    <div>
        <van-nav-bar title="标题"  left-text="返回" left-arrow>
        <van-icon name="search" slot="right" />
        </van-nav-bar>
    </div>
</template>
<script>
import { NavBar } from 'vant';
import {mapState} from 'vuex';
export default {
    computed:{
        ...mapState(["goods"])
    },
    components:{
        
    }

}
</script>