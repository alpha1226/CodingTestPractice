// 10989 수 정렬 3
// 메모리 초과 발생

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0
let data = new Array(10001)
reader.on('line', (line) => {
  if(!count) count = Math.floor(line)
  else {
    data.push(Math.floor(line))
  }
}).on('close', () => {
  console.log(quickSort(data))
})



function quickSort(array, left = 0, right = array.length - 1) {
  if (left >= right) {
    return;
  }
  const mid = Math.floor((left + right) / 2);
  const pivot = array[mid];
  const partition = divide(array, left, right, pivot);
  quickSort(array, left, partition - 1);
  quickSort(array, partition, right);

  function divide(array, left, right, pivot) {
    while (left <= right) {
      while (array[left] < pivot) {
        left++;
      }
      while (array[right] > pivot) {
        right--;
      }

      if (left <= right) {
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        left++;
        right--;
      }
    }
    return left;
  }
  return array;
}