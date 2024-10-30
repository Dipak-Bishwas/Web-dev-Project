import React from 'react'
import signupimg from "../assets/signup.png"
import Templates from '../components/Templates'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Templates
        title="Join the millions learning to code with studyNotation for free"
        desc1="Build skill for today, tomorrow, and beyond"
        desc2="Education to future-proof your career"
        image={signupimg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup