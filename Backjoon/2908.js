// 2908 상수

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let data
reader.on('line', (line) => {
  data = line.split(' ')
  // console.log(data)
}).on('close', () => {
  let max = 0
  data.forEach((r, i) => {
    data[i]=Number(r.split('').reverse().join(''))
    if(max<=data[i]) max = data[i]
  })
  console.log(max)
})