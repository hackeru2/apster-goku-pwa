import { spinWords, sortArray, calculationWithFunctionsAssertion } from './algos';
export default class Vegeta {
  constructor(hp) {
    this.hp = hp;
    this.attackTypes = [
      { type: 'punch', dmg: 40, time: 1000, algo: spinWords },
      { type: 'super-punch', dmg: 50, time: 700, algo: sortArray },
      { type: 'kick', dmg: 60, time: 1000, algo: calculationWithFunctionsAssertion }
    ];
  }
  getName() {
    return 'vegeta';
  }

  attack() {
    const randomAttack = this.attackTypes[Math.floor(Math.random() * this.attackTypes.length)];
    
    return randomAttack;
  }

  async defend(attackStr) {
    // Some problem we should solve.
    const hit = attackStr * Math.random();
    this.hp = this.hp - hit;
    return this.hp;
  }
}
