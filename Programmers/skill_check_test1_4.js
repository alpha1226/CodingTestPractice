
function solution(a, b) {
  var answer = '';
  let day = new Date(2016, a-1, b).getDay();
  let weekday = ['SUN','MON','TUE','WED','THU','FRI','SAT']
  answer = weekday[day]
  return answer;
}

console.log(solution(1,1))
console.log(solution(5, 24))