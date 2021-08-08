// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]


function isOdd(n) {
  return Math.abs(n % 2) == 1;
}

export const sortArray = function sortArray(array) {
//1.get only odd numbers : 
  let oddArray = [];
   array.forEach( (element  )=> {
    if (isOdd(element)) oddArray.push(element)
  } );
//2.sort oddArray : 
  oddArray.sort((a, b) =>a - b);
 
//3.change position of odd numbers and return :   
  return  array.map(num => { 
    if (isOdd(num))  {
      num = oddArray[0]
      oddArray.shift()
    } 

    return num
   }
  )
 
};

export default sortArray;
