/**
 * Type: sort
 * Level: 2
 * Title: 가장 큰 수
 * on 2021.12.30
 * 
 * 결과
 * 총     100
 **/ 

 function run() {
  console.log('start run')
  let numbersCase1 = [6, 10, 2]
  let answer1 = '6210'
  let result1 = solution(numbersCase1)

  let numbersCase2 = [3, 30, 34, 5, 9]	
  let answer2 = '9534330'
  let result2 = solution(numbersCase2)

  let numberCase3 = [0,0,0]
  let answer3 = '0'
  let result3 = solution(numberCase3)

  console.log('result')
  console.log('case1: '+(answer1===result1? 'success': 'failed'))
  console.log('case2: '+(answer2===result2? 'success': 'failed'))
  console.log('case3: '+(answer3===result3? 'success': 'failed'))

}

function solution(numbers) {
  var answer = '';

  numbers = numbers.sort((a, b) => {
    let stringA = a.toString()
    let stringB = b.toString()

    if(stringA.length !== stringB.length) {
      if(Math.floor(a+''+b) < Math.floor(b+''+a)) { return 1 } else { return -1 }
    } else {
      if(a > b) { return -1 } else { return 1 }
    }
  })

  if(!numbers[0]) {
    return '0'
  }

  numbers.forEach(e => {
    answer += e
  })


  console.log(answer)
  return answer;
}

run()