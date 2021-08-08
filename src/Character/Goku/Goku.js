import { spinWords, sortArray, calculationWithFunctions } from './algos';
export default class Goku {
  constructor(hp) {
    this.hp = hp;
    this.attackTypes = [
      { type: 'punch', dmg: 15, time: 1000 },
      { type: 'kick', dmg: 20, time: 1000 },
      { type: 'kick', dmg: 20, time: 1000 },
      { type: 'super-punch', dmg: 50, time: 700  },
    ];
  }
  getName() {
    return 'goku';
  }

  attack() {
    const randomAttack = this.attackTypes[Math.floor(Math.random() * this.attackTypes.length)];
    return randomAttack;
  }

  async defend(attackStr, algo  ) {

     
    // Some problem we should solve.
    const time = new Date();
    let success = false;
    
    switch (algo.name) {
      case 'spinWords':
        // Your Code Goes Here.
        success = algo.assertion(spinWords);
        console.log(`solved spin words ${success}`);
        break;
      case 'sortOdds':
        success = algo.assertion(sortArray);
        console.log(`solved sortArray ${success}`);
        break;
      case 'calculationWithFunctions':
        success = algo.assertion(calculationWithFunctions);
        console.log(`solved calculationWithFunctions ${success}`);
        break;
      default:
        console.log(`didnt defend against ${algo.name}`);

        success = false;
    }
    const timeToSolve = new Date() - time;
    const hit = success ? attackStr * (timeToSolve / 20) : attackStr;
    this.hp = this.hp - hit;
    return this.hp;
  }
 
}
