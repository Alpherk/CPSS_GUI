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
            <span>评测数据库上报</span>
        </template>
    </el-page-header>
 
</template>