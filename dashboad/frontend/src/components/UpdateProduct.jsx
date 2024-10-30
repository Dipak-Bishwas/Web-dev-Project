import React, { useEffect } from 'react'
import {useParams, useNavigate} from 'react-router-dom'

const UpdateProduct = () => {
  const [name,setName] = React.useState('')
  const [price,setPrice] = React.useState('')
  const [category,setcategory] = React.useState('')
  const [company,setCompany] = React.useState('')
  const params = useParams()
  const navigate = useNavigate()

  useEffect(()=>{

    getProductDetails()
  },[])

  const getProductDetails = async ()=>{
    console.log(params);
    let result = await fetch(`http://localhost:5000/product/${params.id}`)
    result = await result.json()
    setName(result.name)
    setPrice(result.price)
    setcategory(result.category)
    setCompany(result.company)
  }

  const updateProduct = async ()=>{
    console.log(name,price,category,company);
    let result = await fetch(`http://localhost:5000/product/${params.id}`,{
        method:'Put',
        body: JSON.stringify({name,price,category,company}),
        headers:{
            'Content-type':"application/json"
        }
    })
    result = await result.json()
    console.log(result);
    navigate("/")
    
  }
  return (
    <div className='product'>
      <h1>Update Product</h1>
      <input className='imputBox' type="text" placeholder='Enter product name' value={name} onChange={(e)=>{setName(e.target.value)}}></input>

      <input className='imputBox' type="text" placeholder='Enter product price' value={price} onChange={(e)=>{setPrice(e.target.value)}}></input>
 
      <input className='imputBox' type="text" placeholder='Enter product category' value={category} onChange={(e)=>{setcategory(e.target.value)}}></input>

      <input className='imputBox' type="text" placeholder='Enter product company' value={company} onChange={(e)=>{setCompany(e.target.value)}}></input> 

      <button onClick={updateProduct} className='appButton'>Update Product</button>
    </div>
  )
}

export default UpdateProduct