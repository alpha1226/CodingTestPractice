// 1978 소수찾기

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let count
let data = []
reader.on('line', (line) => {
  data = line.split(' ')
  let num = 0
  if(!count) count = Number(data[0])
  else { 
    data.map((v, i) => {
      if(isPrime(v)) num++
    })  
    console.log(num)
  }
})

function isPrime(num) {
  num = Number(num)
  let flag = true
  if(num < 2) flag = false
  for(let i=2;i<num;i++){
    if((num % i) === 0) flag = false
  }
  return flag
}