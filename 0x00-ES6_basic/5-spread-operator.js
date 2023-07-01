// concatenating 2 arrays and a string
export default function concatArrays(array1, array2, string) {
  const concat = [...array1, ...array2, ...string];
  return concat;
}
