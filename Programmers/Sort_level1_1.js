/**
 * Type: sort
 * Level: 1
 * Title: 기능개발
 * on 2021.12.28
 * 
 * 결과
 * 총     100
 **/ 

function run() {
  console.log('start run')
  let progreesesCase1 = [1, 5, 2, 6, 3, 7, 4]	
  let speedsCase1 = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]	
  let answer1 = [5, 6, 3]
  let result1 = solution(progreesesCase1, speedsCase1)

  console.log('result')
  console.log('case1: '+(answer1===result1? 'success': 'failed'))
  // console.log('case2: '+(answer2===result2? 'success': 'failed'))
  // console.log('case3: '+(answer3===result3? 'success': 'failed'))

}

function solution(array, commands) {
  var answer = [];
  
  console.log(array, commands)

  commands.forEach(e => {
    let res = array.slice(Math.floor(e[0])-1, Math.floor(e[1]))
    res.sort((a, b) => a-b)
    answer.push(res[e[2]-1])
  })


  console.log(answer)
  return answer;
}

run()