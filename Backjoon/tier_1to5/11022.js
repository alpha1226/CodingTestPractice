// 11022 A+B -8

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let time
let index = 0
let str = ''
reader.on('line', (line) => {
  let data = line.split(' ')
  if(!time) time = Number(data[0])
  else {
    str+=`Case #${index}: ${data[0]} + ${data[1]} = ${Number(data[0]) + Number(data[1])}\n`
  }
  index++
  if(index-1 === time) console.log(str)
});