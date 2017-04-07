import React, { Component } from 'react';


class App extends Component {
  constructor(){
    super();
    this.state={num:0}
  }
  componentDidMount(){
    console.log('did mount');
    // let _this=this;
    // setInterval(function () {
    //   _this.setState({num:_this.state.num+1})
    // },1000)
  }
  componentWillMount(){
    console.log('will mount');}
  shouldComponentUpdate(nextProps,nextState){
    console.log('shoulad',nextProps,nextState);
    if(nextState.num>10){
      return false
    }
    return true
  }
  componentWillUpdate(nextProps,nextState){
    console.log('will',nextProps,nextState);
  }
  componentDidUpdate(prevProps,prevState){
    console.log('did',prevProps,prevState);
  }
  render() {
    return (
      <div className="App">
        {this.state.num}<br />
        <button onClick={()=>this.setState({num:this.state.num+1})}>+1</button>
      </div>
    );
  }
}
App.defaultProps={
  title:'aaa'
}
export default App;


//setState是一个异步更新操作
//首次挂载，只会触发一次
//getDefaultProps=>getIntialState=>componentWillMount=>render=>componentDidMount
//更新过程，组件的state,props
//componentWillReceiveProps->shouldComponentUpdate->componentWillMount->render->componentDidMount
//
