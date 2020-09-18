// 导出该模块路由
export default [
  {
    title: '备案信息管理',
    name: 'recordManagement',
    path: 'recordManagement',
    component: () => import('./recordManagement.vue'),
  }
]
