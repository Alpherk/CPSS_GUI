<script lang="ts" setup>
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'
import { reactive, ref } from 'vue' 
import { genFileId } from 'element-plus'
import { Operation } from '@element-plus/icons-vue'
import ProgressAuto from '@/layout/ProgressAuto.vue'

const upload = ref<UploadInstance>()

const handleExceed: UploadProps['onExceed'] = (files) => {
    upload.value!.clearFiles()
    const file = files[0] as UploadRawFile
    file.uid = genFileId()
    upload.value!.handleStart(file)
}


const formLabelWidth = '140px'
const dialogDialogVisible = ref(false)
const dialogDialogVisible2 = ref(false)
const dialogDialogVisible3 = ref(false) 

const form = reactive({
    datasets: '',
    hf_path: '/share/temp/model_repos/internlm-chat-7b/',
    tokenizer_path: '',
    tokenizer_kwargs: '',
    model_kwargs: '',
    max_seq_len: [],
    max_out_len: '',
    batch_size: '',
    num_gpus: '',
    debug: '',
})

const tableData = [
    {
        dataset: 'siqa',
        version: 'e78df3',
        metric:  'accuracy',
        mode:    'gen',
        opt350m: '21.55',
        opt125m: '12.44',
    },
    {
        dataset: 'winograd',
        version: 'b6c7ed',
        metric:  'accuracy',
        mode:    'ppl',
        opt350m: '51.23',
        opt125m: '49.82',
    }
]
</script>


<template>
    <el-row justify="center">
        <img src="@/assets/aibox.png" style="height: 500px;" />

    </el-row>

    <el-row justify="center">
        <el-upload ref="upload" class="upload-demo" name="file"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :limit="1" :on-exceed="handleExceed"
            :auto-upload="false">
            <template #trigger>
                <el-button class="large-btn-left" type="warning">选择模型</el-button>
            </template>
            <el-button class="large-btn-right" type="primary" :icon="Operation"
                @click="dialogDialogVisible = true">评测模型</el-button>
        </el-upload>
    </el-row>

    <el-dialog v-model="dialogDialogVisible" title="参数配置" width="600">
        <el-form :model="form" style="padding: 20px;">
            <el-form-item label="datasets" label-position="left" :label-width="formLabelWidth">
                <el-select v-model="form.datasets" placeholder="请选择数据集">
                    <el-option label="ceval_gen " value="ceval_gen " />
                </el-select>
            </el-form-item>
            <el-form-item label="hf_path" label-position="left" :label-width="formLabelWidth">
                <el-input v-model="form.hf_path" autocomplete="off" />
            </el-form-item>
            <el-form-item label="tokenizer_path" label-position="left" :label-width="formLabelWidth">
                <el-input v-model="form.tokenizer_path" autocomplete="off" placeholder="如果与模型路径相同，可以省略" />
            </el-form-item>
            <el-form-item label="tokenizer_kwargs" label-position="left" :label-width="formLabelWidth">
                <el-input v-model="form.tokenizer_kwargs" autocomplete="off" />
            </el-form-item>
            <el-form-item label="modelr_kwargs" label-position="left" :label-width="formLabelWidth">
                <el-input v-model="form.model_kwargs" autocomplete="off" />
            </el-form-item>
            <el-form-item label="max_seq_len" label-position="left" :label-width="formLabelWidth">
                <el-select v-model="form.max_seq_len" placeholder="模型可以接受的最大序列长度">
                    <el-option label="1024" value="1024" />
                    <el-option label="2048" value="2048" />
                </el-select>
            </el-form-item>
            <el-form-item label="max_out_len" label-position="left" :label-width="formLabelWidth">
                <el-select v-model="form.max_out_len" placeholder="生成的最大 token 数">
                    <el-option label="8" value="8" />
                    <el-option label="16" value="16" />
                </el-select>
            </el-form-item>
            <el-form-item label="batch_size" label-position="left" :label-width="formLabelWidth">
                <el-select v-model="form.batch_size" placeholder="批量大小">
                    <el-option label="1" value="1" />
                    <el-option label="2" value="2" />
                </el-select>
            </el-form-item>
            <el-form-item label="num_gpus" label-position="left" :label-width="formLabelWidth">
                <el-select v-model="form.num_gpus" placeholder="运行模型所需的 GPU 数量">
                    <el-option label="1" value="1" />
                    <el-option label="2" value="2" />
                </el-select>
            </el-form-item>
            <el-form-item label="debug" label-position="left" :label-width="formLabelWidth">
                <el-select v-model="form.debug" placeholder="是否启用 debug 模式">
                    <el-option label="true" value="true" />
                    <el-option label="false" value="false" />
                </el-select>
            </el-form-item>
        </el-form>

        <template #footer>
            <div class="dialog-footer">
                <el-button @click="dialogDialogVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogDialogVisible = false; dialogDialogVisible2 = true">开始评测</el-button>
            </div>
        </template>
    </el-dialog>

    <el-dialog v-model="dialogDialogVisible2" title="正在评测" width="600" height="400">
        <el-space direction="vertical">
            <el-text type="info">[2024-12-14 18:23:55] [opencompass.openicl.icl_inferencer] [INFO] Starting inference
                process...</el-text>

            <el-text type="info">[2024-12-14 18:23:55] [opencompass.openicl.icl_inferencer] [INFO] Starting inference
                process...</el-text>

            <el-text type="info">[2024-12-14 18:23:55] [opencompass.openicl.icl_inferencer] [INFO] Starting inference
                process...</el-text>


        </el-space>
        <ProgressAuto/>

        <template #footer>
            <div class="dialog-footer">
                <el-button @click="dialogDialogVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogDialogVisible2 = false; dialogDialogVisible3 = true">查看结果</el-button>
            </div>
        </template>
    </el-dialog>

    <el-dialog v-model="dialogDialogVisible3" title="评测结果" width="600" height="400">
        <el-table :data="tableData" height="250" style="width: 100%; height: 100%;">
        <el-table-column prop="dataset" label="dataset" />
        <el-table-column prop="version" label="version" />
        <el-table-column prop="metric" label="metric" />
        <el-table-column prop="mode" label="mode" />
        <el-table-column prop="opt350m" label="opt350m" />
        <el-table-column prop="opt125m" label="opt125m" />
        </el-table>

        <template #footer>
            <div class="dialog-footer"> 
                <el-button type="primary" @click="dialogDialogVisible3 = false;">保存结果</el-button>
            </div>
        </template>
    </el-dialog>

</template>

<style scoped lang="scss">
.upload-demo {
    height: 100px;
    margin-bottom: 80px;

    :deep(.el-input__wrapper) {
        height: 50px;
        width: 100%;
        border-radius: 20px 0 0 20px;
    }
}

.large-btn-left {
    height: 50px;
    width: 150px;
    border-radius: 20px 0 0 20px;
    font-weight: bold;

}

.large-btn-right {
    height: 50px;
    width: 150px;
    border-radius: 0 20px 20px 0;
    font-weight: bold;
}
</style>
