import React,{useState}from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/style.css'
import logo from '../Assets/78126-secure-login.gif'
import Api from '../Components/Api';



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
  const navigate= useNavigate()
  const handleSubmit =(e)=>{
   e.preventDefault();
   console.log("submitted form---->>")
   Api.post('web_login',{
    email:email,
    password:password    
   })
   .then((response)=>{
    console.log(response.data)
    // alert('Successfully Loggedin')
    localStorage.setItem('token',response.data.token);
    navigate('/dashboard')
   })
   .catch((err)=>{
    console.log(err)
    console.log(err.response.data.errors)
    this.setState({
      message:err.response.data.message
    })
    // alert(err.response.data.error.message)
   })
  }
  // let error='';
  // if(this.state.message){
  //   error=(
  //     <div className="alert alert-danger" role="alert">
  //       {this.state.message}
  //     </div>
  //   )
  // }
 
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
           {/* {error} */}
            <div className="email">
                <label className="lable">Email</label>
                <input className="input" 
                type="email" 
                name="email" 
               value={email} onChange={handleUserName}
               required
                />
            </div>
            <div className="password">
                <label className="lable">Password</label>
                <input className="input" 
                type="password" 
                name="password" 
            value={password} onChange={handlePassword}
            required 
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
