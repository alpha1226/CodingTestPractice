function solution(dirs) {
  var answer = 0;
  let data = dirs.split('')

  let x = 0; 
  let y = 0;
  let size = 5;

  let work = []

  for(let i=0; i<data.length; i++){
console.log(x, y)
    switch(data[i]){
      case 'U':
        console.log('up');
        if(y < size) {
          let tmpX = x;
          let tmpY = y;
          y = y+1;
          let obj = {tmpX, tmpY, x, y}
          var index = work.findIndex(i => (i.tmpX === tmpX &&  i.tmpY === tmpY && i.x === x && i.y === y) || (i.x === tmpX && i.y === tmpY && i.tmpX === x && i.tmpY === y) )
          if(index=== -1) work.push(obj)
        }
        break;
      case 'D':
        console.log('down');
        if(y > -size) {
          let tmpX = x;
          let tmpY = y;
          y = y-1;
          let obj = {tmpX, tmpY, x, y}
          var index = work.findIndex(i => (i.tmpX === tmpX &&  i.tmpY === tmpY && i.x === x && i.y === y) || (i.x === tmpX && i.y === tmpY && i.tmpX === x && i.tmpY === y) )
          if(index=== -1) work.push(obj)
        }
        break;
      case 'R':
        console.log('right');
        if(x < size) {
          let tmpX = x;
          let tmpY = y;
          x = x+1;
          let obj = {tmpX, tmpY, x, y}
          var index = work.findIndex(i => (i.tmpX === tmpX &&  i.tmpY === tmpY && i.x === x && i.y === y) || (i.x === tmpX && i.y === tmpY && i.tmpX === x && i.tmpY === y) )
          if(index=== -1) work.push(obj)
        }
        break;
      case 'L':
        console.log('left');
        if(x > -size) {
          let tmpX = x
          let tmpY = y
          x = x-1;
          let obj = {tmpX, tmpY, x, y}
          var index = work.findIndex(i => (i.tmpX === tmpX &&  i.tmpY === tmpY && i.x === x && i.y === y) || (i.x === tmpX && i.y === tmpY && i.tmpX === x && i.tmpY === y) )
          if(index=== -1) work.push(obj)
        }
        break;
    }
  }
  console.log(work)
  return work.length;
}

console.log(solution("ULURRDLLU"))
