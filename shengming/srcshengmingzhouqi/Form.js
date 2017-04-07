import React from 'react'

class Form extends React.Component {
  constructor(){
    super();
    this.state={
      input:'aaaa',
      textarea:'',
      radio:'B'
    }
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.input);
  }
  handleInput(event){
    //console.log(e.target.value);
    this.setState({input: event.target.value})
  }
  handleTextarea(e){
    this.setState({textarea:e.target.value})
  }
  handleRadio(e){
    this.setState({radio:e.target.value})
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type='text' value={this.state.input}　onChange={this.handleInput.bind(this)} />
        <textarea value={this.state.value} onChange={this.handleTextarea.bind(this)} />
        <button type='submit'>提交</button>
        <br/>
        A<input name='goodRadio' type='radio' value='A' onChange={this.handleRadio.bind(this)} />
        B<input name='goodRadio' type='radio' value='B' onChange={this.handleRadio.bind(this)} />
        C<input name='goodRadio' type='radio' value='C' onChange={this.handleRadio.bind(this)} />

      </form>
    )
  }
}
export default Form;

//受控组件 value={this.state.text}  onChange
//非受控　defaultValue
