// 1463 1로 만들기

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let data
let dp = [0,0,1,1]
reader.on('line', (line) => {
  data = line.split(' ')
  data = Number(data[0])
}).on('close', () => {
  for(let i=4; i<data+1; i++){
    dp.push(dp[i-1] + 1)
    if(i%2 === 0) {
      dp[i] = Math.min((dp[Math.ceil(i/2)]+1), dp[i])
    }
    if(i%3 === 0) {
      dp[i] = Math.min((dp[Math.ceil(i/3)]+1), dp[i])
    }
  }
  console.log(dp[data])
})