// 10950 A+B - 3

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let time = 0
reader.on('line', (line) => {
  let data = line.split(' ')
  if(data.length===1){
    time = Number(data[0])
  } else if(data.length===2){
    console.log(Number(data[0]) + Number(data[1]))
    time--
  }
});