import React ,{ useState}from 'react'


const Addproject = () => {
  const[project_title,setTitle]=useState('');
  const[project_descreption,setDescription]=useState('');
  const[user_id,setUserid]=useState('');

  const handleTitle =(e)=>{
    console.log(e.target.value)
    setTitle(e.target.value);
  }
  const handleDescription =(e)=>{
    console.log(e.target.value)
    setDescription(e.target.value)
  }
  const handleUserId =(e)=>{
    console.log(e.target.value)
    setUserid(e.target.value)
  }


  const handleSubmit =(e)=>{
   e.preventDefault();
   console.log("submitted form---->>")

//    fetch('https://6a78-72-255-7-160.in.ngrok.io/TaskManager/public/api/add_project', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer '+localStorage.getItem('token')

      
//     },
//     body: JSON.stringify({
//       project_title: this.state.project_title,
//       project_descreption: this.state.project_descreption,
//       user_id: this.state.user_id
//     })
//   })
//   .then(res => res.json())
//   .then(data => console.log(data))
  
}


  
  return (
    <div>
       {/* <Sidenav/> 
       */}
    <div className="container">
      <div className='app-wrapper'>
       
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>

        </div>
        <div>
          <h2 className="title">Add Project</h2>
        </div>
        <form className="form-wrapper" onSubmit={handleSubmit}>
           {/* {error} */}
            <div className="email">
                <label className="lable">Title</label>
                <input className="input" 
                type="text" 
               value={project_title} onChange={handleTitle}
          
                />
            </div>
            <div className="password">
                <label className="lable">Description</label>
                <input className="input" 
                type="text" 
            value={project_descreption} onChange={handleDescription}
       
                />
            </div>
            <div className="password">
                <label className="lable">User ID</label>
                <input className="input" 
                type="number" 
            value={user_id} onChange={handleUserId}
           
                />
            </div>
            <div>
           <button type="submit" className="submit" value="Add">Add Project</button>
            </div>

        </form>
      </div>
    </div>
    </div>
  )

      }
export default Addproject