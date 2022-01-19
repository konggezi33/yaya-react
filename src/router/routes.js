import { lazy } from 'react'
import Information from '../pages/information'
import TableInfo from '../pages/tableInfo'
import HookPage from '../pages/hookPage'
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
 
const Routes = [
  {
    path: '/',
    name: '个人信息',
    component: Information,
    meta: {
      icon: <AppstoreOutlined />
    },
  },
    {
      path: '/tableInfo',
      name: '信息展示',
      component: TableInfo,
      meta: {
        icon: <MenuUnfoldOutlined />
      }
    },
    {
      path: '/hooks',
      name: 'hooks',
      component: HookPage,
      meta: {
        icon: <PieChartOutlined />
      }
    }
 
  // {
  //   path: '/about',
  //   name: 'hooks',
  //   component: Information,
  //   children: [
  //     {
  //       path: '/about/account',
  //       name: 'hooks',
  //       component: '',
  //     }
  //   ]
  // }
]

export default Routes