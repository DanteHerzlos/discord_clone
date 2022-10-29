import React from 'react'
import MemberButton from '../UI/MemberButton/MemberButton'
import styles from './Members.module.css'
import data  from '../../data/users.json'

interface MembersProps {
  hide: boolean
}

const Members:React.FC<MembersProps> = ({hide}) => {

  return (
    <div className={ hide ? styles.hide : styles.container}>
      {data.map(el => 
        <MemberButton 
          key={el.id}
          icon={el.avatar}
          name={el.name}
          username={el.username}
          email={el.email}
        />
      )}
    </div>
  )
}

export default Members