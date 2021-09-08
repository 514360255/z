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
    component: './toolManage/search',
  },
  {
    path: '/safetySite',
    name: 'safetySite',
    icon: 'desktop',
    component: './toolManage/search',
  },
  {
    path: '/sceneManage',
    name: 'sceneManage',
    icon: 'desktop',
    component: './toolManage/search',
  },
  {
    path: '/toolManage',
    name: 'toolManage',
    icon: 'desktop',
    routes: [
      {
        path: 'search',
        name: 'search',
        component: './toolManage/search',
      },
      {
        path: 'exit',
        name: 'exit',
        component: './toolManage/search',
      },
      {
        path: 'approach',
        name: 'approach',
        component: './toolManage/search',
      },
    ],
  },
  {
    path: '/laborCostManage',
    name: 'laborCostManage',
    icon: 'desktop',
    component: './toolManage/search',
  },
  {
    path: '/wagesManage',
    name: 'wagesManage',
    icon: 'desktop',
    component: './toolManage/search',
  },
  {
    path: '/supervisionReport',
    name: 'supervisionReport',
    icon: 'desktop',
    component: './toolManage/search',
  },
  {
    path: '/buildingMaterialsRegistration',
    name: 'buildingMaterialsRegistration',
    icon: 'desktop',
    component: './toolManage/search',
  },
  {
    path: '/',
    redirect: '/toolManage',
  },
  {
    component: './404',
  },
];
