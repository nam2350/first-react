import React from 'react'

class UpdateContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id : this.props.data.id,
      title : this.props.data.title,
      desc : this.props.data.desc
    }
  }
  inputHandler= (e) => {
    const { value, name } = e.target
    this.setState({
      [name] : value
    })
  }
  render() {
    console.log(this.props.data)
    return(
      <ariticle>
        <h2>Update</h2>
        <form action="/create_process" method="post"
          onSubmit={function(e){
            const {id, title, desc} = e.target
            e.preventDefault()
            alert("submit!!!!")
            this.props.onSubmit(id.value, title.value, desc.value)
          }.bind(this)}
        >
          <input type="hidden" name="id" value={this.state.id}></input>
          <p><input 
          name="title" 
          type="text" 
          placeholder="Title.."
          value={this.state.title}
          onChange={this.inputHandler}/></p>
          <p><textarea 
          name="desc" 
          placeholder="description"
          onChange={this.inputHandler}
          value={this.state.desc}></textarea></p>
          <p><input type="submit"/></p>
        </form>
      </ariticle>

    );
  }
}

export default UpdateContent