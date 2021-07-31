import React from 'react'

class CreateContent extends React.Component {
  
  render() {
    console.log('CreateContent', this.props)

    return(
      <ariticle>
        <h2>Create</h2>
        <form action="/create_process" method="post"
          onSubmit={function(e){
            const {title, desc} = e.target
            e.preventDefault()
            alert("submit!!!!")
            this.props.onSubmit(title.value, desc.value)
          }.bind(this)}
        >
          <p><input name="title" type="text" placeholder="Title.."/></p>
          <p><textarea name="desc" placeholder="description"></textarea></p>
          <p><input type="submit"/></p>
        </form>
      </ariticle>

    );
  }
}

export default CreateContent