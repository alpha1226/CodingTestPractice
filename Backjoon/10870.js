process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let data
let target_num
reader.on('line', (line) => {
  data = line.split(' ')
  target_num = Number(data[0])
}).on('close', () => {
  let x=0, y=1
  let result = [x]
  for(let i=1;i<=target_num; i++){
    result.push(fibonacci(x, y))
    x = result[result.length-2]
    y = result[result.length-1]
  }
  console.log(result[result.length-1])
})

function fibonacci(x, y) {
  return x + y
}