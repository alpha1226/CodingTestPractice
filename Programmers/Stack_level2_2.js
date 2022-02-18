/**
 * Type: stack/queue
 * Level: 2
 * Title: 프린터
 * on 2021.12.28
 * 
 * 결과
 * 총     100
 **/ 

function run() {
  console.log('start run')
  let prioritiesCase1 = [2, 1, 3, 2]
  let locationCase1 = 2
  let answer1 = 1
  let result1 = solution(prioritiesCase1, locationCase1)

  let prioritiesCase2 = [1, 1, 9, 1, 1, 1]	
  let locationCase2 = 0
  let answer2 = 5
  let result2 = solution(prioritiesCase2, locationCase2)


  console.log('result')
  console.log('case1: '+(answer1===result1? 'success': 'failed'))
  console.log('case2: '+(answer2===result2? 'success': 'failed'))

}

function solution(priorities, location) {
  console.log('start solution')
  console.log(priorities, location)
  var answer = 0;
  
  let count = 0;
  while(true) {
    let rank = priorities[0];
    let pushBackFlag = false
    for(let i=0; i<priorities.length; i++) {
      if(rank < priorities[i]) {
        pushBackFlag = true
        break; 
      }
    }
    
    if(pushBackFlag) {
      let tmpPri = priorities[0]
      let tmpLocation = location === 0 ? priorities.length-1 : location - 1

      let tmpPriArray = []
      for(let i=1; i<priorities.length; i++) {
        tmpPriArray.push(priorities[i])
      }
      tmpPriArray.push(tmpPri)
      priorities = tmpPriArray 

      location = tmpLocation
    } else {
      count++;
      if(location === 0) {
        break
      } else {

        let tmpPriorities = []
        for(let i=1; i<priorities.length; i++) {
          tmpPriorities.push(priorities[i])
        }
        priorities = tmpPriorities

        location = location - 1
      }
    }
  }

  answer = count

  return answer;
}


run()