import { Avatar, Comment, Popover, Tooltip } from 'antd';
import React from 'react';
import PopoverUserInfo from '../UI/PopoverUserInfo/PopoverUserInfo';
import styles from './Message.module.css'

interface MessageProps {
  username: string
  body: string
  avatar: string
  onClickReplyTo: (username: string) =>  void
}

const Message: React.FC<MessageProps> = ({onClickReplyTo, username, body, avatar}) => {
  const actions = [
    <span 
      onClick={() => onClickReplyTo(username)} 
      style={{color: '#DBDBDB'}} >
        Reply to
    </span>,
  ];

  const avatarContent = [
    <Popover 
      placement="right" 
      trigger='click'
      content={
        <PopoverUserInfo 
          username={username} 
          email={username + '@email.com'} 
          name={username}
        />
      }
    >
      <Avatar src={avatar} alt={username} />
    </Popover>
  ]

  const author = [
    <Popover 
      placement="right" 
      trigger='click'
      content={
        <PopoverUserInfo 
          username={username} 
          email={username + '@email.com'} 
          name={username}
        />
      }
    >
      <span className={styles.username}>{username}</span>
    </Popover>
  ]

  return (
    <Comment
      className={styles.comment}
      actions={actions}
      author={author}
      avatar={avatarContent}
      content={<p>{body}</p>}
      datetime={
        <Tooltip title="2016-11-22 11:22:33">
          <span>8 hours ago</span>
        </Tooltip>
      }
    />
  );
};

export default Message;