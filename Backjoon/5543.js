process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let data = []
let burger
let drank
reader.on('line', (line) => {
  data.push(Number(line.split(' ')[0]))
  
}).on('close', () => {  
  burger = [data[0], data[1], data[2]]
  drank = [data[3], data[4]]
  burger.sort((a, b) => Number(a) - Number(b))
  drank.sort((a, b) => Number(a) - Number(b))

  console.log(burger[0] + drank[0] - 50)
})