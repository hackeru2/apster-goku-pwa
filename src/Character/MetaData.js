import React, { Component } from 'react';
//  import './App.css';

class MetaData extends Component {

  state ={ hpLocal:0 , yellowWidth:0  }

  componentDidMount(){
      this.setState({hpLocal:this.props.hp   })
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.hp == this.props.hp) return;
    // console.log('this.props.hp :>> ', this.props.hp);
    setTimeout(() => {
       
      this.setState({hpLocal:this.props.hp ,
        yellowWidth:(prevProps.hp - this.props.hp )*5
      })
    }, this.props.hpTimeout);

    setTimeout(() => {
       
      this.setState({ 
        yellowWidth:0 
      })
    }, this.props.hpTimeout+ 200);
  }
  
  render() {
    const { name, hp, nameImg , hpTimeout } = this.props;
    const {yellowWidth} = this.state
    const hpBarStyle = {
      position: 'absolute',
      width: '500px',
      height: '20px',
      marginBottom:"10px",
      borderRadius:"5px",
      boxShadow: '2px 4px 10px 2px white, 2px 4px 40px 2px aqua, 2px 4px 10px 2px white',
        // backgroundImage: 'linear-gradient(to left, red , green)',
      // border:"1px solid gray",
      // borderLeft: "1px solid greeen",
        backgroundColor: 'red'
    };
    const nameStyle = {
      position: 'absolute',
      top: '35px'
    };
        // console.log('yellowWidth :>> ', yellowWidth);
    return (
      <div>
        <div style={hpBarStyle} />
       
        <div
        className="transform-all"
          style={{
            ...hpBarStyle,
            backgroundColor: 'green',
            boxShadow: 'none',
            // backgroundImage: 'linear-gradient(to left, red , green)',
            transform: `scaleX(${Math.max(this.state.hpLocal / 100, 0)})`,
            transformOrigin: 'left'
          }}
        />
         <div
         className="transform-all"
         style={{...hpBarStyle , 
         width:`${hp < 0 ? 0 : yellowWidth}px`,
        //  opacity : `${hp < 0 ? 0 : 1}`,
        // transform: `scaleX(${Math.max(this.state.hpLocal / 100, 0)})`,
        //  backgroundColor:"yellow",
          backgroundImage: 'linear-gradient(to left, yellow , yellow ,yellow, yellow, green)',
         borderRadius: 0,
        //  border:"0.5px solid #ffffff00",
         left:`${5* Math.max(this.state.hpLocal , 0)}px`,
        //  boxShadow:"none",
         
          
        
        }} />
      
        <img style={nameStyle} src={nameImg} />
      </div>
    );
  }
}

export default MetaData;
