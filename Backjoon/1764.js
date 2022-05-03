process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let D = new Set() // 듣
let B = new Set() // 보

let N, M
reader.on('line', (line) => {
  if(!N && !M) {
    N = Number(line.split(' ')[0])
    M = Number(line.split(' ')[1])
  } else {
    if(D.size < N) D.add(line)
    else if(B.size < M) B.add(line)
    else console.log('err')
  }
}).on('close', () => {
  let short, long

  let DBJ = []

  if(D.size < B.size) {
    short = D
    long = B
  } else {
    short = B
    long = D
  }

  short.forEach(e => {
    if(long.has(e)) DBJ.push(e)
  })

  let str = []

  DBJ.sort()

  str.push(DBJ.length)

  for(let dbj of DBJ) {
    str.push(dbj)
  }
  console.log(str.join('\n'))
})