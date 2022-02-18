/**
 * Type: sort
 * Level: 2
 * Title: H-Index
 * on 2021.12.30
 * 
 * 결과
 * 총     100
 **/ 

 function run() {
  console.log('start run')
  let citationsCase1 = [3, 0, 6, 1, 5]	
  let answer1 = 3
  let result1 = solution(citationsCase1)

  let citationsCase2 = [3, 3, 6, 1, 15]	
  let answer2 = 3
  let result2 = solution(citationsCase2)

  let citationsCase3 = [3, 4, 6, 1, 15, 9 ,10]	
  let answer3 = 4
  let result3 = solution(citationsCase3)


  console.log('result')
  console.log('case1: '+(answer1===result1? 'success': 'failed') + ' / ' + result1)
  console.log('case2: '+(answer2===result2? 'success': 'failed') + ' / ' + result2)
  console.log('case3: '+(answer3===result3? 'success': 'failed') + ' / ' + result3)

}

function solution(citations) {
  var answer = 0;

  citations.sort((a, b) => a-b).reverse()

  console.log(citations)

  for(let i=0;i<citations.length;i++) {
    console.log(citations[i], i)
    if(citations[i] <= i+1) {
      answer = citations[i]
      break
    }
  }


  console.log('====================================')
 
  return answer;
}

run()