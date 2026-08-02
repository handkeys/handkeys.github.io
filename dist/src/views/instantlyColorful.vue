<script setup>
import { ref, getCurrentInstance } from 'vue'
import ElementPlus from 'element-plus'

getCurrentInstance().appContext.app.use(ElementPlus)



</script>


<script>
export default{
    data(){
        return{
            photoGallery:[
                "src/assets/gallery/bokeh.jpg",
                "src/assets/gallery/flora.jpg",
                "src/assets/gallery/1.jpg",
                "src/assets/gallery/2.jpg",
                "src/assets/gallery/3.jpg",
                "src/assets/gallery/4.jpg",
                "src/assets/gallery/5.jpg",
                "src/assets/gallery/6.jpg",
                "src/assets/gallery/7.jpg",
                "src/assets/gallery/8.jpg",
                "src/assets/gallery/9.jpg",
                "src/assets/gallery/10.jpg",
            ]
        };
    }
}

</script>



<template>
    <el-container>
        <el-aside width="20vw">
            <el-image style="margin:20px 0px 0px 0px;width: 18vw" src="src/assets/holdCam.png" />
        </el-aside>
        <el-container>
            <el-main>
                <el-row>
                    <el-col :span="24">
                        <h style="font-size:40px;">
                            Instantly Colorful
                        </h>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <h>
                            <i>A street photography project to capture the romance and vitality of
                                Shanghai</i>
                                <br>
                                <br>
                        </h>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="2"></el-col>
                    <el-col :span="19">
                        <el-carousel :interval="3000" indicator-position="none" type="card" height="40vh">
                            <el-carousel-item v-for="item in photoGallery" :key="item">
                                <el-image :src="item" fit="cover" style="height: 40vh"/>
                            </el-carousel-item>
                        </el-carousel>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <p style="text-align:justify;">
                            <br>
                            Sometimes I dream of wasting my life wandering the streets. Sometimes I walk among the
                            pedestrians and wonder what’s on their minds. Sometimes I’d hop on a random bus and ride
                            till the terminal. And when the night falls, I return. The lights from the traffic renders
                            the bokeh instantly colorful.
                        </p>
                    </el-col>
                </el-row>

            </el-main>
        </el-container>
    </el-container>

</template>



<style scoped>
@import url("https://unpkg.com/element-plus@2.4.3/dist/index.css");

/* .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */

</style>