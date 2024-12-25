<script setup lang="ts">

import FuncView from '../layout/FuncView.vue'
import EvalModel from '../layout/EvalModel.vue'
</script>

<template>

    <el-row justify="center" align="middle" style="height: 100%;">
        <el-col :lg="6">
            <FuncView />
        </el-col>

        <el-col :lg="2"></el-col>
        <el-col :lg="6">
            <EvalModel />
        </el-col>
    </el-row>

</template>