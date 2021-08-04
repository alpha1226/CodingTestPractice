// 2839 설탕배달

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  let data = line.split(' ')
  data = Number(data[0])
  if((data % 5 === 0 && data % 3 === 0) || data % 5 === 0) {
    let kg_5 = Math.floor(data/5)
    console.log(kg_5)
  } else {
    let kg_5 = Math.floor(data/5)
    while(true) {
      if(((data - (kg_5 * 5)) % 3) !== 0) {
        if(kg_5 >= 1) {
          kg_5--; 
        } else {
          kg_5 = -1
          break;
        };
      }
      else break;
    }
    if(kg_5 === -1) {
      console.log('-1')
      return;
    }
    
    data = data - (kg_5 * 5)
    let kg_3 = Math.floor(data/3)
    data = data % 3
    if(data !== 0) console.log('-1')
    else console.log(Number(kg_5) + Number(kg_3))
  }
});