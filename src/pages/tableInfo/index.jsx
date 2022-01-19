import {PureComponent} from 'react'
import { Table, Tag, Modal, message } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

import SearchItem from './Component/SearchItem'
const { confirm } = Modal;
const data = [];
for (let i = 0; i < 21; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 1+i,
    address: `London, Park Lane no. ${i}`,
  });
}
export default class TabelInfo extends PureComponent {
  state = {
    data: data,
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age'
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
      },
      {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
        render: (tab,record) => {
          return  <Tag color="blue" onClick={() => this.deleteTab(record)}>删除</Tag>
        }
      }
    ],
    selectedRowKeys: []
  }
  onSubmit (val) {
    const key = Date.now()
    const list = this.state.data.concat([{...val,key}])
    this.setState({data: list})
  }
  deleteTab = (val) => {
    confirm({
      title: 'Delete',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure delete this task?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: this.deleteDeal(val),
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  deleteDeal(val) {
    return () => {
      const dellist = this.state.data.filter( ({key}) =>key != val.key )
      this.setState({data: dellist})
      message.success('Delete is successful');
    }
  }
  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }
  render() {
    const { data, selectedRowKeys, columns } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    }
    return (
      <div>
        <SearchItem onSubmit= { (i) => {this.onSubmit(i)}}/>
        <Table rowSelection={rowSelection} columns={ columns } dataSource={ data } /> 
      </div>
    )
  }
}

 