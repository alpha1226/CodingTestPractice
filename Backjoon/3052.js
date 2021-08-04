// 3052 나머지

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let array = []
let resultNum = 0
reader.on('line', (line) => {
  let data = line.split(' ')
  array.length < 10 ? array.push(data[0]) : ''

  if(array.length === 10){
    let nmgArray = []
    for(let i=0; i<array.length; i++){
      let nmg = Number(array[i])%42
      nmgArray.includes(nmg) ? '' : nmgArray.push(nmg)
    }
    console.log(nmgArray.length)
  }
});