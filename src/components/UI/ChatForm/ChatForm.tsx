import TextArea, { TextAreaRef } from 'antd/lib/input/TextArea'
import React, { Ref, RefObject } from 'react'
import styles from './ChatForm.module.css'

interface ChatFormProps {
  value?: string
  onPressEnter?: React.KeyboardEventHandler<HTMLTextAreaElement>
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
  onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement>
  textAreaRef?: Ref<TextAreaRef>
}

const ChatForm: React.FC<ChatFormProps>= ({textAreaRef, value, onPressEnter, onChange, onKeyUp}) => {
  return (
    <div>
      <TextArea
        ref={textAreaRef}
        onKeyUp={onKeyUp}
        onChange={onChange}
        value={value}
        onPressEnter={onPressEnter}
        className={styles.textArea}
        placeholder="Send message...."
        autoSize={{ minRows: 1, maxRows: 6 }}
      />
    </div>
  )
}

export default ChatForm