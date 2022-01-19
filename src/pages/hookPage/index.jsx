import React, { useState , useEffect } from 'react'
import { Button, Space} from 'antd'
 
export default function HooksPage() {
  const [count, setCount] = useState(5)
  const [othernNum, setOtherNum] = useState(0)
  const [time, setTimes] = useState(0)
  function reduce() {
    if(count === 0) return
    setCount(val => val -1)
  }
  useEffect(() => {
    let timer = setInterval(() => {
      setTimes(time+1)
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  },[time])
  return (
     <>
      <h3>定时更新：{ time }</h3>
       <div style={{margin:'20px 0px'}}>
         <Space><h4>a：{ count }</h4> <Button onClick={() => {setCount(count + 1)}}>+</Button><Button onClick={reduce}>-</Button></Space>
        </div>
       <div>
         <Space><h4>b：{ othernNum } </h4> <Button onClick={() => {setOtherNum(othernNum + 1)}}>+</Button>
         <Button onClick={() => {setOtherNum(othernNum - 1)}}>-</Button></Space>
       </div>
       <div style={{margin:'20px 0px'}}>
         <Space>a+b：{ count + othernNum }</Space>
       </div>
       <div>
         <Space>a-b：{ count - othernNum } </Space>
       </div>
     </>
  )
}