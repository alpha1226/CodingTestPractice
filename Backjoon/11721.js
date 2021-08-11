process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let data = []
reader.on('line', (line) => {
  data = line.split('')
}).on('close', () => {
  for(let i=0; i<(data.length/10); i++) {
    let tmpStr = ''
    for(let o=0; o<10; o++){
      let char = data[((i*10) + o)]
      char ? tmpStr+=data[((i*10) + o)] : ''
    }
    console.log(tmpStr)
  }
})