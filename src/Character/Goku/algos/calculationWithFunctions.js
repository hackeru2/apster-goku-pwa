// This time we want to write calculations using functions and get the results. Let's have a look at some examples:
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division, e.g eight(dividedBy(three()))/eight(divided_by(three)) should return 2, not 2.666666...
 
const evalFunc = (evalString ,num) => evalString ? Math.floor(eval(evalString +num )) : num

function zero(evalString) { return evalFunc( evalString , 0)  }
function one(evalString) { return evalFunc( evalString , 1)  }
function two(evalString) { return evalFunc( evalString , 2)  }
function three(evalString) { return evalFunc( evalString , 3)  }
function four(evalString) { return evalFunc( evalString , 4)  }
function five(evalString) { return evalFunc( evalString , 5)  }
function six(evalString) { return evalFunc( evalString , 6)  }
function seven(evalString) { return evalFunc( evalString , 7)  }
function eight(evalString) { return evalFunc( evalString , 8)  }
function nine(evalString) { return evalFunc( evalString , 9)  }

function plus(num) {return num+"+ "}
function minus(num) {return num+"- "}
function times(num) {return num+"* "}
function dividedBy(num) {return num+" / "}

export const calculationWithFunctions = {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy
};

export default calculationWithFunctions;
