import React from 'react'
import '../config.js'
import { DOG_API_URL } from '../config.js'

class Dog extends React.Component {
  constructor(props){
    super(props)

    this.state ={
      dogUrl:''
    } 
  }
  
  componentDidMount() {
    fetch(DOG_API_URL).then(res => res.json())
    .then(data => {
      this.setState({
        dogUrl:data.url
      })
    })
  }
  render() {
    
    return (
        <div>
          <img src={this.state.dogUrl} alt="image url"/>
        </div>
    );
  }
}

export default Dog