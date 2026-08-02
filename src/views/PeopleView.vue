<script setup>
import { ref, getCurrentInstance } from 'vue'
import ElementPlus from 'element-plus'

getCurrentInstance().appContext.app.use(ElementPlus)


</script>






<template>
    <el-container>
        <el-aside width="20vw">
            <el-image style="margin:20px 0px 0px 0px;width: 18vw" src="src/assets/founder.png" />
        </el-aside>
        <el-container>
            <el-main>
                <el-row>
                    <el-col :span="24">
                        <h style="font-size:40px;">
                            Meet Mr. LUO Yuanhao (骆元灏)
                        </h>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <h>
                            <i>A learner, a creator, a defender of his ideas</i>
                        </h>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <p style="text-align:justify;">
                            <br>
                            Mr. Luo earned a bachelor’s degree in Accounting (University Outstanding Graduate, 2024
                            University Outstanding Bachelor’s Dissertation) from Shanghai University of Finance and
                            Economics, studied as a PhD student in Accounting at Shanghai Jiao Tong University for one
                            semester, and is currently pursuing a MSc in Computer Science at The University of Hong
                            Kong. He is fond of technology, finance, and art, and has been constantly exploring ways to
                            bring them together.
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