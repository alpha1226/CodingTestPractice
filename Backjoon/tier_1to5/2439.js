// 2439 별찍기 -2

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  let data = line.split(' ')
  data = Number(data[0])
  let str = ''
  for(let i=1; i<=data; i++){
    for(let o=1;o<=data-i; o++){
      str += ' '
    }
    for(let star = 1; star<=i; star++){
      str += '*'
    }
    str += '\n'
  }
  console.log(str)
});