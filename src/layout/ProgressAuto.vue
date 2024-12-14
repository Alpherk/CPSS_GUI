<script lang="ts" setup>
const percentage = ref(0)

onMounted(() => {
    setInterval(() => {
        percentage.value = (percentage.value % 100) + 5
    }, 500)
})
</script>

<template>
    <el-progress :percentage="percentage" :stroke-width="15" striped style="margin: 20px 0;" />
</template>