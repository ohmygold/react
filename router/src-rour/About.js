import React from 'react';


class About extends React.Component {
  handleClick(){
    this.props.router.push('/');
  }
  render() {
    return(
      <div>
      jjjjjjjjjjjj
      <button　onClick={this.handleClick.bind(this)}>返回首页</button>
      </div>
    )
  }
}
export default About;
