import { message } from 'antd'
import React, {useEffect, useRef, useState } from 'react'
import Message from '../Message/Message'
import ChatForm from '../UI/ChatForm/ChatForm'
import styles from './Chat.module.css'

const Chat = () => {
  const textAreaRef = useRef<HTMLInputElement>(null)

  const [newMessage, setNewMessage] = useState('')
  const [messages, setMessages] = useState([
    {author: 'Han_Solo', avatar: 'https://joeschmoe.io/api/v1/jake', body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'},
    {author: 'Samantha', avatar: 'https://joeschmoe.io/api/v1/jabala', body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'},
    {author: 'Han_Solo', avatar: 'https://joeschmoe.io/api/v1/jake', body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'},
    {author: 'Antonette', avatar: 'https://joeschmoe.io/api/v1/jenni', body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'},
    {author: 'Antonette', avatar: 'https://joeschmoe.io/api/v1/jenni', body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'},
    {author: 'Samantha', avatar: 'https://joeschmoe.io/api/v1/jabala', body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'},
    {author: 'Han_Solo', avatar: 'https://joeschmoe.io/api/v1/jake', body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'},

  ])


  const messagesEndRef = useRef<null | HTMLDivElement>(null)
  
  useEffect(() => {
    scrollToBottom()
  }, [messages, setMessages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView()
  }

  const onKeyUpHandler = (e:React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.shiftKey) {      
      setNewMessage(newMessage + '\n') 
    }else if(e.key === 'Enter' && !e.shiftKey){
      if(newMessage === ''){
        message.warning('Message cant be empbty')
        return 
      }
      setMessages([...messages, {author: 'Dante', avatar: 'https://joeschmoe.io/api/v1/jack', body: newMessage}])
      setNewMessage('')
    }
  }

  const onClickReplyTo = (username:string) => {
    
    const replyTag = '@' + username + ' '
    if(newMessage[0] === '@') {
      setNewMessage(replyTag + newMessage.slice(newMessage.indexOf(' ') + 1)) 
    }else {
      setNewMessage(replyTag + newMessage)
    }
    textAreaRef.current?.focus()
  }

  return (
    <div className={styles.container} >
      <div className={styles.chatWindow}>
        {messages.map((el, i) => 
          <Message 
            avatar={el.avatar}
            key={i} 
            username={el.author} 
            body={el.body}
            onClickReplyTo={onClickReplyTo}
          />
        )}
        <div ref={messagesEndRef}/>
      </div>
      <div className={styles.form}>
        <ChatForm
          textAreaRef={textAreaRef}
          onKeyUp={e => onKeyUpHandler(e)}
          value={newMessage} 
          onChange={(e) => setNewMessage(e.target.value)} 
          onPressEnter={e => e.preventDefault()}
        />
      </div>
    </div>
  )
}

export default Chat