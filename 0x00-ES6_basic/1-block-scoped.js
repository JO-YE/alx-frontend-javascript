/*export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    const task = false;
    const task2 = true;
  }
    
  return [task, task2];
}
*/
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var taskIf = true;
    var task2If = false;
  }

  return [task, task2];
}
