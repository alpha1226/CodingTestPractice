process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let data
reader.on('line', (line) => {
  data = line.split(' ')
}).on('close', () => {
  let num1 = data[0].split('')
  let num2 = data[1].split('')
  let maxLength = num1.length > num2.length ? num1.length : num2.length
  if(num1.length < maxLength) num1 = setZero(num1, maxLength)
  if(num2.length < maxLength) num2 = setZero(num2, maxLength)
  let upper = 0
  let resultStr = ''
  for(let i=maxLength-1;i>=0;i--){
    let res = Number(num1[i])+ Number(num2[i]) + upper
    upper = Math.floor(res/10)
    res = res%10
    resultStr = res.toString() + resultStr
  }
  upper!==0 ? resultStr = upper.toString() + resultStr : ''
  console.log(resultStr)
})

function setZero(numArray, _targetLength) {
  let tmp = []
  for(let i=0; i<_targetLength; i++){
    if(numArray.length+i < _targetLength){
      tmp.push('0')
    } else {
      tmp.push(numArray[i-(_targetLength - numArray.length)])
    }
  }
  return tmp
}