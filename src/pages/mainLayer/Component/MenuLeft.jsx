import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom';
import routes from '../../../router/routes'

export default class MenuLeft extends React.Component {
  render() {

    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
        {
          routes.map((item,idx) => {
            return <Menu.Item key={idx} icon={item.meta.icon}>
              <Link to={item.path}>{item.name}</Link>
            </Menu.Item> 
          })
        }
    </Menu>
    )
  }
}