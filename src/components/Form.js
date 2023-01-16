import React from 'react'
import './FormStyles.css'
import { useNavigate } from 'react-router-dom'

const Form = () => {

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/finalScreen')
  }

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type='text' />
        <label>Email</label>
        <input type='email' />
        <label>Subject</label>
        <input type='text' />
        <label>Message</label>
        <textarea rows='6' placeholder='Type your message here' />
        <button className='btn' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form