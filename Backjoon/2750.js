// 2750 수 정렬하기
// 버블정렬

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let time
let array=[]
reader.on('line', (line) => {
  let data = line.split(' ')
  if(!time) time = Number(data[0])
  else array.push(Number(data[0]))
}).on('close', () => {
  for(let i=0; i<time-1; i++) {
    for(let o=0; o<time-i-1; o++) {
      if(array[o] > array[o+1]){
        let temp = array[o]
        array[o] = array[o+1]
        array[o+1] = temp
      }
    }
  }
  array.map(r => console.log(r))
})