/**
 * Type: stack/queue
 * Level: 2
 * Title: 기능개발
 * on 2021.12.28
 * 
 * 결과
 * 총     100
 **/ 

 function run() {
  console.log('start run')
  let progreesesCase1 = [93, 30, 55]
  let speedsCase1 = [1, 30, 5]
  let answer1 = [2, 1]
  let result1 = solution(progreesesCase1, speedsCase1)

  let progreesesCase2 = [95, 90, 99, 99, 80, 99]
  let speedsCase2 = [1, 1, 1, 1, 1, 1]
  let answer2 = [1, 3, 2]
  let result2 = solution(progreesesCase2, speedsCase2)

  let progreesesCase3 = [20, 99, 93, 30, 55, 10]
  let speedsCase3 = [5, 10, 1, 1, 30, 5]
  let answer3 = [3, 3]
  let result3 = solution(progreesesCase3, speedsCase3)


  console.log('result')
  console.log('case1: '+(answer1===result1? 'success': 'failed'))
  console.log('case2: '+(answer2===result2? 'success': 'failed'))
  console.log('case3: '+(answer3===result3? 'success': 'failed'))

}

function solution(progreeses, speeds) {
  var answer = [];

  let deployDay = []
  for(let i=0; i<progreeses.length; i++) {
    let progresDays = (Math.ceil((100 - progreeses[i]) / speeds[i]))
    if(progresDays === 0) progresDays = 1
    deployDay.push(progresDays)
  }
  console.log(deployDay)
  
  for(let i=0; i<deployDay.length; i++) {
    let deployCount = 1
    let max = deployDay[i]
    for(let o=i+1; o<deployDay.length; o++) {
      if(max >= deployDay[o]) {
        deployCount++
        i=o
      } else {
        break
      }
    }
    answer.push(deployCount)
  }

  console.log(answer)
  return answer;
}

run()