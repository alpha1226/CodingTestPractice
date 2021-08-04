// 2441 별찍기 - 4

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let time
reader.on('line', (line) => {
  let data = line.split(' ')
  time = Number(data[0])
}).on('close', () => {
  for(let i=0;i<time;i++){
    let line = ''
    let _blank
    for(_blank = 0; _blank < i; _blank++){
      line += ' '
    }
    for(let _star = 0; _star < time - i; _star++){
      line += '*'
    }
    
    
    console.log(line)
  }
})