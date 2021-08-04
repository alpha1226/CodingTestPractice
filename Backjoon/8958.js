// 8958 OX 퀴즈

process.stdin.resume();
process.stdin.setEncoding('utf8');

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
    // console.log(data[0].split(''))
    let count = 0
    let score = 0
    data[0].split('').map(ox => {
      if(ox ==='O') {
        count++
        score += (1*count)
      } else {
        count = 0
      }
    })
    console.log(score)
  }
  
});