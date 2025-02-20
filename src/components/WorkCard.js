import React from 'react';
import { NavLink } from 'react-router-dom';
import './WorkCardStyles.css';


const WorkCard = (props) => {
  return (
    <div className='project-card'>
    <img src={props.imgsrc} alt='image1'/>
    <h2 className='project-title'>{props.title}</h2>
    <div className='pro-details'>
      <p>{props.text}</p>
      <div className='pro-btns'>
        {/* <NavLink src={props.view} className='btn'>View</NavLink> */}
        <a href={props.view} className='btn'>View</a>
        <NavLink to='url.com' className='btn'>Source</NavLink>
      </div>
    </div>
  </div>
  )
}

export default WorkCard