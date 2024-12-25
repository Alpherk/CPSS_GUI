<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const dialogDialogVisible = ref(true)
const router = useRouter()

const goBack = () => {
    router.back()

} 
</script>

<template>
    <el-page-header :icon="ArrowLeft" title="后退" @back="goBack">
        <template #content>
            <span>评测报告生成</span>
        </template>
    </el-page-header>

    <el-dialog v-model="dialogDialogVisible" title="温馨提示" width="500" align-center center>
        <div style="margin:30px auto; text-align: center;">评测报已生成</div>

        <template #footer>
            <div class="dialog-footer">
                <el-button @click="dialogDialogVisible = false">确认</el-button>
                <el-button type="primary" @click="dialogDialogVisible = false;">查看</el-button>
            </div>
        </template>
    </el-dialog>
</template>