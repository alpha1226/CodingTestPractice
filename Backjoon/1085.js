// 1085 직사각형에서 탈출

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.on('line', (line) => {
  const data = line.split(' ')
  const x = Math.floor(data[0])
  const y = Math.floor(data[1])
  const w = Math.floor(data[2])
  const h = Math.floor(data[3])

  const horizon = x < w-x ? x : w-x
  const vertical = y < h-y ? y : h-y
  
  console.log(horizon < vertical ? horizon : vertical)
})
