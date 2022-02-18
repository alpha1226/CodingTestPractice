// 1929 소수 구하기

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  let data = line.split(' ')
  let m = Math.floor(data[0])
  let n = Math.floor(data[1])
  
  let prime = Array(n+1).fill(true)
  prime[0] = false
  prime[1] = false

  for(let i=2; i <= Math.ceil(Math.sqrt(n)); i++){
    if(prime[i]) {
      let o=2;
      while(i*o <= n){
        prime[i*o] = false
        o++
      }
    }
  }
  let result = []

  for(let i = m; i<=n; i++) {
    if(prime[i]) {
      result.push(i)
    }
  }
  console.log(result.join('\n'))
});