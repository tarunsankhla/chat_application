import React from 'react'

function TheirMessage({message,lastmessage}) {
  const isFirstMessageByUser = !lastmessage || lastmessage.sender.username ==! message.sender.username;
  console.log("their message",message,lastmessage)
  return (
    <div className='message-row'>
      {
        isFirstMessageByUser && (
          <div className='message-avatar'
          style={{backgroundImage:`url(${message?.sender?.avatar})`}}
          />)
      }
      {
        message?.attachments?.length >0?(
          <img  src={message.attachments[0].file} alt="message-attachments"
            className='message-image' style={{marginLeft :isFirstMessageByUser ? '4px' : '48px'}}/>  )
        :(
          <div className='message' 
            style={{float:'left', backgroundColor:"#cabcdc" ,marginLeft :isFirstMessageByUser ? '4px' : '48px'}} >
            {/* <div>{message.sender_username}: </div> */}
            <div>{message.sender.username}: </div>
            {message.text}
          </div>)      
      }
    </div>
  );
}

export default TheirMessage