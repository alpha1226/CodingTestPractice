// 10818 최소, 최대

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
    let max = Number(data[0]), min = Number(data[0])
    for(let i=0; i<data.length;i++){
      if(Number(data[i]) > max) max = Number(data[i])
      if(Number(data[i]) < min) min = Number(data[i])
    }
    console.log(min, max)
    
  }
});