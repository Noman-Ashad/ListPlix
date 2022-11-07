import React,{useState} from 'react';
import Api from './Api';



function Test(){
   const {project ,setproject}=useState('')
    Api.get(`/all_projects`, {
        headers: {
          'content-type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
    
        },
      
      })
      .then((res) => {
       console.log(res.data)
        setproject(res.data)
        }).catch(err=>{
            console.log(err)
          
      });

    return (
     <div>
        <table>
            <tr>
                <td>{project.id}</td>

            </tr>
        </table>
     </div>
    )
}

export default Test
