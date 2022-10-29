import React from 'react'
import styles from './SiderButton.module.css';

interface SiderButtonProps {
  active?: boolean
  onClick?: React.MouseEventHandler<HTMLImageElement>
  icon?: string
}

const SiderButton:React.FC<SiderButtonProps> = ({icon, onClick, active}) => {
  return (
    <img 
      src={icon}
      className={active ? styles.btn + ' ' + styles._active : styles.btn}
      onClick={onClick}
    />
  )
}

export default SiderButton