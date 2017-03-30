import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

// //ReactDom.render(<p>Hello World</p>,document.getElementById('root'))
// // let num=11;
// // let aaa=<div>{2+52} {num*2+60}</div>;
// // ReactDom.render(aaa,document.getElementById('root'));
// // function sun(x,y) {
// //   return x*y
// //
// // }
//
//
// // let aaa=<div><span>ｈｈｈｈｈ</span><br /><span>shuangji </span> {sun(6,8)}{/*我是注释*/}</div>
// // let aaa=<div>
// //   <label htmlFor="aaa">hhh</label>
// //   <input type="text" id="aaa"/>
// // </div>
// // ReactDom.render(<div>{aaa}{aaa}</div>,document.getElementById('root'))
//
//
//
//
// //概念，在js中直接写形如　xml　格式的语法
// //js语法特点
// //在jsx中可以嵌入变量或求职表达式，注意在jsx愈发中写js变量需要用{}包裹//////好多视频１８１期
// //每一个标签必须有关闭
// //每一个jsx节点必须包裹在一个闭合标签内
// //在jsx中注释的写法{/*我是注释*/}
// //class要写成className,for要改写成htmlFor
// 　
//
//
//
//
//
// // var Dom=React.createClass({
// //   render:function () {
// //     return(
// //       <div>aaaaaaaaaaaa</div>
// //     )
// //   }
// // })
//
//
//
// //第二种
// function Footer() {
//   return(
//     <div>双击６６６</div>
//   )
// }
// ReactDom.render(<div> <Footer />  </div>,
// document.getElementById('root'))



//第三种
// var style={color:'yellow'}
// function getStyle() {
//   return{color:"deeppink"}
// }
class Footer extends React.Component {
  // getStyles(){
  //   return{color:"lightseagreen"}
  // }
  render() {

    //let bb={height:'500px'};
    var styles={
      a:{color:'blue'},
      b:{fontSize:'10px'}
    }
    return(
      <div>
        {/* <h1　style={{color:'#f00',fontSize:'100px'}}>Hello Everyone</h1>
        <h1　style={style}>Hello Everyone</h1> */}
        <h1　style={styles.a}>Hello Everyone</h1>
        {/* <h1　style={getStyle()}>Hello Everyone</h1> */}
        {/* <h1　style={this.getStyles()}>Hello Everyone</h1> */}
        <h1　style={Object.assign({},styles.a,styles.b)}>Hello Everyone</h1>

      </div>
    )
  }
}
ReactDom.render(<div><Footer /></div>,document.getElementById('root'))


//React　组件　　　三种组件创建方式　首字母必须要大写，否则会
//一个组件就是一块ｈｔｍｌ结构，用的时候形如自定义标签
//第一种（过时）
//var Dom=React.createClass({
// render:function () {
//   return()
// }
// })
//第二种 function,用的不太多，通常不需要组件的state，生命周期函数时






//less sass浏览器不支持
