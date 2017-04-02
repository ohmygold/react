import React from 'react';

class Child extends React.Component {
  render() {
    return(
      <div>
        {this.props.Children}
      </div>
    )
  }
}
export default  Child;
