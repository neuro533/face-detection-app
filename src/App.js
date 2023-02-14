import React, {Component} from 'react';
import './App.css';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';



class App extends Component{

  constructor(props){
    super(props);
  }


  render(){
      return(
        <div className='App'>
         <Logo />
         <ImageLinkForm /> 

        </div>  
        
        );

  }


}



export default App;
