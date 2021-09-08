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
          }
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/toolManage',
    name: 'toolManage',
    routes: [
      {
        path: 'search',
        name: 'search',
        component: './toolManage/search'
      },
      {
        path: 'exit',
        name: 'exit',
        component: './toolManage/search'
      },
      {
        path: 'approach',
        name: 'approach',
        component: './toolManage/search'
      },
    ],
  },
  {
    path: '/',
    redirect: '/toolManage',
  },
  {
    component: './404',
  },
];
