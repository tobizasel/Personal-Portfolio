import React from 'react'

const Project = ({title, description, img}) => {

    console.log(title, description);

  return (
    <div>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default Project