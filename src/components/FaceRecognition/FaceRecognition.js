import React from "react";



function FaceRecognition({imageUrl}) {
  
  return ( 
  
    <div className="center" style={{marginTop:'20px', marginBottom:'20px'}}>
      
      <img alt="" src={imageUrl}  width={'400px'} height={'auto'} />
      
    </div>
  )
  
}

export default FaceRecognition;