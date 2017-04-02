import React from 'react'



class Card extends React.Component {
  render() {
    let styles={
      root:{maxWidth:'750px',margin:'0 auto',height:'80px',background:'#F00'},
      left:{float:'left',width:'80px',textAlign:'center',color:'#fff',background:'blue',fontsize:'28px'}
    }
    return(
      <div style={styles.root}>
          <div style={styles.left}>1</div>
          <div>
            <h2>{this.props.title}</h2>
            
          </div>
      </div>
    )
  }
}
export default Card;
