<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'

const search = ref('')

const loginIcon = () => {
    ElMessage({
        message: '您已经登录',
        type: 'success',
    })
}

const menuIcon = () => {
    ElMessage({
        message: '您点击了菜单设置',
        type: 'info',
    })
}

const minIcon = () => {
    ElMessage({
        message: '您点击了最小化',
        type: 'info',
    })
}

const maxIcon = () => {
    ElMessage({
        message: '您点击了最大化',
        type: 'info',
    })
}

const closeIcon = () => {
    ElMessage({
        message: '您点击了关闭',
        type: 'error',
    })
}

</script>


<template>
    <el-row justify="space-between">
        <el-row align="middle">
            <img class="logo" src="@/assets/cqueie_logo.png" style="margin: 0 20px 0 25px; height: 55px;" />
        </el-row>

        <el-row align="middle">
            <el-input class="input-class" v-model="search" style="width: 300px; margin: 15px 15px;"
                placeholder="搜索功能、配置" size="large">
                <template #prepend>
                    <el-button :icon="Search" />
                </template>
            </el-input>
            <el-avatar @click="loginIcon" :size="40" style="margin: 0 20px 0 20px;"
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />

            <el-icon size="22" @click="menuIcon"  style="margin: 10px;"
                class="primary-btn"><i-ep-Operation /></el-icon>
            <el-icon size="25" @click="minIcon"   style="margin: 10px;" class="primary-btn"><i-ep-Minus /></el-icon>
            <el-icon size="20" @click="maxIcon"   style="margin: 10px;"
                class="primary-btn"><i-ep-CopyDocument /></el-icon>
            <el-icon size="25" @click="closeIcon" style="margin: 10px;" class="close-btn"><i-ep-Close /></el-icon>
            <span style="margin-right: 20px;"></span>
        </el-row>
    </el-row>
</template>

<style lang="scss" scoped>
.el-row { 
    height: 80px;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
    display: flex;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

.input-class {
    :deep(.el-input-group__prepend) {
        border-radius: 20px 0 0 20px;
    }

    :deep(.el-input__wrapper) {
        border-radius: 0 20px 20px 0;
    }
}

.close-btn:hover {
    color: var(--el-color-danger-dark-2);
}

.primary-btn:hover {
    color: var(--el-color-primary-dark-2);
}

@media screen and (max-width: 1200px) {
    .input-class, 
    .el-avatar, 
    .el-icon {
        display: none;
    }
}
</style>