import React from 'react'

class Subject extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <header>
        <h1><a href='/' onClick={(e) => {
          e.preventDefault();
          this.props.onChangePage();
        }}>{this.props.title}</a></h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject