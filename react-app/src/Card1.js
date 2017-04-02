import React from 'react'



class Card1 extends React.Component {
  render() {
    let styles={
      root:{maxWidth:'750px',margin:'0 auto',height:'80px',background:'#F00'},
      left:{float:'left',width:'80px',textAlign:'center',color:'#fff',background:'blue',fontsize:'28px'}
    }
    let cards=this.props.date.map((item,i)=>
    <div style={styles.root} key={i}>
        <div style={styles.left}>1</div>
        <div>
          <h2>{this.props.title}</h2>

        </div>
    </div>)
    return(
      {cards}
    )
  }
}
export default Card1;
