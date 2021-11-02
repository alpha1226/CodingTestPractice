// 1712 손익분기점

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  let data = line.split(' ')
  let fixedCost = Math.floor(data[0])
  let variableCost = Math.floor(data[1])
  let price = Math.floor(data[2])

  let i = 1;
  if(price <= variableCost){
    console.log(-1)
    return
  }

  
  console.log(Math.floor(fixedCost /(price - variableCost)) +1);
});