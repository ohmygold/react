import React from 'react'

class Hum extends React.Component{
  constructor() {
    super();
    this.state={
      show:true
    }
  }
  handleClick(){this.setState({show:!this.state.show})}
  render(){
    let style={height:this.state.show?'120px':'1px',overflow:'hidden',transition:'all 2s',position:'absolute'}
    return(
      <div>
        <button onClick={this.handleClick.bind(this)}>三</button><br/>
        <ul style={style}>
          <li>666666</li>
          <li>666666</li>
          <li>666666</li>
          <li>666666</li>
          <li>666666</li>
          <li>666666</li>
        </ul>
        <h1>hhhhhhhhh</h1>
      </div>
    )
  }
}

export default Hum;
