// 2606 바이러스

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let computerCount
let nodeCount
let data = []

let nodeList = {}
reader.on('line', (line) => {
  if(!computerCount) computerCount = Math.floor(line)
  else if(!nodeCount) nodeCount = Math.floor(line) 
  else {
    data.push(line.split(' '))
  }
}).on('close', () => {
  for(item of data) {
    nodeList = addNode(nodeList, item)
  }

  // TODO check node
  let toCheckRef = ['1']   //검사해야되는 node
  let infectionRef = ['1'] //감염된 node
  while(true) {
    if(!toCheckRef.length) break
    for(ref of nodeList[toCheckRef[0]]) {
      if(infectionRef.indexOf(ref)<0) {
        infectionRef.push(ref)
        toCheckRef.push(ref)
      }
    }
    toCheckRef.shift()
  }

  // 갯수에서 숙주 제거
  console.log(infectionRef.length - 1)
});


function addNode(nodeList, item) {
  if(!nodeList[item[0]]) {
    nodeList[item[0]] = [item[1]]
  } else {
    nodeList[item[0]].push(item[1])
  }

  if(!nodeList[item[1]]) {
    nodeList[item[1]] = [item[0]]
  } else {
    nodeList[item[1]].push(item[0])
  }

  return nodeList
}