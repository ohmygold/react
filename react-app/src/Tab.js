import  React from 'react';
import Hum from './Hum.js'
import Humb from './Humb.js'

class Tab extends React.Component {

  constructor(){
    super()
    this.state={
      show:1
    }
  }
  handleClick(num){
    console.log(num);
    this.setState({show:num})
  }
  render() {
    let tab1=<p>我是选项卡１</p>;
    let tab2=<p>我是选项卡2</p>;
    let tab3=<p>我是选项卡3</p>;
    let tab4=<p>我是选项卡4</p>;
    let tab5=<p>我是选项卡5</p>;

    return(
      <div>
        <button onClick={this.handleClick.bind(this,1)} style={{background:this.state.show===1 ? '#f00':null}}>选项卡１</button>
        <button onClick={this.handleClick.bind(this,2)} style={{background:this.state.show===2 ? '#f00':null}}>选项卡２</button>
        <button onClick={this.handleClick.bind(this,3)} style={{background:this.state.show===3 ? '#f00':null}}>选项卡３</button>
        <button onClick={this.handleClick.bind(this,4)} style={{background:this.state.show===4 ? '#f00':null}}>选项卡４</button>
        <button onClick={this.handleClick.bind(this,5)} style={{background:this.state.show===5 ? '#f00':null}}>选项卡５</button>
        <div style={{border:'1px solid #000',padding:'10px'}}>
          {
            this.state.show===1 ?tab1 :
            this.state.show===2 ?tab2 :
            this.state.show===3 ?tab3 :
            this.state.show===4 ?tab4 :tab5

          }
        </div>
      <Hum />
      <Humb />
      </div>

    )
  }
}

export default Tab
