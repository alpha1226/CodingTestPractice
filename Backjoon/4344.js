// 4344 평균은 넘겟지

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
    let size = Number(data[0])

    let sum = 0
    for(let i=1; i<data.length; i++){
      sum+=Number(data[i])
    }
    avg = sum/size
  
    let overAvg = []
    for(let i=1;i<data.length;i++){
      if(Number(data[i]) > avg){
        overAvg.push(Number(data[i]))
      }
    }
  
    console.log(`${(overAvg.length/size*100).toFixed(3)}%`)
  }

  
});