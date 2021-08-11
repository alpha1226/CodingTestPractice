process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let data
let time, money
let coin_price = []
let result = 0
reader.on('line', (line) => {
  data = line.split(' ')
  time && money ? coin_price.push(Number(data[0])) : ''
  !time ? time = Number(data[0]) : ''
  !money ? money = Number(data[1]) : ''
  }).on('close', () => {
  coin_price.reverse()

  coin_price.forEach((cp) => {
    result += Math.floor(money/cp)
    money = money%cp
  })
  console.log(result)
})