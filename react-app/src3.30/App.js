import React from 'react';
import Header from './component/Header.js';
import bg from './img/car_img_30.jpg';
class App extends React.Component{
  render(){
    return(
      <div className='container' style={{backgroundImage:`url(${bg})`}}>
        <Header />
        {/* <img src={bg} alt='pic' /> */}
      </div>
    )
  }
}


export default App;
