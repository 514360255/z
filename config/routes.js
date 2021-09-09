export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/basicInfo',
    name: 'basicInfo',
    icon: 'desktop',
    crumbName: '基础信息',
    component: './notPage',
  },
  {
    path: '/safetySite',
    name: 'safetySite',
    icon: 'desktop',
    crumbName: '安全生产标准化现场',
    component: './notPage',
  },
  {
    path: '/sceneManage',
    name: 'sceneManage',
    icon: 'desktop',
    crumbName: '现场管理人员实名制',
    component: './notPage',
  },
  {
    path: '/toolManage',
    name: 'toolManage',
    icon: 'desktop',
    crumbName: '进退场用工具管理',
    routes: [
      {
        path: 'search',
        name: 'search',
        crumbName: '用工具查询',
        component: './toolManage/search',
      },
      {
        path: 'exit',
        name: 'exit',
        crumbName: '退场管理',
        component: './notPage',
      },
      {
        path: 'approach',
        name: 'approach',
        crumbName: '进场管理',
        component: './notPage',
      },
    ],
  },
  {
    path: '/laborCostManage',
    name: 'laborCostManage',
    icon: 'desktop',
    crumbName: '人工费支付台账登记管理',
    component: './notPage',
  },
  {
    path: '/wagesManage',
    name: 'wagesManage',
    icon: 'desktop',
    crumbName: '工资支付台帐登记管理',
    component: './notPage',
  },
  {
    path: '/supervisionReport',
    name: 'supervisionReport',
    icon: 'desktop',
    crumbName: '监理报告',
    component: './notPage',
  },
  {
    path: '/buildingMaterialsRegistration',
    name: 'buildingMaterialsRegistration',
    icon: 'desktop',
    crumbName: '建材使用登记',
    component: './notPage',
  },
  {
    path: '/',
    redirect: '/toolManage/search',
  },
  {
    component: './404',
  },
];
