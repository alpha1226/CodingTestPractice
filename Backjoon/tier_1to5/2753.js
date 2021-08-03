// 2753 윤년

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  let data = Number(line.split(' ')[0])
  if((data%4===0 && data%100!==0) || data%400===0){
    console.log(1)
  } else {
    console.log(0)
  }
});