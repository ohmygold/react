import React from 'react';
import Test from './Test'



　
class Humb extends React.Component{
  constructor(){
    super();
    this.state={
      date:[
        {btn:'btn',content:'我是第一个手风琴的内容'},
        {btn:'btn',content:'我是第二个手风琴的内容'},
        {btn:'btn',content:'我是第三个手风琴的内容'},
        {btn:'btn',content:'我是第四个手风琴的内容'}
      ],
      show:0
    }
  }
  handleClick(i){
    console.log(this.refs.input.value);
    this.setState({show:i})
  }
  handleShow(){
    console.log();
    this.refs.test.handleClick()
  }
  render(){
    let doms=this.state.date.map((item,index,array)=>
    <div key={index}>
      <button onClick={this.handleClick.bind(this,index)}>{item.btn}</button>
      <p style={{height:this.state.show===index?'24px':'0px',margin:'0',overflow:'hidden',transition:'height 1s'}}>{item.content}</p>

    </div>
  )
    return(
      <div>
        {doms}
        <input ref='input' />
        <Test ref='test' />
        <button onClick={this.handleShow.bind(this)}>6666</button>
      </div>
    )
  }
}
export default Humb;
