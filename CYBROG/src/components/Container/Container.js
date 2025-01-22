import React from 'react'
import './Container.css'

const container = (props) => {
  return (
    <div className='container main-container'>
    {props.children}
    </div>
  )
}

export default container