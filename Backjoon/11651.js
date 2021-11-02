process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let input=[]
let count
const coordsArr = [];

reader.on('line', (line) => {
  if(!count) count = Number(line.split(' ')[0])
  else input.push(line)
}).on('close', () => {
  customSort(input)
})

function customSort(input) {
  for (let i = 0; i < count; i++) {
    coordsArr.push(input[i].split(' ').map(strNum => parseInt(strNum)));
  }
  
  let results = '';
  coordsArr
    .sort((a, b) => {
      if (a[1] !== b[1]) {
        return a[1] - b[1];
      }
      return a[0] - b[0];
    })
    .forEach(coords => (results += `${coords[0]} ${coords[1]}\n`));
  
  console.log(results);
}