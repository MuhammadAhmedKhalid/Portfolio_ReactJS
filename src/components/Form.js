import React from 'react'
import './FormStyles.css'

const Form = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
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