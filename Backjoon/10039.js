process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let data = []
reader.on('line', (line) => {
  data.push(Number(line.split(' ')[0]))
}).on('close', () => {
  let sum = 0
  for(let i=0; i< data.length; i++){
    data[i] < 40 ? sum += 40 : sum += data[i]
  }
  console.log(sum/data.length)
})