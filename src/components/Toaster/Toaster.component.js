import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './Toaster.css';


export default class Toaster extends Component {

  constructor(props){
    super(props)
    this.timeout =  0;
  }

  componentDidMount(){
    this.timeout = setTimeout(() => {
      this.props.closeToaster()
    }, 5000);
  }
  componentWillUnmount(){
    if(this.timeout) clearTimeout(this.timeout);
  }


  render() {
    return (
      <div onClick={()=> this.props.closeToaster()} className="Toaster">
       <p>Job has been created successfully!</p>
      </div>
    )
  }
}