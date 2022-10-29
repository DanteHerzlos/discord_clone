import { Layout } from 'antd';
import React, { useState } from 'react';
import './App.css';
import Channels from './Channels/Channels';
import Chat from './Chat/Chat';
import Header from './Header/Header';
import Members from './Members/Members';
import SiderPanel from './SiderPanel/SiderPanel';


const { Content } = Layout;

const App:React.FC = () => {
  const [hideMembers, setHideMembers]  = useState<boolean>(false)
  const [activeTitle, setActiveTitle]  = useState<string>('Channel Title 1')

  return (
    <>
    <Layout>
      <SiderPanel/>
      <Layout>
        <Header activeTitle={activeTitle} onClickMemberHeaderBtn={() => setHideMembers(!hideMembers)}/>
        <Content>
          <div className='content-block'>
            <Channels setActiveTitle={setActiveTitle}/>
            <Chat/>
            <Members hide={hideMembers}/>
          </div>
        </Content>
      </Layout>
    </Layout>
    </>
  );
}

export default App;
