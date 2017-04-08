import React from 'react';
import $ from 'jquery';

class Home extends React.Component {
  constructor(){
    super();
    this.state={
      date:[]
    }
  }
  ComponentWillMount(){
    $.ajax({
      type:'GET'
      url:'https://cnodejs.org/api/v1/topics'
    })
  }
  render() {
    return(
      <div>
        <h1>cnode中文社区盗版</h1>
        <button>精华</button>
        <button>精华</button>
        <button>精华</button>
        <button>精华</button>
        <button>精华</button>
        <button>精华</button>
        <button>精华</button>
        <button>精华</button>

        {this.props.children}

      </div>
    )
  }
}
export default Home;
