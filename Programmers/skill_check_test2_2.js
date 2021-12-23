// 삼각형 달팽이
// 반시계방향으로 숫자를 채워야 함
function solution(n) {
  var answer = [];
  
  let triangle = [[]];

  let num = 1;

  let w=0, h=0;
  let direction = 'd'

  triangle[w][h] = num;
  num++;
  
  

  while(true){
    if(direction === 'd') {
      console.log(h)
      h+=1;
      triangle[w][h] = num
      num++;
      if(!(triangle[w][h+1] || h < n)) direction = 'r';
    } else if(direction === 'r') {
      w+=1;
      triangle[w][h] = num
      num++;
      if(!(triangle[w+1][h] || w < n)) direction = 'r';
      break;
    } else if(direction === 'u') {
      break;
    } else if(direction === 'l') {
      break;
    }
  }

  console.log(triangle)

  return answer;
}


console.log(solution(4))
console.log('[1,2,9,3,10,8,4,5,6,7]')