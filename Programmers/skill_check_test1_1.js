function solution(n) {
  var answer = 0;

  let array = []

  for(let i=0; i<=n; i++)
  {
    let flag = true
    if(i < 2) flag = false
    for(let o=2;o<array.length;o++){
      if((i % array[o]) === 0) {
        flag = false
        break;
      }
    }
    if(flag) {
      answer++
      array.push(i)
    }
  } 

  return answer;
}


console.log(solution(10));
console.log(solution(5));
// console.log(solution(99999));
