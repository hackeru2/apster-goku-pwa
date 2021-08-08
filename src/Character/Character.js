import React, { Component } from 'react';
import MetaData from './MetaData';
import './Goku/Goku.css';
import './Vegeta/Vegeta.css';
import gokuName from './Goku/gokuName.png';
import vegetaName from './Vegeta/vegetaName.png';

const animations = {
  goku: {
    punch: {
      numberOfSprites: 4
    },
    kick: {
      numberOfSprites: 3
    },
    'super-punch': {
      numberOfSprites: 4
    },
  },
  vegeta: {
    punch: {
      numberOfSprites: 4
    },
    'super-punch': {
      numberOfSprites: 4
    },
    kick: {
      numberOfSprites: 4
    }
  }
};
class Character extends Component {
  state = { animate: false , hpTimeout:0 };

  animatePunch(animationName, duration) {
    const { name } = this.props;
    const {
      [name]: {
        [animationName]: { numberOfSprites }
      }
    } = animations;
    const timeForSprite = duration / numberOfSprites;
    for (let i = 0; i <= numberOfSprites; i++) {
      if (i === numberOfSprites) {
        // End animations.
        this.setState({hpTimeout: timeForSprite * i}) 
        setTimeout(() => this.setState({ animationClass: `` }), timeForSprite * i);
      } else {
        setTimeout(() => this.setState({ animationClass: `${animationName}-${i}` }), timeForSprite * i);
      }
    }
  }
  componentWillReceiveProps(newProps) {
    this.setState({ animate: true });
    const { attack } = newProps;
    this.animate(attack);
  }

  animate(attack) {
    if (attack) {
      this.animatePunch(attack.type, attack.time);
    }
  }

  render() {
    const { name, hp } = this.props;
    const { animationClass } = this.state;

    return (
      <div>
        <MetaData hp={hp} name={name} hpTimeout={this.state.hpTimeout} nameImg={name === 'goku' ? gokuName : vegetaName} />
        <div
          style={{ position: 'absolute', top: '55vh', left: `${name === 'goku' ? '45vw' : ' -12vw'}` }}
          className={`${name} ${animationClass}`}
        />
      </div>
    );
  }
}

export default Character;
