import React from 'react'
import './Item.css'
const Item = (props) => { 
  const itemName = props.name
  return (
    <>
        <p className='nirma'>{itemName}</p>{props.children}
    </>
  )
}

export default Item