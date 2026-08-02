<script setup>
import { ref, getCurrentInstance } from 'vue'
import ElementPlus from 'element-plus'

getCurrentInstance().appContext.app.use(ElementPlus)


</script>






<template>
    <el-container>
        <el-aside width="10vw">
        </el-aside>
        <el-container>
            <el-main>
                <el-row>
                    <el-col :span="24">
                        <h style="font-size:40px;">
                            Welcome to Hand & Keys Studio
                        </h>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <h>
                            <i>for a people-friendly environment</i>
                        </h>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-image style="margin:20px 0px 5px 2px;width: 45vw" src="src/assets/metro.jpg" />
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <p style="text-align:justify;">
                            Here at Hand & Keys Studio, we aim to create art that can foster an enabling environment for
                            the
                            modern audience. The right physical and spiritual environment is the key for people to
                            realize their
                            potentials and unleash their creativity, while a debilitating environment can stifle even
                            the most
                            brilliant talents. In today’s metropolitan world, technology strides forward, but people
                            have only
                            become more baffled. Starvation has become history, but comfort and contentment are still a
                            luxury
                            for most. The masses still starve for the right environment to thrive, as well as answers to
                            how
                            they could fulfil themselves. Inspired by the modern cityscape, we hope to create art and
                            products
                            that touches on how people are shaped by their environment, how they yearn to depart from
                            the banal
                            doctrines, and how they search for the meaning of life as they navigate the sea of nihilism
                            and
                            disillusion.
                        </p>
                    </el-col>
                </el-row>

            </el-main>
        </el-container>
    </el-container>

</template>



<style scoped>
@import url("https://unpkg.com/element-plus@2.4.3/dist/index.css");
</style>