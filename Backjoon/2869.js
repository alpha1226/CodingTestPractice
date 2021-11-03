process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let data
reader.on('line', (line) => {
  data = line.split(' ')
  let A = Math.floor(data[0])
  let B = Math.floor(data[1])
  let V = Math.floor(data[2])

  /* let day = 0;
  let nowHeight = 0;
  while(true){ 
    day++;
    nowHeight += A;

    if(V<=nowHeight) break;

    nowHeight -= B;
  }*/

  let day = (V - B - 1) / (A - B) + 1

  console.log(Math.floor(day))

})