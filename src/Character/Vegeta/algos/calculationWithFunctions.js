// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

const inputs = [{ input: ['seven', 'times', 'five'], output: 35 }];

const calculationWithFunctions = function calculationWithFunctions(solutionFuncObj) {
  const { zero, one, two, three, four, five, six, seven, eight, nine, plus, minus, times, dividedBy } = solutionFuncObj;
  const assertion = inputs[Math.floor(Math.random() * inputs.length)];
  try {
    const sol = assertion.input.reduce((acc, action) => {
      return eval(action)(acc);
    }, undefined);
    return sol === assertion.output;
  } catch (e) {
    return false;
  }
};

export const calculationWithFunctionsAssertion = { name: 'calculationWithFunctions', assertion: calculationWithFunctions };

export default calculationWithFunctionsAssertion;
