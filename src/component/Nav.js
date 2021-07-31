import React from 'react'

class Nav extends React.Component {
  shouldComponentUpdate(newProps, newState) {
    if(this.props.data === newProps.data) {
      return false;
    }else {
      return true;
    }
  }
  render() {
    console.log("=============>Nav", this.props.data)
    let lists = [];
    let data = this.props.data;
    let i = 0;
    while( i < data.length){
      lists.push(
      <li key={data[i].id}>
        <a href={"/content"+ data[i].id}
           data-id = { data[i].id }
           onClick={ (e) => {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
      }}>
        {data[i].title}</a>
      </li>);
      i = i + 1;
    }
    return(
    <nav>
      <ul>
        {lists}
      </ul>
    </nav>);
  }
}

export default Nav