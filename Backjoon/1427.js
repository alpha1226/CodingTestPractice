process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let data
reader.on('line', (line) => {
  data = line.split('')
  data.forEach((v, i) => data[i] = Number(v))
  data.sort((a, b) => b-a)
  console.log(data.join(''))
}).on('close', () => {

})