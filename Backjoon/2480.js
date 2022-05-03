process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let data
reader.on('line', (line) => {
  data = line.split(' ').map(r => Number(r)) || [0,0,0]
  let reward = 0
  if(data[0] === data[1] && data[1] === data[2]) {
    reward = 10000 + (Number(data[0] * 1000))
  } else if(data[0] === data[1] || data[1] === data[2] || data[0] === data[2]) {
    if(data[0] === data[1] || data[0] === data[2]){
      reward = 1000 + (Number(data[0]) * 100)
    } else if(data[1] === data[2]) {
      reward = 1000 + (Number(data[1]) * 100)
    }
  } else {
    reward = Math.max(...data) * 100
    
  }

  console.log(reward)
}).on('close', () => {
})