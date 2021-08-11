process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let data = []
reader.on('line', (line) => {
  data.push(line)
}).on('close', () => {
  console.log(data.join('\n'))
})