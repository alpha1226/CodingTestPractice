process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0
let N = 0
let M = 0

let result = '';

reader.on('line', (line) => {
  if(!count) count = Math.floor(line)
  else {
    if(!N) {
      let tmp = line.split(' ')
      N = Math.floor(tmp[0])
      M = Math.floor(tmp[1])
    } else {
      let queue = line.split(' ').map(e => Math.floor(e))      
      let count = 0
      while(queue.length != 0) {
        if(queueImportanceCheck(queue)) {
          // 출력 M을 어케함?
          count++
          queue.shift()
          if(!M) { 
            N = 0
            M = 0
            result += count + '\n'
            break 
          } else {
            M--
          }
        } else {
          // shift
          queue.push(queue.shift())
          if(!M) M = queue.length
          M = M-1
        }
      }
      
      
    }
    

  }
}).on('close', () => {
  console.log(result.substring(0, result.length-1))
})



// 현재가 가장 중요하면 return 1
// 중요도에 밀려있으면 return -1
function queueImportanceCheck(queue) {
  let importance = queue[0]

  let result = true
  for(item of queue) {
    if(item > importance) {
      result = false
    }
  }

  return result
}