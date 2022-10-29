import { Popover } from 'antd'
import React from 'react'
import PopoverUserInfo from '../PopoverUserInfo/PopoverUserInfo';
import styles from './MemberButton.module.css'

interface MemberButtonProps{
  icon:string
  username: string
  name: string
  email: string
}

const MemberButton:React.FC<MemberButtonProps> = ({icon, username, name, email}) => {

  return (
    <Popover 
      placement="left" 
      trigger='click'  
      content={<PopoverUserInfo username={username} name={name} email={email}/>}>
      <div className={styles.btn}>
        <img className={styles.userIcon} src={icon} alt="" />
        <div className={styles.userName}>
          <span>{username}</span>
        </div>
      </div>
    </Popover>
  )
}

export default MemberButton