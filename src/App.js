import React from 'react'
import {withRouter} from 'react-router-dom'
import Subject from './component/Subject'
import Nav from './component/Nav'
import ReadContent from './component/ReadContent'
import Control from './component/Control'
import CreateContent from './component/CreateContent'
import UpdateContent from './component/UpdateContent'
import Dog from './component/Dog'

class App extends React.Component{
  constructor(props){
    super(props)
    this.max_content_id = 3
    this.state = {
      mode: 'welecome',
      selected_content_id:1,
      subject: {title: 'WEB', sub: 'World Wide Web!'},
      welecome: {title: "Welecome", desc: 'Hello, React!!!'},
      contents : [
        {
          id:1,
          title:'HTML',
          desc:'HTML is for information..'
        },
        {
          id:2,
          title:'CSS',
          desc:'CSS is for design'
        },
        {
          id:3,
          title:'JavaScript',
          desc:'JavaScript is for interactive'
        }
      ]
    }
  }

  getReadContent() {
    let i = 0;
    while( i < this.state.contents.length){
      let data = this.state.contents[i]
      if(data.id === this.state.selected_content_id){
        return data
        break;
      }
      i++;
    }
  }
  getContent() {
    let _title, _desc, _article = null
    if(this.state.mode === 'welecome') {
      _title = this.state.welecome.title;
      _desc = this.state.welecome.desc;
      _article = <ReadContent title={_title} desc={_desc}/>
    } else if(this.state.mode === 'read') {
      const _content = this.getReadContent(_title,_desc)
      _article = <ReadContent title={_content.title} desc={_content.desc}/>
    } else if(this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title,_desc){
        this.max_content_id = this.max_content_id+1
        let newContents = [{id:this.max_content_id, title:_title, desc:_desc}]
        let _contents = this.state.contents.concat(newContents)
        this.setState({
          contents:_contents,
          mode:'read',
          selected_content_id:this.max_content_id
        })
      }.bind(this)}/>
    } else if(this.state.mode === 'update') {
      let _content = this.getReadContent()
      _article = <UpdateContent data={_content} onSubmit={
        function(_id, _title, _desc){
          let _contents = Array.from(this.state.contents);
          let i =0 ;
          while(i < _contents.length) {
            if(_contents[i].id === _id) {
              _contents[i] = {id:_id,
                title: _title,
                desc: _desc}
                break;
            }
            i++
          }
        this.setState({
          contents: _contents,
          mode:'read'
          });
      }.bind(this)}/>
    }
    return _article
  }

  goToDogPage = () => {
    console.log(this.props.history)
    this.props.history.push('./dogpage');
  }

 
  render() {
  console.log("새로운 매인!!!", this.state.contents)  
  return (
    <div className="wrap">
      <Subject title={this.state.subject.title} sub={this.state.subject.sub}
      onChangePage={() => {
        this.setState({mode : 'welecome'})
      }} />
      <Nav onChangePage={(id) => {
        this.setState({mode :'read',
        selected_content_id:Number(id)})
        
      }} data={this.state.contents}/>
      <Control onChangeMode={function(mode){
        if(mode === 'delete') {
          if(window.confirm("진짜 삭제합니까?")){
            let _contents = Array.from(this.state.contents)
            let i = 0;
            while( i < this.state.contents.length) {
              if(_contents[i].id === this.state.selected_content_id){
                _contents.splice(i,1)
                break;
              }
              i++;
            }
            this.setState ({
              contents: _contents,
              mode:'welecome'
            });
            alert('삭제되었습니다.')
          }
        }else{
          this.setState({mode: mode})
        }
      }.bind(this)}/>
      {this.getContent()}
      <div>
      <button onClick={this.goToDogPage}>Dog Random Image</button>
      </div>
    </div>
    );
  }
}

export default withRouter(App);
