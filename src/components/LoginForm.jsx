import axios from 'axios';
import React, { useState } from 'react'

function LoginForm() {
    const [username,setUsername] = useState('');
    const [password,setPassord] = useState('');

    const [error,setError] =useState('');
    const handleSubmit= async (e)=>{
        e.preventDefault();
         
        const authObject = { 'Project-ID' : "fc71c0dd-1408-410b-af80-b141facc7daf",
                'User-Name':username,
                'User-Secret':password
            }

        try{
            const response= await axios.get('https://api.chatengine.io/chats',{
                headers:authObject
            })

            localStorage.setItem('username-chatengine',username);
            localStorage.setItem('password-chatengine',password);

            window.location.reload();
        }
        catch(error){
            console.log("error login",error);
            setError('Oops, incorrect credentials')
        }
    }
  return (
    <div className='wrapper'> 
        <div className='form'>
            <h1 className='title'>Chat Application</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}
                className="input" placeholder='username' required/>

                <input type="text" value={password} onChange={(e)=>setPassord(e.target.value)}
                className="input" placeholder='password' required/>
                
                <div align="center">
                    <button type='submit' className='button'>
                        <span>Start Chatting</span>
                    </button>
                </div>
                <h2 className='error'>{error}</h2>
            </form>
        </div>
    </div>
  )
}

export default LoginForm