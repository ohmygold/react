import React from 'react';

class Test extends React.Component{
  constructor(){
    super();
    this.state={
      show:true
    }
  }
  handleClick(){
    this.setState({show:!this.state.show})
  }
  render() {
    let style={
      backgroundColor:'rgba(0,0,0,0.5)',
      position:'fixed',
      top:'0',
      left:'50%',
      right:'0',
      bottom:'0',
      transform:this.state.show?'translateX(0%)':'translateX(100%)',
      transition:'all 1s'
    }
    return(
      <div style={style} onClick={this.handleClick.bind(this)}>
        666666
      </div>
    )
  }
}
export default Test;
