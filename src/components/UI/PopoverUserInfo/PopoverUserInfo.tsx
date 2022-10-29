import React from 'react'

interface PopoverUserInfoProps {
  username: string
  name: string
  email: string
}


const PopoverUserInfo:React.FC<PopoverUserInfoProps> = ({email,name,username}) => {
  return (
    <div>
        <h2>Username: {username}</h2>
        <p><b>Name:</b> {name}</p>
        <p><b>Email:</b> {email}</p>
    </div>
  )
}

export default PopoverUserInfo