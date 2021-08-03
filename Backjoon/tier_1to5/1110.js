// 1100 더하기 사이클

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  let data = Number(line.split(' ')[0])
  let time = 0
  let number = data
  while(true){
    if(time!==0 && data===number){
      console.log(time)
      break;
    } else {
      let tmp = Math.floor(number / 10) + (number%10)
      tmp = ((number%10)*10 + (tmp % 10))
      number = tmp
      time ++
    }
  }
});