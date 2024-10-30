import React from 'react'
import { useNavigate} from 'react-router-dom'

const AddProduct = () => {
  const [name,setName] = React.useState('')
  const [price,setPrice] = React.useState('')
  const [category,setcategory] = React.useState('')
  const [company,setCompany] = React.useState('')
  const [error,setError] = React.useState(false)
  const navigate = useNavigate()
  const AddProduct = async ()=>{

    if(!name || !price || !category || !company){
        setError(true)
        return false;
    }
    

    console.log(name,price,category,company);
    const userId = JSON.parse(localStorage.getItem('user'))._id
    let result = await fetch("http://localhost:5000/add-product",{
        method:'post',
        body:JSON.stringify({name, price, category, company, userId}),
        headers:{
            "Content-Type":"application/json"
        }
    })
    result = await result.json()
    console.log(result);
    navigate("/")
  }
  return (
    <div className='product'>
      <h1>Add Product</h1>
      <input className='imputBox' type="text" placeholder='Enter product name' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
      {error && !name && <span className='invalid-input'>Enter valid name</span>}

      <input className='imputBox' type="text" placeholder='Enter product price' value={price} onChange={(e)=>{setPrice(e.target.value)}}></input>
      {error && !price && <span className='invalid-input'>Enter valid Price</span>}

      <input className='imputBox' type="text" placeholder='Enter product category' value={category} onChange={(e)=>{setcategory(e.target.value)}}></input>
      {error && !category && <span className='invalid-input'>Enter valid Category</span>}

      <input className='imputBox' type="text" placeholder='Enter product company' value={company} onChange={(e)=>{setCompany(e.target.value)}}></input>
      {error && !company && <span className='invalid-input'>Enter valid Company</span>}

      <button onClick={AddProduct} className='appButton'>Add Product</button>
    </div>
  )
}

export default AddProduct