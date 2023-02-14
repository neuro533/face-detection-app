import React, {Component} from 'react';
import './App.css';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';



class App extends Component{

  constructor(props){
    super(props);
  }


  render(){
      return(
        <div className='App'>

         <ImageLinkForm /> 

        </div>  
        
        );

  }


}



export default App;
