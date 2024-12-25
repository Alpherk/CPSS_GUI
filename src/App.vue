<script setup lang="ts">
import Header from './layout/Header.vue'


// 禁止选中网页上内容
window.onselectstart = () => false;


</script>

<template>
  <el-container style="height: 100%;">

    <!-- 顶栏按钮 -->
    <Header></Header>

    <el-main class="main-container">
      <RouterView />
    </el-main>

    <el-footer>
      <el-text>Copyright ©2024 CQU All Rights Reserved. | 版本 v 1.0.0</el-text>
    </el-footer>

  </el-container>
</template>

<style scoped lang="scss">
.el-aside {
  background-color: var(--el-color-primary-light-8);
  color: var(--el-text-color-primary);
  text-align: center;
}

.el-main {
  height: 100%; 
  background-color: var(--el-color-primary-light-9);
  color: var(--el-text-color-primary);
}

.el-footer {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
  text-align: center;
}

@media screen and (max-width: 1200px) {
  .main-container {
    padding: 100px 50px;
  }

}
</style>
