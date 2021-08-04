// 10952 A+B -5

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  let data = line.split(' ')
  if(Number(data[0])===0 && Number(data[1])===0) return
  console.log(Number(data[0]) + Number(data[1]))
});