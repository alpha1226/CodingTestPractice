// 2558 A+B -2

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let num1, num2
reader.on('line', (line) => {
  let data = line.split(' ')
  if(!num1) {
    num1 = Number(data[0])
  } else if(!num2) {
    num2 = Number(data[0])
  } else {
    num1 = num2
    num2 = Number(data[0])
  }
  if(num1 && num2) console.log(num1+num2)
});