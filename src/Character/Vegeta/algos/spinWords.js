// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

const inputs = [
  { input: 'Hey fellow warriors', output: 'Hey wollef sroirraw' },
  { input: 'You are almost to the last test', output: 'You are tsomla to the last test' }
];

const spinWordsAssertion = function spinWordsAssertion(solutionFunc) {
  const assertion = inputs[Math.floor(Math.random() * inputs.length)];
  const sol = solutionFunc(assertion.input);
  return sol === assertion.output;
};
export const spinWords = { name: 'spinWords', assertion: spinWordsAssertion };

export default spinWords;
