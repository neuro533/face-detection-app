import React from 'react'
import './Register.css'

class Register extends React.Component {   
      constructor(props) {
        super(props)
      
        this.state = {
           username:'',
           email:'',
           password:'',
        }
      }

      onUserNameChange=(name)=>{
            this.setState({username:name.target.value})
      }
      
      onEmailChange=(email)=>{
            this.setState({email:email.target.value})
      }
      
      onPasswordChange=(password)=>{
            this.setState({password:password.target.value})
      }

      onRegister=()=>{
      fetch('http://localhost:3000/register',{
            method:"post",
            headers:{"content-Type":"application/json"},
            body:JSON.stringify({
               username: this.state.username,
               email:this.state.email,
               password:this.state.password
            })
      }).then(resp=>{
           return resp.json()
      }).then(user=>{
            if(user){
                 console.log(this.props.loadUser(user))
                  console.log(this.state.user)
                  this.props.onRouteChange('Register');
            }

      })
      }

      render(){
            
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
                            onChange={this.onUserNameChange}
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
                            onChange={this.onEmailChange} 
                            />
                      </div>
                      <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"  
                            id="password" 
                            onChange={this.onPasswordChange}
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
                           onClick={this.onRegister}
                           />
                        
                  
                      </div>
                     
                      </form>
                  </main>
                  </article> 
                  
                  )
      }
    
}

export default Register