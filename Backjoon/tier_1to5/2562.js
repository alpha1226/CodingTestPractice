// 2562 최댓값

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let array = []
reader.on('line', (line) => {
  let data = line.split(' ')
  if(array.length<9) array.push(data[0])
  if(array.length===9) {
    let max = 0
    for(let i=0; i<array.length; i++){
      if(max < Number(array[i])){
        max = Number(array[i])
      }
    }
    console.log(max)
    console.log(array.indexOf(max.toString())+1)
  }
});