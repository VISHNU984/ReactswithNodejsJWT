import {myFunction,AgeAbove18andbelow65} from './myFunction';

test('myFunction returns the expected result', () => {
  const result = myFunction(2, 3);
  expect(result).toBe(5);
}); 

test('Function to Check AGE', () => {
  const Age =  AgeAbove18andbelow65("1990-09-09");
  expect(Age).toBe(true);
})
