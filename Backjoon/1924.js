process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let data
reader.on('line', (line) => {
  data = line.split(' ')
  data.forEach((e, i) => data[i] = Number(e))
}).on('close', () => {
  let date = new Date(2007, data[0]-1, data[1])
  var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  console.log(week[date.getDay()])
})