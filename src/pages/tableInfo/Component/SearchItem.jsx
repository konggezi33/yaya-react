import { Form, Input, Button, InputNumber } from 'antd'
const SearchItem = (props) => {
const [form] = Form.useForm();
 const onFinish = (value) => {
   // 提交数据
    props.onSubmit(value)
    reset()
  }
  const reset = () => {
    // 重置
    form.resetFields()
  }
  return (
    <Form autoComplete="off" onFinish={ onFinish } form={ form } layout="inline" style={{ padding: '30px 0px' }}>
      <Form.Item label="name" name="name" rules={[{required:true, message: 'Please input your name!'}]}>
        <Input placeholder="Please input your name" /> 
      </Form.Item>
      <Form.Item label="age" name="age" rules={[{ required:true, message: 'Please input your age!'},
      { type: 'number',  min: 0, max: 99, message: 'age must be between 1 and 99'}]}>
        <InputNumber placeholder="请输入年龄" />
      </Form.Item>
      <Form.Item label="address" name="address"  rules={[{required:true, message: 'Please input your address!'}]}>
        <Input placeholder="请输入住址" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{marginRight: '30px'}}>
          Search
        </Button>
        <Button type="primary" onClick={ reset }>
          reset
        </Button>
      </Form.Item>
    </Form>
  )
}

export default SearchItem