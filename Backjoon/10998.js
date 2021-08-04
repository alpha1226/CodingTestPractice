// 10998번 A*B

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  let data = line.split(' ')
  let sum = Number(data[0]) * Number(data[1])
  console.log(sum)
});