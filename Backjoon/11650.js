// 10989 수 정렬 3
// 메모리 초과 발생

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0
let data = []
reader.on('line', (line) => {
  if(!count) count = Math.floor(line) 
  else {
    let tmp = line.split(' ')
    data.push([Math.floor(tmp[0]), Math.floor(tmp[1])])
  }
}).on('close', () => {

  data.sort((a, b) => {
    if(a[0] !== b[0]) 
      return a[0] - b[0]
    else 
      return a[1] - b[1]
  })

  let str = ''
  for(let i=0; i<data.length; i++) [
    str += data[i][0] + ' ' + data[i][1] + '\n'
  ]

  str.substring(0, str.length-1)
  console.log(str)
})
