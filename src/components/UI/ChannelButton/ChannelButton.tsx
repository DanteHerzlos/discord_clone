import React, { useEffect, useState } from 'react'
import styles from './ChannelButton.module.css'

interface ChannelButtonProps {
  title: string
  active?: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const ChannelButton:React.FC<ChannelButtonProps> = ({ active, title, onClick}) => {
  const [formatTitle, setFormatTitle] = useState<string>('')
  useEffect(() => {
    if(title.length > 19){
      setFormatTitle(title.slice(0,19) + '...')
    }else {
      setFormatTitle(title)
    }
  }, [title]) 

  return (
    <div onClick={onClick} className={ active ? styles.btn + ' ' + styles._active : styles.btn }>
      <span>{formatTitle}</span>
    </div>
  )
}

export default ChannelButton