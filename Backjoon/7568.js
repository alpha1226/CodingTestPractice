const { SSL_OP_NO_TLSv1_2 } = require('constants');

process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let data
let num
let itemArray = []
reader.on('line', (line) => {
  data = line.split(' ')
  if(!num) num = data[0]
  else {
    itemArray.push({x: data[0], y: data[1]})
  }
}).on('close', () => {


  for(let i=0;i<itemArray.length; i++){
    let rank = 1;
    for(let o=0; o<itemArray.length; o++){
      if(itemArray[i].x < itemArray[o].x && itemArray[i].y < itemArray[o].y){
        rank++;
      }
    }
    itemArray[i].rank = rank;
  }

  let str = '';
  for(let i=0;i<itemArray.length; i++){
     str = str+itemArray[i].rank + ' '
  }

  str= str.slice(0, str.length-1);



  console.log(str)

})