<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { ref, getCurrentInstance } from 'vue'
import ElementPlus from 'element-plus'

getCurrentInstance().appContext.app.use(ElementPlus)

const activeIndex = ref('1')

const handleSelect = (key, keyPath) => {

  console.log(key, keyPath)
}

</script>


<template>

  <div class="common-layout">
    <el-container>
      <el-header height="18vh">
        <el-image id="headImg" src="src/assets/headImgMotto.png" style="height:18vh" fit="contain" />
      </el-header>
      <el-main>
        <el-container>
          <el-header>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
              @select="handleSelect" text-color="#1F4E79" active-text-color="#1F4E79" router>
              <el-menu-item index="about">
                Our vision
              </el-menu-item>
              <el-menu-item index="people">
                Meet the founder
              </el-menu-item>
              <el-sub-menu index="2">
                <template #title>Work in progress</template>
                <el-menu-item index="instantlyColorful">Instantly Colorful</el-menu-item>
                <el-menu-item index="blueSkiesOurSongs">Blue Skies, Our Songs</el-menu-item>
                <el-menu-item index="practicingDigitalArt">Practicing digital art</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="3">
                <template #title>Social engagement</template>
                <el-menu-item index="curbCompetitions">Curb vicious competitions and play down meritocracy</el-menu-item>
                <el-menu-item index="peopleFriendly">Promote people-friendly design and aesthetics</el-menu-item>
                <el-menu-item index="reduceFormalism">Reduce formalism and reward-hacking behavior in workspace &
                  academe</el-menu-item>
              </el-sub-menu>
              <el-menu-item index="supportUs">
                Support us
              </el-menu-item>
            </el-menu>
          </el-header>
          <el-main>
            <RouterView />
          </el-main>
        </el-container>
      </el-main>
      <el-footer style="color:darkgrey">
        Hand & Keys Studio, for a people-friendly environment
      </el-footer>
    </el-container>
  </div>






</template>

<style scoped>
@import url("https://unpkg.com/element-plus@2.4.3/dist/index.css");


/* .el-menu--horizontal>.el-menu-item:nth-child(1) {
  margin-right: auto;
} */
</style>
