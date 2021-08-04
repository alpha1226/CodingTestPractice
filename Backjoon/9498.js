// 9498번 시험 성적

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  let data = Number(line.split(' ')[0])
  data = Math.floor(data/10)
  switch(data) {
    case 10:
      console.log('A')
      break;
    case 9:
      console.log('A')
      break;
    case 8:
      console.log('B') 
      break;
    case 7:
      console.log('C')
      break;
    case 6:
      console.log('D')
      break;
    default: 
      console.log('F')
      break;
  }
});