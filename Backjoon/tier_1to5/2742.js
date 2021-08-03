// 2742번 기찍 N (N찍기 역순)

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  let data = line.split(' ')
  data = Number(data[0])
  let str = ''
  for(let i=data; i>0; i--){
    str += i
    str += '\n'
  }
  console.log(str)
});