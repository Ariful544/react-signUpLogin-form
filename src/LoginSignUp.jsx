import React, { act, useState } from 'react'
import user_icon from './assets/person.png'
import email_icon from './assets/email.png'
import password_icon from './assets/password.png'

export const LoginSignUp = () => {
    const [action,setAction] = useState("login")
    return (
            <div className='container1'>
                <div className='header'>
                    <div className='text'>{ action }</div>
                    <div className='underline'></div>                
                </div>
                <div className='inputs'>
                    {action === "login"? <div></div>:<div className='input'>
                        <img width={20} height={20} src={user_icon} alt="" />
                        <input type="text" name='name' placeholder='name' />
                    </div> }
                    
                    <div className='input'>
                        <img width={20} height={20} src={email_icon} alt="" />
                        <input type="email" name='email' placeholder='email Id' />
                    </div>
                    <div className='input'>
                        <img width={20} height={20} src={password_icon} alt="" />
                        <input type="password" name='password' placeholder='password' />
                    </div>
                    {action === "Sign Up"? <div></div>:<div className='forgot-password'>Lost password <span>Click here!</span></div>}
                    
                <div className='submit-container'>
                    <div className={action ==="Sign Up"?"submit":"submit gray"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                    <div className={action ==="login"?"submit":"submit gray"} onClick={()=>{setAction("login")}}>login</div>
                </div>
                </div>
                
            </div>
    
    )
}
