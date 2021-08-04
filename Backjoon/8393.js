// 8393 합

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  let data = Number(line.split(' ')[0])
  let sum = 0
  for(let i=0; i<=data; i++){
    sum += i
  }
  console.log(sum)
});