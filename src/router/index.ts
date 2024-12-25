import { createRouter, createWebHistory } from 'vue-router' 
import Home from '@/views/Home.vue'
import DistEval from '../views/DistEval.vue'
import Prompt from '../views/Prompt.vue'
import EvalDataUpload from '../views/EvalDataUpload.vue'
import EvaluationListRelease from '../views/EvaluationListRelease.vue'
import EvaluationReport from '../views/EvaluationReport.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home, 
    },
    {
      path: '/disteval',
      component: DistEval,
    },
    {
      path: '/prompt',
      component: Prompt,
    },
    {
      path: '/evaldataupload',
      component: EvalDataUpload,
    },
    {
      path: '/evaluationlistrelease',
      component: EvaluationListRelease,
    },
    {
      path: '/evaluationreport',
      component: EvaluationReport,
    },
  ],
})

export default router
