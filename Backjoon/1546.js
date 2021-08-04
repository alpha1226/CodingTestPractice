// 1546 평균(feat. 점수조작)

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let time
reader.on('line', (line) => {
  let data = line.split(' ')
  if(!time) {
    time = Number(data[0])
  } else {
    let max = 0
    data.map(r => {
      if(max < Number(r)) max = Number(r)
    })
    let sum = 0
    for(let i=0;i<data.length;i++){
      sum += Number(data[i])/max*100
    }

    console.log(sum/time)
  }
});