process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let time;
let wordArray = []

reader.on('line', (line) => {
  data = line.split(' ')
  if(!time) time = data[0]
  else wordArray.push(data[0])
}).on('close', () => {
  let count = 0;
  for(let i=0; i<wordArray.length; i++){
    let flag = false;
    let alphabetArray = []
    wordArray[i].split('').forEach(element => {
      if(alphabetArray.indexOf(element) !== -1 &&  alphabetArray.indexOf(element) < alphabetArray.length-1)
        flag = true
      if(alphabetArray.indexOf(element) === -1){
        alphabetArray.push(element)
      }
    });
    flag == false ? count++ : '';
  }
  console.log(count)
})