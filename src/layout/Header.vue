<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'

const search = ref('')
const dialogDialogVisible = ref(false)
const loginForm = reactive({
    username: '199****7668',
    password: '199****7668',
})

const loginIcon = () => {
    dialogDialogVisible.value = true 
}

const loginOK = () => {
    dialogDialogVisible.value = false
    ElMessage({
        message: '登录成功',
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

            <el-icon size="22" @click="menuIcon" style="margin: 10px;" class="primary-btn"><i-ep-Operation /></el-icon>
            <el-icon size="25" @click="minIcon" style="margin: 10px;" class="primary-btn"><i-ep-Minus /></el-icon>
            <el-icon size="20" @click="maxIcon" style="margin: 10px;"
                class="primary-btn"><i-ep-CopyDocument /></el-icon>
            <el-icon size="25" @click="closeIcon" style="margin: 10px;" class="close-btn"><i-ep-Close /></el-icon>
            <span style="margin-right: 20px;"></span>
        </el-row>
    </el-row>

    <el-dialog v-model="dialogDialogVisible" title="登录" width="600" height="300" center align-center>
        <template #header="{ titleId, titleClass }">
            <div class="my-header">
                <h4 :id="titleId" :class="titleClass">欢迎使用</h4> 
            </div>
        </template>
        <el-form ref="loginForm" :model="loginForm" style="padding: 0 100px;">
            <el-form-item prop="username">
                <el-input v-model="loginForm.username" placeholder="用户名/邮箱/手机号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="loginForm.password" placeholder="密码"></el-input>
            </el-form-item>
        </el-form>

        <template #footer>
            <div class="dialog-footer">
                <el-button @click="dialogDialogVisible = false">取消</el-button>
                <el-button type="primary" @click="loginOK">登录</el-button>
            </div>
        </template>
    </el-dialog>

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