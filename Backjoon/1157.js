// 1157 단어공부

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let data
reader.on('line', (line) => {
  data = line.split(' ')[0]
}).on('close', () => {
  data = data.toUpperCase()
  let ar = Array(26).fill(0)
  data.split('').forEach(element => {
    ar[element.charCodeAt(0) - 'A'.charCodeAt(0)] += 1 
  })

  let max = 0
  let item
  let sameFlag = false
  ar.forEach((n, i) => {
    if(max < n) {
      max = n
      item = String.fromCharCode('A'.charCodeAt(0)+i)
      sameFlag = false
    } else if(max === n) sameFlag = true
  })
  if(sameFlag) console.log('?') 
  else console.log(item)
})