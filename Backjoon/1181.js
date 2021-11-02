process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let data
let num
let wordArray = []
reader.on('line', (line) => {
  data = line.split(' ')
  if(!num) num = Number(data[0])
  else wordArray.push(data[0])
}).on('close', () => {
  wordArray.sort()
  let tmpArray = []
  let i = 0;
  while(true){
    if(i>50) break;
    for(let o=0;o<wordArray.length;o++){
      if(wordArray[o].length===i && !tmpArray.includes(wordArray[o])) {
        tmpArray.push(wordArray[o])
      }
    }
    i++
  }
  tmpArray.map(r => console.log(r))
})