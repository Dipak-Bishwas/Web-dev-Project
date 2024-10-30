import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className='w-16 h-16 border-4  border-t-4 border-b-4 border-green-500 rounded-full animate-spin shadow-lg'></div>
        <p className="mt-2">Loading...</p>
      </div>
    </div>
  )
}

export default Spinner