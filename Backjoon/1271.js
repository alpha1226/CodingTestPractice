// 1271 엄청난 부자
process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

reader.on('line', (line) => {
  input = line.split(' ').map((x) => BigInt(x));
}).on('close', () => {
  const [n, m] = input;
  let answer = '' + n / m + '\n';
  answer += n % m;

  console.log(answer);
});