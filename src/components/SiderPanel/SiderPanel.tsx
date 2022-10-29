import React, { useState } from 'react'
import { Layout } from 'antd';
import './SiderPanel.css';
import SiderButton from '../UI/SiderButton/SiderButton';

const { Sider } = Layout;

const SiderPanel = () => {
  const [activeId, setAciveId] = useState<number>(1)
  const servers = [
    {img: 'https://www.nme.com/wp-content/uploads/2017/03/Stephen-King-696x442.png'},
    {img: 'https://s4.reutersmedia.net/resources/r/?m=02&d=20211007&t=2&i=1577163028&w=780&fh=&fw=&ll=&pl=&sq=&r=2021-10-07T190902Z_42063_MRPRC233Q9RO5TU_RTRMADP_0_RUSSIA-WEATHER'},
    {img: 'https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU='},
    {img: 'https://www.rd.com/wp-content/uploads/2018/12/50-Funny-Animal-Pictures-That-You-Need-In-Your-Life-45.jpg?fit=700,465'},
  ]

  return (
    <Sider  width={72} className='sider'>
      {servers.map((el,index) => 
        <SiderButton 
          icon={el.img}
          key={index} 
          onClick={() => setAciveId(index)} 
          active={activeId === index} 
        /> 
      )}
      
    </Sider>
  )
}

export default SiderPanel