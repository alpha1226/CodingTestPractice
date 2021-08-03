// 2438번 별(*) 찍기

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  let num = Number(line.split(' ')[0])
  for(let i=1; i<=num; i++){
    let star = ''
    for(let starNum=1; starNum<=i; starNum++){
      star += '*'
    }
    console.log(star)
  }
});