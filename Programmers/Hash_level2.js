/**
 * Type: hash
 * Level: 2
 * Title: 위장
 * on 2021.05.27
 * @param clothes [[의상 이름, 의상 종류], ...]
 * @returns [의상 조합 수]
 * 
 * 결과
 * 정확성 100
 * 총     100
 **/ 
function run(){
  let clothes1 = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]
  let result1 = solution(clothes1)
  let answer1 = 5
  console.log(result1===answer1? 'success':'failed')
  let clothes2 = [["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]]
  let result2 = solution(clothes2)
  let answer2 = 3
  console.log(result2===answer2? 'success':'failed')
  let clothes3 = [["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"],  ["green_turban", "headgear"], ["yellowhat", "headgear"], ["bluesunglasses", "eyewear"]]
  let result3 = solution(clothes3)
  let answer3 = 23
  console.log(result3===answer3? 'success':'failed')
}

function solution(clothes) {
  let typeArray = []
  clothes.forEach(item => typeArray.push(item[1]))
  let typeList = typeArray.filter((cloth, index, self) => { return self.indexOf(cloth)===index } )
  let typeCase = [] 

  if(typeList.length===1) return clothes.length
  else {
    typeList.forEach(element => {
      let typeCaseItem = 0
      clothes.forEach(cloth => {
        if(cloth[1] === element) typeCaseItem++
      })
      typeCaseItem++ // 착용하지 않았을 때
      typeCase.push(typeCaseItem)
    })
    let Count = 1
    typeCase.forEach(element => Count= Count*element)
    Count-- // 모두 착용하지 않았을때 case 제거
    return Count
  }
}

run()