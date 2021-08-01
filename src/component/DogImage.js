import React from 'react'
import '../config'
import { DOG_API_URL } from '../config'

class OneDog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dogUrl : ''
    }
  }
  componentDidMount() {
    fetch(DOG_API_URL).then(res=>res.json())
    .then(data => {
      console.log('data',data)
      this.setState({
        dogUrl:data.url
      })
    })
  }
  render(){
    const {dogUrl} = this.state
    console.log(dogUrl)
    return(
      <div >
        <img src={dogUrl} alt='dogimage' style={{width:'100px', height:'100px'}}/>
      </div>
    );
  }
}

export default OneDog