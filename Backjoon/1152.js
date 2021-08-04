// 단어의 개수
process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  let data = line.split(' ')
  let refactData= []
  data.map(r => r!=='' ? refactData.push(r) : '')
  console.log(refactData.length)
});