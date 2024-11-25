import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive offers</h1>
        <p>Join the Newsletter</p>
        <div>
            <input type="email" placeholder='Enter your email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter