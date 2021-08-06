// 10872 팩토리얼

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let data
reader.on('line', (line) => {
  data = line.split(' ')
  data = Number(data[0])
}).on('close', () => {
  let fact = 1
  for(let i = 1; i <= data; i++){
    fact = (fact * i)
  }
  console.log(fact)
})