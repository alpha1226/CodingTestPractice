// 2775 부녀회장이 될테야

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let testCount
let data = []
let maxN = 0
let maxK = 0
reader.on('line', (line) => {
  if(!testCount) testCount = Number(line)
  else data.push(Number(line))
}).on('close', () => {
  // console.log(testCount, data)
  let k = []
  let n = []
  
  for(let i in data) {
    i % 2 ? n.push(data[i]) : k.push(data[i])
    if(i%2 && maxN < data[i]) maxN = data[i]
    if(i%2===0 && maxK < data[i]) maxK = data[i]
  }
  // console.log(k, n, maxN, maxK)

  for(let i in k) {
    // console.log('---------------------------')
    // console.log('test case : '+k[i] + ',' + n[i])
    // console.log('---------------------------')
    
    makeMap(k[i], n[i]);    

    
    // console.log(map)

    console.log(map[k[i]][n[i]-1])
    // console.log('====================================')
  }
});

let map = []
function makeMap(k, n) {
  if(!map.length) {
    let firstfloor = []
    for(let o=1;o<=maxN;o++) {
      firstfloor.push(o)
    } 
    map.push(firstfloor)

    for(let _kIndex = 1; _kIndex <= maxK; _kIndex++) {
      if(!map[_kIndex]) map.push([1])
      for(let _nIndex = 1; _nIndex < maxN; _nIndex++) {
        map[_kIndex][_nIndex] = map[_kIndex][_nIndex-1] + map[_kIndex-1][_nIndex]
      }
    }
  }
  return map
}