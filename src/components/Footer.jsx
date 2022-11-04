import React from 'react'
import zuri from '../images/zuri.png'
import i4g from '../images/I4G.png'
import '../App.css'
const Footer = () => {
  return (
    <div>
        <footer>
          <img className="foot-items"src={zuri} alt="Zuri Logo"/>
          <p className="foot-items"> HNG Internship 9 Frontend Task</p>
          <img className="foot-items" src={i4g} alt="I4G Logo"/>
        </footer>
    </div>
  )
}

export default Footer