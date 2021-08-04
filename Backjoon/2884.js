// 2884 알람시계

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  let data = line.split(' ')
  let hour = Number(data[0])
  let minute = Number(data[1])
  if(minute<45) { hour--; minute += 60; }
  if(hour<0) hour += 24
  minute = minute-45
  console.log(hour, minute)
});