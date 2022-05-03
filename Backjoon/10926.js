// 10926 ??!

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let data
reader.on('line', (line) => {
  data = line.split(' ')[0]+'??!'
}).on('close', () => {
  console.log(data)
})