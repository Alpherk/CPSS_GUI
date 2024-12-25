<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const text = ref('')
const textarea = ref('')
const router = useRouter()

const goBack = () => {
    router.back()

} 
</script>

<template>
    <el-page-header :icon="ArrowLeft" title="后退" @back="goBack">
        <template #content>
            <span>提示词工程</span>
        </template>
    </el-page-header>

    <el-row justify="center" style=" padding: 50px; margin-top: 50px;">
        <el-input v-model="textarea" style="width: 440px" placeholder="请输入提示词" show-word-limit
            type="textarea" />
    </el-row>

    <el-row justify="center">
        <el-button type="warning" plain style="margin-right: 20px;">加载文件</el-button>

        <el-button type="primary">启动优化</el-button>
    </el-row>
</template>