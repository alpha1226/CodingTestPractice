// 2440 별찍기 - 3

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  let data = Number(line.split(' ')[0])
  for(let i=data; i>0; i--) {
    let resultLine = ''
    for(let o = 1; o <= i; o++) {
      resultLine += '*'
    }
    console.log(resultLine)
  }
});