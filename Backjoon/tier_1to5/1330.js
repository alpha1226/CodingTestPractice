// 1330 두 수 비교

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  let data = line.split(' ')
  let num1 = Number(data[0])
  let num2 = Number(data[1])
  if(num1 < num2)
    console.log('<')
  else if(num1 > num2)
    console.log('>')
  else if(num1===num2)
    console.log('==')
});