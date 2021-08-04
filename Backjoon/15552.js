// 15552 빠른 A+B

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let time
let str = ''
reader.on('line', (line) => {
  let data = line.split(' ')
  if(!time) time = Number(data[0])
  else if(time!==0) {
    --time
    str += (Number(data[0]) + Number(data[1])).toString()
    if(time === 0) {
      console.log(str)
    }
    str += '\n'
  }
});