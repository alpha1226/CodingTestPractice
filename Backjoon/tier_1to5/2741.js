// 2741번 N찍기

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  let data = Number(line.split(' ')[0])
  let str = ''
  for(let i=1;i<=data;i++){
    str += String(i)
    str += '\n'
  }
  console.log(str)
});