import React,{ useState}from 'react';
import axios from 'axios';
import './style.css'
import logo from './78126-secure-login.gif'

const Login = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const handleUserName =(e)=>{
    console.log(e.target.value)
    setEmail(e.target.value)
  }
  const handlePassword =(e)=>{

    setPassword(e.target.value)
  }
  const handleSubmit =(e)=>{
   e.preventDefault();
   console.log("submitted form---->>")
   axios.post('https://eda9-72-255-7-160.in.ngrok.io/TaskManager/public/api/web_login',{
    email:email,
    password:password    
   })
   .then((response)=>{
    console.log(response.data)
    alert('Successfully Loggedin')

   })
   .catch((err)=>{
    console.log(err)
    console.log(err.response)
    alert(err.response.data.error.message)
   })
  }
 
  return (
    <div className="container">
      <div className='app-wrapper'>
       
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <img src={logo} alt="loading..."  width={200} height={200} className="center"/>
        </div>
        <div>
          <h2 className="title">Login</h2>
        </div>
        <form className="form-wrapper" onSubmit={handleSubmit}>
           
            <div className="email">
                <label className="lable">Email</label>
                <input className="input" 
                type="email" 
                name="email" 
               value={email} onChange={handleUserName}
                />
            </div>
            <div className="password">
                <label className="lable">Password</label>
                <input className="input" 
                type="password" 
                name="password" 
            value={password} onChange={handlePassword}
                />
            </div>
            <div>
           <button className="submit" value="Login">Login</button>
            </div>

        </form>
      </div>
    </div>
  )
}

export default Login
