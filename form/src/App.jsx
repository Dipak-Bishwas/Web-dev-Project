import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    firstName: "", lastName:"", email:"", country:"India", streetAddress:"", city:"", state:"", postalCode:"", comments:"false", candidates:"false", pushNotifications:""
  })

  function changHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler() {  
    event.preventDefault()
    console.log("finally printing the value of form Data ");
    console.log(formData);
  }
  
  return (
    <div className='flex flex-col items-center'>
      <form onSubmit={submitHandler }>
      <label htmlFor='firstName'>First Name</label>
      <br/>
        <input
        type='text'
        name='firstName'
        id='firstName' 
        placeholder='enter name'
        value={setFormData.firstName}
        onChange={changHandler}
        className='outline'
        />
      <br/>
      <label htmlFor='firstName'> Last Name</label>
      <br/>
        <input
        type='text'
        name='lastName'
        id='lastName'
        placeholder='enter name'
        value={setFormData.lastName}
        onChange={changHandler}
        className='outline'
        />
      <br/>
      <label htmlFor='email'>Email</label>
      <br/>
        <input
        type='email'
        name='enail'
        id='email'
        placeholder='dip@gmail.com' 
        value={setFormData.email}
        onChange={changHandler}
        className='outline'
        />
        <br /> 
        <label htmlFor='country'>Country</label>
        <br />
        <select
        id='country'
        name='contry'
        value={formData.country}
        onChange={changHandler}
        className='outline'
        >
          <option>India</option>
          <option>United State</option>
          <option>Canada</option>
          <option>Maxico</option>
          
        </select>

        <br/>
      <label htmlFor='streetAddress'>Street Address</label>
      <br/>
        <input
        type='streetAddress'
        name='streetAddress'
        id='streetAddress'
        placeholder='streetAddress'
        value={setFormData.streetAddress}
        onChange={changHandler}
        className='outline'
        />
      <br/>
      <label htmlFor='city'>City</label>
      <br/>
        <input
        type='city'
        name='city'
        id='city'
        placeholder='city'
        value={setFormData.city}
        onChange={changHandler}
        className='outline'
        /> 
              <br/>
      <label htmlFor='state'>State</label>
      <br/>
        <input
        type='state'
        name='state'
        id='state'
        placeholder='state'
        value={setFormData.state}
        onChange={changHandler}
        className='outline'
        />
      <br/>
      <label htmlFor='postalCode'>Postal Code</label>
      <br/>
        <input
        type='postalCode'
        name='postalCode'
        id='postalCode'
        placeholder='postalCode'
        value={setFormData.state}
        onChange={changHandler}
        className='outline'
        />
        <fieldset>
          <legend>By Email</legend>
          <div className='flex flex-row'>
          <input
            id='comments'
            name='comments'
            type='checkbox'
            chcked={formData.comments}
            onChange={changHandler} 
          />
          <div>
            <label htmlFor="comments  ">Comment</label>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
          </div> 
          </div>

          <div className='flex flex-row'>
          <input
            id='comments'
            name='comments'
            type='checkbox'
            chcked={formData.comments}
            onChange={changHandler} 
          />
          <div>
            <label htmlFor="comments  ">candidates</label>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
          </div> 
          </div>

        </fieldset>

        <fieldset>
          <legend>Push Notification</legend>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <input
           type="radio" 
            id='pushEverything'
            name='pushNotification'
            value="Everything"
            onChange={changHandler}
           />
           <label htmlFor="pushEverything">Everything</label>
            <br />
           <input
           type="radio" 
            id='pushEmail'
            name='pushNotification'
            value="Same as email"
            onChange={changHandler}
           />
           <label htmlFor="pushEmail">Same as email</label>
            <br />
           <input
           type="radio" 
            id='pushNothing'
            name='pushNotification'
            value="No Push Notifications "
            onChange={changHandler}
           />
           <label htmlFor="pushNothing">No Push Notification</label>
        </fieldset>
        <button className='bg-blue-500 text-white font-bold rounded-sm'>Save</button>
      </form>
    </div>
  )
}

export default App
