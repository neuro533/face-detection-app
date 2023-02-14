import React from "react";
import './ImageLinkForm.css';


function ImageLinkForm({prop1,prop2})
{

return(
    <div>
        <p className="class to be added later">
        {'This magic face detection app will detect face in your images. Give it a try!'}
        </p>

        <div className="class to be added later">
            <div>
                <input
                className=""
                type={"text"}
                onChange={"function to be added later on!"}       
                />
                
                <button
                className="class to be added later"
                onSubmit={"function to be added later"}
                >
                 Submit   
                </button>


            </div>
        </div>


    </div>

);


}


export default ImageLinkForm;