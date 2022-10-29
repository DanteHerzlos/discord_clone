import React, { useState } from 'react'
import { Button, Input, Popover } from 'antd';
import styles from './SearchInput.module.css'
import { SearchOutlined } from '@ant-design/icons';


const SearchInput = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const onSearch = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }
  return (
    <>
      <div className={styles.searchInput} >
        <Input onPressEnter={onSearch} placeholder="input search text" />
        <Button onClick={onSearch} loading={isLoading} type="primary" icon={<SearchOutlined />} />
      </div>
    </>
  )
}

export default SearchInput