function SignIn(props){
    return (

        <article className="br4 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80 ">
                {/* signin */}
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                {/* Email */}
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
                   {/* Password */}
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input 
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="password" 
                    name="password"  
                    id="password" 
                    onChange={"function to be added later on!"}
                    />
                </div>
                {/* Remember me */}
                <label className="pa0 ma0 lh-copy f6 pointer">
                    <input type="checkbox" /> Remember me
                
                </label>
                </fieldset>
                {/* input type submit */}
                <div className="to be added later on">
                    <input 
                        onClick={"function to be added later!"}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit"
                        value="Signin"
                    />

                </div>
                {/* Regester  */}
                <div className="lh-copy mt3">
                    <p  onClick={"function to be added later!"} className="f6 link dim black db pointer">Register!</p>
                </div>
                </div>
            </main>
            </article>




    );
}



export default SignIn;