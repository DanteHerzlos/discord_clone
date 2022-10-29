import React, { useState } from 'react'
import styles from './Header.module.css'
import {BellFilled, PushpinFilled, TeamOutlined} from '@ant-design/icons';
import HeaderSectionButton from '../UI/HeaderSectionButton/HeaderSectionButton';
import SearchInput from '../UI/SearchInput/SearchInput';
import { Button, Popover, Radio, RadioChangeEvent, Space } from 'antd';

interface HeaderProps{
  onClickMemberHeaderBtn?: React.MouseEventHandler<HTMLDivElement>
  activeTitle: string
}

const Header:React.FC<HeaderProps> = ({activeTitle, onClickMemberHeaderBtn}) => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  }

  const notificationContent= ( 
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio value={1}>Unmute</Radio>
        <Radio value={2}>Mute</Radio>
      </Space>
    </Radio.Group>
  )

  const serverMenu = (
    <Space direction='vertical'>
      <Button className={styles.menuBtn}>Select 1</Button>
      <Button className={styles.menuBtn}>Select 2</Button>
      <Button className={styles.menuBtn}>Select 3</Button>
      <Button danger className={styles.menuExitBtn}>Exit from Server</Button>
    </Space>
  )

  return (
    <div className={styles.header}>
      <Popover trigger='click' placement='bottom' title='Server Title menu' content={serverMenu}>
        <div className={styles.serverlHeader}>
            <h2>Server Title</h2>
        </div>
      </Popover>

      <div className={styles.sectionHeader}>
        <h2 className={styles.channelTitle}>{activeTitle}</h2>
        <div className={styles.toolbar}>
          <Popover 
            content={notificationContent} 
            placement="bottom" 
            trigger="click" 
            title={<span className={styles.popoverTitle}>Notification</span>}
          >
            <HeaderSectionButton children={<BellFilled />}/>
          </Popover>
          <Popover 
            content={<p>no pinned messages...</p>} 
            placement="bottom" 
            trigger="click" 
            title={<span className={styles.popoverTitle}>Pinned messages</span>}
          >
            <HeaderSectionButton children={<PushpinFilled />}/>
          </Popover>
          <HeaderSectionButton onClick={onClickMemberHeaderBtn} children={<TeamOutlined />}/>
          <SearchInput/>
        </div>

      </div>
    </div>
  )
}

export default Header