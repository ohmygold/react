import React from 'react';
// import Btn from './Btn.js';
// import Card from './Card.js'
// import Card1 from './Card1.js'
import Child from './Child.js'

class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state={
  //     num:0,
  //     xingbie:true
  //   }
  // }
  // handleClick(){
  //   this.setState({num:this.state.num+1,xingbie:!this.state.xingbie})
  // }
  render() {
    // let date=[
    //   {index:1,title:'这是第一个标题',date:'2017.3.30'},
    //   {index:1,title:'这是第一个标题',date:'2017.3.30'},
    //   {index:1,title:'这是第一个标题',date:'2017.3.30'},
    //   {index:1,title:'这是第一个标题',date:'2017.3.30'},
    //   {index:1,title:'这是第一个标题',date:'2017.3.30'},
    //   {index:1,title:'这是第一个标题',date:'2017.3.30'}
    // ]
    return(
      <div>
        {/* 我当前数字是{this.state.num}
        <br />
        <p>性别：{this.state.xingbie ? '男':
          '女'}</p>
        <button onClick={this.handleClick.bind(this)}>+1</button>
        <Btn name='hhh'/>
        <Btn />
        <Btn />
        <Btn />
        <Btn /> */}
        {/* <Card /> */}
        {/* <Card1 date={date}/>
        date.map */}

        <Child name='hhhh'>
          <div>666666666</div>
          <div>666666666</div>
          <div>666666666</div>
          <div>666666666</div>
          <div>666666666</div>
        </Child>
      </div>
    )
  }
}

 export default App;



//state 管理组件内部的数据和状态
//状态变，会触发react组件重新渲染
//修改state需要用setstate这个方法，否则不会触发



//props  ,       state

//props
