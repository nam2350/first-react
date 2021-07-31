import React from 'react'

class ReadContent extends React.Component {
  render() {
    // console.log('ReadContent', this.props)
    return(
      <ariticle>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </ariticle>

    );
  }
}

export default ReadContent