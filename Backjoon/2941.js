process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


let alphabetSet = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

reader.on('line', (line) => {
  data = line.split(' ')
  let word = data[0].split('')

  let count = 0;

  word.forEach((element, index) => {
    let tmpword1, tmpword2
    if(word[index+1]) {
      tmpword1 = word[index]+word[index+1]
      if(alphabetSet.indexOf(tmpword1) !== -1) count++;
      if(word[index+2]){
        tmpword2 = tmpword1+word[index+2]
        if(alphabetSet.indexOf(tmpword2) !== -1) count++;
      }
    }
  })
  console.log(word.length - count)
})