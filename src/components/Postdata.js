import React, { Component } from 'react';
import "../Assets/Home.css";
import axios from "axios"; 
 
 
 

export class Postdata extends Component {

    constructor(props) {
        super(props)
        this.state ={
          statusMessage:''
            
        } 
      }

    changeHandler = (e) => {

      this.setState({[e.target.name]:e.target.value})
    }
    
     handleSubmit = (e) =>{
      e.preventDefault()
      console.log(this.state)
      axios.post("http://localhost:7000/web/twitter/tweet",this.state)
       .then(response =>{
         console.log(response);
         alert("Post successfully Created");
          
       })
       .catch(error => {
           console.log(error);
       })
     }
 



  render() {
    const {statusMessage}=this.state
    return (
   
        <form    onSubmit={this.handleSubmit}>
        <label>
          
          <textarea className="textarea" type="text" name="statusMessage" value={statusMessage} onChange={this.changeHandler} />     
             </label>
         <button type="submit"   >Submit</button>
      
         
      </form>


    );
  }
}

export default Postdata