import React from "react";
import Api from "../Api"
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import './project.css'

class Showproject extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          res: []
      }
  }
  componentDidMount() {
      Api.get("all_projects",{
       headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')

      }
    }
)
    //   .then(res => res.json())
      .then(
          (res) => {
              this.setState({ res: res.data.message });
              console.log("res", res.data.message)
          },
          (error) => {
              alert(error);
          }
      )
  }
  delete(e) {
    // delete entity - DELETE
    e.preventDefault();
    // deletes entities
// Api.delete(`delete_project/${res.val.id}`, {
//     "method": "DELETE",
//     headers: {
//         'content-type': 'application/json',
//         'Authorization': 'Bearer ' + localStorage.getItem('token')

//       }
//   })
//   .then(res => res.json())
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });
  }
  render() {
      return (
        <div className="container_list">
        <div className="app-wrapper_list">
        <div className="card">
          <h2 className="title">Project List</h2>
        </div>
      <Table  striped bordered hover>
          <thead className="table">
              <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
              </tr>
          </thead>
          <tbody>
              {
              
              this.state.res.map((val , ind) => {
                return (
                    <tr key={ind}>
                      <td>{val.id}</td>
                      <td>{val.project_title}</td>
                      <td>{val.project_description}</td>
                      <td><Link className="btn btn-danger" type='button' onClick={(e) => this.delete(e)}>Delete</Link> </td>
                  </tr>

         
                )
              })
              
              }
              
          </tbody>
        

      </Table>
      </div>
      </div>
      );
 }
}
export default Showproject

