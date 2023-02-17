import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'






 class Header extends React.Component{
  render(){

    return(
      
        <p> Welcome, {this.props.userName}</p>
      
    )
  }
}

class Greeting extends React.Component{
 
      
  
render(){
  const date=new Date()
      const hours=date.getHours()
          this.timeOfDay=(()=>{
        if (hours < 12) {
         return "morning"
      } else if (hours >= 12 && hours < 17) {
          return "afternoon"
      } else {
          return "night"
      }
      })
  return(
    <h1>Good {this.timeOfDay()}</h1>
  )
  }
}


export default class App extends React.Component{
  render(){
  
    return(
      <div>
        <Header  
        userName="tesfa"
        />
        <Greeting />
        
      </div>
       
    )
  }
  
  
  }
  



