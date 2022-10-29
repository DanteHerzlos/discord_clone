import React, { useState } from 'react'
import ChannelButton from '../UI/ChannelButton/ChannelButton'
import styles from './Channels.module.css'

interface ChannelsProps {
  setActiveTitle: (a:string) => void
}

const Channels:React.FC<ChannelsProps> = ({setActiveTitle}) => {
  const [activeId, setAciveId] = useState<number>(0)
  const data = [
    'Channel Title 1', 
    'Channel Title 2', 
    'Channel Title 3', 
    'Very Long Channel Title 4',
    'Channel Title 5', 
    'Channel Title 6', 
    'Channel Title 7',
    'Channel Title 8', 
    'Channel Title 9', 
    'Channel Title 10',
    'Channel Title 11', 
    'Channel Title 12', 
    'Channel Title 13',
    'Channel Title 14', 
    'Channel Title 15', 
    'Channel Title 16', 
    'Channel Title 17', 
    'Channel Title 18', 
    'Channel Title 19', 
    'Channel Title 20', 
    'Channel Title 21', 
    'Channel Title 22', 
  ]

  const onClickHandler = (index:number) => {
    setActiveTitle(data[index])
    setAciveId(index)
  }
  return (
    <div className={styles.channelsContainer}>
      {data.map((el,i) => 
        <ChannelButton 
          active={activeId === i}
          onClick={() => onClickHandler(i)} 
          key={i} 
          title={el}
        />
      )}
    </div>
  )
}

export default Channels