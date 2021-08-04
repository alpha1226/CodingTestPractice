// 10817 세수 (세개의 정수 중 두번째로 큰 정수 출력)

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  let data = line.split(' ')
  data.sort(function(a, b) {
    return Number(a) - Number(b)
  })

  console.log(data[1])

});