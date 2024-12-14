<script lang="ts" setup>
import { ref } from 'vue'
const dialogDialogVisible = ref(false)

const clickFunction = () => {
    dialogDialogVisible.value = true
}
</script>

<template>

    <el-container>

        <el-card @click="clickFunction">
            <el-icon size="50px"><i-ep-Histogram /></el-icon>
            <div>分布式评测</div>
        </el-card>

        <el-card @click="clickFunction">
            <el-icon size="50px"><i-ep-InfoFilled /></el-icon>
            <div>提示词工程</div>
        </el-card>

        <el-card @click="clickFunction">
            <el-icon size="50px"><i-ep-Promotion /></el-icon>
            <div>评测数据库上报</div>
        </el-card>

        <el-card @click="clickFunction">
            <el-icon size="50px"><i-ep-StarFilled /></el-icon>
            <div>评测榜单发布</div>
        </el-card>

        <el-card @click="clickFunction">
            <el-icon size="50px"><i-ep-Stamp /></el-icon>
            <div>评测报告生成</div>
        </el-card>

        <el-card @click="clickFunction">
            <el-icon size="50px"><i-ep-Menu /></el-icon>
            <div>更多</div>
        </el-card>

    </el-container>

    <el-dialog v-model="dialogDialogVisible" title="温馨提示" width="500" align-center center>
        <div style="margin:30px auto; text-align: center;">该功能正在开发中，敬请期待...</div>

        <template #footer>
            <div class="dialog-footer">
                <el-button @click="dialogDialogVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogDialogVisible = false;">好的</el-button>
            </div>
        </template>
    </el-dialog>

</template>

<style scoped lang="scss">
.el-container {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: auto auto;
    justify-content: center;

    .el-card {
        height: 130px;
        width: 200px;
        border-radius: 10px;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;

        .el-icon {
            color: #337ECC;
        }

        div {
            margin-top: 10px;
        }
    }
}

.el-card:hover {
    .el-icon {
        color: #E6A23C;
    }

    font-weight: bold;
}
</style>