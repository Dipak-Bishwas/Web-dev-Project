import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import {toast} from "react-hot-toast" 
import { useNavigate } from 'react-router-dom';
 const SignupForm = ({setIsLoggedIn}) => {
    
    const navigate = useNavigate()

   const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
   })

   const [showPassword, setShowPassword] = useState(false)
   const [accountType, setAccountType] = useState("student")

   function changeHandler(event) {
    setFormData( (prevData) => (
        {
            ...prevData,
            [event.target.name]:event.target.value
        }
    ))
}

function submitHandler(event) {
    event.preventDefault()
    if(formData.password != formData.confirmPassword) {
        toast.error("passwords do not match")
        return
    }

    setIsLoggedIn(true)
    toast.success("Account Created")
    navigate("/dashboard")
}

   return (
     <div>
         <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max">
         <button
            onClick={() => setAccountType("student")}
            className={`${
                accountType === "student"
                ? "bg-slate-800 text-bg-slate-200"
                : "bg-transparent text-slate-200 "
            } py-2 px-5 rounded-full transitio n-all`}
            >
            Student
            </button>
            <button
            onClick={() => setAccountType("instructor")}
            className={`${
                accountType === "instructor"
                ? "bg-slate-800 text-bg-slate-200"
                : "bg-transparent text-slate-200 "
            } py-2 px-5 rounded-full transition-all`}
            >
            Instructor
            </button>

      </div>
        <form onSubmit={submitHandler}>  
            <div className='flex gap-4'>
            <label>
                <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-500'>*</sup></p>
                <input
                 type="text" 
                 required
                 name='firstName'
                 onChange={changeHandler} 
                 placeholder='Enter First Name'
                 value={formData.firstName}
                 className='bg-slate-700 rounded-[0.5rem] text-slate-400 w-full p-[12px]'
                 />
            </label>
            <label>
                <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-500'>*</sup></p>
                <input
                 type="text" 
                 required
                 name='lastname'
                 onChange={changeHandler}
                 placeholder='Enter Last Name'
                 value={formData.lastname}
                 className='bg-slate-700 rounded-[0.5rem] text-slate-400 w-full p-[12px]'
                 />
            </label>   
            </div>

            <label className='w-full'>
                <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Email Adderess<sup className='text-pink-500'>*</sup></p>
                <input
                 type="email" 
                 required
                 name='email'
                 onChange={changeHandler}
                 placeholder='Enter Email Address'
                 value={formData.email}
                 className='bg-slate-700 rounded-[0.5rem] text-slate-400 w-full p-[12px]'
                 />
            </label>

            <div className='w-full flex gap-4'>
            <label className='relative'>
                <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-500'>*</sup></p>
                <input
                 type={showPassword ? ("text") : ("password")} 
                 required
                 name='password'
                 onChange={changeHandler}
                 placeholder='Enter Password'
                 value={formData.password}
                 className='bg-slate-700 rounded-[0.5rem] text-slate-400 w-full p-[12px]'
                 />
                <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                   {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}  
                </span>
            </label>

            <label className='relative'>
                <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-500'>*</sup></p>
                <input
                 type={showPassword ? ("text") : ("password")} 
                 required
                 name='confirmPassword'
                 onChange={changeHandler}
                 placeholder='Confirm Password'
                 value={formData.confirmPassword}
                 className='bg-slate-700 rounded-[0.5rem] text-slate-400 w-full p-[12px]' 
                 />
                <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                   {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}  
                </span>
            </label>
            </div>

            <button className='w-full bg-yellow-300 rounded-[8px] font-medium text-slate-800 px-[12px] py-[8px] mt-6'>
                Create Account
            </button>

        </form>
     </div>
   )
 }
 
 export default SignupForm