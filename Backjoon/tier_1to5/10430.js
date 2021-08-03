// 10430 나머지

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  let data = line.split(' ')
  let A = Number(data[0])
  let B = Number(data[1])
  let C = Number(data[2])
  console.log( ( A + B ) % C )
  console.log( ( (A % C) + (B % C) ) % C)
  console.log( (A * B) % C)
  console.log( ( (A % C) * (B % C) ) % C)
});