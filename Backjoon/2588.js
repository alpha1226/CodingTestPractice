// 2588 곱셈

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let target
reader.on('line', (line) => {
  if(!target){
      target = Number(line.split(' ')[0])
  } else {
    let data = line.split(' ')
    let num = data[0]
    for(let i = 2; i >= 0; i--) {
      console.log(target * Number(num[i]))
    }
    num = Number(num)
    console.log(target*num)
  }
});