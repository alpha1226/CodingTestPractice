process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let data
reader.on('line', (line) => {
  data = line.split(' ')
  data.map((e, i) => {
    data[i] = Number(e)
  })
}).on('close', () => {
  let sum = 0
  data.forEach((v, i) => {
    sum+= (v*v)
  })
  console.log(sum%10)

})