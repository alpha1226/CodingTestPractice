// 1260 BFS

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let data
let node, line, startNode
let graph = {}

reader.on('line', (l) => {
  data = l.split(' ')
  if(node && line && startNode) {
    graph[data[0]] ?  graph[data[0]].push(data[1]) : graph[data[0]] = [data[1]]
    graph[data[1]] ?  graph[data[1]].push(data[0]) : graph[data[1]] = [data[0]]
    graph[data[0]].sort(function(a,b) { if(!Number(a) || !Number(b)) return -1; else if(Number(a) > Number(b)) return 1; else return -1; })
    graph[data[1]].sort(function(a,b) { if(!Number(a) || !Number(b)) return -1; else if(Number(a) > Number(b)) return 1; else return -1; })
  }

  !node ? node = Number(data[0]) : ''
  !line ? line = Number(data[1]) : ''
  !startNode ? startNode = data[2] : ''
  
}).on('close', () => {
  
  console.log(DFS(graph, startNode).join(' '))

  // Type error 발생
  let str = ''
  
  BFS(graph, startNode).map(r => {str += (r+' ')})
  console.log(str)
  // console.log(BFS(graph, startNode).join(' '))
 
})

function DFS (graph, startNode) {
  const visited = []
  let needVisit = []

  needVisit.push(startNode)

  while(needVisit.length !== 0) {
    const node = needVisit.shift()
    if(!visited.includes(node)) {
      visited.push(node)
      if(!graph[node]) return visited
      needVisit = [...graph[node], ...needVisit]
    }
  }
  return visited
} 

function BFS (graph, startNode) {
  const visited = []
  let needVisit = []
  
  needVisit.push(startNode)

  while(needVisit.length !== 0) {
    const node = needVisit.shift()
    if(!visited.includes(node)){
      visited.push(node)
      if(!graph[node]) return visited
      needVisit = [...needVisit, ...graph[node]]
    }
  }
  return visited
}