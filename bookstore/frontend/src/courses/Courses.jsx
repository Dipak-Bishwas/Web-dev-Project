import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'

const courses = () => {
  return (
    <div>
      <Navbar/>
      <div className='min-h-screen'>
      <Course/>
      </div>
      <Footer/>
    </div>
  )
}

export default courses