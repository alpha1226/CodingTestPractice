process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let data
let time
let item = []
reader.on('line', (line) => {
  data = line.split(' ')
  if(!time) time = Math.floor(data[0])
  else {
    let obj = {}
    obj.H = Math.floor(data[0])
    obj.W = Math.floor(data[1])
    obj.N = Math.floor(data[2])
    item.push(obj)
  }
}).on('close', () => {

  item.forEach(element => {
    let floor = element.N % element.H;
    if(floor === 0) floor = element.H;
    let roomindex = element.N / element.H
    if(!Number.isInteger(roomindex)) roomindex = Math.floor(roomindex)+1

    let roomNumber = floor + (roomindex < 10 ? '0' +roomindex : ''+roomindex)
    console.log(roomNumber)
  });

})