import React from 'react'
import profile_pic from '../images/Id photo.png'
import github from '../images/github_icon.png'
import slack from '../images/slack.png'
import share from '../images/share_button.svg'


import '../App.css'

import {useNavigate} from "react-router-dom"
import Footer from '../components/Footer'



const Linktree = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
    <div className="entire-page">
        <span>
        <img id="profile__img" src={profile_pic} alt="Wendy Nweje"/>
        <p id = "slack"> Slack Username: Chinwendu Nweje</p>
        <img className="share" src={share} alt="Share button"/>
        </span>
        <h1>Chinwendu Nweje</h1>

        <div className='links'>
          <a className="button-link" id= "twitter" href="https://twitter.com/chi_thetechsis"> Twitter Link </a>

          <a className="button-link" id="btn__zuri" href="https://training.zuri.team/"> Zuri Team</a>

          <a className="button-link" id="books" href="http://books.zuri.team/"> Zuri Books 
              <p className='subtext'>Find the best books on design and coding here</p>
          </a>
              

          <a className="button-link" id = "book__python" href="https://books.zuri.team/"> Python Books 
              <p className='subtext'>Get quality python books at affordable prices !</p> 
          </a> 
              

          <a className="button-link"id ="pitch" href="https://background.zuri.team/"> Background Checks for Coders 
              <p className='subtext'>Need affordable coding background checks? We've got you covered!</p>
          </a>
              

          <a className="button-link" id="book__design" href="https://books.zuri.team/design-rules"> Design Books 
              <p className='subtext'>Get free design books offered by Zuri </p> 
         
          </a>

          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
          <a className="button-link" id="contact" href="" onClick={()=>navigate("/contact")} > Contact Me
          </a> 
              
        </div>

        <div className="social-div">
            <img className="socials" src={slack} alt="Slack Logo"/>
            <img className="socials" src={github} alt="GitHub Logo"/>
        </div>

        
          <Footer/>
        
    </div>
    </div>
  )
}

export default Linktree


