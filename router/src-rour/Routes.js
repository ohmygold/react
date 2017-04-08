import React from 'react';
import {Router,Route, browserHistory,IndexRoute} from 'react-router';
import Home from './Home';
import About from './About.js';
import Work from './Work.js';
import Blog from './Blog.js'



let App =() =><div>woshishouyeneirong</div>

function leaveAlert(prevState) {
  alert('你要离开此页面吗？')
}



class Routes extends React.Component {
  render() {
    return(
      <Router history={browserHistory}>
        <Route path='/' component={Home} onLeave={leaveAlert}>
          <IndexRoute component={App}/>
          <Route path='/blog/:title' component={Blog}/>
          <Route path='about' component={About}/>
          <Route path='work' component={Work}/>
        </Route>
      </Router>
    )
  }
}
export default Routes;


//browserHistory 需要服务器的支持，保证每次返回的是我们的index.html
//han
