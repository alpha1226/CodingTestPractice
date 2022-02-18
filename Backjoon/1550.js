// 1550 16진수

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {

  let demi = parseInt(line, 16)

  console.log(demi)

});