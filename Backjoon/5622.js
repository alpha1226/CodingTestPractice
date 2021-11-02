process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let data
reader.on('line', (line) => {
  data = line.split(' ')
}).on('close', () => {
  dial(data[0])
})

function dial(str) {
  let _dialStringSet = [[1], [2, 'A', 'B', 'C'], [3, 'D', 'E', 'F'], [4, 'G', 'H', 'I'], [5, 'J', 'K', 'L'], [6, 'M', 'N', 'O'], [7, 'P', 'Q', 'R','S'], [8, 'T', 'U', 'V'], [9, 'W', 'X', 'Y', 'Z']]
  let sum = 0
  str.split('').map(c => {
    _dialStringSet.forEach((v, i) => {
      if(v.includes(c)) {
        sum += i + 2
      }
    })
  })
  console.log(sum)
}