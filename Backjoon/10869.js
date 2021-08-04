// 10869번 사칙연산

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  let data = line.split(' ')
  let add = Number(data[0]) + Number(data[1])
  let sub = Number(data[0]) - Number(data[1])
  let mul = Number(data[0]) * Number(data[1])
  let mok = Math.floor(Number(data[0]) / Number(data[1]))
  let nmj = Number(data[0]) % Number(data[1])
  console.log(add)
  console.log(sub)
  console.log(mul)
  console.log(mok)
  console.log(nmj)
});