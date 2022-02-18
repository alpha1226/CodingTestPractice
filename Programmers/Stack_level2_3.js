/**
 * Type: stack/queue
 * Level: 2
 * Title: 다리를 지나는 트럭
 * on 2021.12.28
 * 
 * 결과
 * 총     100
 **/ 

 function run() {
  console.log('start run')
  let bridge_length = 2
  let weight = 10
  let truck_weights = [7,4,5,6]
  let answer1 = 8
  let result1 = solution(bridge_length, weight, truck_weights)

  bridge_length = 100
  weight = 100
  truck_weights = [10]
  let answer2 = 101
  let result2 = solution(bridge_length, weight, truck_weights)

  bridge_length = 100
  weight = 100
  truck_weights = [10,10,10,10,10,10,10,10,10,10]
  let answer3 = 110
  let result3 = solution(bridge_length, weight, truck_weights)



  console.log('result')
  console.log('case1: '+(answer1===result1? 'success': 'failed') + `(${result1}))`)
  console.log('case2: '+(answer2===result2? 'success': 'failed') + `(${result2}))`)
  console.log('case3: '+(answer3===result3? 'success': 'failed') + `(${result3}))`)

}

function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  console.log('============================================')

  console.log('birdge_length : '+ bridge_length)
  console.log('weight : ' + weight)
  console.log('truck_weights : ' + truck_weights)
  
  console.log('--------------------------------------------')

  let bridge = new Array(bridge_length)
  bridge.fill(0)
  while(true){
    answer++
    let truck_weights_on_bridge = 0

    let shiftedItem = bridge.shift()
    /* if(shiftedItem) {
      continue
    }*/

    for(let i=0; i<bridge_length; i++){
      // console.log(bridge)
      if(bridge[i]) truck_weights_on_bridge += bridge[i]
    }
    console.log('truck_weights_on_bridge : '+ truck_weights_on_bridge)

    // console.log(weight < (truck_weights_on_bridge + truck_weights[0]), weight, (truck_weights_on_bridge + truck_weights[0]))
    if(weight >= (truck_weights_on_bridge + truck_weights[0])) {
      bridge[bridge_length-1] = truck_weights[0]
      truck_weights_on_bridge += truck_weights[0]
      truck_weights.shift()
    } else {
      bridge[bridge_length-1] = 0
    }
    console.log(bridge)
    console.log(truck_weights_on_bridge)



    if(!truck_weights[0] && !truck_weights_on_bridge){
      break;
    }
  }

  console.log('============================================')
  return answer;
}


run()