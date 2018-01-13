import Vue from 'vue'
import Router from 'vue-router'
import TaskPage from '@/components/TaskPage'
import ViewTask from '@/components/ViewTask'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/view-task/:taskId',
      name: 'ViewTask',
      component: ViewTask,
      props: true
    },
    {
      path: '/',
      name: 'TaskPage',
      component: TaskPage
    }
  ]
})
