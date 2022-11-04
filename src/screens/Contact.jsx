import React from 'react'
import { useState } from 'react'
import Footer from '../components/Footer'
import Input from '../components/Input'

const Contact = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [checked, setChecked] = React.useState(false);

  const setInput = (setter) => (event) => {
    setter(event.currentTarget.value)
  }

  const submit = () =>{

  }

  return (
    <div>
        <div className="Contact Box"/>
        <h1>Contact Me</h1>
        <p> Hi there, contact me to ask me about anything you have in mind </p>

          <label>First Name</label>
          <Input
                id = "first_name"
                classname="input-box"
                type="text"
                placeholder="Enter your firstname"
                storeInput={() => setInput(setFirstName)}/>

          <label>Last Name</label>
          <Input
                id = "last_name"
                classname="input-box"
                type="text"
                placeholder="Enter your lastname"
                storeInput={() => setInput(setLastName)}/>

          <label>Email</label>
          <Input
                id = "email"
                classname="input-box"
                type="text"
                placeholder="yourname@email.com"
                storeInput={() => setInput(setEmail)}/>

          <label>Message</label>
          <Input
                id = "message"
                classname="input-box"
                type="text"
                placeholder="Send me a message and I'll reply you as soon as possible."
                storeInput={() => setInput(setMessage)}/>

        
        <label>
          <input
                  id = "checkbox"
                  type="checkbox"
                  onChange={()=>{
                      setChecked(!checked)
                  }}/>
                  {/* {checked.toString()}   To display output*/}
                  You agree to providing your data to Chinwendu who may contact you.
        </label>
        <br/> 
        

        <button 
                id="btn__submit"
                className = "input-box"
                onClick={()=>submit()}>
                Send message
        </button>
        
        <Footer/>
    </div>
  )
}

export default Contact