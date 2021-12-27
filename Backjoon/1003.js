process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let length

let cachedData = [[1, 0], [0, 1]]

reader.on('line', (line) => {
  let data = line.split(' ')
  if(!length) {
    length = Math.floor(data)
    return
  }
  
  let result = fibonacci(Math.floor(data))

  console.log(result[0] + ' ' + result[1])

});

function fibonacci(n) {
  if(cachedData[n] !== undefined) {
    return cachedData[n]
  }

  let num1 = fibonacci(n-1)
  let num2 = fibonacci(n-2)

  cachedData[n] = [num1[0] + num2[0], num1[1] + num2[1]]
  return cachedData[n]
}