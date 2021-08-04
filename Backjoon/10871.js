// 10871 X보다 작은 수

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let size
let x

reader.on('line', (line) => {
  let data = line.split(' ')
  let str = ''
  if(!size || !x) {
    size = Number(data[0])
    x = Number(data[1])
  } else if(size && x) {
    for(let i = 0; i<=size; i++){
      if(Number(data[i]) < x) {
        str += data[i]
        str += ' '
      }
    }
    console.log(str)
  }
});