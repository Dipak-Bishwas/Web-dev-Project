import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {
    const navigate = useNavigate()

    function clickHandler() {
        navigate("/about")
    }

  return (
    <div>
        <div>Labs</div>
        <button onClick={clickHandler}>miove to about page</button>
    </div>
  )
}

export default Labs