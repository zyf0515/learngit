<template>
    <div>
        <div class="silder"><img width="100%" :src="gallery[current].img_url" alt=""></div>
    </div>
</template>
<script>
export default {
    data(){
        return{current:0}
        },
        props:["gallery"],
        mounted(){
            // 每隔3s current+1
            //如果current 超过gallery长度  current=0
            setInterval(() => {
                this.current++;
                if(this.current>=this.gallery.length){
                    this.current=0;
                }
            }, 3000);
        }
    }

</script>
<style>

</style>
