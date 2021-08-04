// 2739번 구구단

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  let data = line.split(' ')[0]
  for(let i=1; i<=9; i++) {
    console.log(`${data} * ${i} = ${data*i}`)
  }
});