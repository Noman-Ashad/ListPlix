
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Addproject from './Components/project/Addproject'
import Showproject from './Components/project/Showproject';
import Showusers from './Components/user/Showusers'
// import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
    {/* <Sidenav> */}
      <Routes>
   
        <Route path='/' element={<Login/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/addproject' element={<Addproject/>}></Route>
        <Route path='/showproject' element={<Showproject/>}></Route>
        <Route path='/showuser' element={<Showusers/>}></Route>
      </Routes>
    {/* </Sidenav> */}
  </BrowserRouter>

  );
}

export default App;
