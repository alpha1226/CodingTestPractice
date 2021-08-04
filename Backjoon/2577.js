// 2577 숫자의 개수

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let number = []
reader.on('line', (line) => {
  let data = line.split(' ')
  if(number.length<3) number.push(Number(data[0]))
  
  if(number.length===3){
    let mul = number[0] * number[1] * number[2]
    let nums = [0,0,0,0,0,0,0,0,0,0]
    mul.toString().split('').forEach(r => {
      r = Number(r)
      nums[r]++
    })
    nums.map(r => {
      console.log(r)
    })
  }
});