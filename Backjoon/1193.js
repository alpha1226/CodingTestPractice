process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let data
reader.on('line', (line) => {
  data = Number(line.split(' ')[0])
  getXY(data)
}).on('close', () => {

})

function getXY(count) {
  let x=1, y=0;
  let flag = 'y'

  while(true){
    if(count===0){
      console.log(`${y}/${x}`)
      return
    }
    if(flag === 'x') {
      if(y!==1) {
        x+=1
        y-=1
      } else {
        x += 1
        flag = 'y'
      }
      count--
    } else if(flag === 'y') {
      if(x !== 1) {
        x-=1
        y+=1
      } else {
        y += 1
        flag = 'x'
      }
      count--
    }
  }
}