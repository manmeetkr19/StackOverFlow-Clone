import React from 'react'
import './RightSidebar.css'
import message from '../../Assets/message.svg'
import pen from '../../Assets/pen.svg'
import blacklogo from '../../Assets/blacklogo.svg'

const Widget = () => {
  return (
    <div className='widget'>
      <h4>The Overflow blog</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <img src={pen} alt="pen" width='18' />
          <p>Observality is key to the future of software (and your DevOps career)</p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={pen} alt="pen" width='18' />
          <p>Podcast 374: How valuable is ypur screen name?</p>
        </div>
      </div>

      <h4>Featured on Meta</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <img src={message} alt="pen" width='18' />
          <p>Review queue workflows-Final release...</p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={message} alt="pen" width='18' />
          <p>Please welcome Valued Associates: #958
            -V2Blast #959 -SpencerG
          </p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={blacklogo} alt="pen" width='18' />
          <p>Outdated Answers: accepted answer is now unpinned on StackOverflow
          </p>
        </div>
      </div>

      <h4>New Meta posts</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <p>38</p>
          <p>Why was this spam flag declined.yet the question marked as spam?</p>
        </div>
        <div className='right-sidebar-div-2'>
          <p>28</p>
          <p>What is the best course of action when a user has high enough rep to..
          </p>
        </div>
        <div className='right-sidebar-div-2'>
          <p>14</p>
          <p>Is a link to the "How to ask" help page a useful comment?
          </p>
        </div>
      </div>

    </div>
  )
}

export default Widget