import React from 'react'
import './ItemDate.css'
const ItemDate = (props) => {
    const date = props.day;
    const month = props.month;
    const year = props.year;
  return (
    <div className='itemdate'>
        <spam>{date}</spam> 
        <spam>{month}</spam>
        <spam>{year}</spam>
    </div>
  )
}

export default ItemDate