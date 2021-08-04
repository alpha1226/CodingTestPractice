// 10809 알파벳 찾기

const { Z_ASCII } = require('zlib');

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  let data = line.split(' ')[0]
  let alphabetNum = Array(26).fill(-1)

  for(let i='a'.charCodeAt(0); i<= 'z'.charCodeAt(0); i++){
    alphabetNum[i- 'a'.charCodeAt(0)] = data.indexOf(String.fromCharCode(i))
  }
  let result = ''
  alphabetNum.map(r => result += (r + ' '))
  console.log(result)
});