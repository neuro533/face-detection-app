import React from "react";

function Register(props){
    return (
        <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <form className="measure">
                 <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                 <legend className="f1 fw6 ph0 mh0">Register</legend>

                 <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="first-name">User Name</label>
                    <input 
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="text" 
                    name="first-name"  
                    id="first-name" 
                    onChange={"function to be added later on!"}
                    />
                </div>
            {/* <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="last-name">Last Name</label>
                  <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="last-name"  id="last-name" />
            </div> */}
            <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                  <input 
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="email" 
                  name="email-address"  
                  id="email-address"
                  onChange={"function to be added later on!"} 
                  />
            </div>

            <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input 
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="password" 
                  name="password"  
                  id="password" 
                  onChange={"function to be added later on!"}
                  />
            </div>
            <label className="pa0 ma0 lh-copy f6 pointer">
                
                <input type="checkbox" /> Remember me
            
            </label>
            </fieldset>
            <div className="">
                <input                      
                 className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                 type="submit"
                 value="Submit"
                 onClick={"function to be added later on!"}
                 />
              
        
            </div>
           
            </form>
        </main>
        </article> 
    );
}


export default Register;