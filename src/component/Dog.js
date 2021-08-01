import React from 'react'
import '../config.js'
import DogImage from './DogImage.js'

class Dog extends React.Component {
    
  render() {
    const howMany = [1,2,3,4,5,6,7,8,9,10]
    return (
      <div style={{display:'flex', justifyContent:'center'}}>
        <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', width: '100vw'}}>
          {
            howMany.map((el) => (
              <DogImage key={el} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Dog