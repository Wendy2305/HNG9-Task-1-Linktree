import React from 'react'
import profile_pic from '../images/profile__img.jpg'
import github from '../images/github_icon.png'
import zuri from '../images/zuri.png'
import i4g from '../images/I4G.png'
import slack from '../images/slack.png'
import '../App.css'
const Linktree = () => {
  return (
    <div className="entire-page">

        <img src={profile_pic} alt="Wendy Nweje"/>

        <h1>Chinwendu Nweje</h1>

        <div className='links'>
          <a className="button-link" id= "twitter" href="https://twitter.com/chi_thetechsis"> Twitter Link</a>
          <a className="button-link" id="btn__zuri" href="https://training.zuri.team/"> Zuri Team</a>
          <a className="button-link" id="books" href="http://books.zuri.team/"> Zuri Books</a>
          <a className="button-link" id = "book__python" href="https://books.zuri.team/"> Python Books</a>
          <a className="button-link"id ="pitch" href="https://background.zuri.team/"> Background Checks for Coders</a>
          <a className="button-link" id="book__design" href="https://books.zuri.team/design-rules"> Design Books</a>
        </div>

        <div className="socials">
            <img src={github} alt="GitHub Logo"/>
            <img src={slack} alt="Slack Logo"/>
        </div>

        <footer>
        <img src={zuri} alt="Zuri Logo"/>
        <p>HNG Internship 9 Frontend Task</p>
        <img src={i4g} alt="I4G Logo"/>
        </footer>
    </div>
  )
}

export default Linktree


