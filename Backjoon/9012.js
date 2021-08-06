// 9012 괄호

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let data
let time
reader.on('line', (line) => {
  data = line.split(' ')
  if(!time) { time = Number(data[0]); }
  else {
    data = data[0].split('')
    let vps = []
    data.map(r => {
      if(r==='(') vps.push(r)
      else if(r===')') {
        if(vps[vps.length-1] === '(') vps.pop()
        else vps.push(r)
      }
    })
    if(vps.length>0) console.log('NO')
    else console.log('YES')
  }
})