import React, { useState } from 'react'

export const Login = () => {
    const [action,setAction] = useState("Sign Up");
  return (
    <div style={{ width:'640px', marginTop:"60px" }} className='container p-3'>
        <div className='card'>
            <div className='card-header'>
                <h4 style={{ fontSize:"48px",color:"#3c009D" }} className='card-title text-center'>{action}</h4>
            </div>
            <div className='card-body'>
                {action == "Login"? <div></div>:<div className='form-group mb-3'>
                    <label htmlFor="">Name</label>
                    <input type="text" className='form-control' />
                </div>}
                
                <div className='form-group mb-3'>
                    <label htmlFor="">Email</label>
                    <input type="email" className='form-control' />
                </div>
                <div className='form-group mb-3'>
                    <label htmlFor="">password</label>
                    <input type="password" className='form-control' />
                </div>
                {action === "Sign Up"?<div></div>:<div className='mt-3'>
                    <p>Forgot password <span className='text-primary'>Click here</span></p>
                </div>}
                
                <div className='mt-3'>
                <button className={action === "Sign Up"?"btn btn-primary mx-3":"btn btn-secondary"} onClick={()=>{setAction("Sign Up")}}>Sign Up</button>
                <button className={action === "Login"?" btn btn-primary mx-3":"btn btn-secondary"} onClick={()=>{setAction("Login")}}>Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}
