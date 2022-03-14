import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed';
import "./App.css";
import LoginForm from "./components/LoginForm";


const App = () =>{

    if(!localStorage.getItem('username-chatengine')) return <LoginForm/>
    return (
        <ChatEngine 
        height="100vh"
        projectID="fc71c0dd-1408-410b-af80-b141facc7daf"
        userName={localStorage.getItem('username-chatengine')}
        userSecret={localStorage.getItem('password-chatengine')}
        
        renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}
        />
    )
}

/**
 * dummyUser1 = dummyuser
 * BotUser1 = botuser1
 */


export default App;


