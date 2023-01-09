import React, { Component } from 'react';
import './App.css';
// import Clarifai from 'clarifai'
import ParticlesBg from 'particles-bg'
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import FaceRecognition from './components/FaceRecognition/FaceRecognition';





// const app = new Clarifai.App({
//   apiKey: '8f65eaece0d04246875fbb96d693592c'
//  });



class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
       input:'',
       imageUrl:'',
       SignIn:'SignIn',
       isSignedIn:false,
       user:{
        id:'',
        username:'',
        email:'',
        entries:'',
        date:'',

       }
    }
  }
  

  // componentDidMount(){
  //   fetch(' http://localhost:3000/users')
  //   .then(resp=>resp.json())
  //   .then(console.log)
  // }

  // calculateFaceLocation=(data)=>{
  //   const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
  // }
  onInputChange=(event)=>{
 
    this.setState({input:event.target.value})
   
 
  }

  loadUser=(data)=>{
    this.setState({
      id:data.id,
      username:data.username,
      email:data.email,
      entries:data.entries,
      date:data.date,
    })

  }
  
  
  // onSignIn=()=>{
  //   this.setState({SignIn:'Home'})
  //   this.setState({isSignedIn:true})
  // }
  onSignOut=(route)=>{
    this.setState({SignIn:'SignIn'})
    this.setState({isSignedIn:false})
    console.log(`route ===>>> ` + route)
  }
  // onRegister=()=>{
  //   this.setState({SignIn:'Register'})
  // }
  
  onRouteChange=(route,boolean=false)=>{
    this.setState({SignIn:route})
    if(route==="Home"){
      boolean=true;
      this.setState({isSignedIn:boolean})
    }
    console.log(`route ===>>> ` + route)

  }

  onButtonSubmit=(event)=>{
   
    this.setState({imageUrl:this.state.input})
    // app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
    // .then(response=>this.calculateFaceLocation(response))
    // .catch(err=>console.log(err)) 
  }
  
  render (){
    return(
      <div className='App'>
        <Navigation  isSignedIn={this.state.isSignedIn} onSignOut={this.onSignOut} onRouteChange={this.onRouteChange} />
        {
        this.state.SignIn === 'Home' 
        ? <div>
         <Logo  />
         <ImageLinkForm  
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
         />
         <FaceRecognition imageUrl={this.state.imageUrl}/>
         <Rank />
        
        </div>
        : (
          this.state.SignIn==='Register' 
          ?<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}   />
          :<SignIn   onRouteChange={this.onRouteChange}/>
           
        )

  }
                  
         <ParticlesBg 
          color="#FFFFFF"
          className='particles' 
          num={200} 
          type="cobweb" 
          bg={true}
          />
         
         {/*
 
                  <FaceDetection /> */}

      </div>
    );
  }
}

export default App;
