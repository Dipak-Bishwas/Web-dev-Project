import { useEffect, useState } from 'react'


function App() {

  const[text,setText] = useState('')
  // const[name, setName] = useState('dipak')

  // variation 1 -> every render
  // useEffect( () => {
  //   console.log("ui rendering done");
  // })

   //varaition 2
  //  useEffect( ()=> {
  //   console.log("ui rendering done");
  //  }, [])

  // varation 3-> first render + whenever dependency changes
  // useEffect( ()=> {
  //   console.log("chnge observed");
  // }, [name])

  // varation 4 -> to handle unmounting of a component

  useEffect( ()=> {
    console.log("Listener added");

    return () => {
      console.log("Listener remove");
    }
  }, [text])


  function changeHandler(event) {
    console.log(text);
    setText(event.target.value)
  }

  return (
    <>
      <input type='text' onChange={changeHandler}></input>
    </>
  )
}  

export default App
