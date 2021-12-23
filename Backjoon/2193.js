process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  let data = Math.floor(line.split(' ')[0])

  var arr = [0, 1, 1];
  for(var i=3; i<=data; i++){
      arr[i] = BigInt(arr[i-1]) + BigInt(arr[i-2]);
  }
  console.log(arr)
  console.log((BigInt(arr[data])).toString());
}).on('close', () => {

})
