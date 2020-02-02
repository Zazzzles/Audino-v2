export function intersect<T>(array1: Array<T>, array2: Array<T>): Array<T> {
  return array1.filter(value => array2.includes(value));
}

export function occurances<T>(array: Array<T>, value: T) {
  var count = 0;
  array.forEach((v: T) => v === value && count++);
  return count;
}
