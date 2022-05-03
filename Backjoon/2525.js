// 2525 오븐 시계

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let now_time
let timer
reader.on('line', (line) => {
  !now_time ? now_time = line.split(' ') : timer = line
}).on('close', () => {
  now_time[1] = Number(now_time[1]) + Number(timer)
  

  if(now_time[1] >= 60) {
    let hours = parseInt(now_time[1] /60)
    now_time[1] -= (hours * 60)
    now_time[0] = Number(now_time[0]) + hours
  } else {
    now_time[0] = Number(now_time[0])
  }

  now_time[0] >= 24 ? now_time[0] -= 24 : now_time[0]

  console.log(now_time[0]+' '+now_time[1])
})