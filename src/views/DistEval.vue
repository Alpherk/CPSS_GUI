<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const goBack = () => {
    // ElMessage({
    //     message: '返回成功',
    //     type: 'success',
    // })
    router.back()

}

const customColorMethod = (percentage: number) => { 
    if (percentage < 50) {
        return '#67c23a'
    }
    if (percentage < 80) {
        return '#e6a23c'
    }
    return '#F56C6C'
}

</script>

<template>
    <el-page-header :icon="ArrowLeft" title="后退" @back="goBack">
        <template #content>
            <span>分布式评测</span>
        </template> 
    </el-page-header>


    <el-row justify="center" style=" padding: 50px;">
 
        <el-col :lg="8">
            <div style="margin: 20px 0; font-size: large; font-weight: bold;">服务器负载</div>
            <el-divider />
            <el-progress class="circle-progress" type="dashboard" :percentage="35" :width="150" :stroke-width="15"
                :color="customColorMethod">
                <template #default="{ percentage }">
                    <span class="percentage-value">{{ percentage }}%</span>
                    <span class="percentage-label">服务器1</span>
                </template>
            </el-progress>
            <el-progress class="circle-progress" type="dashboard" :percentage="20" :width="150" :stroke-width="15"
                :color="customColorMethod">
                <template #default="{ percentage }">
                    <span class="percentage-value">{{ percentage }}%</span>
                    <span class="percentage-label">服务器2</span>
                </template>
            </el-progress>
            <el-progress class="circle-progress" type="dashboard" :percentage="40" :width="150" :stroke-width="15"
                :color="customColorMethod">
                <template #default="{ percentage }">
                    <span class="percentage-value">{{ percentage }}%</span>
                    <span class="percentage-label">服务器3</span>
                </template>
            </el-progress>
            <el-progress class="circle-progress" type="dashboard" :percentage="35" :width="150" :stroke-width="15"
                :color="customColorMethod">
                <template #default="{ percentage }">
                    <span class="percentage-value">{{ percentage }}%</span>
                    <span class="percentage-label">服务器4</span>
                </template>
            </el-progress>
            <el-progress class="circle-progress" type="dashboard" :percentage="80" :width="150" :stroke-width="15"
                :color="customColorMethod">
                <template #default="{ percentage }">
                    <span class="percentage-value">{{ percentage }}%</span>
                    <span class="percentage-label">服务器5</span>
                </template>
            </el-progress>
            <el-progress class="circle-progress" type="dashboard" :percentage="50" :width="150" :stroke-width="15"
                :color="customColorMethod">
                <template #default="{ percentage }">
                    <span class="percentage-value">{{ percentage }}%</span>
                    <span class="percentage-label">服务器6</span>
                </template>
            </el-progress>
            <el-divider />
            <el-button type="primary" plain style="margin-top: 20px;">配置服务器</el-button>
            <el-button type="primary" plain style="margin-top: 20px;">增加服务器</el-button>
        </el-col>

        <el-col :lg="2"></el-col>
        <el-col :lg="8" class="line-progress">
            <div style="margin: 20px 0; font-size: large; font-weight: bold;">处理进度</div>
            <el-divider />

            <el-row justify="center" style="margin-top: 50px;">
                <el-col :span="3">
                    <el-text size="large">服务器1</el-text>
                </el-col>
                <el-col :span="21">
                    <el-progress :text-inside="true" :stroke-width="20" :percentage="50" />
                </el-col>
            </el-row>
            <el-row justify="center">
                <el-col :span="3">
                    <el-text size="large">服务器2</el-text>
                </el-col>
                <el-col :span="21">
                    <el-progress :text-inside="true" :stroke-width="20" :percentage="20" />
                </el-col>
            </el-row>
            <el-row justify="center">
                <el-col :span="3">
                    <el-text size="large">服务器3</el-text>
                </el-col>
                <el-col :span="21">
                    <el-progress :text-inside="true" :stroke-width="20" :percentage="60" />
                </el-col>
            </el-row>
            <el-row justify="center">
                <el-col :span="3">
                    <el-text size="large">服务器4</el-text>
                </el-col>
                <el-col :span="21">
                    <el-progress :text-inside="true" :stroke-width="20" :percentage="75" />
                </el-col>
            </el-row>
            <el-row justify="center">
                <el-col :span="3">
                    <el-text size="large">服务器5</el-text>
                </el-col>
                <el-col :span="21">
                    <el-progress :text-inside="true" :stroke-width="20" :percentage="80" />
                </el-col>
            </el-row>
            <el-row justify="center">
                <el-col :span="3">
                    <el-text size="large">服务器6</el-text>
                </el-col>
                <el-col :span="21">
                    <el-progress :text-inside="true" :stroke-width="20" :percentage="65" />
                </el-col>
            </el-row>
            <el-row justify="center">
                <el-col :span="3">
                    <el-text size="large">总体进度</el-text>
                </el-col>
                <el-col :span="21">
                    <el-progress :text-inside="true" :stroke-width="20" :percentage="58.3" status="success" striped striped-flow/>
                </el-col>
            </el-row> 
            <el-divider style="margin-top: 100px;"/>
            <el-button type="warning" plain style="margin-top: 20px;">终止任务</el-button>
            <el-button type="primary" style="margin-top: 20px;">增加任务</el-button>
        </el-col>
    </el-row>

</template>

<style scoped>
.line-progress .el-progress--line {
    margin-bottom: 20px;
    max-width: 600px;
}

.circle-progress {
    margin: 20px;
}

.percentage-value {
    display: block;
    margin: 20px 0;
    font-size: 30px;
}

.percentage-label {
    display: block;
    margin-top: 20px;
    font-size: 16px;
}
</style>