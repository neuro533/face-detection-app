import React from "react";
import './ImageLinkForm.css';


function ImageLinkForm({prop1,prop2})
{

return(
    <div>
        <p className="f3">
        {'This magic face detection app will detect face in your images. Give it a try!'}
        </p>

        <div className="center">
            <div className="form center pa4 br3 shadow-5">
                <input
                className="f4 pa2 w-70 center"
                type={"text"}
                onChange={"function to be added later on!"}       
                />
                
                <button
                className="grow f4 link w-30 ph3 pv2 dib white bg-light-purple "
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