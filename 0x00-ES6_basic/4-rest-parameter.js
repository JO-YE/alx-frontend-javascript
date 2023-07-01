/* eslint-disable no-unused-vars */
export default function returnHowManyArguments(...args) {
// returing the number of args passed to a rest param
  let count = 0;
  for (const arg of args) {
    count += 1;
  }
  return count;
}
