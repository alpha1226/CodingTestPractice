process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let data
reader.on('line', (line) => {
  data = Number(line.split(' ')[0]) - 543
  console.log(data)
})