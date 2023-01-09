import React,{Component}  from 'react'

class SignIn extends Component {
    constructor(props) {
      super(props);
      
      this.state={
        signinEmail:'',
        signinPassword:''
      }
      
    
    } 
  
    onEmailChange=(event)=>{
      this.setState({signinEmail:event.target.value})
    }

    onPasswordChange=(event)=>{
      this.setState({signinPassword:event.target.value})
    }
   onSubmitSignIn=()=>{
    
    fetch('http://localhost:3000/signin',{
    method:'post',
    headers:{'content-Type':'application/json'},
    body:JSON.stringify({
      email:this.state.signinEmail,
      password:this.state.signinPassword
    })
    }).then((resp)=>{
      return resp.json()

    }).then(data=>{
      if(data==="Success"){
       return this.props.onRouteChange('Home')
      }else{
        alert("no such user exists")
      }
    })
  
    // .then(response=>{
    //   response.json()
    // })
    // .then(data=>{

    //   if(data==="success"){
    //    return  this.props.onSignIn()
        
    //     }

    // })
    
      
      
  
      
   }
  render() {
    const {onRouteChange}=this.props;
    return (
<article className="br4 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
    <main className="pa4 black-80 ">
        <div className="measure">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          {/* signin */}
         <legend className="f1 fw6 ph0 mh0">Sign In</legend>

         <div className="mt3">
          {/* Email */}
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
              {/* Password */}
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
             
             onClick={this.onSubmitSignIn}
             className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
             type="submit"
             value="Signin"/>
        </div>
        <div className="lh-copy mt3">
            <p  onClick={()=>onRouteChange('Register')} className="f6 link dim black db pointer">Register!</p>
        </div>
        </div>
    </main>
    </article>
    )
  }
}

export default SignIn;
