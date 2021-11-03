// 2292 벌집

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let num;
reader.on('line', (line) => {
  data = line.split(' ')
  num = Math.floor(data[0])
}).on('close', () => {
  if(num === 1) {
    console.log(1)
    return
  }
  let tmp = 1;
  for(let i=1; i <= (1000000000/6); i++){
    if((i*6)+tmp >= num) {
      console.log(i+1)
      break;
    }
    tmp = tmp+i*6
  }
})