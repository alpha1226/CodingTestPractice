// 14681 사분면 고르기

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let x = 0
let y = 0

reader.on('line', (line) => {
  let data = line.split(' ')
  if(x===0){
    x = Number(data[0])
  } else if(y===0) {
    y = Number(data[0])
  }

  if(x > 0 && y > 0) {
    console.log('1')
  } else if(x < 0 && y > 0) {
    console.log('2')
  } else  if(x < 0 && y < 0) {
    console.log('3')
  } else if (x > 0 && y < 0) {
    console.log('4')
  }
});