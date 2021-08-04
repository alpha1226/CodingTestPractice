// 2675 문자열 반복

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let time
reader.on('line', (line) => {
  let data = line.split(' ')
  if(!time) time = Number(data[0])
  else {
    let length = Number(data[0])
    let text = data[1]
    let resultStr = ''
    text.split('').map(char => {
      for(let i=0; i<length; i++){
        resultStr += char
      }
    })
    console.log(resultStr)
   
  }
});