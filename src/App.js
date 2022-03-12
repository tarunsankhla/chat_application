import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed';
import "./App.css";


const App = () =>{

    
    return (
        <ChatEngine 
        height="100vh"
        projectID="fc71c0dd-1408-410b-af80-b141facc7daf"
        userName="dummyUser1"
        userSecret="dummyuser"
        
        renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}
        />
    )
}

/**
 * dummyUser1 = dummyuser
 * 
 */


export default App;


