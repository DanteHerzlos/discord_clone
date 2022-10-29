import React from 'react'
import styles from './HeaderSectionButton.module.css'

interface HeaderSectionButtonProps {
  children : React.ReactNode
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const HeaderSectionButton :React.FC<HeaderSectionButtonProps>= ({children, onClick}) => {
  return (
    <div onClick={onClick} className={styles.btn}>
      {children}
    </div>
  )
}

export default HeaderSectionButton