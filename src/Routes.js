import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import App from './App'
import Dog from './component/Dog'

class Routes extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route exact path='/dogpage' component={Dog}/> 
        </Switch>
      </Router>
    )
  }
}

export default Routes