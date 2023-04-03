import React from 'react'
import './ImageLinkForm.css'


function ImageLinkForm({onInputChange,onButtonSubmit}) {
  return (
    <div>
      <p className='f3'>
        {'This magic face detection app will detect face in your images. Give it a try!'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
       
        <input 
          className='f4 pa2 w-70 center' 
          type='text' 
          onChange={onInputChange} 
          />    
        
        <button
          onClick={onButtonSubmit} 
          className='grow f4 link w-30 ph3 pv2 dib white bg-light-purple'>
          Submit
          
          </button>
       
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm