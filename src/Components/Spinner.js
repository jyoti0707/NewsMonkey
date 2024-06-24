import React, { Component } from 'react'
import spinner from "./Spinner.gif"

const Spinner = () => {
    return (
      <div className='text-center'>
        <img src={spinner} alt="loading" />
      </div>
    )
  
}

export default Spinner
