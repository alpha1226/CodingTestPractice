// 4673 셀프넘버 

let size = 10000

let _ = Array(size).fill(false)

for(let i=1;i<size;i++){
  let num = getNextNum(i)
  
  if(num > size) continue
  else _[num] = true
}

print()

function getNextNum(number) {
  if(number<10){
    return number+number
  }
  let numarray = number.toString().split('')
  let nextNum = number
  numarray.map(r => nextNum+=Number(r))
  return nextNum
}

function print(){
  for(let i=1; i<size; i++){
    if(!_[i]) console.log(i)
  }  
}