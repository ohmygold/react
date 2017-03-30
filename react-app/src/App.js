import React from 'react';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      num:0,
      xingbie:true
    }
  }
  handleClick(){
    this.setState({num:this.state.num+1,xingbie:!this.state.xingbie})
  }
  render() {
    return(
      <div>
        我当前数字是{this.state.num}
        <br />
        <p>性别：{this.state.xingbie ? '男':
          '女'}</p>
        <button onClick={this.handleClick.bind(this)}>+1</button>
      </div>
    )
  }
}

 export default App;



//state 管理组件内部的数据和状态
//状态变，会触发react组件重新渲染
//修改state需要用setstate这个方法，否则不会触发
