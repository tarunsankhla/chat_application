import React from 'react'
import PropTypes from 'prop-types'
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';

function ChatFeed(props) {
    console.log(props);
    const { chats, activeChat, userName, messages } = props;
    const chat = chats && chats[activeChat];

    console.log("chats",chat, "useNAmr :", userName,"message :", messages);

    const renderReadReciept = (message,isMyMessage)=>{
      console.log("render Reciept:",message,isMyMessage,chat);
      return chat.people.map((person,index)=>(
          <div>
           
            { person.last_read === message.id && (
                <div
                key={`read_${index}`}
                className="read-receipt"
                style={{
                  float:isMyMessage ? 'right' :'left' ,backgroundImage:`url(${person.person.avatar})`
                }}
                />
                // <div className='message-avatar'
                
                // style={{float:isMyMessage ? 'right' :'left' ,backgroundImage:`url(${person?.person?.avatar})`}}
                // />
              )}
            {/* {person.person.first_name} { person.last_read} {  message.id}
             */}
          </div>
          )
      )
    }



    const renderMessages =() =>{
      const keys = Object.keys(messages);
      console.log("keys",keys);

      return keys.map((key,index)=>{
          const Message = messages[key];
          const lastMessageKey = index ===0 ? null : key[index-1];
          const isMyMessage =  userName === Message.sender.username ;
          console.log("single",Message,isMyMessage)
          return (
            <div key={`msg_{index}`}  style={{width:'100%'}}>
              <div className='message-block'>
              {isMyMessage
                ? <MyMessage message={Message}/>
                : <TheirMessage  message={Message} lastmessage={messages[lastMessageKey]}/>}
              </div>
              <div className='read-reciepts' style={{marginRight : isMyMessage ? '18px' : '0px'
            , marginLeft :  isMyMessage ? '0px' : '68px'}}>
                {renderReadReciept(Message,isMyMessage)}
              </div>
            </div>
          )
      });
    }
    // renderMessages();

    if(!chat) return "Loadng...."

    return (
      <div className='chat-feed'>
        <div className='chat-title-container'>
          <div className='chat-title'>{chat?.title}</div>
          <div className='chat-subtitle'>
            {
              chat.people.map((itemPerson) => itemPerson.person.username ==localStorage.getItem('username-chatengine') ? `${itemPerson.person.username}` : "")
            }
          </div>
        </div>
        {renderMessages()}
        <div style={{ height : '100px'}}/>

        <div className='message-form-container'>
          <MessageForm {...props} chatId={activeChat}/>
        </div>
      </div>
    );
}

ChatFeed.propTypes = {}

export default ChatFeed
