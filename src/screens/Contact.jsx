import React from 'react'
import { useState } from 'react'
import Footer from '../components/Footer'
import Input from '../components/Input'

import '../styles/contactpage.css'

const Contact = () => {
  
  const initialValues ={ FirstName:"", LastName:"", EmailData:""};

  const [contactValues, setContactValues] = useState(initialValues);
  const [contactErrors, setContactErrors] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [isSubmit, setIsSubmit] = useState(false);
  const [checked, setChecked] = React.useState(false);

  const[messageData, setMessageData] = useState('')

  const InputFunc =  (e) => {
    const { name, value } = e.target;
    setContactValues({ ...contactValues, [name]:value })
  }

  const submitFunc = (e) =>{
      e.preventDefault();
      setContactErrors(validate(contactValues))
      setIsSubmit(true);
      if (Object.keys(contactErrors).length === 0 && isSubmit) {
        alert(
       `Message has been sent successfully!!

        FirstName: ${contactValues.FirstName}
        LastName: ${contactValues.LastName}
        Email: ${contactValues.EmailData}
        Message: ${messageData}`);
      }
  }
  
  const validate = (values) =>{
    const errors ={}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.FirstName){
      errors.FirstName = "First name is required"
    }
    if (!values.LastName){
      errors.LastName = "First name is required"
    }
    if (!values.EmailData){
      errors.EmailData = "Email is required"
    }else if (!regex.test(values.EmailData)) {
      errors.EmailData = "This is not a valid email format!";
    }
    if (!messageData){
      errors.MessageData = 'Please leave a message !'
    }
    return errors;
  }

  return (
    <div className="Contact-Box">
      
      <div className="entire-contact-page">
        <h1 className="contact-header">Contact Me</h1>
        
        <p> Hi there, contact me to ask me about anything you have in mind </p>
        
        {/* <pre>{JSON.stringify(contactValues,undefined, 2)}</pre> */}
        
        <form onSubmit={submitFunc}>
              <div className="first-row">
                  <div className="Side">
                      <label className="first-row-label form-label" htmlFor="first_name">First Name</label><br/>
                      <Input
                            id = "first_name"
                            classname="input-box"
                            type="text"
                            name = "FirstName"
                            value = {contactValues.FirstName}
                            placeholder="Enter your firstname"
                            onChange={() => InputFunc}/>   
                            <p className='errormessage'>{contactErrors.FirstName}</p>   
                  </div>

                  <div className="Side">
                      <label  className="first-row-label form-label" htmlFor="last_name">Last Name</label><br/>
                      <Input
                            id = "last_name"
                            classname="input-box"
                            type="text"
                            name = "LastName"
                            value = {contactValues.LastName}
                            placeholder="Enter your lastname"
                            onChange={() => InputFunc}/>
                            <p className='errormessage'>{contactErrors.LastName}</p>
                  </div>
              </div>

              <label className="form-label" htmlFor="email" >Email</label>
              <Input
                    id = "email"
                    classname="email-box input-box"
                    type="email"
                    name = "EmailData"
                    value = {contactValues.EmailData}
                    placeholder="yourname@email.com"
                    onChange={() => InputFunc}/>
                    <p className='errormessage'>{contactErrors.EmailData}</p>

              <label className="form-label" htmlFor="message">Message</label><br/>
              <textarea
                    id = "message"
                    className="message-box input-box"
                    name = "MessageData"
                    type="text"
                    value = {messageData}
                    placeholder= "Send me a message and I'll reply you as soon as possible..."
                    onChange={e => setMessageData(e.target.value)}/>
                    <p className='errormessage'>{contactErrors.MessageData}</p>

            
            <label className="form-label" htmlFor="checkbox">
              <input
                      id = "checkbox"
                      type="checkbox"
                      onChange={()=>{
                          setChecked(!checked)}}
                      
                      />
                      {/* {checked.toString()}   To display output*/}
                      You agree to providing your data to Chinwendu who may contact you.
            </label>
            <br/> 
            <br/>
            <br/> 
            <br/>


            <button 
                    id="btn__submit"
                    className = "submit-message"
                    onClick={()=>submitFunc()}>
                    Send message
            </button>
        </form>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Contact