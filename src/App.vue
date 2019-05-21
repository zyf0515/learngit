<template>
  <div id="app full">
    <!-- <keep-alive :include = "Catgory"> -->
    
    <!-- </keep-alive> -->
    <router-view class="full has-tabs"></router-view>
       
                <ul class="row tac tabs">
                    <li class="col-20 ">
                        <img src="./assets/img/nearby_black2.png" alt="">
                        <router-link  to="/">首页</router-link>
                    </li>
                    <li class="col-20 ">
                        <img src="./assets/img/shequ_gray.png" alt="">
                        <router-link to ="/Shequ">社区</router-link>
                    </li>
                    <li class="col-20 ">
                        <img src="./assets/img/read_white.png" alt="">
                        <router-link to ="/News">头条</router-link>
                    </li>
                    <li class="col-20 ">
                        <img src="./assets/img/message_gray.png" alt="">
                        <router-link to="/Msg" >消息</router-link>
                    </li>
                    <li class="col-20 ">
                        <img src="./assets/img/user_name_normal.png" alt="">
                        <router-link to="/Self" >我的</router-link>
                    </li>
                    
                </ul>
                
        
        
          
      <!-- <img src="" alt="">
       <router-link class="col"  to="/">首页</router-link>
        
        
     
          -->

       
    

  </div>
</template>

<style lang="less" scoped>
li>img{
    width: 0.4rem;
}
</style>
