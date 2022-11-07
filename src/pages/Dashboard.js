// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'

import '../Assets/dashboard.css'
import Sidenav from '../pages/Sidenav'

const Dashboard = () => {


    // const getData = () => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(resposne => resposne.json())
     
    // }

    // useEffect(() => {
    //     getData();
    // },)

    // const navigate = useNavigate()
    // useEffect(() => {
    //     if (!localStorage.getItem('token')) {
    //         navigate('/login')
    //     }
    // })

    // const handleLogout = (e) => {
    //     e.preventDefault();

    //     (localStorage.removeItem('token'))


    // }

    return (
               
             <Sidenav/>   
      

    )

}

export default Dashboard


