import React from 'react';

import Nav from './Nav.js'

class Home extends React.Component {
  handleClick(){
    this.props.router.push('/');
  }
  render() {
    console.log(this.props)
    return(
      <div>
        <Nav />
        homes
        {this.props.children}
        <h1>Footer</h1>
      
      </div>
    )
  }
}
export default Home;
