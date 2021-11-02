
process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let data
let N, M
reader.on('line', (line) => {
  data = line.split(' ')
  if(N && M) {
    data = data.map((v, i) => data[i] = Number(v))
  }
  if(!N) N = Number(data[0])
  if(!M) M = Number(data[1])
}).on('close', () => {

  let result_array = []
  let closer_num
  for(let i=0;i<N; i++){
    for(let j=0;j<N; j++){
      for(let k=0;k<N;k++){
        if(i!==j && j!==k && k !== i) {
          result_array.push(data[i] +data[j] + data[k])
        }
      }
    }
  }
  result_array.forEach(e => {
    if((!closer_num && M-e >=0) || ((M-e >= 0) && (M-e <= M - closer_num))) closer_num = e
  })
  console.log(closer_num)
})