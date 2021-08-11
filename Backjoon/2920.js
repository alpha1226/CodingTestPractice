process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let data
reader.on('line', (line) => {
  data = line.split(' ')
  data = data.map(r => Number(r))
  let result = 'mixed'
  if(data[0]===1){
    let flag = true
    for(let i=1; i<data.length; i++){
      data[i-1]+1 !== data[i] ? flag = false : ''
    }
    flag ? result = 'ascending': ''
  } else if(data[0] === 8) {
    let flag = true
    for(let i=1; i<data.length; i++) {
      data[i-1]-1 !== data[i] ? flag = false : ''
    }
    flag ? result = 'descending' : ''
  }
  console.log(result)
}).on('close', () => {

})