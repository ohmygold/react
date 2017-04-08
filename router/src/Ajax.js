import React from 'react';
import {Router,Route,browserHistory,IndexRoute} from 'react-router';
import App from './App.js';
import Home from './Home.js'

class Ajax extends React.Component {
  render() {
    return(
      <Router History={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home}/>
        </Route>
      </Router>
    )
  }
}
export default Ajax;
