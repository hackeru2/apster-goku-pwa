const inputs = [
  { input: [5, 3, 2, 8, 1, 4], output: [1, 3, 2, 8, 5, 4] },
  { input: [5, 3, 1, 8, 0], output: [1, 3, 5, 8, 0] },
  { input: [], output: [] },
  {
    input: [97, 76, 14, 62, 59, 31, 28, 42, 9, 44, 28, 16, 32, 94, 40],
    output: [9, 76, 14, 62, 31, 59, 28, 42, 97, 44, 28, 16, 32, 94, 40]
  }
];

const sortArrayAssertion = function sortArrayAssertion(solutionFunc) {
  const assertion = inputs[Math.floor(Math.random() * inputs.length)];
  const sol = solutionFunc(assertion.input);
  if (Array.isArray(sol)) {
    return sol.join('') === assertion.output.join('');
  }
  return false;
};
export const sortArray = { name: 'sortOdds', assertion: sortArrayAssertion };

export default sortArray;
