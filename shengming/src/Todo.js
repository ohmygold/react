import React from 'react';
import TodoList from './TodoList.js'


class Todo extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      input:''
    }
  }
  handleCompleted(id){
    // let newDate=this.state.date;
    // newDate[id].completed=!newDate[id].completed;
    // this.setState({date:newDate});
  }
  handleSubmit(e){
      e.preventDefault();
      if (this.state.input.trim()) {
        this.setState({
          data: [...this.state.data,{title: this.state.input.trim(), completed: false,id:Date.now()}]
        });
      }else {
        alert('请输入内容')
        this.refs.input.focus()
      }
      this.setState({input: ''})
    }
    render(){
      return(
        <div className='container'>
          <h1 className="text-center">TODO</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="input-group">
                <input type="text" className="form-control" placeholder="add todo..." value={this.state.input} onChange={ (e) => this.setState({input: e.target.value}) } ref='input'/>
                <span className="input-group-btn">
                  <button className="btn btn-default" type="submit">Add{this.state.data.length} </button>
                </span>
            </div>
          </form>

          <br />

          <TodoList data={this.state.data}
          handleCompleted={this.handleCompleted.bind(this)} />
          <div>
         分类：
         <button type="button" className="btn btn-default" onClick={()=>this.setState({show:'ALL'})}>All</button>
         <button type="button" className="btn btn-primary" onClick={()=>this.setState({show:'ACTIVE'})}>Active</button>
         <button type="button" className="btn btn-default" onClick={()=>this.setState({show:'COMPLETED'})}>Compoted</button>
       </div>
        </div>
      )
    }
  }
export default Todo;
