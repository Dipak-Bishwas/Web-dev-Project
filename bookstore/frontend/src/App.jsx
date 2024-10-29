import React from 'react'
import Home from './home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from "./courses/Courses"
import Singup from './components/Singup'
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'


const App = () => {
  const [authUser,setAuthUser] = useAuth()
  console.log(authUser);
  return (
    <div>
      {/* <Home/>
      <Course/> */}
      <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>}></Route>
        <Route path="/signup" element={<Singup/>}></Route>
      </Routes>
      <Toaster />
      </div>

    </div>
  )
}

export default App
