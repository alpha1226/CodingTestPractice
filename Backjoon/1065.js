// 1065 한수

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.on('line', (line) => {
  let maxNum = Number(line.split(' ')[0])
  getHansu(maxNum)
})


function getHansu(maxNum) {
  let num = 0
  for(let i=1;i<=maxNum; i++) {
    let str = i.toString().split('')
    if(str.length < 3) {
      num++
    } else {
      let gongcha
      let flag = true
      for(let j=0; j<str.length-1; j++){
        if(gongcha === undefined) {
          gongcha = Number(str[j]) - Number(str[j+1])
        } else {
          if((Number(str[j]) - Number(str[j+1])) !== gongcha) flag = false
        }
      }
      if(flag) num++
    }
  }
  console.log(num)
}