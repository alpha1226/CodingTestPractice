// 11720 숫자의 합

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let time
reader.on('line', (line) => {
  let data = line.split(' ')
  if(!time) time = Number(data[0])
  else {
    let sum = 0
    data[0].split('').map(r => { sum += Number(r) })
    console.log(sum)
  }
});