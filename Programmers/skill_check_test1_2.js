function solution(d, budget) {
  var answer = 0;

  d.sort(function(a, b) { return a-b; });


  if(budget < d[0]) return 0;

  for(let i=0;i<d.length; i++){
    budget-=d[i]
    answer++;
    if(budget - d[i+1] < 0) break;
    
  }
  return answer;
}


// console.log(solution([1,3,2,5,4], 9))
// console.log('---------------')
// console.log(solution([2,2,3,3], 10))
// console.log('-----------------')
console.log(solution([2, 3, 10000000], 10000000))