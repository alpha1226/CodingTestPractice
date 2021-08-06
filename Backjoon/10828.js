// 10828 스택

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let data, count
let stack = []
let str = []
reader.on('line', (line) => {
  data = line.split(' ')
  if(!count) {
    count = Number(data[0])
    return 
  } 

  let method = data[0]
  let num = data[1]
  
  method === 'push' ?  stack.push(num) : ''
  method === 'pop' ? (stack.length > 0 ? str.push(stack.pop()) : str.push('-1')) : ''
  method === 'size' ? str.push(stack.length) : ''
  method === 'empty' ? str.push(stack.length===0 ? '1' : '0') : ''
  method === 'top' ? (stack.length > 0 ? str.push(stack[stack.length-1]) : str.push('-1')) : ''
}).on('close', () => {
  console.log(str.join('\n'))
})