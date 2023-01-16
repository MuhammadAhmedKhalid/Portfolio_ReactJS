import React from 'react';
import './WorkCardStyles.css';
import ProjectCardData from './WorkCradData';
import WorkCard from './WorkCard';


const Work = () => {
  return (
    <div>
      <h1 className='project-heading'>Projects</h1>
      <div className='project-container'>
        {
          ProjectCardData.map((val, ind) => {
            console.log(val.view)
            return (<WorkCard key={ind} imgsrc={val.imgsrc} title={val.title} text={val.text} view={val.view} />)
          })
        }
      </div>
    </div>
  )
}

export default Work