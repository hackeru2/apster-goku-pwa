import React, { Component } from 'react';
// import './App.css';
import Vegeta from '../Character/Vegeta/Vegeta';
import Goku from '../Character/Goku/Goku';
import Character from '../Character/Character';
import background from './background.jpg';

const waitFor = function waitFor(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
};

class Skeleton extends Component {
  state = {
    goku: {
      hp: 100,
      attack: {}
    },
    vegeta: {
      hp: 100,
      attack: {}
    }
  };

  goku = new Goku(100);
  vegeta = new Vegeta(100);

  componentDidMount() {
    setTimeout(() => {
      console.log('fight start');
      this.gameLoop('goku', 'vegeta');
    }, 1000);
  }

  async fight(attackerName, defenderName) {
    const attacker = this[attackerName];
    const attackerUIState = this.state[attackerName];

    const defender = this[defenderName];
    const defenderUIState = this.state[defenderName];

    const attack = attacker.attack();
     
    const hp = await defender.defend(attack.dmg, attack.algo );
    this.setState({ [attackerName]: { ...attackerUIState, attack }, [defenderName]: { ...defenderUIState, hp, attack: undefined } });
    await waitFor(attack.time);
    return hp;
  }

  async gameLoop(attacker, defender) {
    await this.fight(attacker, defender);
    const {
      goku: { hp: gokuHp },
      vegeta: { hp: vegetaHp }
    } = this.state;
    if (gokuHp <= 0) {
      console.log('End, goku lost');
    }
    if (vegetaHp <= 0) {
      console.log('End, vegeta lost');
    }
    if (gokuHp <= 0 || vegetaHp <= 0) {
      return;
    }

    this.gameLoop(defender, attacker);
  }

  render() {
    const {
      goku: { hp: gokuHp, attack: gokuAttack },
      vegeta: { hp: vegetaHp, attack: vegetaAttack }
    } = this.state;
    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
          width: '100vw',
          height: 'calc(100vh - 150px)'
        }}
      >
        <div style={{ position: 'absolute', left: '50px', top: '200px' }}>
          <Character name={'goku'} hp={gokuHp} attack={gokuAttack} />
        </div>
        <div style={{ position: 'absolute', right: '550px', top: '200px' }}>
          <Character name={'vegeta'} hp={vegetaHp} attack={vegetaAttack} />
        </div>
      </div>
    );
  }
}

export default Skeleton;
