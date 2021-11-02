process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let data, time
reader.on('line', (line) => {
  !time ? time = Number(line.split(' ')) : data = line.split(' ').map(r => Number(r))
}).on('close', () => {
  getSpandTime()
})

function getSpandTime() {
  let time = 0
  let result = 0
  data.sort(function(a, b) { if(Number(a) < Number(b)) return -1; else return 1; })
  data.forEach(element => { time += element; result += time; });
  console.log(result)
}