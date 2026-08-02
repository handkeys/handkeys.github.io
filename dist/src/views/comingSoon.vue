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
                            Coming Soon
                        </h>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <h>
                            <i>I am still working on this page</i>
                        </h>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <p style="text-align:justify;">
                            <br>
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